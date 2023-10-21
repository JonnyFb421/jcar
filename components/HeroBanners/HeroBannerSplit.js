import PropTypes from "prop-types";
import { handleScroll } from "@/utils/handleScroll";
import React, { forwardRef } from "react";
import Image from "next/image";

function HeroBannerSplit({
  bannerText,
  bannerCtaTargetRef,
  bannerCta,
  image,
  imageAlt,
  heading,
  description,
  cta1Text,
  cta1TargetRef,
  cta2Text,
  nextRef,
}) {
  return (
    <div className="w-screen overflow-hidden">
      <div className="relative">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                {bannerText && bannerCtaTargetRef && (
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    {bannerText}{" "}
                    <button
                      onClick={() => handleScroll(bannerCtaTargetRef)}
                      className="whitespace-nowrap font-semibold text-indigo-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {bannerCta} <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                )}
              </div>
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                {heading}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  onClick={() => handleScroll(cta1TargetRef)}
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {cta1Text}
                </button>
                {cta2Text && nextRef && (
                  <button
                    onClick={() => handleScroll(nextRef)}
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 text-sm font-semibold leading-6 text-gray-900"
                  >
                    {cta2Text} <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              width={1024}
              height={1024}
              className="w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src={image}
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

HeroBannerSplit.propTypes = {
  bannerText: PropTypes.string,
  bannerCtaTargetRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current:
        typeof Element === "undefined"
          ? PropTypes.any
          : PropTypes.instanceOf(Element),
    }),
  ]),
  bannerCta: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cta1TargetRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current:
        typeof Element === "undefined"
          ? PropTypes.any
          : PropTypes.instanceOf(Element),
    }),
  ]),
  cta1Text: PropTypes.string.isRequired,
  cta2Text: PropTypes.string,
  nextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current:
        typeof Element === "undefined"
          ? PropTypes.any
          : PropTypes.instanceOf(Element),
    }),
  ]),
};

HeroBannerSplit.defaultProps = {
  bannerText: null,
  bannerCtaTargetRef: null,
  bannerCta: null,
};

export default HeroBannerSplit;
