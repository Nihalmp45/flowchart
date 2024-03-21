import React from 'react';
import './Planning.css'


function PlanningPage() {
  return (
    <div className="planning-page">
      <header className="header">
        <h1>The Power of Planning</h1>
        <p>Take control of your life and achieve your goals.</p>
      </header>

      <main className="main">
        <section className="content-container">
          <h2>Benefits of Planning</h2>
          <ul>
            <li>Set realistic goals.</li>
            <li>Improve your time management skills.</li>
            <li>Reduce stress and anxiety.</li>
            <li>Increase your productivity.</li>
          </ul>

          <h2>Planning Methods</h2>
          <ul>
            <li>Mind mapping</li>
            <li>Scheduling</li>
            <li>To-do lists</li>
            <li>Goal setting frameworks</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default PlanningPage;
