export interface MediaSource {
  name: string;
  url: string;
  language: string;
  isImage?: boolean;
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
    date: "",
    description:
      "Comprehensive coverage of MP Nada Boustani's visit to the United States, including her meetings with the Lebanese community in New England, Massachusetts, and Michigan.",
    sources: [
     // { name: "Tayyar.org", url: "https://www.tayyar.org/News/Lebanon/666849/", language: "Arabic" },
      { name: "National News Agency (NNA)", url: "https://nna-leb.gov.lb/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9/783552/%D8%A7%D9%84%D9%86%D8%A7%D8%A6%D8%A8%D8%A9-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D8%AC%D9%88%D9%84%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D9%88%D9%84%D9%82%D8%A7%D8%A1-%D9%85%D8%B9-%D8%A7", language: "Arabic" },
     // { name: "El Nashra", url: "https://www.elnashra.com/news/show/1725682/", language: "Arabic" },
      { name: "Tayyar.org - New England Visit", url: "https://www.tayyar.org/News/Lebanon/666849/%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1--%D9%81%D9%8A-%D8%A5%D8%B7%D8%A7%D8%B1-%D8%AC%D9%88%D9%84%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9", language: "Arabic" },
      { name: "El Nashra - New England Coverage", url: "https://www.elnashra.com/news/show/1725682/%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%88%D8%A7%D8%B5%D9%84%D8%AA", language: "Arabic" },
      { name: "Lebanon Files", url: "https://www.lebanonfiles.com/articles/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D9%85%D8%AD%D9%84%D9%8A%D9%91%D8%A9/%D8%A8%D8%A5%D8%B7%D8%A7%D8%B1-%D8%AC%D9%88%D9%84%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D8%AA%D9%88%D8%A7%D8%B5/", language: "Arabic" },
      { name: "Dearborn.org - Michigan Visit", url: "https://dearborn.org/ar/preview/photos-from-beirut-to-michigan-honored-to-host-mp-nada-boustani-in-michigan-68681", language: "Arabic" },
      { name: "Rai seyasi", url: "https://raiseyasi.com/%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%85%D9%86-%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D8%A7-%D9%86%D9%86%D8%AA%D8%B8%D8%B1-%D8%A7%D9%82%D8%AA%D8%B1%D8%A7%D8%B9-%D8%A7%D9%84%D9%85%D9%86%D8%AA/", language: "Arabic" },
      { name: "SLA News", url: "https://www.sla-news.com/251960", language: "Arabic" },
      { name: "Tayyar.org - Florida Dinner", url: "https://www.tayyar.org/News/Lebanon/667526/", language: "Arabic" },
      { name: "El Nashra - Michigan Energy Discussion", url: "https://www.elnashra.com/news/show/1725989/", language: "Arabic" },
      { name: "Sada al watan", url: "/MP_nada_boustani.jpeg", language: "Arabic", isImage: true },
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
  {
    id: 3,
    title: "MP Nada Boustani's Meetings in Washington",
    date: "",
    description:
          "Media outlets covered MP Nada Boustani's visit to Washington, where she met with U.S. Congress members Debbie Dingell and Greg Stanton. She also attended a reception held at the Lebanese Embassy in Washington.  Boustani's visit to the United States came as part of her participation in a convention organized by the Lebanese American Commission for Democracy (LACD), in addition to other activities she took part in while in Boston."     ,
    sources: [
      { name: "MTV Lebanon", url: "https://share.google/Ai8z0XxPp1XvSro5d", language: "Arabic" },
      { name: "lebanon24", url: "https://www.lebanon24.com/news/lebanon/1431420/البستاني-من-واشنطن-لضرورة-التزام-الدولة-اللبنانية-بتنفيذ-الإصلاحات-الم?utm_source=article-1431420&utm_medium=Whatsapp-Broadcast&utm_term=Whatsapp-Broadcast&utm_campaign=Whatsapp-Broadcast&src=whatsapp-broadcast", language: "Arabic" },
      { name: "SBI", url: "https://share.google/fWwJq6PG4WL9FXOC2", language: "Arabic" },
      { name: "NNA", url: "https://www.nna-leb.gov.lb/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9/817315/%D9%86%D8%AF%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%85%D9%86-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D9%84%D9%84%D9%82%D9%8A%D8%A7%D9%85-%D8%A8%D8%A7%D9%84%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B7%D9%84%D9%88%D8%A8%D8%A9", language: "Arabic" },
      { name: "tayyar.org", url: "https://share.google/ewFXRc6r2bYBdskz3", language: "Arabic" },
      { name: "Ch23 news", url: "https://ch23.com/Article/305043/ندى-البستاني-من-واشنطن:-للقيام-بالاصلاحات-المطلوبة-بالقطاع-المصرفي-من-أجل-اعادة-حقوق-المودعين", language: "Arabic" },
      { name: "Al markazia", url: "https://almarkazia.com/ar/%D9%86%D8%AF%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%85%D9%86-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D9%84%D9%84%D9%82%D9%8A%D8%A7%D9%85-%D8%A8%D8%A7%D9%84%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B7%D9%84%D9%88%D8%A8%D8%A9-1", language: "Arabic" },
      { name: "ElNashra", url: "https://www.elnashra.com/news/show/1746482/%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D9%84%D9%84%D9%82%D9%8A%D8%A7%D9%85-%D8%A8%D8%A7%D9%84%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B7%D9%84%D9%88%D8%A8%D8%A9-%D8%A8%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9", language: "Arabic" },
      { name: "LBC", url: "https://share.google/o8D0miamw9GCGE4TM", language: "Arabic" },
    ],
  },
];
