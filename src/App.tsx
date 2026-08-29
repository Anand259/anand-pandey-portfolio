import { useEffect, useState } from 'react'
import {
  ArrowUpRight, Check, Code2, Github, Linkedin, Mail, Menu, Monitor,
  Rocket, Send, Sparkles, X
} from 'lucide-react'

type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  accent: string
}

const projects: Project[] = [
  {
    title: 'Elicast ERP',
    category: 'SaaS · Full-Stack',
    description: 'Product Manufacturing Machine ERP built with Laravel, React.js and MySQL, featuring modular architecture, RESTful APIs, responsive interfaces and database-driven workflows.',
    tags: ['React.js', 'Laravel', 'REST APIs'],
    accent: 'cyan',
  },
  {
    title: 'Custom SaaS Platforms',
    category: 'CRM · Full-Stack',
    description: 'CRM solutions built with Laravel, PHP, React.js and Web3 technologies, including API and transaction-related functionality.',
    tags: ['Laravel', 'React.js', 'Web3'],
    accent: 'violet',
  },
  {
    title: 'Business Web Applications',
    category: 'Web Applications',
    description: 'Responsive websites and internal applications backed by database-driven workflows, API integrations, performance optimization and maintainable code.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    accent: 'pink',
  },
]

const skills = [
  ['PHP', 'Advanced'],
  ['Laravel', 'Advanced'],
  ['React.js', 'Advanced'],
  ['JavaScript', 'Advanced'],
  ['MySQL', 'Advanced'],
  ['MSSQL', 'Advanced'],
  ['REST APIs', 'Advanced'],
  ['Livewire', 'Advanced'],
  ['Tailwind CSS', 'Advanced'],
  ['Bootstrap', 'Advanced'],
  ['Git / GitHub Actions', 'Advanced'],
  ['Inertia.js', 'Experienced'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [cvOpen, setCvOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <div className="noise" />

      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go('home')} aria-label="Go home">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Anand Pandey{/*<span className="muted">.dev</span>*/}</span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['about', 'experience', 'skills', 'projects', 'contact'].map(item => (
              <button key={item} onClick={() => go(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark and light mode">
              {darkMode ? '☼' : '☾'} <span>{darkMode ? 'Light' : 'Dark'}</span>
            </button>
            <button className="nav-cta" onClick={() => go('contact')}>Let's talk <ArrowUpRight size={16} /></button>
          </div>

          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Senior Web Developer · Available for select projects</div>
            <h1>I build <span className="gradient-text">scalable web applications</span> with a product mindset.</h1>
            <p className="hero-lead">
              Senior Web Developer specializing in PHP, Laravel and React.js, with hands-on experience
              building backend services, RESTful APIs, database-driven systems and responsive interfaces.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go('projects')}>View my work <ArrowUpRight size={18} /></button>
              <button className="secondary" onClick={() => setCvOpen(true)}>View CV <ArrowUpRight size={18} /></button>
              <button className="secondary" onClick={() => go('contact')}>Start a project</button>
            </div>
            <div className="trust">
              <span>Core stack</span>
              <div className="stack-list"><b>PHP</b><b>Laravel</b><b>React.js</b><b>MySQL</b><b>APIs</b></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="code-card">
              <div className="code-top"><span /><span /><span /><small>DeveloperController.php</small></div>
              <pre>{`class DeveloperController extends Controller
{
    public function build(Product $product)
    {
        return Inertia::render('Product', [
            'product' => $product,
            'stack' => [
                'Laravel', 'React.js',
                'PHP', 'MySQL',
            ],
            'focus' => 'Great UX',
        ]);
    }
}`}</pre>
              <div className="code-footer"><span><Sparkles size={13} /> Laravel + React</span><span>01 / 04</span></div>
            </div>
            <div className="float-card experience"><strong>8+</strong><span>Years of<br />web development</span></div>
            <div className="float-card shipped"><Check size={18} /><span>Senior<br /><strong>Full-Stack</strong></span></div>
          </div>
        </section>

        <section className="metrics">
          <div className="container metric-grid">
            <div><strong>8+</strong><span>Years professional experience</span></div>
            <div><strong>3</strong><span>Companies in career</span></div>
            <div><strong>Full-Stack</strong><span>Backend + frontend delivery</span></div>
            <div><strong>CI/CD</strong><span>GitHub Actions workflows</span></div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-label">01 / About</div>
          <div className="two-col">
            <div><h2>Senior development with a <span className="gradient-text">full-stack perspective.</span></h2></div>
            <div className="about-copy">
              <p>
                I am a Senior Web Developer specializing in PHP, Laravel and React.js, with extensive
                experience building web applications, backend services, RESTful APIs, database-driven
                systems and responsive user interfaces.
              </p>
              <p>
                My work spans Laravel architecture, API integration, MySQL and MSSQL, JavaScript,
                Livewire, GitHub Actions and CI/CD, with additional experience in blockchain/Web3
                integrated platforms.
              </p>
              <div className="mini-signature"><span>AP</span><div><b>Anand Pandey</b><small>Senior Web Developer · India</small></div></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-label">02 / Experience</div>
          <h2>Experience across <span className="gradient-text">modern web stacks.</span></h2>
          <div className="experience-list">
            <article className="experience-row">
              <div><span>2023 — Present</span><b>Corporality Global</b></div>
              <div><h3>Senior Web Developer</h3><p>Lead end-to-end development of scalable web and mobile applications using Laravel, PHP, React.js and modern frontend technologies. Develop RESTful APIs, backend services and database-driven workflows; build reusable responsive interfaces; optimize performance and maintain GitHub Actions CI/CD workflows.</p><small>Laravel · PHP · React.js · Livewire · MySQL · MSSQL · JavaScript · jQuery · AJAX · Bootstrap · Tailwind CSS · GitHub Actions</small></div>
            </article>
            <article className="experience-row">
              <div><span>2019 — 2023</span><b>IPX Technologies Pvt. Ltd.</b></div>
              <div><h3>Senior Web Developer</h3><p>Developed and maintained blockchain-integrated web platforms using Laravel, PHP, React.js and Web3 technologies. Implemented modular Laravel backends and dynamic React.js interfaces, integrated blockchain and third-party APIs, and contributed to secure transaction-related functionality.</p><small>Laravel · PHP · React.js · MySQL · Web3 / Blockchain · JavaScript · jQuery · AJAX · Bootstrap · HTML5 · CSS3</small></div>
            </article>
            <article className="experience-row">
              <div><span>2018 — 2019</span><b>PC RescueLive</b></div>
              <div><h3>Web Developer</h3><p>Designed and developed responsive websites and internal web applications using Core PHP, MySQL, JavaScript, jQuery, AJAX and Bootstrap. Developed database-driven functionality and improved performance, SEO, usability and UI/UX through code and interface optimization.</p><small>PHP · MySQL · JavaScript · jQuery · AJAX · Bootstrap · HTML5 · CSS3</small></div>
            </article>
          </div>
        </section>

        <section id="skills" className="section container skills-section">
          <div className="section-label">03 / Expertise</div>
          <div className="two-col skills-head">
            <h2>The technologies I use to <span className="gradient-text">ship.</span></h2>
            <p>Focused on scalable, secure, maintainable and performance-oriented software solutions.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, level]) => <div className="skill" key={name}><div><span>{name}</span><small>{level}</small></div><div className="skill-bar"><i /></div></div>)}
          </div>
        </section>

        <section id="projects" className="section container projects">
          <div className="section-label">04 / Selected work</div>
          <div className="project-heading"><h2>Work across <span className="gradient-text">web & APIs.</span></h2><p>Selected examples based on the technologies and project domains represented in my professional experience.</p></div>
          <div className="project-grid">
            {projects.map((project, i) => <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-visual">
                <div className="browser"><div className="browser-bar"><span /><span /><span /></div><div className="mock-ui"><div className="mock-side" /><div className="mock-main"><div /><div /><div /></div></div></div>
                <span className="project-number">0{i + 1}</span>
              </div>
              <div className="project-body"><small>{project.category}</small><h3>{project.title} <ArrowUpRight size={19} /></h3><p>{project.description}</p><div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div></div>
            </article>)}
          </div>
        </section>

        <section className="process">
          <div className="container">
            <div className="section-label">05 / What I bring</div>
            <h2>Built for <span className="gradient-text">quality and scale.</span></h2>
            <div className="process-grid">
              {[
                ['01', 'Architecture', 'Laravel architecture, modular backends, REST APIs and database-driven application design.'],
                ['02', 'Frontend', 'Responsive React.js interfaces with reusable components, Tailwind CSS and Bootstrap.'],
                ['03', 'Integration', 'Third-party APIs, calendar/meeting workflows and blockchain/Web3 integrations.'],
                ['04', 'Delivery', 'Performance optimization, Git, GitHub Actions and CI/CD workflows for dependable releases.'],
              ].map(([n, t, d]) => <div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <div className="contact-card">
            <div className="contact-icon"><Send /></div>
            <div><div className="section-label">06 / Contact</div><h2>Let's build something <span className="gradient-text">useful.</span></h2><p>Have a web application, API, Laravel or React.js project in mind? Get in touch and let's discuss the requirements.</p></div>
            <a className="primary" href="mailto:anandpandey259@gmail.com">anandpandey259@gmail.com <ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      {cvOpen && (
        <div className="cv-modal-backdrop" role="dialog" aria-modal="true" aria-label="Anand Pandey CV" onMouseDown={(e) => {
          if (e.target === e.currentTarget) setCvOpen(false)
        }}>
          <div className="cv-modal">
            <div className="cv-modal-header">
              <div>
                <strong>Anand Pandey</strong>
                <span>Senior Web Developer · CV</span>
              </div>
              <div className="cv-modal-actions">
                <a href="/Anand_Pandey_Senior_Web_Developer_CV.pdf" target="_blank" rel="noreferrer">Open PDF</a>
                <button onClick={() => setCvOpen(false)} aria-label="Close CV"><X size={20} /></button>
              </div>
            </div>
            <iframe className="cv-frame" src="/Anand_Pandey_Senior_Web_Developer_CV.pdf#toolbar=1&navpanes=0" title="Anand Pandey CV" />
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container footer-inner">
          <div><button className="brand" onClick={() => go('home')}><span className="brand-mark">&lt;/&gt;</span><span>Anand Pandey {/*<span className="muted">.dev</span>*/}</span></button><p>Senior Web Developer · PHP · Laravel · React.js</p></div>
          <div className="socials"><a href="https://github.com/Anand259" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/anand-pandey-dev" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:anandpandey259@gmail.com" aria-label="Email"><Mail /></a></div>
          <small>© 2026 Anand Pandey. Built with React + TypeScript.</small>
        </div>
      </footer>
    </div>
  )
}

export default App
