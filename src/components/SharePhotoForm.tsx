import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SharedPhotoForm() {
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
            Share with Us
          </p>

          <h1 className="mt-4 font-serif text-4xl font-light tracking-wide sm:text-5xl">
            Share a Photo
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400">
            Share photographs that capture a moment, memory, or experience
            with Roberto.
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
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-stone-400"
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
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
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
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-stone-400"
            />

            <p className="mt-2 text-xs text-stone-600">
              Your email will not be displayed publicly.
            </p>
          </div>

          {/* Photos */}
          <div>
            <label
              htmlFor="photos"
              className="mb-2 block text-sm text-stone-300"
            >
              Photos <span className="text-stone-500">*</span>
            </label>

            <input
              id="photos"
              name="photos"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic"
              multiple
              required
              className="block w-full cursor-pointer rounded-lg border border-stone-700 bg-stone-900 text-sm text-stone-400 file:mr-4 file:border-0 file:bg-stone-800 file:px-5 file:py-3 file:text-sm file:text-stone-200 hover:file:bg-stone-700"
            />

            <p className="mt-2 text-xs leading-6 text-stone-600">
              You can select multiple photos. JPG, PNG, WebP, AVIF, and HEIC images
              are accepted.
            </p>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm text-stone-300"
            >
              About These Photos
            </label>

            <textarea
              id="description"
              name="description"
              rows={6}
              placeholder="Describe your connection to these photographs or the moment they capture..."
              className="w-full resize-y rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
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
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
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
              className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Permission */}
          <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-5">
            <label className="flex cursor-pointer gap-3">
              <input
                type="checkbox"
                name="permission_to_publish"
                className="mt-1 h-4 w-4 accent-stone-400"
              />

              <span className="text-sm leading-6 text-stone-400">
                I give permission for these photographs to be considered for
                publication on Roberto's memorial website. I understand that
                submissions are reviewed before anything is published.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="rounded-lg border border-stone-500 px-8 py-3 text-sm uppercase tracking-[0.2em] text-stone-200 transition hover:border-stone-300 hover:bg-stone-100 hover:text-stone-950"
            >
              Submit Photos
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
