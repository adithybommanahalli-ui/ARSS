export const siteConfig = {
  language: "en",
  siteTitle: "Lunar Observatory Archive",
  siteDescription: "Experimental archive of lunar observations and astronomical research",
}

export const navigationConfig = {
  brandName: "OBSERVATORY",
  links: [
    { label: "FACILITIES", href: "#facilities" },
    { label: "ARCHIVE", href: "#archives" },
    { label: "OBSERVATIONS", href: "#observations" },
  ],
}

export const heroConfig = {
  eyebrow: "EXPERIMENTAL LUNAR STATION",
  titleLines: [
    "Observing",
    "the Moon",
    "in Real Time",
  ],
  leadText: "A distributed network of autonomous observation stations transmitting live telemetry from six experimental lunar sites. Explore archived observations, access facility data, and witness the continuous stream of astronomical research.",
  supportingNotes: [
    "6 Active Stations",
    "Real-time Data Feed",
    "Archive Access",
  ],
}

export const manifestoConfig = {
  videoPath: "/videos/manifesto.mp4",
  text: "Our mission is to create an open, distributed lunar observatory network that democratizes access to astronomical data. By combining autonomous collection with public archives, we enable researchers worldwide to participate in continuous lunar monitoring and discovery.",
}

export const facilitiesConfig = {
  sectionLabel: "OBSERVATION FACILITIES",
  detailBackText: "← Back",
  detailNotFoundText: "Facility not found",
  detailReturnText: "Return to Facilities",
  items: [
    {
      slug: "station-alpha",
      name: "STATION ALPHA",
      code: "SAL-01",
      address: "Lunar North Pole Region",
      status: "OPERATIONAL",
      email: "contact@observatory.lunar",
      phone: "+1 (555) 001-0001",
      ctaText: "View Data Stream",
      ctaHref: "#",
      image: "/images/facility-alpha.jpg",
      utcOffset: 0,
      article: {
        title: "Station Alpha: Polar Monitoring",
        paragraphs: [
          "Station Alpha occupies a strategic position at the lunar north pole, providing continuous monitoring of polar ice deposits and thermal variations. The facility operates with redundant power systems and autonomous data transmission protocols.",
          "Our observations have revealed unexpected seasonal patterns in polar illumination cycles. The station's advanced radiometric instruments detect subtle temperature fluctuations that correlate with Earth's solar wind activity.",
          "Alpha serves as the primary data hub for our polar research initiative, aggregating signals from five satellite stations distributed across the northern hemisphere.",
        ],
      },
    },
    {
      slug: "station-beta",
      name: "STATION BETA",
      code: "SAL-02",
      address: "Mare Tranquillitatis",
      status: "OPERATIONAL",
      email: "contact@observatory.lunar",
      phone: "+1 (555) 001-0002",
      ctaText: "View Data Stream",
      ctaHref: "#",
      image: "/images/facility-beta.jpg",
      utcOffset: 0,
      article: {
        title: "Station Beta: Tranquility Basin",
        paragraphs: [
          "Station Beta monitors the Mare Tranquillitatis basin, one of the Moon's most geologically significant regions. Originally selected as the Apollo 11 landing site, this location continues to provide valuable seismic and geological data.",
          "The facility's seismometer network has detected over 300 moonquakes in the past solar cycle, offering insights into the Moon's internal structure and tectonic activity.",
          "Beta's spectrographic analysis systems have identified previously unknown mineral concentrations in the regolith, advancing our understanding of lunar surface composition.",
        ],
      },
    },
    {
      slug: "station-gamma",
      name: "STATION GAMMA",
      code: "SAL-03",
      address: "Copernicus Crater Complex",
      status: "OPERATIONAL",
      email: "contact@observatory.lunar",
      phone: "+1 (555) 001-0003",
      ctaText: "View Data Stream",
      ctaHref: "#",
      image: "/images/facility-gamma.jpg",
      utcOffset: 0,
      article: {
        title: "Station Gamma: Impact Analysis",
        paragraphs: [
          "Positioned within Copernicus Crater, Station Gamma specializes in impact crater analysis and comparative geology. The crater's multi-ring structure provides unique opportunities for deep subsurface observations.",
          "Gamma's ground-penetrating radar systems penetrate up to 2 kilometers into the lunar crust, revealing layered geological structures and subsurface composition patterns.",
          "This facility has become essential for our impact mechanics research, contributing data that informs planetary defense initiatives and asteroid characterization studies.",
        ],
      },
    },
    {
      slug: "station-delta",
      name: "STATION DELTA",
      code: "SAL-04",
      address: "Shackleton Crater Rim",
      status: "OPERATIONAL",
      email: "contact@observatory.lunar",
      phone: "+1 (555) 001-0004",
      ctaText: "View Data Stream",
      ctaHref: "#",
      image: "/images/facility-delta.jpg",
      utcOffset: 0,
      article: {
        title: "Station Delta: Polar Crater Observatory",
        paragraphs: [
          "Station Delta occupies the rim of Shackleton Crater at the lunar south pole, enabling simultaneous monitoring of permanently shadowed regions and sunlit terrain.",
          "The facility's thermal imaging systems have mapped temperature gradients that suggest the presence of volatiles in permanently shadowed craters—critical for future resource utilization.",
          "Delta's observation protocols have proven invaluable for testing technologies that will support sustained human and robotic exploration at the lunar poles.",
        ],
      },
    },
  ],
}

export const observationConfig = {
  sectionLabel: "LIVE OBSERVATION FEED",
  videoPath: "/videos/observation.mp4",
  statusText: "STREAM ACTIVE · SIGNAL: 98.7% · UPTIME: 347d 12h",
  latLabel: "LAT",
  lonLabel: "LON",
  initialLat: 23.735,
  initialLon: 120.751,
}

export const archivesConfig = {
  sectionLabel: "OBSERVATION ARCHIVE",
  vaultTitle: "ENTER VAULT",
  closeText: "CLOSE",
  items: [
    {
      src: "/images/archive-01.jpg",
      label: "Lunar Terminator · 2024",
    },
    {
      src: "/images/archive-02.jpg",
      label: "Mare Imbrium Study · 2024",
    },
    {
      src: "/images/archive-03.jpg",
      label: "Polar Region Mapping · 2024",
    },
    {
      src: "/images/archive-04.jpg",
      label: "Crater Analysis · 2024",
    },
  ],
}

export const footerConfig = {
  copyrightText: "© 2024 Lunar Observatory Archive. Experimental Research Network.",
  statusText: "All stations operational · Last updated 2.4 seconds ago",
}
