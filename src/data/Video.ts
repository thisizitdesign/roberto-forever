export type VideoCategory =
  | "atash"
  | "otherBands"
  | "withDancers"
  | "rehearsals";

export interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  songTitle: string;
  band?: string;
  ensemble?: string;
  project?: string;
  showLocation?: string;
  location?: string;
  uploadedBy?: string;
  members?: string;
  videoUrl: string;
}

const atashVideos = import.meta.glob<string>(
  "../images/gallery/videos/atash/*.{mp4,mov,webm}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);
console.log("ATASH VIDEOS:", atashVideos);

const otherBandVideos = import.meta.glob<string>(
  "../images/gallery/videos/otherBands/*.{mp4,mov,webm}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const dancerVideos = import.meta.glob<string>(
  "../images/gallery/videos/withDancers/*.{mp4,mov,webm}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const rehearsalVideos = import.meta.glob<string>(
  "../images/gallery/videos/rehearsals/*.{mp4,mov,webm}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function createVideo(
  path: string,
  videoUrl: string,
  category: VideoCategory,
  index: number,
): VideoItem {
  const filename = path.split("/").pop() ?? "Untitled";

  const title = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const categoryDescriptions: Record<VideoCategory, string> = {
    atash: "Name of show and location",
    otherBands: "A performance or recording from Roberto's musical work.",
    withDancers: "A performance shared with dancers.",
    rehearsals: "A rehearsal capturing Roberto's creative process.",
  };

  const categoryCredits: Record<VideoCategory, string> = {
    atash: "Atash",
    otherBands: "Roberto & Friends",
    withDancers: "Roberto & Dancers",
    rehearsals: "Roberto",
  };

return {
  id: `${category}-${filename}-${index}`,
  title,
  songTitle: "",
  category,
  band: category === "atash" ? "Atash" : "",
  ensemble: "",
  project: "",
  showLocation: "",
  location: "",
  uploadedBy: "",
  members: "",
  videoUrl,
};
}

const atash = Object.entries(atashVideos).map(([path, videoUrl], index) =>
  createVideo(path, videoUrl, "atash", index),
);

const otherBands = Object.entries(otherBandVideos).map(
  ([path, videoUrl], index) => createVideo(path, videoUrl, "otherBands", index),
);

const withDancers = Object.entries(dancerVideos).map(
  ([path, videoUrl], index) =>
    createVideo(path, videoUrl, "withDancers", index),
);

const rehearsals = Object.entries(rehearsalVideos).map(
  ([path, videoUrl], index) => createVideo(path, videoUrl, "rehearsals", index),
);

export const videoItems: VideoItem[] = [
  ...atash,
  ...otherBands,
  ...withDancers,
  ...rehearsals,
];
console.log("VIDEO ITEMS:", videoItems);
