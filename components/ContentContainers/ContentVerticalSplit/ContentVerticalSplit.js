import Image from "next/image";
import PropTypes from "prop-types";

const ContentVerticalSplit = ({
  imageSrc,
  imageAlt,
  heading,
  subheading,
  paragraphs,
}) => {
  return (
    <div className="py-8 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <Image
              width={1024}
              height={1024}
              className="rounded-lg mt-8"
              src={imageSrc}
              alt={imageAlt}
            />
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                {subheading}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {heading}
              </h1>
              <div className="max-w-xl">
                {paragraphs.map((para, index) => (
                  <p className="mt-6" key={index}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentVerticalSplit.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContentVerticalSplit;
