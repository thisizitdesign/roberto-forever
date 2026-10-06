import {
  ArrowLeft,
  Image as ImageIcon,
  Video,
  Music,
  BookOpen,
  Share2,
  Database,
  FolderOpen,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const reviewImages = import.meta.glob<string>(
  "../images/review/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getImage(filename: string) {
  const match = Object.entries(reviewImages).find(
    ([path]) => path.endsWith(`/${filename}`),
  );

  return match?.[1] ?? "";
}

const images = {
  galleryHome: getImage("1.png"),
  photos: getImage("2.png"),
  galleryVideo: getImage("3.png"),
  video: getImage("4.png"),
  videoPopup: getImage("5.png"),
  galleryMusic: getImage("6.png"),
  music: getImage("7.png"),
  musicPopup: getImage("8.png"),
  journal: getImage("9.png"),
  journalEntry: getImage("10.png"),
};

function Screenshot({
  src,
  alt,
  number,
}: {
  src: string;
  alt: string;
  number: number;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-stone-800 bg-stone-900">
      <div className="border-b border-stone-800 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-600">
        Screenshot {number}
      </div>

      <img
        src={src}
        alt={alt}
        className="block w-full"
      />
    </div>
  );
}

function FlowBox({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof ImageIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-stone-800 bg-stone-900/60 p-6">
      <Icon className="h-6 w-6 text-amber-200/70" strokeWidth={1.5} />

      <h3 className="mt-4 font-serif text-xl text-stone-200">
        {title}
      </h3>

      <div className="mt-3 text-sm leading-7 text-stone-400">
        {children}
      </div>
    </div>
  );
}

export default function Review() {
  return (
    <main className="min-h-screen bg-stone-950 px-6 py-16 text-stone-100 sm:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="border-b border-stone-800 pb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/60">
            Roberto Forever
          </p>

          <h1 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
            Site Review
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-stone-200">
            A visual overview of how the memorial site's gallery, submissions, and shared memories are organized.
          </p>

          <p className="mt-4 max-w-3xl text-xs leading-6 text-stone-500">
            This page is for review and development purposes only. It is not intended to be part of the public memorial site.
          </p>
        </div>

        {/* Overview */}
        <section className="border-b border-stone-800 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
              01 · Overview
            </p>

            <h2 className="mt-3 font-serif text-3xl text-stone-100">
              How the content works
            </h2>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              When the submission system is connected, approved submissions will be stored separately and will populate the masonry "Pinterest style" galleries only, and are not included in the curated homepage cards. Those are hardcoded in and managed independently so we can always choose what goes there.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <FlowBox
              icon={FolderOpen}
              title="Curated Homepage"
            >
              A small selection of photos, videos, and music chosen specifically for the homepage.
            </FlowBox>

            <FlowBox
              icon={Database}
              title="Submitted Content"
            >
              Content submitted through the forms will eventually be stored separately from the site's original curated files.
            </FlowBox>

            <FlowBox
              icon={CheckCircle2}
              title="Review Before Publishing"
            >
              Submissions are intended to go through review before they become part of the public collections.
            </FlowBox>
          </div>
        </section>

        {/* PHOTOS */}
        <section className="border-b border-stone-800 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
            02 · Photos
          </p>

          <h2 className="mt-3 font-serif text-3xl text-stone-100">
            Photo Gallery
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-200">
            The homepage shows three curated photographs in the Gallery section. Clicking "View More" takes the visitor to the complete photo gallery.
          </p>

          <div className="mt-10">
            <Screenshot
              src={images.galleryHome}
              alt="Homepage Gallery showing three featured photographs"
              number={1}
            />
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="font-serif text-2xl text-stone-200">
              Full Photo Gallery
            </h3>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              The full photo gallery uses a masonry layout and is ordered horizontally fron left to right, so photographs can retain their natural proportions instead of being cropped into identical sizes since they will be coming in various dimensions.
            </p>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              The gallery is divided into categories:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-stone-200">
              <li>• Family</li>
              <li>• Friends</li>
              <li>• Atash</li>
              <li>• Music</li>
              <li>• Roberto</li>
            </ul>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              When the submission system is connected, the category selected on the photo submission form (via a dropdown the submitter chooses) will determine which category the approved photograph belongs to.
            </p>
          </div>

          <div className="mt-10">
            <Screenshot
              src={images.photos}
              alt="Full masonry photo gallery with category tabs"
              number={2}
            />
          </div>

          <div className="mt-8 rounded-lg border border-stone-800 bg-stone-900/40 p-6">
            <div className="flex items-start gap-4">
              <Share2 className="mt-1 h-5 w-5 shrink-0 text-amber-200/70" />

              <div>
                <h3 className="font-serif text-xl text-stone-200">
                  Photo Submission
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  A visitor can submit one or more photographs through the Share a Photo form. The form collects the contributor's information, the photo, and the information needed to determine where the approved content belongs.
                </p>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  The important distinction is that submitted photographs do not replace the curated homepage photographs. They become part of the larger collection after approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="border-b border-stone-800 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
            03 · Video
          </p>

          <h2 className="mt-3 font-serif text-3xl text-stone-100">
            Video Gallery
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-200">
            The homepage will also contain three videos selected by the admins as well. Each featured video is displayed as a card with the view preview and basic information.
          </p>

          <div className="mt-10">
            <Screenshot
              src={images.galleryVideo}
              alt="Homepage Gallery video section"
              number={3}
            />
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="font-serif text-2xl text-stone-200">
              Full Video Gallery
            </h3>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              The full Video page uses a three-column grid on desktop rather than a masonry layout. This keeps the video cards aligned and makes the collection easier to browse as the number of videos grows.
            </p>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              The video archive is divided into four categories:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-stone-200">
              <li>• Atash</li>
              <li>• Other Bands</li>
              <li>• With Dancers</li>
              <li>• Rehearsals</li>
            </ul>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              Each video card displays its title and the relevant information
              for that category.
            </p>
          </div>

          <div className="mt-10">
            <Screenshot
              src={images.video}
              alt="Full video gallery with three-column cards"
              number={4}
            />
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="font-serif text-2xl text-stone-200">
              Video Details
            </h3>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              Clicking a video card opens a larger video player rather than taking the visitor to a separate page. This keeps the visitor in the archive and makes it practical to browse a large collection of videos.
            </p>
          </div>

          <div className="mt-10">
            <Screenshot
              src={images.videoPopup}
              alt="Large video popup with video details"
              number={5}
            />
          </div>

          <div className="mt-10 rounded-lg border border-stone-800 bg-stone-900/40 p-6">
            <div className="flex items-start gap-4">
              <Share2 className="mt-1 h-5 w-5 shrink-0 text-amber-200/70" />

              <div>
                <h3 className="font-serif text-xl text-stone-200">
                  Video Submission
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  The Share a Video form allows someone to submit a video and provide the information associated with it.
                </p>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  The category selected in the form determines which type of video it is. The fields shown on the eventual published video card are based on that category.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-medium text-stone-300">
                      Atash
                    </p>
                    <p className="mt-2 text-xs leading-6 text-stone-500">
                      Band · Song · Venue · Show · Uploaded by
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-stone-300">
                      Other Bands
                    </p>
                    <p className="mt-2 text-xs leading-6 text-stone-500">
                      Band · Song · Venue · Show · Uploaded by
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-stone-300">
                      With Dancers
                    </p>
                    <p className="mt-2 text-xs leading-6 text-stone-500">
                      Band · Ensemble · Song · Venue · Show · Uploaded by
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-stone-300">
                      Rehearsals
                    </p>
                    <p className="mt-2 text-xs leading-6 text-stone-500">
                      Project · Song · Venue · Show · Members · Uploaded by
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MUSIC */}
        <section className="border-b border-stone-800 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
            04 · Music
          </p>

          <h2 className="mt-3 font-serif text-3xl text-stone-100">
            Music Gallery
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-200">
            The homepage Music section features a small curated selection of songs as well, three cards across. The full Music page provides a larger archive divided into two categories.
          </p>

          <div className="mt-10">
            <Screenshot
              src={images.galleryMusic}
              alt="Homepage Gallery music section"
              number={6}
            />
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="font-serif text-2xl text-stone-200">
              Full Music Gallery
            </h3>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              Music is divided into:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-stone-200">
              <li>• Works by Roberto</li>
              <li>• Works with Roberto</li>
            </ul>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              Each song appears as an album-style card. The card shows the album artwork and basic information. Clicking the card opens a larger music player.
            </p>
          </div>

          <div className="mt-10">
            <Screenshot
              src={images.music}
              alt="Full music gallery with album cards"
              number={7}
            />
          </div>

          <div className="mt-10">
            <Screenshot
              src={images.musicPopup}
              alt="Music popup with album art and audio player"
              number={8}
            />
          </div>

          <div className="mt-10 rounded-lg border border-stone-800 bg-stone-900/40 p-6">
            <div className="flex items-start gap-4">
              <Share2 className="mt-1 h-5 w-5 shrink-0 text-amber-200/70" />

              <div>
                <h3 className="font-serif text-xl text-stone-200">
                  Music Submission
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  The Share Music form includes a category selection for whether the recording is a work by Roberto or a work created with Roberto.
                </p>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  The submission can include the song title, participating members where appropriate, an optional description or synopsis, and the person submitting the recording.
                </p>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  After approval, the recording will become part of the appropriate music collection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNAL */}
        <section className="border-b border-stone-800 py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
            05 · Journal
          </p>

          <h2 className="mt-3 font-serif text-3xl text-stone-100">
            Shared Moments & Memories
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-200">
            The Journal section is different from the media galleries. It is designed for written memories and stories about Roberto.
          </p>

          <div className="mt-10">
            <Screenshot
              src={images.journal}
              alt="Shared Moments journal cards"
              number={9}
            />
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="font-serif text-2xl text-stone-200">
              Individual Memories
            </h3>

            <p className="mt-4 text-sm leading-8 text-stone-200">
              Each memory has its own page. The individual page contains the contributor's story, the associated image, and the contributor information.
            </p>
          </div>

          <div className="mt-10">
            <Screenshot
              src={images.journalEntry}
              alt="Individual Shared Moment journal entry"
              number={10}
            />
          </div>

          <div className="mt-10 rounded-lg border border-stone-800 bg-stone-900/40 p-6">
            <div className="flex items-start gap-4">
              <BookOpen className="mt-1 h-5 w-5 shrink-0 text-amber-200/70" />

              <div>
                <h3 className="font-serif text-xl text-stone-200">
                  Memory Submission
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  The Share a Memory form allows someone to submit a written story or memory about Roberto.
                </p>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  Once the submission system is connected, the submitted text will populate the individual memory page rather than requiring the page to be manually created.
                </p>

                <p className="mt-3 text-sm leading-7 text-stone-400">
                  This means the Journal can grow over time while every submitted story keeps its own title, author, date, image, and full text.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Flow */}
        <section className="py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-600">
            06 · Submission Flow
          </p>

          <h2 className="mt-3 font-serif text-3xl text-stone-100">
            From Submission to Publication
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-stone-200">
            The goal is to keep submitted content separate from the site's original files and to make sure nothing becomes public without review.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            <FlowBox
              icon={Share2}
              title="1. Submit"
            >
              A family member, friend, or community member uses one of the
              Share forms.
            </FlowBox>

            <FlowBox
              icon={Database}
              title="2. Store"
            >
              The submission and uploaded media are stored separately from the
              curated site content.
            </FlowBox>

            <FlowBox
              icon={BookOpen}
              title="3. Review"
            >
              An administrator reviews the submission and its information.
            </FlowBox>

            <FlowBox
              icon={CheckCircle2}
              title="4. Approve"
            >
              Approved content becomes eligible to appear on the appropriate
              public collection.
            </FlowBox>

            <FlowBox
              icon={FolderOpen}
              title="5. Publish"
            >
              The content appears dynamically in the appropriate gallery or
              memory collection.
            </FlowBox>
          </div>

          <div className="mt-12 rounded-lg border border-amber-200/10 bg-amber-200/[0.03] p-6">
            <p className="text-sm leading-7 text-stone-400">
              <span className="text-stone-200">
                Important:
              </span>{" "}
              The three featured homepage items are intentionally separate from
              the larger submitted collections. The homepage can therefore be
              curated independently while the full galleries continue to grow.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
