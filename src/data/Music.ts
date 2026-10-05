export type MusicCategory = "roberto" | "with_roberto";

export interface MusicTrack {
  id: string;
  songTitle: string;
  category: MusicCategory;
  artist?: string;
  members?: string;
  synopsis?: string;
  uploadedBy?: string;
  coverImage: string;
  audioUrl: string;
}

const byRoberto = import.meta.glob<string>(
  "../images/gallery/music/byRoberto/*.{mp3,wav,m4a,ogg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const withRoberto = import.meta.glob<string>(
  "../images/gallery/music/withRoberto/*.{mp3,wav,m4a,ogg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function createTrack(
  path: string,
  audioUrl: string,
  category: MusicCategory,
  index: number,
): MusicTrack {
  const filename = path.split("/").pop() ?? "Untitled";

  const songTitle = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const isRoberto = category === "roberto";

  return {
    id: `${category}-${filename}-${index}`,
    songTitle,
    category,
    artist: isRoberto ? "Roberto Solo" : undefined,
    members: isRoberto ? undefined : "",
    synopsis: "",
    uploadedBy: "",
    coverImage: new URL(
      `../images/gallery/photos/albumArt/albumPlaceHolder${
        (index % 3) + 1
      }.png`,
      import.meta.url,
    ).href,
    audioUrl,
  };
}

const robertoTracks = Object.entries(byRoberto).map(([path, audioUrl], index) =>
  createTrack(path, audioUrl, "roberto", index),
);

const withRobertoTracks = Object.entries(withRoberto).map(
  ([path, audioUrl], index) =>
    createTrack(path, audioUrl, "with_roberto", index),
);

export const musicTracks: MusicTrack[] = [
  ...robertoTracks,
  ...withRobertoTracks,
];
