import Image from 'next/image';

const VoyLearningLogo = () => {
  return (
    <div className="relative h-8 w-32 md:h-10 md:w-40">
      <Image
        src="/images/VoyLearning.png"
        alt="VoyLearning"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default VoyLearningLogo;
