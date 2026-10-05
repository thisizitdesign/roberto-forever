import { ArrowLeft, Video } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShareVideoForm() {
  return (
    <main className="min-h-screen bg-stone-950 px-6 py-24 text-stone-100 sm:px-10">
      <div className="mx-auto max-w-3xl">

        {/* Back to Share */}
        <Link
          to="/#share"
          className="mb-12 inline-flex items-center gap-2 text-sm text-stone-400 transition hover:text-stone-100"
        >
          <ArrowLeft size={16} />
          Back to Share
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <Video className="mx-auto h-8 w-8 text-amber-200/70" />

          <h1 className="mt-5 font-serif text-4xl font-light text-stone-100 sm:text-5xl">
            Share a Video
          </h1>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-stone-500">
            Have a video of Roberto that you'd like to share? We'd love to
            include it here as part of his story and the memories we all share.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-light text-stone-300"
            >
              Your Name <span className="text-amber-200">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-stone-800 bg-stone-900/70 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/40"
              placeholder="Your name"
            />
          </div>

          {/* Relationship */}
          <div>
            <label
              htmlFor="relationship"
              className="mb-2 block text-sm font-light text-stone-300"
            >
              Your Relationship to Roberto
            </label>

            <input
              id="relationship"
              name="relationship"
              type="text"
              className="w-full rounded-lg border border-stone-800 bg-stone-900/70 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/40"
              placeholder="Friend, family, colleague, etc."
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-light text-stone-300"
            >
              Email <span className="text-amber-200">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-stone-800 bg-stone-900/70 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/40"
              placeholder="you@example.com"
            />
          </div>

          {/* Video */}
          <div>
            <label
              htmlFor="video"
              className="mb-2 block text-sm font-light text-stone-300"
            >
              Video <span className="text-amber-200">*</span>
            </label>

            <input
              id="video"
              name="video"
              type="file"
              required
              accept="video/mp4,video/quicktime,video/webm,.mp4,.mov,.webm"
              className="block w-full cursor-pointer rounded-lg border border-stone-800 bg-stone-900/70 text-sm text-stone-400 file:mr-4 file:border-0 file:bg-stone-800 file:px-4 file:py-3 file:text-sm file:text-stone-200 hover:file:bg-stone-700"
            />

            <p className="mt-2 text-xs font-light text-stone-600">
              MP4, MOV, or WebM. Please keep videos reasonably sized.
            </p>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-light text-stone-300"
            >
              Tell Us About This Video
            </label>

            <textarea
              id="description"
              name="description"
              rows={5}
              className="w-full resize-none rounded-lg border border-stone-800 bg-stone-900/70 px-4 py-3 text-sm leading-7 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/40"
              placeholder="What is happening in the video? When was it taken? Who is in it?"
            />
          </div>

          {/* Approximate Date */}
          <div>
            <label
              htmlFor="approximate_date"
              className="mb-2 block text-sm font-light text-stone-300"
            >
              Approximate Date
            </label>

            <input
              id="approximate_date"
              name="approximate_date"
              type="text"
              className="w-full rounded-lg border border-stone-800 bg-stone-900/70 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/40"
              placeholder="For example, Summer 2022"
            />
          </div>

          {/* Credit */}
          <div>
            <label
              htmlFor="credit_name"
              className="mb-2 block text-sm font-light text-stone-300"
            >
              How Would You Like to Be Credited?
            </label>

            <input
              id="credit_name"
              name="credit_name"
              type="text"
              className="w-full rounded-lg border border-stone-800 bg-stone-900/70 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-200/40"
              placeholder="Your name, or leave blank if you'd prefer to remain anonymous"
            />
          </div>

          {/* Permission */}
          <label className="flex items-start gap-3 rounded-lg border border-stone-800 bg-stone-900/40 p-4">
            <input
              id="permission_to_publish"
              name="permission_to_publish"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 accent-amber-200"
            />

            <span className="text-sm font-light leading-6 text-stone-400">
              I give permission for this video to be shared on the Roberto
              Forever website.
            </span>
          </label>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-amber-200/15 px-8 py-3 text-sm font-medium text-amber-100 ring-1 ring-amber-200/30 transition hover:bg-amber-200/20"
            >
              <Video size={16} />
              Share Video
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
