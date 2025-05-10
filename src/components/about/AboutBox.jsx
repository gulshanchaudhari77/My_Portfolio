import React from 'react';
import {
  RiFireLine,
  RiCupLine,
  RiGroupLine,
  RiTrophyLine,
  RiGithubLine,
} from 'react-icons/ri';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <RiFireLine className="about__icon" />
        <div>
          <h3 className="about__title">Fresher</h3>
          <span className="about__subtitle">Looking for a Job</span>
        </div>
      </div>

      <div className="about__box">
        <RiCupLine className="about__icon" />
        <div>
          <h3 className="about__title">10+</h3>
          <span className="about__subtitle">
            GitHub Repositories{' '}
            <a
              href="https://github.com/gulshankr04"
              target="_blank"
              rel="noopener noreferrer"
              className="about__github-link"
              title="Visit GitHub"
            >
              <RiGithubLine />
            </a>
          </span>
        </div>
      </div>

      <div className="about__box">
        <RiGroupLine className="about__icon" />
        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitle">Launched Projects</span>
        </div>
      </div>

      <div className="about__box">
        <RiTrophyLine className="about__icon" />
        <div>
          <h3 className="about__title">100%</h3>
          <span className="about__subtitle">Code Quality</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
