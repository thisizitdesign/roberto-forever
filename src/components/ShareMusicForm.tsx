import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SharedMusicForm() {
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
            Share Music
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-400">
            Share a song that reminds you of Roberto and tell us why it holds
            meaning for you.
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

          {/* Song Title */}
          <div>
            <label
              htmlFor="song_title"
              className="mb-2 block text-sm text-stone-300"
            >
              Song Title <span className="text-stone-500">*</span>
            </label>

            <input
              id="song_title"
              name="song_title"
              type="text"
              required
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Artist */}
          <div>
            <label
              htmlFor="artist"
              className="mb-2 block text-sm text-stone-300"
            >
              Artist / Performer <span className="text-stone-500">*</span>
            </label>

            <input
              id="artist"
              name="artist"
              type="text"
              required
              className="w-full border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* Why Meaningful */}
          <div>
            <label
              htmlFor="why_meaningful"
              className="mb-2 block text-sm text-stone-300"
            >
              Why Is This Song Meaningful?
              <span className="ml-1 text-stone-500">*</span>
            </label>

            <textarea
              id="why_meaningful"
              name="why_meaningful"
              rows={7}
              required
              placeholder="Tell us about the connection between this song and Roberto..."
              className="w-full resize-y border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder:text-stone-600 outline-none transition focus:border-stone-400"
            />
          </div>

          {/* MP3 */}
          <div>
            <label
              htmlFor="audio"
              className="mb-2 block text-sm text-stone-300"
            >
              MP3 File <span className="text-stone-500">*</span>
            </label>

            <input
              id="audio"
              name="audio"
              type="file"
              accept="audio/mpeg,.mp3"
              required
              className="block w-full cursor-pointer border border-stone-700 bg-stone-900 text-sm text-stone-400 file:mr-4 file:border-0 file:bg-stone-800 file:px-5 file:py-3 file:text-sm file:text-stone-200 hover:file:bg-stone-700"
            />

            <p className="mt-2 text-xs leading-6 text-stone-600">
              Please upload an MP3 file.
            </p>
          </div>

          {/* Cover Image */}
          <div>
            <label
              htmlFor="cover"
              className="mb-2 block text-sm text-stone-300"
            >
              Cover Image
            </label>

            <input
              id="cover"
              name="cover"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="block w-full cursor-pointer border border-stone-700 bg-stone-900 text-sm text-stone-400 file:mr-4 file:border-0 file:bg-stone-800 file:px-5 file:py-3 file:text-sm file:text-stone-200 hover:file:bg-stone-700"
            />

            <p className="mt-2 text-xs leading-6 text-stone-600">
              Optional. JPG, PNG, and WebP images are accepted.
            </p>
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
                I give permission for this music submission to be considered
                for publication on Roberto's memorial website. I understand
                that submissions are reviewed before anything is published.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="border border-stone-500 px-8 py-3 text-sm uppercase tracking-[0.2em] text-stone-200 transition hover:border-stone-300 hover:bg-stone-100 hover:text-stone-950"
            >
              Submit Music
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
