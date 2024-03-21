import React from 'react';
import './Research.css'; 


function ResearchPage() {
  return (
    <div className="research-page">
      <header className="header">
        <h1>The Art of Research</h1>
        <p>Unlock knowledge and explore new horizons.</p>
      </header>

      <main className="main">
        <section className="content-container">
          <h2>Benefits of Research</h2>
          <ul>
            <li>Gain deep insights into various subjects.</li>
            <li>Support informed decision-making.</li>
            <li>Enhance problem-solving abilities.</li>
            <li>Stimulate creativity and innovation.</li>
          </ul>

          <h2>Research Methods</h2>
          <ul>
            <li>Literature review</li>
            <li>Experimentation</li>
            <li>Observational studies</li>
            <li>Survey research</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default ResearchPage;
