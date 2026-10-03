const journalImages = import.meta.glob<string>(
  "../images/journal/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const getJournalImage = (filename: string) =>
  journalImages[`../images/journal/${filename}`];

export interface JournalEntry {
  slug: string;
  title: string;
  author: string;
  relationship: string;
  date: string;
  image: string;
  excerpt: string;
  story: string[];
}

export const journalEntries: JournalEntry[] = [
  {
    slug: "a-night-to-remember",
    title: "A Night to Remember",
    author: "Maria Riggio",
    relationship: "Family",
    date: "September 28, 2026",
    image: getJournalImage("a-night-to-remember.webp"),
    excerpt:
      "A beautiful evening filled with music, laughter, and memories that will always stay with us.",
    story: [
      "This is where the first paragraph of Maria's memory will go.",
      "This is where the second paragraph will go.",
      "And additional paragraphs can be added as needed.",
    ],
  },

  {
    slug: "remembering-roberto",
    title: "Remembering Roberto",
    author: "David Smith",
    relationship: "Longtime Friend",
    date: "September 15, 2026",
    image: getJournalImage("remembering-roberto.webp"),
    excerpt:
      "There are some people who leave an impression on everyone they meet. Roberto was one of those people.",
    story: [
      "This is where David's memory will go.",
      "Additional paragraphs can be added here.",
    ],
  },

  {
    slug: "the-music-we-shared",
    title: "The Music We Shared",
    author: "Maria Smith",
    relationship: "Friend",
    date: "September 8, 2026",
    image: getJournalImage("the-music-we-shared.webp"),
    excerpt:
      "Music was always part of the story. These are some of the moments I remember most.",
    story: [
      "This is where Maria's memory will go.",
      "Additional paragraphs can be added here.",
    ],
  },
];
