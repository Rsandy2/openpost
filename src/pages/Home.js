import React, { useState } from "react";
import HomeNavbar from "../components/navbars/HomeNav";

import Card from "../components/Card";
import "../css/Home.css";
const famousWomen = [
  {
    cardID: "Marilyn Monroe",
    cardImage:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3MDU5MTEzMzM4MTQ4/marilyn_monroe_photo_alfred_eisenstaedt_pix_inc_the_life_picture_collection_getty_images_53376357_cropped.jpg",
    cardDesc:
      "Marilyn Monroe was an American actress, model, and singer. Famous for playing comedic blonde bombshell characters, she became one of the most popular sex symbols of the 1950s and early 1960s and was emblematic of the era's changing attitudes towards sexuality.",
  },
  {
    cardID: "Ada Lovelace",
    cardImage:
      "https://www.purdueglobal.edu/news-and-resources/articles-blogs-news/article-image-ada-lovelace.jpg",
    cardDesc:
      "London-born Ada Lovelace (1815–1852) had a passion and gift for mathematics from a young age. She is credited with being the world's first computer programmer, as she drafted plans for how a machine called the Analytical Engine could perform computations. The machine, invented by her friend, mathematician and inventor Charles Babbage, is considered to be the first general computer. Lovelace detailed applications for the Analytical Engine that relate to how computers are used today.",
  },
  {
    cardID: "Grace Hopper",
    cardImage: "https://cdn.mos.cms.futurecdn.net/tasfxMwpQ9ChXLtqtuArBb.jpg",
    cardDesc:
      "American Grace Hopper (1906–1992) was an admiral in the United States Navy and a computer scientist who was one of the first programmers for the Harvard Mark I computer, which was a general purposes electromechanical computer used in the war effort for World War II, according to San Diego Supercomputer Center. In 1944, she created a 500-page Manual of Operations for the Automatic Sequence-Controlled Calculator for the computer, which detailed the foundational operating principles of computing machines.",
  },
  {
    cardID: "Katherine Johnson",
    cardImage:
      "https://www.purdueglobal.edu/news-and-resources/articles-blogs-news/article-image-katherine-coleman-goble-johnson.jpg",
    cardDesc:
      "Katherine Johnson, born in 1918, is one of the women immortalized in the 2016 book and movie Hidden Figures. A West Virginia native and American mathematician, Johnson helped confirm the accuracy of electronic computers used by NASA and performed critical calculations that ensured safe space travel from the 1950s on. She coauthored a research report that used equations for orbital spaceflight in 1960, performed trajectory analysis for the first human space flight in 1961, and ran equations on a desktop mechanical calculating machine before the 1962 orbital mission of John Glenn.",
  },
];

export default function Home() {
  return (
    <div className="main">
      <HomeNavbar />

      <div className="card-container">
        {famousWomen.map((woman) => (
          <Card
            cardID={woman.cardID}
            cardImage={woman.cardImage}
            cardDesc={woman.cardDesc}
          />
        ))}
      </div>
    </div>
  );
}
