import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "@/utils/classNames";

function ContentWithImageTiles({
  title,
  description,
  content,
  conclusionText,
  imageLinks,
}) {
  const [open, setOpen] = useState(false);
  const flattenedImages = imageLinks.flat();

  return (
    <div className="flex lg:block w-full justify-center items-center">
      <div className="flex lg:block max-w-4xl lg:max-w-none">
        <header className="relative overflow-hidden">
          {/* Hero section */}
            <div className="pb-12 lg:pt-16 mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-2xl lg:max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  {title}
                </h1>
                <p className="mt-4 text-xl text-gray-500">{description}</p>
                <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                  <ul role="list" className="divide-y divide-gray-100">
                    {content.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between gap-x-6 py-5"
                      >
                        <p className="mt-2">
                          <span className="font-semibold text-lg">
                            {item.title}
                          </span>
                          : {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex w-full justify-center items-center">
                <div className="max-w-5xl">
                  <p className="mt-4 text-xl lg:text-3xl text-gray-600">
                    {conclusionText}
                  </p>
                </div>
              </div>
              <div className={"hidden lg:flex "}>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        {imageLinks.map((column, idx) => (
                          <div
                            key={idx}
                            className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                          >
                            {column.map((src, imgIdx) => (
                              <div
                                key={imgIdx}
                                className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                              >
                                <img
                                  src={src}
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 lg:hidden">
                {" "}
                {/* Decorative image grid (for mobile) */}
                {flattenedImages.slice(0, -1).map((imgSrc, index) => {
                  return (
                    <div
                      className={classNames(index % 2 !== 0 && "mt-12")}
                      key={index}
                    >
                      <img
                        src={imgSrc}
                        alt=""
                        className="h-64 w-44 overflow-hidden rounded-lg object-cover object-center"
                      />
                    </div>
                  );
                })}
                {flattenedImages.length % 2 !== 0 && (
                  <div className="col-span-2 text-center mt-6">
                    <img
                      src={flattenedImages[flattenedImages.length - 1]}
                      alt=""
                      className="h-64 w-44 overflow-hidden rounded-lg object-cover object-center mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

ContentWithImageTiles.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  conclusionText: PropTypes.string.isRequired,
  imageLinks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default ContentWithImageTiles;
