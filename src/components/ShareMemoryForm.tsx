import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ShareMemoryForm() {
  return (
    <main className="min-h-screen bg-stone-950 px-6 py-16 text-stone-100 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/#share"
          className="mb-12 inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-stone-100"
        >
          <ArrowLeft size={16} />
          Back to Share
        </Link>

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Shared Moments
          </p>

          <h1 className="mt-4 font-serif text-4xl font-light tracking-wide sm:text-5xl">
            Share a Memory
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400">
            Tell us about a memory, story, or moment with Roberto that you
            would like to preserve and share with others.
          </p>
        </div>

        <form className="space-y-8">
          {/* Your Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-stone-300"
            >
              Your Name <span className="text-stone-500">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Relationship */}
          <div>
            <label
              htmlFor="relationship"
              className="mb-2 block text-sm text-stone-300"
            >
              Your Relationship to Roberto
            </label>

            <input
              id="relationship"
              name="relationship"
              type="text"
              placeholder="Friend, family member, colleague, etc."
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-stone-300"
            >
              Email Address <span className="text-stone-500">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-stone-400"
            />

            <p className="mt-2 text-xs text-stone-600">
              Your email will not be displayed publicly.
            </p>
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm text-stone-300"
            >
              Memory Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              placeholder="Give your memory a title"
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Story */}
          <div>
            <label
              htmlFor="story"
              className="mb-2 block text-sm text-stone-300"
            >
              Your Memory <span className="text-stone-500">*</span>
            </label>

            <textarea
              id="story"
              name="story"
              rows={10}
              required
              placeholder="Share your story..."
              className="w-full resize-y border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Approximate Date */}
          <div>
            <label
              htmlFor="approximate_date"
              className="mb-2 block text-sm text-stone-300"
            >
              Approximate Date or Occasion
            </label>

            <input
              id="approximate_date"
              name="approximate_date"
              type="text"
              placeholder="For example: Summer 2019, his birthday, a concert, etc."
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Credit */}
          <div>
            <label
              htmlFor="credit_name"
              className="mb-2 block text-sm text-stone-300"
            >
              How would you like to be credited?
            </label>

            <input
              id="credit_name"
              name="credit_name"
              type="text"
              placeholder="Your name as you would like it displayed"
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Permission */}
          <div className="border border-stone-800 bg-stone-900/50 p-5">
            <label className="flex cursor-pointer gap-3">
              <input
                type="checkbox"
                name="permission_to_publish"
                className="mt-1 h-4 w-4 accent-stone-400"
              />

              <span className="text-sm leading-6 text-stone-400">
                I give permission for this memory to be considered for
                publication on Roberto's memorial website. I understand that
                submissions are reviewed before anything is published.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="border border-stone-500 px-8 py-3 text-sm uppercase tracking-[0.2em] text-stone-200 transition hover:border-stone-300 hover:bg-stone-100 hover:text-stone-950"
            >
              Submit Memory
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
