import React from 'react';
import './Manufacturing.css'; 

function ManufacturingPage() {
  return (
    <div className="manufacturing-page">
      <header className="header">
        <h1>The World of Manufacturing</h1>
        <p>Transforming ideas into tangible products.</p>
      </header>

      <main className="main">
        <section className="content-container">
          <h2>Manufacturing Processes</h2>
          <ul>
            <li>Injection molding</li>
            <li>Casting</li>
            <li>Machining</li>
            <li>3D printing</li>
          </ul>

          <h2>Manufacturing Technologies</h2>
          <ul>
            <li>Automation and robotics</li>
            <li>Computer-aided design (CAD)</li>
            <li>Quality control systems</li>
            <li>Supply chain management</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default ManufacturingPage;
