import React from 'react';
import './Marketing.css'; 

function SalesMarketingPage() {
  return (
    <div className="sales-marketing-page">
      <header className="header">
        <h1>Boosting Sales with Strategic Marketing</h1>
        <p>Maximizing visibility and driving growth.</p>
      </header>

      <main className="main">
        <section className="content-container">
          <h2>Key Sales and Marketing Strategies</h2>
          <ul>
            <li>Target audience identification</li>
            <li>Content marketing</li>
            <li>Social media engagement</li>
            <li>Email marketing campaigns</li>
          </ul>

          <h2>Marketing Channels</h2>
          <ul>
            <li>Digital advertising</li>
            <li>Search engine optimization (SEO)</li>
            <li>Public relations</li>
            <li>Event marketing</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default SalesMarketingPage;
