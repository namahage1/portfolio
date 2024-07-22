import { useState, useEffect } from "react";

export default function Resume() {
  return (
    <>
      <a href="/SampleResume.pdf" download>
        <button
          type="button"
          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          Download
        </button>
      </a>
      <div className="container pt-4">
        <h1>Work Experience</h1>
        <h2>Web App Dev Analyst</h2>
        <h3>Health Care Service Corporation (APR 2012 – JAN 2015) </h3>
        <h2>Programming Analyst /Contractor </h2>
        <h3>Federal Aviation Administration (MAR 2008 – APR 2012)</h3>
        <h2>Quality Assurance Analyst</h2>
        <h3>Freightliner, LLC (OCT 2006 – FEB 2007)</h3>
        <br />
        <h1>Education</h1>
        <h2>B.S., Computer Science</h2>
        <h3>Oregon State University; Corvallis, OR</h3>
        <br />
        <h1>Certification</h1>
        <h2>Full stack Javascript Coding bootcamp, University Of Denver</h2>
        <h2>Sun Certified Web Component Developer for J2EE 1.4 </h2>
        <h2>Sun Certified Business Component Developer for J2EE 1.3</h2>
        <h2>
          Sun Certified Programmer for Java 2 Platform, Standard Edition 5
        </h2>
      </div>
    </>
  );
}
