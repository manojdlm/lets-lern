import { FaStar } from 'react-icons/fa';

function TestimonialSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatem alias ut provident sapiente repellendus.
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatem alias ut provident sapiente repellendus.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="h-4 w-4" />
                  ))}
                </div>

                <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatem alias ut provident sapiente repellendus.
            </p>
          </blockquote>

          {/* Repeat the above blockquote for each testimonial */}

        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
