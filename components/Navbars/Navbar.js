import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  DocumentIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { classNames } from "@/utils/classNames";
import { handleScroll } from "@/utils/handleScroll";

export default function Navbar({
  topPageRef,
  journeyRef,
  projectsRef,
  aboutMeRef,
  testimonialsRef,
  contactMeRef,
}) {
  const navigation = [
    { name: "Journey", current: false, ref: journeyRef },
    { name: "Projects", current: false, ref: projectsRef },
    { name: "About Me", current: false, ref: aboutMeRef },
    { name: "Testimonials", current: false, ref: testimonialsRef },
    { name: "Contact Me", current: false, ref: contactMeRef },
  ];
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <div className="ml-4 text-white font-medium">
                    Jonathon Carlyon
                  </div>
                </div>

                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleScroll(item.ref)}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium btn",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href={"/JonathonCarlyon.pdf"}
                  download
                  className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <DocumentIcon
                    className="-ml-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="button"
                  onClick={() => handleScroll(item.ref)}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex w-full border-b border-blue-200"></div>
              <Disclosure.Button
                as="a"
                href="/JonathonCarlyon.pdf"
                download
                onClick={() => console.log("TODO later")}
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium",
                )}
                aria-current={"page"}
              >
                <div className={"flex items-center"}>
                  <DocumentIcon
                    className="-ml-0.5 h-5 w-5"
                    aria-hidden="true"
                  />

                  <span className="ml-2">Download Resume</span>
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
