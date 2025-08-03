const Wave: React.FC = () => {
  return (
    <svg
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1050 220"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#00c2cb" />
          <stop offset="50%" stop-color="#a742f5" />
          <stop offset="100%" stop-color="#00c2cb" />
          <animate
            attributeName="x1"
            values="0%;100%;50%;0%;100%;0%"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="100%;200%;150%;100%;200%;100%"
            dur="8s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#a742f5" />
          <stop offset="50%" stop-color="#00c2cb" />
          <stop offset="100%" stop-color="#a742f5" />
          <animate
            attributeName="x1"
            values="0%;100%;50%;0%;100%;0%"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="100%;200%;150%;100%;200%;100%"
            dur="10s"
            repeatCount="indefinite"
          />
        </linearGradient>

        <filter id="glow" x="-20%" y="-20%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <path
        fill="transparent"
        filter="url(#glow)"
        opacity="0.8"
        stroke="url(#gradient1)"
        strokeWidth="35"
      >
        <animate
          attributeName="d"
          dur="8s"
          repeatCount="indefinite"
          keyTimes="0;0.25;0.5;0.75;1"
          values="
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,220 800,100 600,150 C400,220 200,100 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,160 800,140 600,150 C400,160 200,140 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z"
          calcMode="spline"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <path
        fill="transparent"
        filter="url(#glow)"
        opacity="0.6"
        stroke="url(#gradient2)"
        strokeWidth="35"
      >
        <animate
          attributeName="d"
          dur="15s"
          repeatCount="indefinite"
          keyTimes="0;0.25;0.5;0.75;1"
          values="
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,240 800,120 600,180 C400,240 200,120 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,150 800,210 600,180 C400,150 200,210 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z"
          calcMode="spline"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>

      <path
        fill="transparent"
        filter="url(#glow)"
        opacity="0.3"
        stroke="#a742f5"
        strokeWidth="35"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          keyTimes="0;0.25;0.5;0.75;1"
          values="
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,140 800,60 600,100 C400,140 200,60 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,160 800,80 600,100 C400,160 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z"
          calcMode="spline"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </path>
    </svg>
  );
};

export default Wave;
