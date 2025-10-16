import { useState, useEffect } from "react";
import muka from "./assets/muka.jpg";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
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
  Send,
  MessageSquare,
} from "lucide-react";
import {
  collection,
  addDoc,
  query,
  getDocs,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "./FirebaseConfig";
import "./Portfolio.css";

interface Comment {
  id: string;
  name: string;
  email: string;
  text: string;
  timestamp: Timestamp | Date;
  likes?: number;
}

const Portfolio = () => {
  const [_scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [commenterEmail, setCommenterEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

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

  // Fetch comments dari Firebase
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const commentsList: Comment[] = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Comment)
      );
      setComments(commentsList);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  // Tambah comment ke Firebase
  const handleAddComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !commentText.trim() ||
      !commenterName.trim() ||
      !commenterEmail.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const newComment = {
        name: commenterName,
        email: commenterEmail,
        text: commentText,
        timestamp: Timestamp.now(),
        likes: 0,
      };

      const docRef = await addDoc(collection(db, "comments"), newComment);

      setComments([
        { id: docRef.id, ...newComment, timestamp: new Date() },
        ...comments,
      ]);

      setCommentText("");
      setCommenterName("");
      setCommenterEmail("");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: Timestamp | Date): string => {
    if (!timestamp) return "";
    const date =
      timestamp instanceof Timestamp ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
        "https://img.itch.zone/aW1hZ2UvMzUzMDc5MS8yMTA3ODAwNS5wbmc=/original/%2FgQBpr.png",
      description: "Puzzle game dengan mekanik unik dan visual yang memukau",
      tech: ["AI Movement", "AI NavMesh Agent", "3D Sound System", "C#"],
      link: "https://riifahri.itch.io/sahurs-chase-nightmare",
    },
    {
      title: "GPInfo App Design",
      genre: "UI/UX Design",
      engine: "Figma",
      image: project1,
      description: "Puzzle game dengan mekanik unik dan visual yang memukau",
      tech: ["Figma", "Prototyping"],
      link: "https://www.figma.com/file/jDojDvzdT0x1r6CXS6ylIH/GP-Info?type=design&node-id=0%3A1&mode=design&t=17vejfiPJA0nJft7-1",
    },
    {
      title: "StarCanteen Web Design",
      genre: "UI/UX Design",
      engine: "Figma",
      image: project2,
      description: "Puzzle game dengan mekanik unik dan visual yang memukau",
      tech: ["Figma"],
      link: "https://www.figma.com/file/IaEZrNvrw0e7rnvXGYlNAx/StarCanteen?type=design&node-id=0%3A1&mode=design&t=tEt3R7TJ7G4hCVTL-1",
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
      name: "CSS3",
      logo: "https://static.cdnlogo.com/logos/c/31/css_800.png",
      category: "Language",
    },
    {
      name: "JavaScript",
      logo: "https://static.cdnlogo.com/logos/j/9/javascript_800.png",
      category: "Language",
    },
    {
      name: "Bootstrap",
      logo: "https://static.cdnlogo.com/logos/b/44/bootstrap-5_800.png",
      category: "Language",
    },
    {
      name: "Tailwind CSS",
      logo: "https://static.cdnlogo.com/logos/t/80/tailwind-css_800.png",
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
      name: "Laravel",
      logo: "https://static.cdnlogo.com/logos/l/38/laravel_800.png",
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
      name: "Git",
      logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      category: "Tool",
    },
    {
      name: "Gitlab",
      logo: "https://static.cdnlogo.com/logos/g/8/gitlab.svg",
      category: "Tool",
    },
    {
      name: "Figma",
      logo: "https://static.cdnlogo.com/logos/f/65/figma_800.png",
      category: "Tool",
    },
    {
      name: "Canva",
      logo: "https://static.cdnlogo.com/logos/c/36/canva.png",
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
              <a href="#comments" className="nav-link">
                Comments
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
              <button
                className="btn-secondary"
                onClick={() => {
                  const commentsSection = document.getElementById("comments");
                  if (commentsSection) {
                    commentsSection.scrollIntoView();
                  }
                }}
              >
                <span>Leave a Comment</span>
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
              <h3 className="category-title">Languages & Frameworks</h3>
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

      {/* Comments Section */}
      <section className="comments-section" id="comments">
        <div className="container">
          <h2 className="section-title">Visitor Comments</h2>

          {/* Comment Form */}
          <div style={{ maxWidth: "900px", margin: "3rem auto" }}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.85))",
                padding: "3.5rem",
                borderRadius: "28px",
                border: "2px solid rgba(139, 92, 246, 0.4)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px rgba(139, 92, 246, 0.3)",
              }}
            >
              <form onSubmit={handleAddComment}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    marginBottom: "2rem",
                  }}
                >
                  {/* Name Input */}
                  <div>
                    <label
                      style={{
                        color: "#cbd5e1",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        display: "block",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name here"
                      value={commenterName}
                      onChange={(e) => setCommenterName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "1.2rem 1.5rem",
                        background:
                          "linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4))",
                        border: "2px solid rgba(139, 92, 246, 0.3)",
                        borderRadius: "14px",
                        color: "#e2e8f0",
                        fontSize: "1rem",
                        fontFamily: "inherit",
                        fontWeight: 500,
                        transition: "all 0.35s",
                        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#ec4899";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6))";
                        e.currentTarget.style.boxShadow =
                          "0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.1)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(139, 92, 246, 0.3)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4))";
                        e.currentTarget.style.boxShadow =
                          "0 5px 20px rgba(0, 0, 0, 0.3)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      style={{
                        color: "#cbd5e1",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        display: "block",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={commenterEmail}
                      onChange={(e) => setCommenterEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "1.2rem 1.5rem",
                        background:
                          "linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4))",
                        border: "2px solid rgba(139, 92, 246, 0.3)",
                        borderRadius: "14px",
                        color: "#e2e8f0",
                        fontSize: "1rem",
                        fontFamily: "inherit",
                        fontWeight: 500,
                        transition: "all 0.35s",
                        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#ec4899";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6))";
                        e.currentTarget.style.boxShadow =
                          "0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.1)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(139, 92, 246, 0.3)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4))";
                        e.currentTarget.style.boxShadow =
                          "0 5px 20px rgba(0, 0, 0, 0.3)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div style={{ marginBottom: "2rem" }}>
                  <label
                    style={{
                      color: "#cbd5e1",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      display: "block",
                      marginBottom: "0.8rem",
                    }}
                  >
                    Your Message
                  </label>
                  <textarea
                    placeholder="Share your thoughts, feedback, or questions..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "1.2rem 1.5rem",
                      background:
                        "linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4))",
                      border: "2px solid rgba(139, 92, 246, 0.3)",
                      borderRadius: "14px",
                      color: "#e2e8f0",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      fontWeight: 500,
                      minHeight: "160px",
                      resize: "vertical",
                      transition: "all 0.35s",
                      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#ec4899";
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6))";
                      e.currentTarget.style.boxShadow =
                        "0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.1)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(139, 92, 246, 0.3)";
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4))";
                      e.currentTarget.style.boxShadow =
                        "0 5px 20px rgba(0, 0, 0, 0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "1.4rem 2.5rem",
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                    border: "none",
                    borderRadius: "14px",
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    transition: "all 0.35s",
                    boxShadow: "0 15px 40px rgba(139, 92, 246, 0.4)",
                    letterSpacing: "0.5px",
                    opacity: loading ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 25px 60px rgba(139, 92, 246, 0.6), 0 0 30px rgba(236, 72, 153, 0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 40px rgba(139, 92, 246, 0.4)";
                    }
                  }}
                >
                  <Send size={18} />
                  <span>{loading ? "Posting..." : "Send Comment"}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Comments List */}
          <div style={{ maxWidth: "900px", margin: "4rem auto" }}>
            <button
              onClick={() => setShowComments(!showComments)}
              style={{
                width: "100%",
                padding: "1.5rem 2rem",
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                border: "none",
                borderRadius: "16px",
                color: "#ffffff",
                fontSize: "1.15rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                boxShadow: "0 15px 40px rgba(139, 92, 246, 0.4)",
                letterSpacing: "0.5px",
                transition: "all 0.35s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 25px 60px rgba(139, 92, 246, 0.6), 0 0 30px rgba(236, 72, 153, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(139, 92, 246, 0.4)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <MessageSquare size={22} />
                <span>
                  {comments.length} Comment{comments.length !== 1 ? "s" : ""}
                </span>
              </div>
              <ChevronDown
                size={20}
                style={{
                  transition: "transform 0.3s ease",
                  transform: showComments ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {showComments && (
              <div style={{ marginTop: "2.5rem" }}>
                {comments.length > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.8rem",
                    }}
                  >
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(51, 65, 85, 0.7))",
                          padding: "2.2rem",
                          borderRadius: "18px",
                          border: "1px solid rgba(139, 92, 246, 0.3)",
                          transition: "all 0.35s",
                          backdropFilter: "blur(15px)",
                          position: "relative",
                          overflow: "hidden",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.6)";
                          e.currentTarget.style.boxShadow =
                            "0 15px 50px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.05)";
                          e.currentTarget.style.transform = "translateY(-6px)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.8))";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(139, 92, 246, 0.3)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(51, 65, 85, 0.7))";
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "1.5rem",
                            gap: "1.5rem",
                          }}
                        >
                          <div
                            style={{ display: "flex", gap: "1rem", flex: 1 }}
                          >
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                background:
                                  "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: "1.3rem",
                                flexShrink: 0,
                                boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)",
                              }}
                            >
                              {comment.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h5
                                style={{
                                  fontSize: "1.1rem",
                                  fontWeight: 700,
                                  color: "#ffffff",
                                  margin: 0,
                                  background:
                                    "linear-gradient(135deg, #ffffff, #a78bfa)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                }}
                              >
                                {comment.name}
                              </h5>
                              <p
                                style={{
                                  fontSize: "0.9rem",
                                  color: "#cbd5e1",
                                  margin: "0.3rem 0 0 0",
                                }}
                              >
                                {formatDate(comment.timestamp)}
                              </p>
                            </div>
                          </div>x
                        </div>
                        <p
                          style={{
                            color: "#e2e8f0",
                            lineHeight: "1.85",
                            fontSize: "1.05rem",
                            margin: 0,
                            wordWrap: "break-word",
                            whiteSpace: "pre-wrap",
                            fontWeight: 500,
                          }}
                        >
                          {comment.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "4rem 2rem",
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.4))",
                      borderRadius: "18px",
                      border: "2px dashed rgba(139, 92, 246, 0.3)",
                      color: "#cbd5e1",
                    }}
                  >
                    <MessageSquare
                      size={48}
                      style={{
                        color: "#8b5cf6",
                        opacity: 0.6,
                        marginBottom: "1rem",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        margin: "0.5rem 0",
                        color: "#e2e8f0",
                      }}
                    >
                      No comments yet
                    </p>
                    <span style={{ fontSize: "0.95rem", color: "#a78bfa" }}>
                      Be the first to share your thoughts!
                    </span>
                  </div>
                )}
              </div>
            )}
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
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-fahri-ramadhan-8886a337a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://youtube.com/@Rii_Fhrii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://instagram.com/mfr_rii.unitypackage"
              target="_blank"
              rel="noopener noreferrer"
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