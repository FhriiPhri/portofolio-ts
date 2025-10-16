import { useState, useEffect } from "react";
import muka from "./assets/muka.jpg";
import {
  Gamepad2,
  Trophy,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  User,
  Briefcase,
  Award,
  Instagram,
  Youtube,
  Phone,
} from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Web Berita",
      genre: "Web Development",
      engine: "PHP Native",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop",
      description:
        "Dark fantasy RPG dengan sistem combat dinamis dan cerita yang mendalam",
      tech: ["HTML", "CSS", "PHP"],
      link: "https://github.com/yourusername/web-berita",
    },
    {
      title: "Brick Breaker Game",
      genre: "Game",
      engine: "Flutter with Dart",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop",
      description:
        "Racing game retro dengan multiplayer online dan customization kendaraan",
      tech: ["Dart", "Flutter"],
      link: "https://github.com/yourusername/web-berita",
    },
    {
      title: "Sisfo Sarpras",
      genre: "Web Development",
      engine: "Laravel 10",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
      description: "Puzzle game dengan mekanik unik dan visual yang memukau",
      tech: ["Blade", "Tailwind", "PHP", "JavaScript"],
      link: "https://github.com/yourusername/web-berita",
    },
    {
      title: "Behind The Laundry",
      genre: "Horror Game",
      engine: "Unity Engine",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
      description: "Puzzle game dengan mekanik unik dan visual yang memukau",
      tech: ["Blade", "Tailwind", "PHP", "JavaScript"],
      link: "https://github.com/yourusername/web-berita",
    },
    {
      title: "Sahur's Chase: Nightmare",
      genre: "Survival Horror Game",
      engine: "Unity Engine",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
      description: "Puzzle game dengan mekanik unik dan visual yang memukau",
      tech: ["Blade", "Tailwind", "PHP", "JavaScript"],
      link: "https://github.com/yourusername/web-berita",
    },
    {
      title: "GPInfo App Design",
      genre: "UI/UX Design",
      engine: "Unity Engine",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
      description: "Puzzle game dengan mekanik unik dan visual yang memukau",
      tech: ["Blade", "Tailwind", "PHP", "JavaScript"],
      link: "https://github.com/yourusername/web-berita",
    },
  ];

  const skills = [
    {
      name: "Unity Engine",
      logo: "https://cdn.worldvectorlogo.com/logos/unity-69.svg",
      category: "Engine",
    },
    {
      name: "Unreal Engine",
      logo: "https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoiZXBpY2dhbWVzXC9maWxlXC9uSzM5Rk1qVnVyc0ZxNTRiUEF6Si5wbmcifQ:epicgames:8Gd9a_jasXKPUUQcfzenb6-wKff70lJ4GSgs3-XBWJc?width=2400",
      category: "Engine",
    },
    {
      name: "Godot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
      category: "Engine",
    },
    {
      name: "HTML5",
      logo: "https://static.cdnlogo.com/logos/h/13/html-5_800.png",
      category: "Language",
    },
    {
      name: "CSS",
      logo: "https://static.cdnlogo.com/logos/c/31/css_800.png",
      category: "Language",
    },
    {
      name: "JavaScript",
      logo: "https://static.cdnlogo.com/logos/j/9/javascript_800.png",
      category: "Language",
    },
    {
      name: "C#",
      logo: "https://cdn.worldvectorlogo.com/logos/c--4.svg",
      category: "Language",
    },
    {
      name: "C++",
      logo: "https://cdn.worldvectorlogo.com/logos/c.svg",
      category: "Language",
    },
    {
      name: "Blender",
      logo: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
      category: "Tool",
    },
    {
      name: "OBS Studio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OBS_Studio_Logo.svg/1024px-OBS_Studio_Logo.svg.png",
      category: "Tool",
    },
    {
      name: "Adobe Photoshop",
      logo: "https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg",
      category: "Tool",
    },
    {
      name: "Adobe Illustrator",
      logo: "https://static.cdnlogo.com/logos/a/13/adobe-illustrator-cc-icon_800.png",
      category: "Tool",
    },
    {
      name: "vMix",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/71/Vmix_visionmixer_company_logo.png",
      category: "Tool",
    },
    {
      name: "Youtube Live",
      logo: "https://static.cdnlogo.com/logos/y/75/youtube-icon_800.png",
      category: "Tool",
    },
    {
      name: "Gitlab",
      logo: "https://static.cdnlogo.com/logos/g/8/gitlab.svg",
      category: "Tool",
    },
    {
      name: "Git",
      logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      category: "Tool",
    },
  ];

  const achievements = [
    { title: "Game Jam Winner", year: "2024", event: "Global Game Jam" },
    {
      title: "Best Indie Game",
      year: "2023",
      event: "Indonesia Game Festival",
    },
    { title: "Player's Choice Award", year: "2023", event: "Steam Awards" },
  ];

  const stats = [
    { icon: <Briefcase size={32} />, value: "2+", label: "Years Experience" },
    { icon: <Gamepad2 size={32} />, value: "3+", label: "Games Published" },
    { icon: <Award size={32} />, value: "3+", label: "Awards Won" },
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
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="glitch" data-text="Muhammad Fahri Ramadhan">
              Muhammad Fahri Ramadhan
            </h1>
            <p className="fade-in-up">
              Siswa dari sekolah SMK Taruna Bhakti jurusan PPLG yang memiliki
              passion di bidang Game Developer
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary pulse"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView();
                  }
                }}
              >
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

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title slide-in">About Me</h2>
          <div className="about-content">
            <div className="about-image-container">
              <div className="about-image">
                <img src={muka} alt="Profile" />
                <div className="image-border"></div>
              </div>
            </div>
            <div className="about-text">
              <div className="about-intro">
                <User size={48} className="about-icon" />
                <h3>Hello! I'm a Game Developer</h3>
              </div>
              <p>
                Passionate game developer dengan 5+ tahun pengalaman dalam
                menciptakan game yang engaging dan innovative. Saya fokus pada
                gameplay mechanics yang solid dan user experience yang
                exceptional.
              </p>
              <p>
                Spesialisasi saya meliputi Unity, Unreal Engine, dan berbagai
                tools modern untuk game development. Saya percaya bahwa game
                yang bagus adalah kombinasi antara technical excellence dan
                creative storytelling.
              </p>
              <p>
                Selalu excited untuk collaborate dalam project baru dan terus
                belajar teknologi terbaru di industri game development.
              </p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="stat-card"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title slide-in">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((game, idx) => (
              <div
                key={idx}
                className="project-card"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
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
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="project-link"
                    onClick={() => window.open(game.link, "_blank")}
                  >
                    <span>See Project</span>
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
          <h2 className="section-title slide-in">Skills & Technologies</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3 className="category-title">Game Engines</h3>
              <div className="skills-logo-grid">
                {skills
                  .filter((s) => s.category === "Engine")
                  .map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-logo-item"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="logo-container">
                        <img src={skill.logo} alt={skill.name} />
                      </div>
                      <span className="skill-name-label">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skills-logo-grid">
                {skills
                  .filter((s) => s.category === "Language")
                  .map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-logo-item"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="logo-container">
                        <img src={skill.logo} alt={skill.name} />
                      </div>
                      <span className="skill-name-label">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Tools & Software</h3>
              <div className="skills-logo-grid">
                {skills
                  .filter((s) => s.category === "Tool")
                  .map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-logo-item"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="logo-container">
                        <img src={skill.logo} alt={skill.name} />
                      </div>
                      <span className="skill-name-label">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <h2 className="section-title slide-in">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="achievement-card"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
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
          <p className="fade-in-up">
            Tertarik untuk berkolaborasi? Mari buat game yang amazing bersama!
          </p>
          <div className="social-links">
            <a
              href="mailto:fahripadang050908@gmail.com"
              className="social-icon"
            >
              <Mail size={24} />
            </a>
            <a href="tel:+6281210672183" className="social-icon">
              <Phone size={24} />
            </a>
            <a
              href="https://github.com/FhriiPhri"
              target="_blank"
              className="social-icon"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-fahri-ramadhan-8886a337a"
              target="_blank"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://youtube.com/@Rii_Fhrii"
              target="_blank"
              className="social-icon"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://instagram.com/mfr_rii.unitypackage"
              target="_blank"
              className="social-icon"
            >
              <Instagram size={24} />
            </a>
          </div>
          <button
            className="btn-primary pulse"
            onClick={() => {
              window.open(
                "https://wa.me/6281210672183?text=Hello, Fahri. Let's work together!",
                "_blank"
              );
            }}
          >
            <span>Get In Touch</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 RiiFahri. Made with ❤️☕🎧🎶</p>
      </footer>
    </div>
  );
};

export default Portfolio;
