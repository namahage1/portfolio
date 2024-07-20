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
    src: image1,
    alt: "Assignment 1",
  },
  {
    id: 2,
    src: image2,
    alt: "Assignment 2",
  },
  {
    id: 3,
    src: image3,
    alt: "Assignment 3",
  },
  {
    id: 4,
    src: image4,
    alt: "Assignment 4",
  },
  {
    id: 5,
    src: image5,
    alt: "Assignment 5",
  },
  {
    id: 6,
    src: image6,
    alt: "Assignment 6",
  }
];

export default images;