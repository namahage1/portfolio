import { Link } from 'react-router-dom';

export default function Footer({ links }) {
    return (
        <footer className="portfolio-footer">
        <Link to="/">← Go Back</Link>
      </footer>
    )
}