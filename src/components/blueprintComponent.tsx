import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

interface FeatureCardProps {
  title: string;
  description: string;
  animationData: any;
}

const FeatureCard = ({ title, description, animationData }: FeatureCardProps) => {
  const lottieRef = useRef<any>(null);
  const [playedOnce, setPlayedOnce] = useState(false);

  useEffect(() => {
    // Play once on mount
    lottieRef.current?.play();
  }, []);

  const handleComplete = () => {
    const totalFrames = lottieRef.current?.getDuration(true);
    if (totalFrames) {
      lottieRef.current?.goToAndStop(totalFrames, true);
      setPlayedOnce(true);
    }
  };

  const handleMouseEnter = () => {
    lottieRef.current?.stop();
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    const totalFrames = lottieRef.current?.getDuration(true);
    if (totalFrames) {
      lottieRef.current?.goToAndStop(totalFrames, true);
    }
  };

  return (
    <div
      className="relative flex flex-1 flex-col rounded-xl bg-[f7fafa]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pt-10 px-10 pb-6">
        <div className="mb-4">
          <p className="text-2xl">{title}</p>
        </div>
        <div className="opacity-50">
          <p className="text-lg">{description}</p>
        </div>
      </div>
      <div className="flex-1 px-10 pb-10">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          onComplete={handleComplete}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
