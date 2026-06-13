import { useMemo } from 'react';

const GradualBlur = ({
  position = 'bottom',
  strength = 2,
  height = '6rem',
  width = '',
  divCount = 5,
  exponential = false,
  curve = 'linear',
  opacity = 1,
  animated = false,
  duration = '0.3s',
  easing = 'ease-out',
  hoverIntensity,
  target = 'parent',
  preset
}) => {
  const isVertical = position === 'top' || position === 'bottom';
  const blurLayers = useMemo(() => {
    const layers = [];
    for (let i = 0; i < divCount; i++) {
      let progress = divCount > 1 ? i / (divCount - 1) : 0;

      if (curve === 'bezier') {
        progress = progress * progress * (3 - 2 * progress);
      } else if (curve === 'ease-in') {
        progress = progress * progress;
      }

      if (exponential) {
        progress = Math.pow(progress, 2);
      }

      const blurValue = strength * progress;
      layers.push(blurValue);
    }
    return layers;
  }, [strength, divCount, curve, exponential]);

  const containerStyle = useMemo(
    () => ({
      position: target === 'fixed' ? 'fixed' : 'absolute',
      pointerEvents: 'none',
      [position]: 0,
      left: position === 'left' || position === 'right' ? 'auto' : 0,
      right: position === 'right' ? 0 : 'auto',
      ...(isVertical
        ? {
            width: width || '100%',
            height: height,
            ...(position === 'bottom' && { bottom: 0, top: 'auto' }),
            ...(position === 'top' && { top: 0, bottom: 'auto' })
          }
        : {
            height: width || height,
            width: width || height,
            ...(position === 'right' && { right: 0, left: 'auto' }),
            ...(position === 'left' && { left: 0, right: 'auto' })
          })
    }),
    [position, target, isVertical, height, width]
  );

  return (
    <div style={containerStyle}>
      {blurLayers.map((blur, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: `blur(${blur}px)`,
            opacity: opacity,
            ...(animated && {
              animation: `fadeIn ${duration} ${easing}`,
              animationDelay: `${idx * 0.05}s`
            })
          }}
        />
      ))}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: ${opacity};
          }
        }
      `}</style>
    </div>
  );
};

export default GradualBlur;
