export interface MediaSource {
  name: string;
  url: string;
  language: string;
}

export interface MediaItem {
  id: number;
  title: string;
  date: string;
  description: string;
  sources: MediaSource[];
}

export const mediaData: MediaItem[] = [
  {
    id: 1,
    title: "MP Nada Boustani's Tour in the United States of America",
    date: "May 2025",
    description:
      "Comprehensive coverage of MP Nada Boustani's visit to the United States, including her meetings with the Lebanese community in New England, Massachusetts, and Michigan.",
    sources: [
      { name: "Tayyar.org", url: "https://www.tayyar.org/News/Lebanon/666849/", language: "Arabic" },
      { name: "National News Agency (NNA)", url: "https://nna-leb.gov.lb/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9/783552", language: "Arabic" },
      { name: "El Nashra", url: "https://www.elnashra.com/news/show/1725682/", language: "Arabic" },
    ],
  },

  {
    id: 2,
    title: "The Convention and Annual Dinner organized by LACD in Boston on October 11-2025",
    date: "11 Oct 2025",
    description:
      "Some of what was reported in the media about the convention and annual dinner organized by LACD, with the participation of MPs Nada Boustani and George Atallah, in Boston, USA.",
    sources: [
      { name: "El Nashra", url: "https://www.elnashra.com/news/show/1745622", language: "Arabic" },
      { name: "Instagram Reel", url: "https://www.instagram.com/reel/DPyhfrRDmhe/", language: "Media" },
      { name: "NNA", url: "https://www.nna-leb.gov.lb/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9/815885", language: "Arabic" },
      { name: "Tayyar.org", url: "https://www.tayyar.org/News/Lebanon/688483/_guid=688483", language: "Arabic" },
      { name: "Lebanon Files", url: "https://www.lebanonfiles.com?p=1947198", language: "Arabic" },
      { name: "Beirut Times", url: "https://beiruttimes.com/article/49604", language: "English" },
    ],
  },
];
