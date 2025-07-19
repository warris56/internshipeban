import { StarIcon } from "@heroicons/react/24/solid";

export default function CustomerFeedbackSection() {
  return (
    <section className="relative bg-[rgb(30,21,89)] py-44 text-center">
      {/* Aqua header tag */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="bg-[rgb(88,215,193)] rounded-b-lg px-10 py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[rgb(30,21,89)] leading-tight">
            Customer<br />Feedback
          </h2>
        </div>
      </div>

      {/* Testimonial card – narrower but taller */}
      <div className="relative mx-auto mt-32 w-10/12 max-w-4xl bg-white px-20 py-24 text-left rounded-lg shadow-lg">
        {/* Stars */}
        <div className="flex space-x-1 text-[rgb(88,215,193)]">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-6 w-6" />
          ))}
        </div>

        {/* Quote icon */}
        <div className="absolute right-10 top-10 text-[rgb(88,215,193)]">
          <svg
            className="h-14 w-14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>

        <p className="mt-8 text-gray-700 leading-relaxed text-xl">
          I like the fact that Eban Register is a very fully featured product
          with a lot of considerations into the workflows of the new world of
          work.
        </p>

        {/* Avatar + name */}
        <div className="mt-12 flex items-center space-x-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(88,215,193)] text-white font-bold text-lg">
            DT
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">
              Desmond Tarsan
            </p>
            <p className="text-base text-gray-500">Director</p>
            <p className="text-base text-[rgb(88,215,193)]">Luxe Consult</p>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-10 flex justify-center space-x-3">
        <span className="h-3 w-3 rounded-full bg-white"></span>
        <span className="h-3 w-3 rounded-full bg-gray-500"></span>
        <span className="h-3 w-3 rounded-full bg-gray-500"></span>
      </div>
    </section>
  );
}
