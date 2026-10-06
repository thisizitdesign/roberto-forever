export type VideoCategory =
  | "atash"
  | "otherBands"
  | "withDancers"
  | "rehearsals";

export interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  songTitle?: string;
  band?: string;
  ensemble?: string;
  project?: string;
  venue?: string;
  show?: string;
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

function getTitle(path: string) {
  return (
    path
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) ?? "Untitled"
  );
}

function createVideo(
  category: VideoCategory,
  path: string,
  videoUrl: string,
  index: number,
): VideoItem {
  return {
    id: `${category}-${index}`,
    title: getTitle(path),
    category,
    songTitle: "",
    band: "",
    ensemble: "",
    project: "",
    venue: "",
    show: "",
    uploadedBy: "",
    members: "",
    videoUrl,
  };
}

export const videoItems: VideoItem[] = [
  ...Object.entries(atashVideos).map(([path, videoUrl], index) =>
    createVideo("atash", path, videoUrl, index),
  ),

  ...Object.entries(otherBandVideos).map(([path, videoUrl], index) =>
    createVideo("otherBands", path, videoUrl, index),
  ),

  ...Object.entries(dancerVideos).map(([path, videoUrl], index) =>
    createVideo("withDancers", path, videoUrl, index),
  ),

  ...Object.entries(rehearsalVideos).map(([path, videoUrl], index) =>
    createVideo("rehearsals", path, videoUrl, index),
  ),
];
