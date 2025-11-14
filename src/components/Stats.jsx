import React, { useEffect } from 'react';
import '../styles/Stats.css';
import { animateStats } from '../animations/sectionAnimations';

const Stats = () => {
  useEffect(() => {
    animateStats();
  }, []);

  const statsData = [
    { id: 1, target: 100, label: 'Happy Users' },
    { id: 2, target: 50, label: 'Projects Done' },
    { id: 3, target: 10, label: 'Years Experience' },
    { id: 4, target: 99, label: 'Satisfaction %' },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-box">
              <h3 className="stat-number" data-target={stat.target}>
                0
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
