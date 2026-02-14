import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp glass-effect hover-lift rounded-2xl p-8 transition-all duration-300" data-wow-delay=".15s">
        <div className="bg-gradient-to-br from-primary to-primary/70 text-white mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-xl shadow-lg">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
