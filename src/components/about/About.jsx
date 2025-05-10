import React from 'react';
import './About.css';
import AboutBox from './AboutBox';

const About = () => {
    const skills = [
        { name: "Html",className:"html",level:"90%"},

        { name: "JavaScript", className: "js", level: "90%" },
        { name: "React", className: "react", level: "85%" },
        { name: "Node.js", className: "node", level: "80%" },
        { name: "MongoDB", className: "mongo", level: "75%" },
        { name: "Tailwind CSS", className: "tailwind", level: "80%" },
        { name: "Docker", className: "docker", level: "60%" },
        { name: "Kubernetes", className: "k8s", level: "50%" },
    ];

    const half = Math.ceil(skills.length / 2);
    const leftSkills = skills.slice(0, half);
    const rightSkills = skills.slice(half);

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                {/* Left: Skills */}
                <div className="about__skills">
                    <div className="skills__columns">
                        <div className="skills__column">
                            {leftSkills.map(skill => (
                                <div className="skills__bar" key={skill.name}>
                                    <span>{skill.name}</span>
                                    <div className="bar">
                                        <div className={`progress ${skill.className}`} style={{ width: skill.level }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="skills__column">
                            {rightSkills.map(skill => (
                                <div className="skills__bar" key={skill.name}>
                                    <span>{skill.name}</span>
                                    <div className="bar">
                                        <div className={`progress ${skill.className}`} style={{ width: skill.level }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Description */}
                <div className="about__data">
                    <p className="about__description">
                        I'm <strong>Gulshan Kumar</strong>, a passionate MERN Stack Developer. I love building efficient, scalable web apps using JavaScript, React, and Node.js.
                        Recently, I've been expanding my skills in containerization using Docker and Kubernetes. I believe in writing clean code, learning continuously, and building products that solve real-world problems.
                    </p>
                </div>
            </div>

            <AboutBox />

           
        </section>
    );
};

export default About;
