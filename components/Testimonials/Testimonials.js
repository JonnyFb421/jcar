import PropTypes from "prop-types";

function Testimonials({ testimonials }) {
  return (
    <section className="py-12 lg:py-32 px-1">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
          Testimonials
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Kind words from brilliant people
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
          {testimonials
            .slice(0, testimonials.length - 1)
            .map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col pb-10 sm:pb-16 ${
                  index % 2 !== 0
                    ? "border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
                    : "lg:pr-8 xl:pr-20"
                }`}
              >
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-gray-900">
                    {testimonial.text.split("\n").map((text) => {
                      return (
                        <p className="pb-2" key={text}>
                          {text}
                        </p>
                      );
                    })}
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img
                      className="h-14 w-14 rounded-full bg-gray-50"
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="mt-1 text-gray-500">
                        {testimonial.twitterHandle}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
        </div>

        {/* Rendering the last testimonial centered and spanning both columns */}
        <div className="mt-16 mx-auto max-w-3xl lg:max-w-5xl">
          <div className="flex flex-col pb-10 sm:pb-16">
            <img
              className="h-12 self-center"
              src={testimonials[testimonials.length - 1].avatar}
              alt={testimonials[testimonials.length - 1].author}
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                {testimonials[testimonials.length - 1].text
                  .split("\n")
                  .map((text) => {
                    return (
                      <p className="mb-2" key={text}>
                        {text}
                      </p>
                    );
                  })}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src={testimonials[testimonials.length - 1].avatar}
                  alt={testimonials[testimonials.length - 1].author}
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    {testimonials[testimonials.length - 1].author}
                  </div>
                  <div className="mt-1 text-gray-500">
                    {testimonials[testimonials.length - 1].twitterHandle}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      twitterHandle: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Testimonials;
