"use client";

import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 2xl:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link className="inline-flex" href="/">
              <span className="sr-only">Page Not Found</span>
              <Image
                src={"/404.png"}
                height="512"
                width={"896"}
                className="d-inline-block align-top rounded-full"
                alt="Man lost in code jungle while a fat tabby cat chases a green butterfly"
              />
            </Link>
          </div>
          <div className="py-16 flex w-full justify-center items-center">
            <div className="flex max-w-3xl justify-center items-center">
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                  404 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Oops! Looks like this page got lost in the code jungle.
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  {"Let's navigate back home!"}
                </p>
                <div className="mt-6">
                  <Link
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    href="/"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
