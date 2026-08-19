# ARSS — AI Resume Screening System

<p align="center">
  <strong>AI-powered resume screening, candidate matching, and recruitment workflow automation.</strong>
</p>

<p align="center">
  <a href="https://github.com/adithybommanahalli-ui/ARSS">Repository</a>
  ·
  <a href="https://github.com/adithybommanahalli-ui/ARSS/issues">Issues</a>
</p>

## Overview

ARSS (AI Resume Screening System) is a full-stack recruitment platform that automates the first stage of resume screening.

A recruiter can configure job requirements, receive resumes through the web application or email, and let the system extract candidate information, compare the resume against the job description, calculate an ATS-style score, classify the candidate, and store the result for review in an admin dashboard.

The project combines a **React + Vite frontend**, **Node.js + Express backend**, **MongoDB**, and a **Python NLP/ML pipeline**. The Python pipeline is kept running as a persistent local HTTP service so heavy NLP/ML libraries are loaded once instead of once for every resume.

## Key Features

- **AI resume parsing** for PDF and DOCX files.
- **Candidate information extraction** including name, email, phone, skills, education, and experience.
- **Job-to-resume matching** using TF-IDF vectorization and cosine similarity.
- **ATS-style scoring** based on resume/job similarity and experience.
- **Automatic classification** into `QUALIFIED`, `SHORTLIST`, or `REJECT`.
- **Missing-skill detection** against configured job requirements.
- **Candidate strengths, weaknesses, and improvement suggestions** generated from the analysis.
- **Admin dashboard** for candidate review, statistics, and status management.
- **Resume deduplication** using file hashing to avoid processing the same file twice.
- **Email-based resume intake** through Gmail IMAP IDLE.
- **Candidate email notifications** for received, shortlisted, accepted, and rejected applications.
- **Persistent Python pipeline** to reduce repeated model/library startup overhead.
- **Production deployment support** through Docker, Render, and Replit.

## How It Works

```text
                    ┌───────────────────────┐
                    │       Candidate       │
                    │                       │
                    │  Web Upload / Email   │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │     Node.js API       │
                    │   Express + Multer    │
                    └───────────┬───────────┘
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
          ┌─────────────────┐     ┌──────────────────┐
          │ Duplicate Check │     │ Job Requirements │
          │    SHA-256      │     │ MongoDB / YAML   │
          └────────┬────────┘     └────────┬─────────┘
                   │                       │
                   └──────────┬────────────┘
                              ▼
                  ┌─────────────────────────┐
                  │   Python AI Pipeline    │
                  │                         │
                  │  1. Parse PDF/DOCX      │
                  │  2. Extract information│
                  │  3. TF-IDF matching     │
                  │  4. Calculate ATS score │
                  │  5. Classify candidate  │
                  └────────────┬────────────┘
                               │
                               ▼
                    ┌───────────────────────┐
                    │       MongoDB         │
                    │ Candidate + Analysis  │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │    Admin Dashboard    │
                    │ Review / Manage /     │
                    │ Update Candidate      │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Gmail Notification  │
                    │ Status Updates to      │
                    │ Candidate             │
                    └───────────────────────┘
```

## AI Screening Pipeline

The core analysis is implemented as a seven-stage flow:

1. **Resume parsing** — extracts text from PDF or DOCX files.
2. **Information extraction** — identifies candidate details such as contact information, skills, education, and experience.
3. **Semantic matching** — compares the resume text with the configured job description using TF-IDF and cosine similarity.
4. **ATS scoring** — combines similarity and experience into a normalized score.
5. **Candidate classification** — converts the score and education requirements into an AI recommendation.
6. **Skill gap analysis** — identifies required skills missing from the resume.
7. **Candidate feedback** — generates strengths, weaknesses, and resume-improvement suggestions.

### Current scoring model

The final score is calculated from:

```text
score = (0.7 × similarity) + (0.3 × normalized experience)
```

Classification thresholds are:

| Score | AI Result |
|---:|---|
| `>= 0.75` | `QUALIFIED` |
| `0.40 – 0.74` | `SHORTLIST` |
| `< 0.40` | `REJECT` |

The configured education requirement can also affect classification.

## Performance Optimization

An important design decision in ARSS is the persistent Python pipeline.

The older approach launched a new Python process for every resume. That forced libraries such as spaCy, scikit-learn, NumPy, and PyMuPDF to initialize repeatedly.

ARSS instead starts the Python pipeline once when the Node.js server boots:

```text
Node.js starts
      │
      ▼
Python pipeline starts once
      │
      ├── Load spaCy
      ├── Load scikit-learn / NumPy
      ├── Load PyMuPDF
      └── Keep server alive
               │
               ▼
     Resume 1 → HTTP request
     Resume 2 → HTTP request
     Resume 3 → HTTP request
               │
               ▼
        Same warm process
```

The repository documents the expected processing time for the warm pipeline as roughly **200–500 ms per resume**, while the initial model startup occurs only when the Python service is launched.

## Technology Stack

### Frontend

- React 19
- Vite
- React Router
- Redux Toolkit
- Axios
- Tailwind CSS
- Framer Motion
- GSAP
- Recharts
- React Dropzone

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT authentication
- Multer for uploads
- Nodemailer for outbound email
- IMAPFlow + Mailparser for Gmail intake

### AI / Data Processing

- Python 3.9+
- spaCy
- scikit-learn
- NumPy
- SciPy
- PyMuPDF
- pdfplumber
- python-docx
- PyYAML
- TF-IDF + cosine similarity

### Deployment

- Docker
- Render
- Replit
- MongoDB Atlas

## Project Structure

```text
ARSS/
├── client/                     # React + Vite frontend
│   └── src/
│       ├── api/                # Axios API layer
│       ├── components/         # UI and admin components
│       ├── hooks/              # React hooks
│       ├── layouts/            # Application layouts
│       ├── pages/              # Main pages and dashboards
│       └── store/              # Redux Toolkit state
│
├── server/                    # Node.js + Express backend
│   ├── config/                 # MongoDB/database configuration
│   ├── middleware/             # Authentication and upload middleware
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API route modules
│   ├── services/               # Python bridge + email services
│   ├── uploads/                # Temporary uploaded files
│   └── index.js                # Backend entry point
│
├── modules/                   # Python AI/NLP modules
├── config/                    # Job requirement configuration
├── pipeline_runner.py         # Python pipeline entry point
├── Dockerfile                 # Container configuration
├── SETUP.md                   # Detailed local setup guide
├── DEPLOY.md                  # Deployment guide
├── RUN_MANUALLY.md            # Manual pipeline execution guide
├── requirements.txt           # Python dependencies
└── package.json               # Root scripts
```

## Requirements

Before running ARSS locally, install:

- **Node.js 18+**
- **Python 3.9+** and `pip`
- **MongoDB** running locally, or a MongoDB Atlas connection string
- A Gmail account with an **App Password** if email-based resume submission or email notifications are enabled

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/adithybommanahalli-ui/ARSS.git
cd ARSS
```

### 2. Install Node.js dependencies

From the project root:

```bash
npm run install:all
```

### 3. Install Python dependencies

```bash
pip install -r requirements.txt
python -m spacy download en_core_web_sm
```

### 4. Configure environment variables

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/arss_db
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
ADMIN_EMAIL=your_admin_email@example.com
CLIENT_URL=http://localhost:3000
```

For Gmail intake and status notifications, also configure:

```env
GMAIL_USER=your_gmail@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

**Do not commit `.env` or real credentials to Git.**

## Running Locally

### Start the backend

```bash
npm run dev:server
```

The Express API runs on:

```text
http://localhost:5000
```

### Start the frontend

In another terminal:

```bash
npm run dev:client
```

The Vite development server runs on:

```text
http://localhost:3000
```

### Production build

```bash
npm run build:client
npm start
```

## Main Routes

### Frontend routes

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/upload` | Candidate resume upload and AI results |
| `/admin-login` | Restricted admin login |
| `/admin-dashboard` | Protected recruiter dashboard |

### Backend API

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/auth/admin/login` | Admin login |
| `GET` | `/api/auth/admin/me` | Verify JWT session |
| `POST` | `/api/auth/admin/logout` | Admin logout |
| `POST` | `/api/resumes/upload` | Upload and process resume |
| `GET` | `/api/resumes/:id` | Retrieve candidate result |
| `GET` | `/api/admin/stats` | Dashboard statistics |
| `GET` | `/api/admin/candidates` | Paginated candidate list |
| `GET` | `/api/admin/candidates/:id` | Candidate details |
| `PATCH` | `/api/admin/candidates/:id/status` | Update recruiter status |
| `DELETE` | `/api/admin/candidates/:id` | Delete candidate |
| `GET` | `/api/admin/candidates/:id/download` | Download resume |
| `GET` | `/api/config/requirements` | Read job requirements |
| `PUT` | `/api/config/requirements` | Update job requirements |
| `GET` | `/api/health` | Server health check |

## Candidate Status Model

ARSS keeps the AI recommendation separate from the recruiter's final decision.

### AI result

```text
QUALIFIED
SHORTLIST
REJECT
PENDING
```

### Recruiter status

```text
pending
shortlisted
accepted
rejected
```

This distinction allows the system to make an automated recommendation while keeping the final hiring decision under recruiter control.

## Email-Based Recruitment Workflow

ARSS can optionally monitor a Gmail inbox using **IMAP IDLE**.

```text
Candidate sends resume by email
            │
            ▼
      Gmail inbox
            │
            ▼
      IMAP IDLE signal
            │
            ▼
  Resume attachment detected
            │
            ▼
      Duplicate check
            │
            ▼
      AI screening pipeline
            │
            ▼
       MongoDB record
            │
            ▼
 Application received email
```

When an administrator changes a candidate's status, ARSS can also send an automated email notification to the candidate.

Supported notifications include:

- Application received
- Shortlisted
- Accepted
- Rejected

## Deployment

The project includes a Docker-based deployment configuration and a dedicated deployment guide.

### Docker

```bash
docker build -t arss .
docker run --env-file server/.env -p 5000:5000 arss
```

For hosted deployment, see **[DEPLOY.md](DEPLOY.md)** for MongoDB Atlas, Render, and Replit setup instructions.

## Configuration

Job requirements can be provided through the application configuration stored in MongoDB or through the fallback YAML configuration at:

```text
config/requirements.yaml
```

The AI pipeline expects values such as:

```yaml
job_description: "Python developer with machine learning and SQL experience."
skills:
  - python
  - machine learning
  - sql
  - nlp
min_experience: 1
education: btech
```

## Security Notes

- Keep JWT secrets and Gmail App Passwords in environment variables.
- Never expose MongoDB credentials in frontend code.
- Restrict the production `CLIENT_URL` to the actual frontend origin.
- Use HTTPS in production.
- Review privacy and data-retention requirements before using ARSS with real candidate information.
- Uploaded resume files are treated as temporary processing files and are removed after the candidate record is saved.

## Documentation

The repository also includes:

- **[SETUP.md](SETUP.md)** — local environment and API setup.
- **[DEPLOY.md](DEPLOY.md)** — deployment using Docker, Render, or Replit.
- **[RUN_MANUALLY.md](RUN_MANUALLY.md)** — manual testing of the Python pipeline.
- **[AI Resume Screening System Report](AI_Resume_Screening_System_Report.docx)** — project report.

## Future Improvements

Potential areas for extending ARSS include:

- More advanced semantic embeddings beyond TF-IDF.
- OCR support for scanned/image-based resumes.
- Better skill and certification normalization.
- Job-specific ranking and configurable scoring weights.
- Bulk resume upload and batch processing.
- Candidate search and filtering across historical applications.
- Interview scheduling and calendar integration.
- Audit logs and richer recruiter activity tracking.
- Role-based access control for larger recruitment teams.

## Project Status

ARSS is an active project combining automated resume screening with recruiter-facing workflow management. The current repository contains the web application, AI pipeline, database models, email automation, deployment configuration, and supporting documentation.

## Author

**Aditya Basavaraj Bommanahalli**

GitHub: [@adithybommanahalli-ui](https://github.com/adithybommanahalli-ui)

---

<p align="center">
  Built as an AI-assisted recruitment and resume screening platform.
</p>
