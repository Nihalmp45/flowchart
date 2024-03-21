import React from 'react';
import './Designing.css'; 

function DesigningPage() {
  return (
    <div className="designing-page">
      <header className="header">
        <h1>The Art of Designing</h1>
        <p>Unlock your creativity and bring ideas to life.</p>
      </header>

      <main className="main">
        <section className="content-container">
          <h2>Designing Principles</h2>
          <ul>
            <li>Understanding user needs</li>
            <li>Creating user-friendly interfaces</li>
            <li>Balancing aesthetics and functionality</li>
            <li>Iterative design process</li>
          </ul>

          <h2>Designing Tools</h2>
          <ul>
            <li>Graphic design software</li>
            <li>Prototyping tools</li>
            <li>Wireframing and mockup tools</li>
            <li>Usability testing platforms</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default DesigningPage;
