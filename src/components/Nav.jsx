// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link
          to="/"
          class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          About Me
        </Link>,
        <Link
          to="/portfolio"
          class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          Portfolio
        </Link>,
        <Link
          to="/contact"
          class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          Contact
        </Link>,
        <Link
          to="/resume"
          class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
        >
          Resume
        </Link>,
        //   <Link key={1} className="nav-link text-light" to="/">
        //     About Me
        //   </Link>,
        //   <Link key={2} className="nav-link text-light" to="/portfolio">
        //     Portfolio
        //   </Link>,
        //   <Link key={3} className="nav-link text-light" to="/contact">
        // Contact
        //   </Link>,
        //    <Link key={4} className="nav-link text-light" to="/resume">
        //    Resume
        //     </Link>,
      ]}
    />
  );
}
