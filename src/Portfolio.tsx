// src/Portfolio.tsx
import React, { useState, useEffect } from 'react';
import { Gamepad2, Code, Palette, Trophy, Mail, Github, Linkedin, Twitter, ExternalLink, ChevronDown } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const games = [
    {
      title: "Behind The Laundry",
      genre: "Horror Game",
      engine: "Unity",
      image: "https://img.itch.zone/aW1hZ2UvMzE5NTY1My8xOTA4MDQ3OC5wbmc=/original/3Rjn5R.png",
      description: "Story-driven horror game with immersive atmosphere and jumpscares",
      tech: ["Unity", "C#", "AINavMeshAgent", "Cinemachine"],
      link: "https://fhriifhri.itch.io/behind-the-laundry"
    },
    {
      title: "Sahur's Chase: Nightmare",
      genre: "Survival Horror Game",
      engine: "HDRP Unity",
      image: "https://img.itch.zone/aW1hZ2UvMzUzMDc5MS8yMTA3ODAwNS5wbmc=/original/%2FgQBpr.png",
      description: "High-fidelity horror game with realistic graphics and sound design",
      tech: ["Unity Engine", "C#", "HDRP Pipeline", "3D Sound"]
    }
  ];

  const skills = [
    { name: "Unity Engine", level: 98 },
    { name: "Unreal Engine", level: 75 },
    { name: "C#", level: 99 },
    { name: "Blueprint", level: 45 },
    { name: "Game Design", level: 94 },
    { name: "Laravel", level: 99 },
    { name: "OBS Studio", level: 89 },
    { name: "Blender", level: 90 }
  ];

  const achievements = [
    { title: "PPLG Booth Starfest 2024", year: "2024", event: "Starbhak Festival 2024" },
    { title: "Best Game Designer", year: "2024", event: "Asesmen Akhir Semester" },
    { title: "PPLG Booth Job Fair 2025", year: "2025", event: "Starbhak Job Fair 2025" }
  ];

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Cursor Follower */}
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Gamepad2 size={32} className="logo-icon" />
              <span>RiiFahri</span>
            </div>
            <div className="nav-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="glitch" data-text="Muhammad Fahri Ramadhan">Muhammad Fahri Ramadhan</h1>
            <p className="fade-in-up">Game Developer from Indonesia with a passion for creating engaging and immersive games.</p>
            <div className="hero-buttons">
              <button className="btn-primary pulse">
                <span>View Projects</span>
              </button>
              <button className="btn-secondary">
                <span>Contact Me</span>
              </button>
            </div>
          </div>
          <div className="scroll-indicator">
            <ChevronDown size={32} className="bounce" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title slide-in">Featured Projects</h2>
          <div className="projects-grid">
            {games.map((game, idx) => (
              <div key={idx} className="project-card" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="project-image">
                  <img src={game.image} alt={game.title} />
                  <div className="image-overlay"></div>
                  <span className="project-genre">{game.genre}</span>
                </div>
                <div className="project-content">
                  <h3>{game.title}</h3>
                  <p className="project-engine">{game.engine}</p>
                  <p className="project-desc">{game.description}</p>
                  <div className="project-tech">
                    {game.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <button className="project-link" onClick={() => window.open(game.link)}>
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title slide-in">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                    data-width={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <h2 className="section-title slide-in">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-card" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="trophy-container">
                  <Trophy size={48} className="trophy-icon" />
                </div>
                <h3>{achievement.title}</h3>
                <p className="achievement-event">{achievement.event}</p>
                <p className="achievement-year">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title slide-in">Let's Work Together</h2>
          <p className="fade-in-up">Tertarik untuk berkolaborasi? Mari buat game yang amazing bersama!</p>
          <div className="social-links">
            <a href="mailto:your@email.com" className="social-icon">
              <Mail size={24} />
            </a>
            <a href="https://github.com/FhriiPhri" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" className="social-icon">
              <Twitter size={24} />
            </a>
          </div>
          <button className="btn-primary pulse">
            <span>Get In Touch</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Muhammad Fahri Ramadhan Portfolio. Made with ❤️ and TypeScript</p>
      </footer>
    </div>
  );
};

export default Portfolio;