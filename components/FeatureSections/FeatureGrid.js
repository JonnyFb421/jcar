import PropTypes from "prop-types";
import Image from "next/image";
import { useState } from "react";
import { classNames } from "@/utils/classNames";

function FeatureGrid({ features }) {
  const [activeFeature, setActiveFeature] = useState(null);

  const handleMouseEnter = (feature) => {
    setActiveFeature(feature);
  };

  const handleMouseLeave = () => {
    setActiveFeature(null);
  };

  const isActive = (feature) =>
    activeFeature && activeFeature.name === feature.name;

  return (
    <div className="px-1">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pb-24 pt-8 lg:py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-gray-500">
            The majority of my free time goes into creating something new.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                onMouseEnter={() => handleMouseEnter(feature)}
                onMouseLeave={handleMouseLeave}
                className={
                  isActive(feature)
                    ? "border-blue-200 hover:border-blue-200 hover:scale-110 transition-colors duration-300"
                    : "border-gray-200 hover:border-blue-200 hover:scale-110 transition-colors duration-300"
                }
              >
                <dt className="flex w-full justify-center items-center py-12 lg:hidden">
                  <div className="h-40 flex justify-center items-center">
                    <Image
                      height={175}
                      width={175}
                      src={feature.logo}
                      alt={feature.name}
                      className="rounded-lg"
                    />
                  </div>
                </dt>

                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex w-full mt-24">
          <div className="flex w-full flex-wrap hidden lg:flex">
            {features.map((feature, index) => (
              <div
                className={classNames(
                  activeFeature?.name === feature.name &&
                    "border-blue-200 transition-opacity opacity-100 duration-700",
                  activeFeature !== null &&
                    activeFeature?.name !== feature.name &&
                    "duration-700 opacity-30",
                  `transition-opacity flex w-1/2 mb-8`,
                )}
                key={index}
              >
                <Image
                  height={225}
                  width={225}
                  src={feature.logo}
                  alt={feature.name}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

FeatureGrid.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FeatureGrid;
