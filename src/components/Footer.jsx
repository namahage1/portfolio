import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer({ links }) {
    const footerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f1f1f1',
        borderTop: '1px solid #e0e0e0'
      };
    
      const linkStyles = {
        margin: '0 1rem',
        color: 'inherit',
        textDecoration: 'none',
        fontSize: '1.5rem'
      };
    return (
        <footer  style={footerStyles}>
        <Link to="/">← Go Back</Link>
        <a href="https://github.com/namahage1" style={linkStyles} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/shelly-a-5707b22a8" style={linkStyles} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      </footer>
    )
}
