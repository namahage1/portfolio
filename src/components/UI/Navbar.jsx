import { Link } from 'react-router-dom';


export default function Nav({ links }) {
  return (
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">
           <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">My Portfolio</Link>
          <br />
          <span className="text-xs text-grey-dark">Shelly A</span>
        </div>

        <div className="sm:mb-0 self-center">
        {links.map((link) => link)}
        </div>
      </nav>
  );
}
