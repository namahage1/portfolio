import { myPhoto } from "../utils/importImages";
const AboutPage = () => {
  const imageStyles = {
    width: "200px", // Adjust the image width as needed
    height: "auto",
    borderRadius: "50%", // Adjust for circular photo if needed
    margin: "20px 0", // Adjust the margin as needed
  };

  return (
    <>
      <div className="container flex flex-column items-center justify-center m-12">
        <h1 className="flex">About Me</h1>
        <img src={myPhoto} alt="My Photo" style={imageStyles} />
        <p className="flex">This is a brief description about me.</p>
      </div>
    </>
  );
};

export default AboutPage;
