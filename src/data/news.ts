// src/data/news.ts

export interface NewsItem {
  id: string;
  image: string;
  title: string;
  date: string;
  fullText: string;
}

export interface EventItem {
  title: string;
  calendarDate: string;
}

export const newsData: NewsItem[] = [

 {
    id: "election_2026",
    image: "/election_2026.jpeg",
    title: "LACD Calls on Political Forces to Keep Diaspora Elections Free from Political Disputes",
    date: "13 Feb 2026", 
    fullText: ` Warns: Undermining Expat Voting Sends a Negative Message to Millions of Lebanese Supporting the National Economy

The Lebanese American Commission for Democracy (LACD) reaffirmed its full commitment to the right of Lebanese citizens abroad to vote, stressing that it is a constitutionally guaranteed right that cannot be diminished or circumvented under any political or technical pretext.

LACD emphasized that the participation of Lebanese expatriates in their homeland's democratic life is not a privilege granted by anyone, but rather a concrete expression of full national partnership and a reflection of their deep-rooted connection to Lebanon, despite geographical distance.

LACD also expressed its full support for the draft law currently on the agenda of the Lebanese Parliament entitled “The Lebanese Election Integrity and Diaspora Voting Protection Act of 2026.” The proposed legislation aims to safeguard diaspora voting and ensure the conduct of elections abroad within a clear legal framework, including the imposition of sanctions on any individual or foreign entity that obstructs or delays the electoral process in Lebanon, particularly any actions that restrict or prevent Lebanese citizens residing abroad from participating in parliamentary elections.

Furthermore, LACD holds Lebanese officials fully accountable for any attempt to cancel, obstruct, or undermine diaspora elections, or to infringe upon the right of expatriates to exercise their electoral role. The organization considers any such step a serious setback to Lebanon’s democratic trajectory and a negative message to millions of Lebanese abroad who constitute a fundamental pillar in supporting the national economy and preserving Lebanon’s image and interests worldwide.

LACD called on all political forces to shield diaspora elections from internal political disputes and to adopt the necessary legal guarantees to protect this right, in line with the Constitution and the principles of justice and equality among all Lebanese citizens.

“The voice of the diaspora is not a detail,  it is an integral part of the national decision.”



تؤكد الجمعية اللبنانية الأميركية للديمقراطية (LACD) تمسّكها الكامل بحق اللبنانيين المنتشرين في الاقتراع، باعتباره حقاً دستورياً مكتسباً لا يجوز الانتقاص منه أو الالتفاف عليه تحت أي ذريعة سياسية أو تقنية، مشيرة الى أن "مشاركة اللبنانيين في الانتشار في الحياة الديمقراطية لوطنهم ليست منّة من أحد، بل هي تجسيد فعلي لمبدأ الشراكة الوطنية الكاملة وترجمة لارتباطهم العميق بلبنان رغم المسافات".

وتعلن LACD دعمها الكامل لمشروع القانون المُدرج على جدول أعمال مجلس النواب الاميركي بعنوان "قانون نزاهة الانتخابات اللبنانية وحماية تصويت الانتشار لعام 2026"، والهادف إلى حماية تصويت الانتشار وضمان إجراء الانتخابات في الخارج عبر وضع العقوبات على أي شخص أو كيان أجنبي يعرقل أو يؤخّر العملية الانتخابية في لبنان ولا سيّما ما يتصل بتقييد أو منع اللبنانيين المقيمين في الخارج من المشاركة في الانتخابات النيابية.

كما تحمّل LACD المسؤولين اللبنانيين كامل المسؤولية الوطنية والدستورية في حال تطيير انتخابات الانتشار أو تعطيلها، أو المساس بحق المنتشرين في ممارسة دورهم الانتخابي، مشيرة الى إن أي خطوة من هذا النوع ستُعدّ انتكاسة خطيرة للمسار الديمقراطي، ورسالة سلبية إلى ملايين اللبنانيين الذين يشكّلون ركيزة أساسية في دعم الاقتصاد الوطني والحفاظ على صورة لبنان في العالم.

وتدعو LACD جميع القوى السياسية إلى تحييد حق المنتشرين عن التجاذبات، وإقرار الضمانات القانونية الكفيلة بحمايته، بما ينسجم مع الدستور وروحية العدالة والمساواة بين جميع اللبنانيين، مؤكدة أن " صوت المنتشر ليس تفصيلاً  بل هو جزء لا يتجزأ من القرار الوطني".
      
    `

  },

  {
    id: "simon-karam",
    image: "/simon-karam.jpeg",
    title:
      "Who is Simon Karam, head of the Lebanese negotiating delegation with Israel?",
    date: "3 Dec 2025",
    fullText: `The Lebanese Presidency announced the appointment of former ambassador Simon Karam as head of Lebanon’s delegation to the so-called “Mechanism” committee, which includes representatives from Lebanon, Israel, the United States, France, and the United Nations Interim Force in Lebanon (UNIFIL). This is an international mechanism established to monitor the implementation of the cessation of hostilities agreement between Lebanon and Israel, under the sponsorship of the United States and France. It was originally composed of military officials.

The statement from the Lebanese Presidency read:
“In keeping with his constitutional oath and in accordance with his constitutional powers to defend Lebanon’s sovereignty, territorial integrity, and higher interests — and in response to the appreciated efforts of the United States government, which chairs the ‘Technical Military Committee for Lebanon’ established under the ‘Cessation of Hostilities Declaration’ dated November 27, 2024 — and following notification from the American side of the Israeli party’s approval to include a non-military member in its delegation to the said committee, and after coordination and consultation with Speaker of Parliament Mr. Nabih Berri and Prime Minister Dr. Nawaf Salam, President of the Republic General Joseph Aoun has decided to appoint former ambassador and lawyer Simon Karam to head the Lebanese delegation to the committee meetings.

Relevant parties have been informed accordingly. Ambassador Karam will therefore participate in today’s committee meeting, December 3, 2025, in Naqoura, in this capacity.”

A meeting was held in the Lebanese town of Naqoura, bringing together the "Mechanism" Committee along with two civilian representatives — former Lebanese Ambassador Simon Karam and Israel’s Senior Director for Foreign Policy at the National Security Council, Yuri Resnick — as well as U.S. envoy Morgan Ortagus.

According to a report by Axios, “Diplomats from Israel and Lebanon met on Wednesday under U.S. sponsorship and discussed cooperation on economic projects to help stabilize the situation in southern Lebanon near the shared border.”

The report noted that “The administration of President Donald Trump has been trying for nine months to promote this type of dialogue between Israel and Lebanon, and it believes that a resumption of war by Israel is unlikely in the coming weeks.” It added, “Washington's vision is to create a ‘Trump Economic Zone’ along the border free of Hezbollah.”

Axios quoted a source familiar with the discussions as saying that “Lebanon and Israel agreed to meet again before the beginning of the year to come up with economic proposals to build confidence,” stressing that “the most important issue in the Naqoura meeting was economic cooperation, particularly concerning the reconstruction of southern Lebanon.”`,
  },

  {
    id: "pope-lebanon",
    image: "/pope-visit.jpeg",
    title:
      'Pope Leo XIV Concludes Visit to Lebanon, Calls on the Middle East to Overcome the "Mentality of Revenge and Violence"',
    date: "2 Dec 2025",
    fullText: `According to the BBC, Pope Leo XIV concluded his historic three-day visit to Lebanon from Rafic Hariri International Airport, where an official farewell ceremony was held in the presence of senior officials.

In his speech, President Joseph Aoun praised the visit, saying it “will remain engraved in the memory of Lebanon and its people,” affirming that the Pope carried a “message of peace and reconciliation” to a country that is “small in size but great in its mission.” He added: “We heard your message and we will strive to embody it… Our people are faithful and deserve to live.”

For his part, Pope Leo XIV said that “leaving is harder than arriving,” stressing that he will carry Lebanon in his heart and that his encounter with the Lebanese people “does not end here.” He also spoke of his visit to the Beirut port explosion site, saying he prayed for the victims and carries with him “a thirst for truth and justice.”
The Pope expressed his emotion at Lebanon’s “deep spiritual roots” and the strength of its people, which he compared to “cedar trees.” He also made a strong appeal to stop the attacks, stressing: “Weapons kill... but dialogue builds.” He concluded by saying, “Lebanon is more than a country… it is a message.”

During a mass he presided over at the Beirut Waterfront on Tuesday, attended by about 150,000 people, the Pope emphasized that the Middle East now needs new approaches to overcome the “mentality of revenge and violence.”

In a speech before heading to the airport, he said, “The Middle East needs new approaches to reject the mentality of revenge and violence, to overcome political, social, and religious divisions, and to open new chapters in the name of reconciliation and peace.”

He added, “And finally, to you, Christians of the East, children of this land in every sense of the word, be courageous — the entire Church looks upon you with love and admiration.”

Earlier, the Pope had urged the Lebanese people in his sermon to unite their efforts to awaken the “dream of a unified Lebanon,” where “peace and justice prevail” after the successive crises that have shaken this small country.`,
  },

  {
    id: "pope-shrines",
    image: "/pope-annaya.jpeg",
    title:
      "What is the significance of the three religious shrines visited by Pope Leo XIV in Lebanon?",
    date: "1 Dec 2025",
    fullText: `With Pope Leo XIV's visit to Lebanon, attention is focused on the three main religious shrines that form the official stops of his trip: the Shrine of Our Lady of Lebanon in Harissa, the Monastery of Saint Maron in Annaya where Saint Charbel is buried, and the Monastery of the Cross in Jal El Dib which houses the tomb of Blessed Father Yacoub.

These sites are not just religious destinations; they are part of a vast spiritual, social, and economic network in Lebanon, and they reflect different paths to holiness in a country of diverse sects and religious identities.

Religious tourism researcher Nour El-Farah Haddad told BBC Arabic that the three shrines included in the pope’s visit “are known for their miraculous reputation and are frequented by the faithful as places where people feel their prayers are answered.”`,
  },

  {
    id: "unifil-mandate",
    image: "/stories.jpeg",
    title:
      "Security Council Extends UNIFIL's Mandate for the Final Time Until End of 2026, with a Gradual Withdrawal Plan",
    date: "28 Aug 2025",
    fullText:
      "Unanimously, the Security Council adopted Resolution 2790, extending the mandate of the United Nations Interim Force in Lebanon (UNIFIL) for the final time until December 31, 2026, and called for an orderly and safe reduction and withdrawal.",
  },
];

export const upcomingEvents: EventItem[] = [
  {
    title: "LACD Annual Convention",
    calendarDate: "2025-10-11",
  },
];
