import image1 from "../assets/images/project1.jpg";
import image2 from "../assets/images/project2.jpg";
import image3 from "../assets/images/project3.jpg";
import image4 from "../assets/images/project4.jpg";
import image5 from "../assets/images/project5.jpg";
import image6 from "../assets/images/project6.jpg";

// export function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// }

const images = [
  {
    id: 1,
    repoUrl: "https://namahage1.github.io/myportfolio/",
    src: image1,
    alt: "myportfolio",
  },
  {
    id: 2,
    repoUrl: "https://note-taker-amn1.onrender.com",
    src: image2,
    alt: "note taker",
  },
  {
    id: 3,
    repoUrl: "https://github.com/namahage1/e-commerce.git",
    src: image3,
    alt: "e-commerce",
  },
  {
    id: 4,
    repoUrl: "https://cms-style-blog-site.onrender.com",
    src: image4,
    alt: "cms-style-blog",
  },
  {
    id: 5,
    repoUrl: "https://gist.github.com/51ec24120836cc3ed822331bf31f2fa2.git",
    src: image5,
    alt: "Regular Expression Tutorial",
  },
  {
    id: 6,
    repoUrl: "https://github.com/namahage1/portfolio.git",
    src: image6,
    alt: "Portfolio",
  }
];

export default images;