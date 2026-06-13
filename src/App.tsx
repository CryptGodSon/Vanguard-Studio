import { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Award, 
  Crown, 
  X, 
  ChevronDown, 
  Zap, 
  Globe, 
  Layers, 
  Send, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  MessageSquare, 
  ArrowUp, 
  Volume2, 
  VolumeX 
} from 'lucide-react';

/* ── Nav links ── */
const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire'];

/* ── Stats ── */
const stats = [
  { value: '250+', label: 'Brands Transformed' },
  { value: '95%',  label: 'Client Retention'   },
  { value: '10+',  label: 'Years in the Game'  },
  { value: '40+',  label: 'Countries Reached'  },
];

/* ── Services pills ── */
const services = [
  { icon: Zap,    label: 'Brand Strategy'   },
  { icon: Globe,  label: 'Digital Identity' },
  { icon: Layers, label: 'Motion & 3D'      },
];

/* ── Projects Data ── */
interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  image: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
}

const projectsData: Project[] = [
  {
    id: 'aether',
    title: 'AETHER',
    category: 'Brand Identity / 3D Design',
    year: '2026',
    client: 'Aether Luxury',
    image: '/projects/aether.png',
    tagline: 'Redefining luxury fashion through dark crimson spatial identity.',
    description: 'AETHER requested a complete structural overhaul of their digital footprint. We built a custom 3D web experience accompanied by a strict, minimalist typography system and premium packaging guidelines.',
    challenge: 'Luxury brands often struggle to translate physical tactile elegance into digital space without losing their premium feel.',
    solution: 'We developed an interactive 3D spatial layout using WebGL inspired motion effects, accompanied by a custom serif typography scheme and a premium crimson-red color space.',
    deliverables: ['Creative Direction', '3D Motion Design', 'Brand Architecture', 'Web Development'],
  },
  {
    id: 'kinetic',
    title: 'KINETIC',
    category: 'UI/UX Design / Digital Architecture',
    year: '2025',
    client: 'Kinetic Motors',
    image: '/projects/kinetic.png',
    tagline: 'High-performance interactive charging interfaces with crimson energy grids.',
    description: 'KINETIC is a next-generation EV manufacturer. We designed their in-car interface and digital ecosystem, establishing a high-contrast, high-performance visual language.',
    challenge: 'Driver safety demands low-latency visual representation of charge states, high-contrast typography, and intuitive accessibility.',
    solution: 'A high-contrast neon-red user interface with a custom-engineered motion layout that visualizes battery charge cycles in real-time.',
    deliverables: ['UI/UX Design Systems', 'Motion Prototypes', 'Mobile Application', 'In-Car Interface'],
  },
  {
    id: 'neural',
    title: 'NEURAL',
    category: 'Branding / Cybernetic Identity',
    year: '2025',
    client: 'Neural Systems',
    image: '/projects/neural.png',
    tagline: 'Securing the future of cybernetic identities in neon-red Tokyo grids.',
    description: 'NEURAL is a cutting-edge cybernetic security firm. We designed an identity that represents complexity and absolute security, using procedural digital meshes and deep purple gradients.',
    challenge: 'Explaining abstract quantum cryptography concepts visually without appearing overly technical or unapproachable.',
    solution: 'We designed a mesh-based brand identity with dynamic glowing neon-red elements, custom typeface, and clean abstract visuals that signify data flows.',
    deliverables: ['Brand Identity', 'Procedural Graphics', 'Web Architecture', 'Investor Collateral'],
  },
  {
    id: 'kronos',
    title: 'KRONOS',
    category: 'Art Direction / Motion Design',
    year: '2026',
    client: 'Kronos Theatre',
    image: '/projects/glitch_knight.png',
    tagline: 'Experiencing classic theatre through chromatic distortion grids.',
    description: 'KRONOS wanted a bold, high-contrast visual campaign for their adaptation of classic myths. We built a glitch-mesh visual library and interactive promotional website.',
    challenge: 'Blending historical art styles with futuristic digital aberration themes seamlessly.',
    solution: 'An interface featuring custom displacement shaders, chromatic aberration effects, and classical engraving assets.',
    deliverables: ['Visual Identity', 'Interactive WebGL', 'Editorial Design', 'Poster Series'],
  },
];

/* ── Manifesto Data ── */
const manifestoData = {
  fierce: {
    title: 'Fierce Execution',
    subtitle: 'We do not compromise on visual excellence.',
    text: 'We believe that normal is boring. To build brands that dominate, you must be willing to make bold visual statements that command attention. Every pixel, transition, and word is designed to assert leadership.',
  },
  fearless: {
    title: 'Fearless Innovation',
    subtitle: 'Disruption is not a buzzword; it is our method.',
    text: 'We explore the boundaries of the digital space. Whether through interactive WebGL environments, dynamic 3D layouts, or generative art systems, we embrace experimental methods to discover new paradigms.',
  },
  first: {
    title: 'First Principles',
    subtitle: 'Everything built from the ground up.',
    text: 'We do not use cookie-cutter templates. We analyze the core values of a brand and construct custom systems from first principles. That is why our products feel original, tailormade, and uniquely premium.',
  },
};

/* ── Offerings Data ── */
const offeringsData = [
  {
    id: 'strategy',
    title: 'Brand Strategy',
    icon: Zap,
    short: 'Defining your unfair market advantage and positioning.',
    process: [
      { name: 'Research & Audit', desc: 'Analyzing the competitive landscape and target audience behaviors.' },
      { name: 'Positioning', desc: 'Crafting the unique value proposition and brand archetype.' },
      { name: 'Architecture', desc: 'Structuring your services and products logically.' }
    ],
    deliverables: ['Brand Strategy Book', 'Archetype Definition', 'Market Position Map', 'Copywriting Playbook'],
    tools: ['Figma', 'Miro', 'Notion', 'Keynote']
  },
  {
    id: 'identity',
    title: 'Digital Identity',
    icon: Globe,
    short: 'Sleek visual architectures built for modern screens.',
    process: [
      { name: 'Visual Research', desc: 'Moodboarding and creative concept generation.' },
      { name: 'UI/UX Design', desc: 'Designing modern, accessible, and breathtaking interfaces.' },
      { name: 'Design Systems', desc: 'Creating scalable component libraries and documentation.' }
    ],
    deliverables: ['Visual Identity Guidelines', 'Figma Design System', 'Responsive UI Templates', 'Icon Library'],
    tools: ['Figma', 'Adobe CC', 'Webflow', 'Tailwind']
  },
  {
    id: 'motion',
    title: 'Motion & 3D',
    icon: Layers,
    short: 'Adding kinetic energy and spatial depth to your product.',
    process: [
      { name: 'Storyboarding', desc: 'Sketching motion keyframes and visual flow.' },
      { name: '3D Modeling', desc: 'Creating custom objects, textures, and environments.' },
      { name: 'Animation & Render', desc: 'Simulating physics, lighting, and rendering high-fidelity video.' }
    ],
    deliverables: ['3D Web Assets', 'Promo Motion Video', 'Micro-interactions', 'Lottie / Rive Animations'],
    tools: ['Blender', 'Cinema 4D', 'After Effects', 'Spline']
  },
  {
    id: 'creative',
    title: 'Creative Direction',
    icon: Crown,
    short: 'Overseeing visual unity across all digital assets.',
    process: [
      { name: 'Campaign Concepts', desc: 'Ideating large-scale visual campaigns.' },
      { name: 'Asset Coordination', desc: 'Managing photography, video, and design teams.' },
      { name: 'Brand Governance', desc: 'Maintaining aesthetic standards over multi-channel assets.' }
    ],
    deliverables: ['Creative Direction Guide', 'Asset Library', 'Marketing Collateral', 'Product Packaging Concepts'],
    tools: ['Figma', 'InDesign', 'Lightroom', 'Premier Pro']
  }
];

function CursorDot() {
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -200, my = -200;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const loop = () => {
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[999] h-2 w-2 rounded-full bg-white mix-blend-difference"
      style={{ willChange: 'transform' }}
    />
  );
}

/* ── Scroll progress bar ── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el    = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-white/10">
      <div
        className="h-full bg-white"
        style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
      />
    </div>
  );
}

/* ── Main App ── */
export default function App() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeManifesto, setActiveManifesto] = useState<'fierce' | 'fearless' | 'first'>('fierce');
  const [expandedOffering, setExpandedOffering] = useState<string | null>(null);

  // Inquiry Form state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState(25000);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Cinematic showreel popup states
  const [reelOpen, setReelOpen] = useState(false);
  const [reelMuted, setReelMuted] = useState(false);

  // Newsletter signup states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const sections = ['hero', 'projects', 'studio', 'offerings', 'inquire'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: '-10% 0px -40% 0px' }
      );
      obs.observe(el);
      return { obs, el };
    });

    return () => {
      observers.forEach((o) => {
        if (o) o.obs.unobserve(o.el);
      });
    };
  }, []);

  /* Navbar glass effect on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu or modal is open */
  useEffect(() => {
    if (menuOpen || selectedProject || reelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, selectedProject, reelOpen]);

  /* Render GitHub follow button after mount */
  useEffect(() => {
    const githubButton = (window as any).GithubButton;
    if (githubButton) {
      githubButton.render();
    } else {
      const script = document.createElement('script');
      script.src = "https://buttons.github.io/buttons.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form fields
      setFormState({ name: '', email: '', message: '' });
      setSelectedServices([]);
      setBudget(25000);
    }, 1800);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-black text-white" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Custom cursor — desktop only */}
      <div className="hidden lg:block">
        <CursorDot />
      </div>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Right-side: section label (vertical, fixed, active updates) */}
      <div
        className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-white/30 transition-all duration-300 lg:flex"
        style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
      >
        <span>
          {activeSection === 'hero' && '01'}
          {activeSection === 'projects' && '02'}
          {activeSection === 'studio' && '03'}
          {activeSection === 'offerings' && '04'}
          {activeSection === 'inquire' && '05'}
        </span>
        <span className="inline-block h-8 w-px bg-white/[0.12]" />
        <span className="text-white/60 tracking-[0.25em]">
          {activeSection === 'hero' && 'HERO'}
          {activeSection === 'projects' && 'PROJECTS'}
          {activeSection === 'studio' && 'STUDIO'}
          {activeSection === 'offerings' && 'OFFERINGS'}
          {activeSection === 'inquire' && 'INQUIRE'}
        </span>
      </div>

      {/* ════════════════════════════
          HERO — full viewport height
      ════════════════════════════ */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">

        {/* Background video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        />

        {/* Multi-layer overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base dark tint */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Bottom-up fade for stat readability */}
          <div className="absolute inset-x-0 bottom-0 h-3/4"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
          />
          {/* Left-side text legibility */}
          <div className="absolute inset-y-0 left-0 w-1/2"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 100%)' }}
          />
          {/* Radial vignette */}
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
          />
        </div>

        {/* ── Navbar ── */}
        <header
          className="absolute left-0 top-0 z-40 w-full"
          style={{
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            background:     scrolled ? 'rgba(0,0,0,0.55)' : 'transparent',
            borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
            transition:     'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
          }}
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-6">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="animate-slide-left select-none font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
            >
              VANGUARD
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`nav-link text-xs uppercase tracking-widest transition-colors duration-200 ${
                    activeSection === link.toLowerCase() ? 'text-white active' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              id="nav-cta"
              href="#inquire"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group animate-fade-in-delay hidden items-center gap-2 border border-white/25 px-5 py-2.5 text-[11px] uppercase tracking-widest transition-all duration-300 hover:border-white/55 hover:bg-white/[0.07] md:flex btn-lift"
            >
              GET IN TOUCH
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>

            {/* Mobile hamburger */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex flex-col gap-[5px] p-2 md:hidden"
            >
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-4 self-end bg-white" />
            </button>
          </div>
        </header>

        {/* ── Hero content ── */}
        <main className="relative z-20 flex h-full flex-col justify-center px-6 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1440px]">

            {/* Tagline */}
            <div className="animate-fade-up mb-5 flex items-center gap-3 lg:mb-7">
              <Crown className="h-3.5 w-3.5 animate-pulse-slow text-gold" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                World-Class Digital Collective
              </span>
              <span className="hidden h-px w-12 animate-line-grow bg-white/20 sm:block" />
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-up-delay-1 flex flex-col font-podium leading-[0.88] tracking-tight text-white"
              style={{ fontSize: 'clamp(3rem, 9.5vw, 8rem)' }}
            >
              <span className="text-shimmer">Design.</span>
              <span>Disrupt.</span>
              <span>Conquer.</span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up-delay-2 mt-6 max-w-[22rem] text-sm leading-relaxed text-white/55 sm:text-base lg:mt-8">
              We build fierce brand identities
              <br className="hidden sm:block" />
              {' '}that don't just turn heads —{' '}
              <strong className="font-semibold text-white">they lead.</strong>
            </p>

            {/* Service pills */}
            <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap gap-2 lg:mt-7">
              {services.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="glass-card inline-flex cursor-default items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-widest text-white/55 transition-colors duration-200 hover:text-white/85"
                >
                  <Icon className="h-3 w-3 text-gold" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-5 lg:mt-10">
              {/* Primary */}
              <button
                id="see-work-btn"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-lift group flex items-center gap-2 bg-white px-6 py-3.5 text-[11px] uppercase tracking-widest text-black transition-colors duration-200 hover:bg-white/90 sm:px-8 sm:py-4 sm:text-xs"
              >
                SEE OUR WORK
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" />
              </button>

              {/* Secondary */}
              <button
                id="reel-btn"
                onClick={() => setReelOpen(true)}
                className="btn-lift group flex items-center gap-2 border border-white/20 px-6 py-3.5 text-[11px] uppercase tracking-widest text-white/65 transition-all duration-200 hover:border-white/50 hover:text-white sm:px-8 sm:py-4 sm:text-xs"
              >
                WATCH REEL
              </button>

              {/* Award badge */}
              <div className="ml-1 hidden items-center gap-2.5 sm:flex">
                <Award className="h-6 w-6 animate-pulse-slow text-gold" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/45">Top-Rated</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/45">Brand Studio</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="animate-fade-up-delay-4 mt-10 flex flex-wrap gap-x-8 gap-y-5 sm:mt-12 sm:gap-x-14 lg:mt-16 lg:gap-x-16">
              {stats.map(({ value, label }) => (
                <div key={label} className="group flex flex-col">
                  <span
                    className="animate-counter-glow font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-gold"
                    style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {value}
                  </span>
                  <span className="mt-0.5 text-[9px] uppercase tracking-widest text-white/38 sm:text-[11px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* ── Decorative corner elements ── */}

        {/* Bottom-right: studio info */}
        <div className="animate-fade-up-delay-5 absolute bottom-8 right-8 z-30 hidden flex-col items-end gap-1 lg:flex">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/28">Est. 2014</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/18">vanguard.studio</span>
        </div>

        {/* Bottom-center: scroll indicator */}
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-fade-up-delay-5 absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/28">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-scroll-bounce text-white/28" />
        </button>
      </section>

      {/* ════════════════════════════
          PROJECTS SECTION
      ════════════════════════════ */}
      <section id="projects" className="relative py-24 sm:py-32 bg-black border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-slow" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">SELECTED CASE STUDIES</span>
              </div>
              <h2 className="font-podium text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white">
                CREATIVE <span className="text-gold">IMPACTS</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              Explore our latest works demonstrating pure visual power, high performance interfaces, and disruptive strategic positioning.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className="group relative cursor-pointer flex flex-col justify-between overflow-hidden border border-white/5 bg-white/[0.01] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.02]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-neutral-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/45 mb-2">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-podium text-2xl uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-gold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/55 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/45 group-hover:text-white transition-colors duration-200">
                  <span>EXPLORE PROJECT</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════
          PROJECT MODAL (DETAIL VIEW)
      ════════════════════════════ */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 lg:p-10 animate-fade-in">
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="relative w-full max-w-7xl h-full bg-black/60 border border-white/10 rounded-lg overflow-hidden flex flex-col lg:flex-row">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-50 p-2.5 bg-black/55 backdrop-blur border border-white/10 rounded-full hover:border-white/30 text-white/60 hover:text-white transition-all duration-200"
              aria-label="Close project modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left side: Image and major title */}
            <div className="relative w-full lg:w-3/5 h-64 lg:h-full bg-neutral-900 overflow-hidden flex-shrink-0">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/50 to-transparent" />
              
              {/* Bottom Title overlay (desktop) */}
              <div className="absolute bottom-8 left-8 right-8 hidden lg:block">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/45 block mb-2">{selectedProject.category}</span>
                <h2 className="font-podium text-5xl uppercase tracking-wider text-white mb-2">{selectedProject.title}</h2>
                <p className="text-sm text-gold tracking-wider uppercase font-medium">{selectedProject.client}</p>
              </div>
            </div>

            {/* Right side: scrollable contents */}
            <div className="w-full lg:w-2/5 h-full overflow-y-auto p-6 sm:p-8 lg:p-12 flex flex-col justify-between custom-scrollbar">
              <div>
                {/* Category & Title for Mobile */}
                <div className="lg:hidden mb-6 mt-6">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 block mb-1">{selectedProject.category}</span>
                  <h2 className="font-podium text-3xl uppercase tracking-wider text-white">{selectedProject.title}</h2>
                  <p className="text-xs text-gold uppercase tracking-widest mt-1">{selectedProject.client}</p>
                </div>

                <div className="flex flex-col gap-8">
                  {/* Meta data list */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">CLIENT</span>
                      <span className="text-xs uppercase tracking-wider text-white/80 font-medium">{selectedProject.client}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-1">RELEASE</span>
                      <span className="text-xs uppercase tracking-wider text-white/80 font-medium">{selectedProject.year}</span>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <div>
                    <h4 className="text-sm font-semibold text-white/90 leading-snug mb-3">
                      {selectedProject.tagline}
                    </h4>
                    <p className="text-xs leading-relaxed text-white/60">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="flex flex-col gap-6">
                    <div className="border-l border-gold/45 pl-4">
                      <h5 className="text-[10px] uppercase tracking-widest text-gold mb-1.5 font-bold">THE CHALLENGE</h5>
                      <p className="text-xs leading-relaxed text-white/60">{selectedProject.challenge}</p>
                    </div>
                    <div className="border-l border-white/20 pl-4">
                      <h5 className="text-[10px] uppercase tracking-widest text-white/55 mb-1.5 font-bold">THE SOLUTION</h5>
                      <p className="text-xs leading-relaxed text-white/60">{selectedProject.solution}</p>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-white/55 mb-3 font-semibold">DELIVERABLES</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.deliverables.map((item, index) => (
                        <span key={index} className="text-[9px] uppercase tracking-widest bg-white/[0.04] border border-white/5 px-2.5 py-1 text-white/70">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' });
                    // Prefill service
                    const serviceMap: {[key: string]: string} = {
                      'aether': 'Brand Strategy',
                      'kinetic': 'Digital Identity',
                      'neural': 'Motion & 3D'
                    };
                    const serv = serviceMap[selectedProject.id];
                    if (serv && !selectedServices.includes(serv)) {
                      setSelectedServices([serv]);
                    }
                  }}
                  className="w-full sm:w-auto btn-lift group flex items-center justify-center gap-2 bg-white px-5 py-3 text-[10px] uppercase tracking-widest text-black transition-colors duration-200 hover:bg-white/90"
                >
                  START SIMILAR PROJECT
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto text-[10px] uppercase tracking-widest text-white/45 hover:text-white py-3 transition-colors duration-200"
                >
                  RETURN TO PORTFOLIO
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ════════════════════════════
          STUDIO / MANIFESTO SECTION
      ════════════════════════════ */}
      <section id="studio" className="relative py-24 sm:py-32 bg-black overflow-hidden border-t border-white/5">
        
        {/* Decorative background grid line */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-white/[0.02] hidden lg:block" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-white/[0.02] hidden lg:block" />

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
          
          {/* Two column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Info & Manifesto */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">WHO WE ARE</span>
              </div>
              <h2 className="font-podium text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white mb-8">
                THE STUDIO <span className="text-gold">VANGUARD</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-white/70 mb-6 max-w-lg">
                Established in 2014, VANGUARD is a collaborative collective of designers, artists, and engineers. We operate at the intersection of aesthetic brilliance and technical precision.
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-white/55 mb-10 max-w-lg">
                We believe that standard agency models are broken. Our lean, specialized structure allows us to move fast, disrupt categories, and create direct partnerships with visionary brands.
              </p>

              {/* Big decorative quote */}
              <div className="border-l border-gold pl-6 mt-4">
                <p className="font-podium text-2xl sm:text-3xl text-white/95 leading-tight tracking-wide">
                  "DISRUPTION IS NOT A RESULT. IT IS AN AESTHETIC PRINCIPLE."
                </p>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/45 mt-3 block">
                  — VANGUARD DIGITAL MANIFESTO
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Tabbed Manifesto */}
            <div className="glass-card border border-white/5 p-8 sm:p-10 flex flex-col justify-between">
              
              {/* Tab Selector */}
              <div className="flex border-b border-white/5 pb-4 gap-6">
                {(Object.keys(manifestoData) as Array<keyof typeof manifestoData>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveManifesto(key)}
                    className={`pb-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative ${
                      activeManifesto === key ? 'text-gold' : 'text-white/45 hover:text-white/80'
                    }`}
                  >
                    {key.toUpperCase()}
                    {activeManifesto === key && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold animate-fade-in" />
                    )}
                  </button>
                ))}
              </div>

              {/* Dynamic Panel with simple transition animation */}
              <div className="py-8 min-h-[180px] flex flex-col justify-center">
                <h4 className="font-podium text-2xl uppercase tracking-wide text-white mb-2">
                  {manifestoData[activeManifesto].title}
                </h4>
                <p className="text-xs text-gold uppercase tracking-wider mb-4 font-semibold">
                  {manifestoData[activeManifesto].subtitle}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                  {manifestoData[activeManifesto].text}
                </p>
              </div>

              {/* Award Badge inside manifesto */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <Sparkles className="h-6 w-6 text-gold animate-pulse-slow" />
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Pioneering experimental visual concepts since 2014.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════
          OFFERINGS SECTION
      ════════════════════════════ */}
      <section id="offerings" className="relative py-24 sm:py-32 bg-black border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">WHAT WE DO</span>
              </div>
              <h2 className="font-podium text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white">
                CORE <span className="text-gold">SERVICES</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              We provide tailored solutions at the highest visual standard. Click on a service to see our process, deliverables, and toolsets.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col border-t border-white/10">
            {offeringsData.map((offering) => {
              const Icon = offering.icon;
              const isExpanded = expandedOffering === offering.id;

              return (
                <div 
                  key={offering.id} 
                  className="border-b border-white/10 overflow-hidden transition-all duration-300"
                >
                  {/* Header Row */}
                  <button
                    onClick={() => setExpandedOffering(isExpanded ? null : offering.id)}
                    className="w-full flex items-center justify-between py-6 sm:py-8 text-left group hover:bg-white/[0.01] px-4 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className={`p-2.5 rounded-full border transition-all duration-300 ${
                        isExpanded ? 'bg-gold border-gold text-black' : 'bg-transparent border-white/10 text-white/60 group-hover:text-white group-hover:border-white/20'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className={`font-podium text-xl sm:text-2xl uppercase tracking-wider transition-colors duration-200 ${
                          isExpanded ? 'text-gold' : 'text-white group-hover:text-gold'
                        }`}>
                          {offering.title}
                        </h3>
                        <p className="text-xs text-white/40 mt-1 line-clamp-1">
                          {offering.short}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-[9px] uppercase tracking-widest text-white/30">
                        {isExpanded ? 'COLLAPSE' : 'EXPAND'}
                      </span>
                      <ChevronRight className={`h-5 w-5 text-white/40 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90 text-gold' : 'group-hover:translate-x-0.5'
                      }`} />
                    </div>
                  </button>

                  {/* Expanded Content Drawer */}
                  <div 
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isExpanded ? '600px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="pb-8 px-4 sm:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/[0.03]">
                      
                      {/* Left: Process Steps */}
                      <div className="lg:col-span-6 flex flex-col gap-5">
                        <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold">OUR METHODOLOGY</h4>
                        <div className="flex flex-col gap-4">
                          {offering.process.map((step, idx) => (
                            <div key={idx} className="flex gap-4">
                              <span className="text-xs font-semibold text-white/30">{`0${idx + 1}`}</span>
                              <div>
                                <h5 className="text-xs font-bold text-white/95">{step.name}</h5>
                                <p className="text-xs text-white/50 mt-0.5 leading-relaxed">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Middle: Deliverables */}
                      <div className="lg:col-span-3 flex flex-col gap-4">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold">DELIVERABLES</h4>
                        <ul className="flex flex-col gap-2">
                          {offering.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-white/70">
                              <CheckCircle2 className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Tools used */}
                      <div className="lg:col-span-3 flex flex-col gap-4">
                        <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold">CORE TOOLSET</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {offering.tools.map((tool, idx) => (
                            <span key={idx} className="text-[9px] uppercase tracking-widest bg-white/[0.03] border border-white/5 px-2.5 py-1 text-white/60">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════════════════════════════
          INQUIRE / CONTACT SECTION
      ════════════════════════════ */}
      <section id="inquire" className="relative py-24 sm:py-32 bg-black border-t border-white/5">
        
        {/* Subtle background glow */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-slow" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">CONNECT WITH US</span>
              </div>
              <h2 className="font-podium text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-white mb-6">
                START A <span className="text-gold">PROJECT</span>
              </h2>
              <p className="text-sm leading-relaxed text-white/60 mb-8 max-w-md">
                Ready to build a brand identity that dominates? Fill out our inquiry form or send us a direct email. We typically respond within 24 hours.
              </p>

              <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-full text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/30 block">DIRECT INQUIRIES</span>
                    <a href="mailto:hello@vanguard.studio" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors duration-200">
                      hello@vanguard.studio
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-full text-gold">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/30 block">GENERAL CHAT</span>
                    <a href="tel:+48500200300" className="text-xs uppercase tracking-wider text-white hover:text-gold transition-colors duration-200">
                      +48 500 200 300
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form Panel */}
            <div className="lg:col-span-7">
              <div className="glass-card border border-white/5 p-8 sm:p-10 relative overflow-hidden">
                
                {isSuccess ? (
                  /* Form Success State */
                  <div className="flex flex-col items-center text-center py-12 animate-scale-in">
                    <div className="h-16 w-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center text-gold mb-6 animate-pulse-slow">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <h3 className="font-podium text-3xl uppercase tracking-wider text-white mb-3">INQUIRY RECEIVED</h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
                      Thank you for reaching out. A partner from VANGUARD will review your requirements and follow up within 24 hours.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-[10px] uppercase tracking-widest text-gold hover:text-white transition-colors duration-200 py-2"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  /* Standard Form State */
                  <form onSubmit={handleInquirySubmit} className="flex flex-col gap-6">
                    
                    {/* Service Multiselect Pills */}
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-white/45 block mb-3 font-semibold">SELECT SERVICES INTERESTED IN</span>
                      <div className="flex flex-wrap gap-2">
                        {['Brand Strategy', 'Digital Identity', 'Motion & 3D', 'Creative Direction'].map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => toggleService(service)}
                              className={`text-[9px] uppercase tracking-wider px-3.5 py-2 transition-all duration-200 border ${
                                isSelected 
                                  ? 'bg-gold border-gold text-black font-semibold' 
                                  : 'bg-transparent border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Interactive Budget Range Slider */}
                    <div>
                      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest mb-3">
                        <span className="text-white/45 font-semibold">ESTIMATED BUDGET</span>
                        <span className="text-gold font-bold text-xs">
                          {budget === 100000 ? '$100,000+' : `$${budget.toLocaleString()}`}
                        </span>
                      </div>
                      <input 
                        type="range" 
                        min="5000" 
                        max="100000" 
                        step="5000" 
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full modern-range cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #C8A96E 0%, #C8A96E ${((budget - 5000) / 95000) * 100}%, rgba(255, 255, 255, 0.1) ${((budget - 5000) / 95000) * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                        }}
                      />
                      <div className="flex justify-between items-center text-[8px] text-white/30 uppercase mt-1.5">
                        <span>$5K</span>
                        <span>$50K</span>
                        <span>$100K+</span>
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label className="text-[9px] uppercase tracking-widest text-white/45 mb-1.5 font-semibold">YOUR NAME</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g. Alexander Cole"
                          className="bg-white/[0.02] border border-white/10 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[9px] uppercase tracking-widest text-white/45 mb-1.5 font-semibold">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. alex@company.com"
                          className="bg-white/[0.02] border border-white/10 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[9px] uppercase tracking-widest text-white/45 mb-1.5 font-semibold">PROJECT DESCRIPTION</label>
                      <textarea 
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Briefly describe your project, timeline, and goals..."
                        className="bg-white/[0.02] border border-white/10 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-lift group flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-black py-4 text-[10px] uppercase tracking-widest font-bold transition-all duration-200 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-3.5 w-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          SUBMITTING INQUIRY...
                        </>
                      ) : (
                        <>
                          SEND INQUIRY
                          <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════
          FOOTER SECTION
      ════════════════════════════ */}
      <footer className="relative bg-black pt-20 pb-10 border-t border-white/5 overflow-hidden">
        
        {/* Subtle grid accent */}
        <hr className="hr-gradient mb-16" />

        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo and Copyright */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-podium text-3xl font-bold uppercase tracking-wider text-white block mb-4">VANGUARD</span>
              <p className="text-xs text-white/40 leading-relaxed max-w-xs mb-6">
                Designing world-class brand identities and interfaces that lead. We challenge conventions and redefine digital space.
              </p>
              {/* GitHub Follow Button */}
              <div className="mb-6 h-[28px] overflow-hidden">
                <a 
                  className="github-button" 
                  href="https://github.com/CryptGodSon" 
                  data-color-scheme="no-preference: light; light: light; dark: dark;" 
                  data-size="large" 
                  aria-label="Follow @CryptGodSon on GitHub"
                >
                  Follow @CryptGodSon
                </a>
              </div>
            </div>
            <p className="text-[10px] tracking-wider text-white/25 mt-8 md:mt-0 uppercase">
              © {new Date().getFullYear()} VANGUARD. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h5 className="text-[10px] uppercase tracking-widest text-white/45 mb-6 font-bold">NAVIGATION</h5>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h5 className="text-[10px] uppercase tracking-widest text-white/45 mb-6 font-bold">STUDIO SOCIALS</h5>
            <ul className="flex flex-col gap-3">
              {['Behance', 'Dribbble', 'Instagram', 'Twitter', 'LinkedIn'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="md:col-span-3">
            <h5 className="text-[10px] uppercase tracking-widest text-white/45 mb-6 font-bold">NEWSLETTER</h5>
            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Subscribe to get design insights and curated project releases. No spam.
            </p>

            {newsletterSuccess ? (
              <div className="text-[10px] uppercase tracking-widest text-gold bg-white/[0.02] border border-white/5 p-3 animate-fade-in">
                SUBSCRIBED SUCCESSFULLY!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  required
                  placeholder="email@address.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/[0.02] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold w-full"
                />
                <button 
                  type="submit" 
                  className="bg-white hover:bg-white/90 text-black px-4 py-2.5 text-[10px] uppercase tracking-widest font-bold btn-lift flex items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Back to top row */}
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 flex items-center justify-between border-t border-white/5 pt-8">
          <div className="flex gap-4 text-[9px] uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
          </div>
          
          {showScrollTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 border border-white/10 rounded-full hover:border-gold text-white/60 hover:text-gold transition-all duration-300 animate-fade-in flex items-center gap-1.5 text-[9px] uppercase tracking-widest"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          )}
        </div>
      </footer>

      {/* ════════════════════════════
          CINEMATIC REEL POPUP
      ════════════════════════════ */}
      {reelOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/98 p-4 sm:p-8 animate-fade-in">
          <div className="relative w-full max-w-5xl aspect-[16/9] bg-neutral-950 border border-white/10 rounded-lg overflow-hidden shadow-2xl">
            
            {/* Mute/Unmute Button */}
            <button 
              onClick={() => setReelMuted(!reelMuted)}
              className="absolute right-16 top-4 z-50 p-2.5 bg-black/75 backdrop-blur border border-white/10 rounded-full hover:border-white/30 text-white/60 hover:text-white transition-all duration-200"
              aria-label={reelMuted ? "Unmute showreel" : "Mute showreel"}
            >
              {reelMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>

            {/* Close Button */}
            <button 
              onClick={() => setReelOpen(false)}
              className="absolute right-4 top-4 z-50 p-2.5 bg-black/75 backdrop-blur border border-white/10 rounded-full hover:border-white/30 text-white/60 hover:text-white transition-all duration-200"
              aria-label="Close cinematic reel"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video element */}
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
              autoPlay
              controls
              muted={reelMuted}
              className="w-full h-full object-cover"
            />

            {/* Cinematic Overlay Text */}
            <div className="absolute bottom-6 left-6 pointer-events-none hidden sm:block bg-black/40 px-3 py-1.5 backdrop-blur-sm border border-white/5">
              <span className="font-podium text-xs uppercase tracking-widest text-gold font-semibold block">VANGUARD SHOWREEL 2026</span>
              <span className="text-[8px] uppercase tracking-widest text-white/45">VOLUME I / DISRUPTION</span>
            </div>

          </div>
        </div>
      )}

      {/* ════════════════════════════
          MOBILE MENU OVERLAY
      ════════════════════════════ */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black transition-all duration-500 ease-out ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Menu header */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
            VANGUARD
          </span>
          <button
            id="close-menu-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-white/60 transition-colors duration-200 hover:text-white"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* Divider */}
        <div className="relative z-10 mx-6 sm:mx-10">
          <hr className="hr-gradient" />
        </div>

        {/* Menu links */}
        <div className="relative z-10 flex flex-1 flex-col items-start justify-center gap-0 px-8 sm:px-14">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`group flex items-center gap-3 py-3 font-podium text-5xl uppercase transition-colors duration-200 sm:text-6xl ${
                activeSection === link.toLowerCase() ? 'text-gold' : 'text-white/75 hover:text-white'
              }`}
              style={{
                transitionDelay: `${i * 65 + 70}ms`,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-18px)',
                opacity:   menuOpen ? 1 : 0,
                transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease, color 0.2s ease',
              }}
            >
              <ArrowUpRight
                className={`h-5 w-5 -translate-x-2 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 ${
                  activeSection === link.toLowerCase() ? 'opacity-100 translate-x-0 text-gold' : 'opacity-0 text-white/50'
                }`}
              />
              {link}
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="relative z-10 px-8 pb-12 sm:px-14"
          style={{
            transitionDelay: `${navLinks.length * 65 + 100}ms`,
            transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
            opacity:   menuOpen ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease',
          }}
        >
          <hr className="hr-gradient mb-8" />
          <a
            href="#inquire"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-lift inline-flex items-center gap-2 border border-white/25 px-8 py-4 text-xs uppercase tracking-widest transition-all duration-200 hover:border-white/55 hover:bg-white/[0.07]"
          >
            GET IN TOUCH
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}