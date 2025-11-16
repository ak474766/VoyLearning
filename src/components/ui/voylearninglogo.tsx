const VoyLearningLogo = () => {
  return (
    <span
      className="inline-flex items-center justify-center h-full"
      style={{
        ['--logo-max-height' as any]: '60%',
        ['--logo-max-width' as any]: '100%',
      }}
    >
      <span
        style={{
          fontFamily: 'Inter, Plus Jakarta Sans, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '1.45rem', // smaller than before
          lineHeight: '1',
          background: 'linear-gradient(90deg, #FF9E3D, #FF4A57)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '0.6px',
          textShadow: '0px 0px 6px rgba(255, 80, 80, 0.15)', // subtle glow
        }}
      >
        voylearning
      </span>
    </span>
  );
};

export default VoyLearningLogo;
