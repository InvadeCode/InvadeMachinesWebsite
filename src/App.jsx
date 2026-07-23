import React, { useState, useEffect } from 'react';
import { 
  Microscope, Camera, ScanLine, Eye, Aperture, Cpu, Database, ArrowRight, 
  MapPin, Menu, X, Globe2, Activity, ChevronDown, Layers, Network, ShieldCheck, 
  Zap, Focus, MonitorPlay, Binary, Beaker, TestTube2, Settings, Linkedin, Mail, 
  Phone, Building, FileText, ChevronRight, Briefcase, Search, Lightbulb
} from 'lucide-react';
import droneHero from './images/drone_technology_hero.png';
import automotiveHero from './images/automotive_hero.png';
import greenEnergyHero from './images/green_energy_hero.png';
import machineVisionSolution from './images/machine_vision_solution.png';
import microscopySolution from './images/microscopy_solution.png';
import digitalImagingSolution from './images/digital_imaging_solution.png';
import newMicroscopeImage from './images/New Microscope Image.jpg (1).jpeg';

// ---------------------------------------------------------
// TITLE CASE CONVERSION UTILITIES & COMPONENTS
// ---------------------------------------------------------
const ACRONYM_MAP = {
  it: 'IT',
  fmcg: 'FMCG',
  spm: 'SPM',
  spms: 'SPMs',
  api: 'API',
  apis: 'APIs',
  cfr: 'CFR',
  rtk: 'RTK',
  gis: 'GIS',
  qc: 'QC',
  iit: 'IIT',
  iits: 'IITs',
  ocr: 'OCR',
  ocv: 'OCV',
  plc: 'PLC',
  scada: 'SCADA',
  cmm: 'CMM',
  drv: 'DRV',
  tvm: 'TVM',
  uav: 'UAV',
  ev: 'EV',
  pv: 'PV',
  nir: 'NIR',
  pcb: 'PCB',
  ivf: 'IVF',
  icsi: 'ICSI',
  imsi: 'IMSI',
  pol: 'POL',
  led: 'LED',
  fat: 'FAT',
  sat: 'SAT',
  faq: 'FAQ',
  faqs: 'FAQs',
  cta: 'CTA',
  hq: 'HQ',
  mrb: 'MRB'
};

const MINOR_WORDS = new Set([
  'with', 'that', 'for', 'and', 'a', 'an', 'the', 'in', 'on', 'at', 
  'by', 'of', 'to', 'but', 'or', 'from', 'as', 'into', 'until', 'through'
]);

const toTitleCase = (text) => {
  if (typeof text !== 'string') return text;
  
  // Split by whitespace to track word positions
  const words = text.split(/\s+/);
  
  return words
    .map((word, index) => {
      if (!word) return '';
      return word.replace(/\b[a-zA-Z']+\b/g, (match) => {
        const lowerMatch = match.toLowerCase();
        
        // 1. Check acronyms
        if (Object.prototype.hasOwnProperty.call(ACRONYM_MAP, lowerMatch)) {
          return ACRONYM_MAP[lowerMatch];
        }
        
        // 2. Check minor words
        if (MINOR_WORDS.has(lowerMatch)) {
          // Capitalize if it's the first word of the heading
          if (index === 0) {
            return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
          }
          return lowerMatch;
        }
        
        // 3. Default Capitalization
        return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
      });
    })
    .join(' ');
};

const titleCaseChildren = (children) => {
  if (children === undefined || children === null) return children;
  return React.Children.map(children, child => {
    if (typeof child === 'string') {
      return toTitleCase(child);
    }
    if (React.isValidElement(child)) {
      if (child.props && child.props.children) {
        return React.cloneElement(child, {
          children: titleCaseChildren(child.props.children)
        });
      }
    }
    return child;
  });
};

function H1({ className = '', children, ...props }) {
  const cleanedClassName = className.replace(/\buppercase\b/g, '');
  return <h1 className={cleanedClassName} {...props}>{titleCaseChildren(children)}</h1>;
}

function H2({ className = '', children, ...props }) {
  const cleanedClassName = className.replace(/\buppercase\b/g, '');
  return <h2 className={cleanedClassName} {...props}>{titleCaseChildren(children)}</h2>;
}

function H3({ className = '', children, ...props }) {
  const cleanedClassName = className.replace(/\buppercase\b/g, '');
  return <h3 className={cleanedClassName} {...props}>{titleCaseChildren(children)}</h3>;
}

function H4({ className = '', children, ...props }) {
  const cleanedClassName = className.replace(/\buppercase\b/g, '');
  return <h4 className={cleanedClassName} {...props}>{titleCaseChildren(children)}</h4>;
}

function H5({ className = '', children, ...props }) {
  const cleanedClassName = className.replace(/\buppercase\b/g, '');
  return <h5 className={cleanedClassName} {...props}>{titleCaseChildren(children)}</h5>;
}

function H6({ className = '', children, ...props }) {
  const cleanedClassName = className.replace(/\buppercase\b/g, '');
  return <h6 className={cleanedClassName} {...props}>{titleCaseChildren(children)}</h6>;
}


// ---------------------------------------------------------
// IMAGE DICTIONARY & ASSETS
// ---------------------------------------------------------
const IMAGES = {
  heroVideo: "https://video.wixstatic.com/video/11062b_a5527ec5696c4cc7b9605cc988e4004c/1080p/mp4/file.mp4",

  // Every page hero uses a different, context-specific image.
  homeHero: "https://static.wixstatic.com/media/548938_49e2b05b916248bea9895ea89d56837f~mv2.jpg",
  aboutHero: "https://static.wixstatic.com/media/548938_e85419085add4be59c0ed3c3baf78784~mv2.jpg",
  teamHero: "https://static.wixstatic.com/media/548938_bdbffdd6c4b04301bf207286e020bcf6~mv2.jpg",
  solutionsHero: "https://static.wixstatic.com/media/548938_0d41210751cb413885f99d2fde19191a~mv2.jpg",
  automationHero: "https://static.wixstatic.com/media/548938_73cf215be7264caa8f9069f53e278c5f~mv2.jpg",
  microscopyHero: "https://static.wixstatic.com/media/548938_4bb00b6d0cc34170b0956cc0f8358c95~mv2.jpg",
  camerasHero: "https://static.wixstatic.com/media/548938_092c516b085640269dbfbe71cda92491~mv2.jpg",
  visionHero: "https://static.wixstatic.com/media/548938_1d39e2aeab0648629a70971207090a71~mv2.jpg",
  applicationsHero: "https://static.wixstatic.com/media/548938_58f171a3c1a7458daa471963ea2513f2~mv2.jpg",
  clientsHero: "https://static.wixstatic.com/media/548938_ad0858b9387e44eda6c0bcb709b2ff76~mv2.jpg",
  investorsHero: "https://static.wixstatic.com/media/548938_8e0a4bb1c49144d4ad06f3f3bc87e3b5~mv2.jpg",
  contactHero: "https://static.wixstatic.com/media/548938_a3f36bce904f43b6bd8bd8dbbd86ae34~mv2.jpg",
  droneHero,
  automotiveHero,
  greenEnergyHero,

  // Core editorial imagery.
  visionLeft: "https://unsplash.com/photos/V7BRdLkbzpY/download?force=true&w=1600",
  visionRight: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1400&q=84",
  microscopy: microscopySolution,
  digitalCameras: digitalImagingSolution,
  machineVision: machineVisionSolution,
  lifeSciences: "https://static.wixstatic.com/media/548938_ee986b9cde8a444e965b360d0e32cf9f~mv2.jpg",
  manufacturing: "https://static.wixstatic.com/media/548938_5ae87aa42ed345bb99715e7d2333b3f7~mv2.jpg",
  inspectionLabs: "https://static.wixstatic.com/media/548938_706933092db14957ba5114583086680f~mv2.jpg",
  founder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=84",
  integration: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1800&q=84",
  robotics: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=84",
  agriculture: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=84",
  engineeringTeam: "https://unsplash.com/photos/SPO0ST4nVbY/download?force=true&w=1800",
  precisionParts: "https://images.unsplash.com/photo-1565439396-0b62a1dd3c04?auto=format&fit=crop&w=1800&q=84",

  // Unique deep-dive images for every route.
  homeDetail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=84",
  homeSecondary: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=1800&q=84",
  aboutDetail: "https://unsplash.com/photos/V7BRdLkbzpY/download?force=true&w=1800",
  aboutSecondary: "https://unsplash.com/photos/SPO0ST4nVbY/download?force=true&w=1800",
  solutionsDetail: "https://images.unsplash.com/photo-1581091870627-3c23d14e46c8?auto=format&fit=crop&w=1800&q=84",
  solutionsSecondary: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1800&q=84",
  automationDetail: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=84",
  automationSecondary: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=84",
  microscopyDetail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=84",
  microscopySecondary: "https://images.unsplash.com/photo-1582719478141-8a0c2eaeab1f?auto=format&fit=crop&w=1800&q=84",
  camerasDetail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=84",
  camerasSecondary: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1800&q=84",
  visionDetail: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1800&q=84",
  visionSecondary: "https://static.wixstatic.com/media/548938_69de316ace644d248d6f4e3369e838af~mv2.jpg",
  applicationsDetail: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1800&q=84",
  applicationsSecondary: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=1800&q=84",
  clientsDetail: "https://unsplash.com/photos/SPO0ST4nVbY/download?force=true&w=1800",
  clientsSecondary: "https://unsplash.com/photos/Pcd-BfyCgOA/download?force=true&w=1800",
  contactDetail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=84",
  contactSecondary: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=84",

  // Additional unique images used in individual editorial sections.
  manufacturingBackdrop: "https://static.wixstatic.com/media/548938_e70fc3c3361f4214acf5b6d4211f0d1c~mv2.jpg",
  ampouleInspection: "https://static.wixstatic.com/media/548938_9d23a25ac2ba4a42823874bd73fc1ca3~mv2.jpg",
  aboutFacility: "https://static.wixstatic.com/media/548938_8af18c6d944047a083bca8943f394118~mv2.jpg",
  aboutQuality: "https://static.wixstatic.com/media/548938_6acc6f879a364f0db5b78ba84b00be06~mv2.jpg",
  microscopyLab: newMicroscopeImage,
  digitalLabOne: "https://static.wixstatic.com/media/548938_dfee8ba89787438caab09ac156aa59d5~mv2.jpg",
  digitalLabTwo: "https://static.wixstatic.com/media/548938_78f28d500e7d4b95befefd2ec45fbb4f~mv2.jpg",
  cameraSensor: "https://static.wixstatic.com/media/548938_daf2c93817e64cacb0b07cd75624f1b1~mv2.jpg",
  clientFactory: "https://static.wixstatic.com/media/548938_f78cd8d0b31146fabd5233fbe6753fed~mv2.jpg",

  logo: "https://static.wixstatic.com/media/548938_f741fa19a02c41b985bae8393400c672~mv2.png"
};

const INDUSTRIAL_SYSTEMS = [
  { icon: Layers, title: 'Filter Analysis Systems', description: 'Integrated imaging and analysis platforms for industrial filters, contamination studies, particle evaluation, and quality documentation.' },
  { icon: Settings, title: 'Special Purpose Machines', description: 'Application-specific machines engineered around the required process, cycle time, controls, safety, and production environment.' },
  { icon: Search, title: 'Washer Inspection Machines', description: 'Automated inspection for presence, orientation, dimensions, surface defects, and sorting of washers and precision components.' },
  { icon: TestTube2, title: 'Syringe Inspection Machines', description: 'Vision-led inspection for syringe assembly, component presence, print, fill condition, defects, and reject handling.' },
  { icon: Beaker, title: 'Bottle Inspection Systems', description: 'Inline bottle inspection for cap, label, fill level, print, shape, contamination, and packaging integrity.' },
  { icon: FileText, title: 'Print Verification Machines', description: 'High-speed verification of artwork, labels, batch codes, serialization, positioning, and print quality.' },
  { icon: Binary, title: 'OCR & OCV Systems', description: 'Optical character recognition and verification for readable, correct, traceable codes across production lines.' },
  { icon: Cpu, title: 'Robotic Pick-and-Place', description: 'Robot-assisted handling, orientation, transfer, sorting, and placement systems synchronized with machine vision.' },
  { icon: Briefcase, title: 'Packing & Sealing Machines', description: 'Purpose-built packing, sealing, handling, and line-integration solutions for repeatable production output.' },
  { icon: Zap, title: 'Automotive Part Inspection', description: 'Dimensional, surface, presence, assembly, and traceability inspection for automotive and precision-engineered components.' }
];

const ACTIVE_PROJECTS = [
  { icon: Activity, title: 'Coffee', description: 'Process and equipment concepts for handling, quality inspection, sorting, and production workflows.' },
  { icon: Beaker, title: 'Sparkling Water', description: 'Integrated production, filling, inspection, packing, and line-control requirements.' },
  { icon: Aperture, title: 'Olive Oil', description: 'Processing, quality-control, filling, packaging, and inspection solutions.' },
  { icon: Database, title: 'Silos', description: 'Material storage, handling, monitoring, and process-integration projects.' }
];

const CORE_CAPABILITIES = [
  'Industrial Automation',
  'Special Purpose Machines',
  'Machine Vision',
  'Inspection Systems',
  'Robotic Handling',
  'Packing & Sealing Systems',
  'Process Equipment & Projects',
  'Microscopy',
  'Digital Imaging',
  'Scientific & Industrial Research',
  'Agro Research',
  'Application-Specific Engineering'
];

const MICROSCOPY_APPLICATIONS = [
  'Heart stents and biomedical devices',
  'Industrial filters and contamination analysis',
  'Pharmaceutical APIs and formulations',
  'Petroleum and oil exploration',
  'Virology and life-science research',
  'Packaging material quality control',
  'Defence research and inspection',
  'Space and advanced research requirements',
  'Academic and institutional research, including IITs'
];

const AGRO_RESEARCH_APPLICATIONS = [
  'Grapes',
  'Citrus',
  'Sugarcane',
  'Crop and material inspection',
  'Crop protection, insecticides, and pesticides',
  'Cotton research',
  'Asbestos analysis'
];

// ---------------------------------------------------------
// REUSABLE HOOK FOR SCROLL ANIMATIONS
// ---------------------------------------------------------
function usePageScroll(currentPage) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    const frame = window.requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [currentPage]);
}

const IMAGE_FALLBACKS = [
  IMAGES.automationSecondary,
  IMAGES.microscopySecondary,
  IMAGES.camerasSecondary,
  IMAGES.visionSecondary,
  IMAGES.applicationsSecondary,
  IMAGES.contactSecondary
];

const handleImageError = (event) => {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === 'true') {
    image.style.opacity = '0';
    return;
  }

  image.dataset.fallbackApplied = 'true';
  image.onerror = handleImageError;

  const identity = image.alt || image.getAttribute('src') || 'invade-machines';
  const hash = Array.from(identity).reduce((total, character) => total + character.charCodeAt(0), 0);
  image.src = IMAGE_FALLBACKS[hash % IMAGE_FALLBACKS.length];
};

// ---------------------------------------------------------
// SHARED PAGE HERO
// ---------------------------------------------------------
function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  video,
  alt,
  actions,
  inlineAccent = false
}) {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoAllowed] = useState(() => {
    if (typeof window === 'undefined') return true;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const saveData = Boolean(navigator.connection?.saveData);
    return !reduceMotion && !saveData;
  });

  const playVideo = (event) => {
    setVideoReady(true);
    const playPromise = event.currentTarget.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // The poster remains visible when autoplay is blocked.
      });
    }
  };

  return (
    <section className="page-hero sticky top-0 isolate h-[100svh] min-h-[100svh] w-full overflow-hidden bg-neutral-50 text-emerald-950">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(0,0,0,0.02),transparent_30%)]" />
      <div className="hero-orb absolute -right-24 top-24 hidden h-[520px] w-[520px] rounded-full border border-emerald-950/10 opacity-60 sm:block" />
      <div className="absolute right-24 bottom-20 hidden h-32 w-32 rotate-12 rounded-3xl border border-amber-500/20 lg:block" />

      <img
        src={image}
        onError={handleImageError}
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45 saturate-110"
        alt=""
        aria-hidden="true"
      />

      {video && videoAllowed && !videoFailed && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={image}
          aria-label={alt}
          onCanPlay={playVideo}
          onLoadedData={playVideo}
          onPlaying={() => setVideoReady(true)}
          onLoadedMetadata={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center saturate-110 opacity-45 transition-opacity duration-700 ${videoReady ? 'opacity-45' : 'opacity-0'}`}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/90 via-white/55 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-neutral-50/50 via-transparent to-transparent" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_78%_42%,rgba(251,191,36,0.18),transparent_35%)] opacity-30" />

      <div className="hero-content-scroll relative z-10 flex h-full flex-col px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pb-24 md:pt-32 lg:px-[3%] lg:pb-20 xl:pb-24">
        <div className="hero-copy mt-auto mx-auto w-full site-shell max-w-[1440px] reveal-on-scroll visible">
          <p className="hero-eyebrow mb-4 text-[9px] font-bold uppercase tracking-[0.19em] text-amber-600 sm:tracking-[0.22em] md:mb-6 md:text-[11px] md:tracking-[0.24em]">
            {eyebrow}
          </p>
          <H1 className="hero-title mb-5 max-w-[1280px] font-light uppercase leading-[1.06] tracking-tighter text-emerald-950 md:mb-8">
            {title}
            {accent && (
              <>
                {inlineAccent ? ' ' : <br />}
                <span className="font-medium text-amber-600">{accent}</span>
              </>
            )}
          </H1>
          <div className="hero-description-wrap ml-0 max-w-4xl border-l-2 border-amber-500 pl-4 sm:ml-1 sm:pl-5 md:pl-6">
            <div className="hero-description text-[14px] font-light leading-relaxed text-emerald-900/80 md:text-[17px]">
              {description}
            </div>
          </div>
          {actions && <div className="hero-actions mt-6 md:mt-9">{actions}</div>}
        </div>
      </div>

      <ChevronDown size={28} className="page-hero-chevron absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 animate-bounce text-amber-600 sm:block md:bottom-7" aria-hidden="true" />
    </section>
  );
}


// ---------------------------------------------------------
// DEEP-DIVE CONTENT SYSTEM
// Nine additional, page-specific sections are rendered from
// structured content so every page remains visually consistent.
// ---------------------------------------------------------
const DETAIL_ICONS = [Settings, Eye, Cpu, Database, ShieldCheck, Network, Focus, Layers, Activity, Search];

const PAGE_DETAIL_DATA = {};

function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-4xl ${alignment}`}>
      <p className={`text-[10px] md:text-[11px] font-bold tracking-[0.24em] uppercase mb-4 ${light ? 'text-amber-400' : 'text-emerald-600'}`}>
        {eyebrow}
      </p>
      <H2 className={`text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.08] ${light ? 'text-white' : 'text-emerald-950'}`}>
        {title}
      </H2>
      {description && (
        <p className={`mt-6 text-[14px] md:text-[16px] font-light leading-relaxed ${light ? 'text-emerald-100/70' : 'text-black/60'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function PageDetailSections({ page, setPage }) {
  const data = PAGE_DETAIL_DATA[page];
  if (!data) return null;

  return (
    <div className="relative">
      {/* 1 — Detailed page framing */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-white relative overflow-hidden section-grid">
        <div className="site-shell max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-on-scroll" data-reveal="left">
            <SectionHeading eyebrow={data.eyebrow} title={data.title} description={data.intro} />
            <div className="mt-10 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-emerald-700">
              <span className="w-12 h-[1px] bg-amber-500" />
              Application-led engineering
            </div>
          </div>
          <div className="relative reveal-on-scroll" data-reveal="right">
            <div className="absolute -inset-5 rounded-[2rem] border border-emerald-200/70 rotate-2" />
            <div className="relative h-[280px] sm:h-[380px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl border border-black/5 image-zoom-card">
              <img loading="lazy" decoding="async" src={data.image} onError={handleImageError} alt={data.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                <p className="text-[10px] font-bold tracking-widest uppercase text-amber-300 mb-2">Engineering Principle</p>
                <p className="text-[14px] font-light leading-relaxed">Define the evidence, interfaces, risks, and ownership before freezing the hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Scope */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-neutral-50 relative overflow-hidden">
        <div className="site-shell max-w-[1440px] mx-auto">
          <div className="reveal-on-scroll" data-reveal="up">
            <SectionHeading eyebrow="Scope" title="WHAT THIS PAGE ACTUALLY COVERS." description="Clear categories help teams understand where the engagement starts and which engineering disciplines may need to work together." />
          </div>
          <div className="horizontal-card-scroll mt-14 stagger-grid">
            {data.scope.map(([title, description], index) => {
              const Icon = DETAIL_ICONS[index % DETAIL_ICONS.length];
              return (
                <article key={title} className="reveal-on-scroll stagger-item group bg-white rounded-2xl p-7 border border-black/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 group-hover:bg-amber-500 group-hover:text-emerald-950 group-hover:rotate-3 transition-all duration-500">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                  <H3 className="text-xl font-medium text-emerald-950 mt-7 mb-3">{title}</H3>
                  <p className="text-[13px] text-black/60 font-light leading-relaxed">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 — Pillars */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,.28),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(16,185,129,.35),transparent_30%)]" />
        <div className="absolute inset-0 animated-grid opacity-25" />
        <div className="site-shell max-w-[1440px] mx-auto relative z-10">
          <div className="reveal-on-scroll" data-reveal="scale">
            <SectionHeading eyebrow="Operating Pillars" title="THE SYSTEM IS ONLY AS STRONG AS ITS WEAKEST INTERFACE." description="These pillars keep the project balanced across technology, operation, verification, and lifecycle use." light />
          </div>
          <div className="horizontal-card-scroll mt-14">
            {data.pillars.map(([title, description], index) => {
              const Icon = DETAIL_ICONS[(index + 2) % DETAIL_ICONS.length];
              return (
                <div key={title} className="reveal-on-scroll group p-8 md:p-10 rounded-2xl bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white/[0.1] hover:border-amber-400/40 transition-all duration-500" style={{ transitionDelay: `${index * 90}ms` }}>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-3">0{index + 1}</p>
                      <H3 className="text-2xl font-light mb-3">{title}</H3>
                      <p className="text-[14px] text-emerald-100/65 font-light leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — Workflow */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-white relative overflow-hidden">
        <div className="site-shell max-w-[1440px] mx-auto">
          <div className="reveal-on-scroll" data-reveal="left">
            <SectionHeading eyebrow="Delivery Workflow" title="A GATED PATH FROM QUESTION TO COMMISSIONING." description="Each step reduces uncertainty before the next layer of cost, fabrication, integration, or site dependency is introduced." />
          </div>
          <div className="mt-10 sm:mt-12 lg:mt-16 relative">
            <div className="horizontal-card-scroll">
              {data.process.map(([title, description], index) => (
                <div key={title} className="reveal-on-scroll relative bg-neutral-50 rounded-2xl border border-black/5 p-7 hover:bg-white hover:shadow-xl transition-all duration-500" style={{ transitionDelay: `${index * 90}ms` }}>
                  <div className="relative z-10 w-14 h-14 rounded-full bg-emerald-950 text-amber-400 flex items-center justify-center text-sm font-bold tracking-widest shadow-lg ring-8 ring-white mb-7">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <H3 className="text-lg font-medium text-emerald-950 mb-3">{title}</H3>
                  <p className="text-[13px] text-black/60 font-light leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Engineering checks */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-emerald-50 relative overflow-hidden">
        <div className="site-shell max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-5 reveal-on-scroll" data-reveal="left">
            <div className="h-full min-h-[320px] sm:min-h-[430px] rounded-2xl overflow-hidden relative shadow-xl image-zoom-card">
              <img loading="lazy" decoding="async" src={data.secondaryImage} onError={handleImageError} alt="Application engineering detail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/15 to-transparent" />
              <div className="scan-beam" />
              <div className="absolute left-7 right-7 bottom-7 text-white">
                <p className="text-[10px] uppercase tracking-widest text-amber-400 font-bold mb-3">Design Review</p>
                <p className="text-2xl font-light leading-snug">Small interface decisions determine whether the final system is stable, usable, and maintainable.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 reveal-on-scroll" data-reveal="right">
            <SectionHeading eyebrow="Engineering Checks" title="DETAILS TO CLOSE BEFORE DESIGN FREEZE." description="These checks are not universal specifications; they are the questions that prevent avoidable gaps in the application." />
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {data.checks.map((item, index) => (
                <div key={item} className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                    <ChevronRight size={15} />
                  </div>
                  <p className="text-[13px] text-emerald-950/80 leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Architecture */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-950 to-teal-950" />
        <div className="site-shell max-w-[1440px] mx-auto relative z-10">
          <div className="reveal-on-scroll" data-reveal="scale">
            <SectionHeading eyebrow="System Architecture" title="FIVE CONNECTED LAYERS, ONE OPERATING RESULT." description="A practical architecture follows the flow from the physical world to a reliable decision, action, and record." light />
          </div>
          <div className="mt-10 sm:mt-12 lg:mt-16 horizontal-card-scroll">
            {data.stack.map(([title, description], index) => (
              <div key={title} className="reveal-on-scroll group relative p-7 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-emerald-900/40 hover:border-emerald-400/30 transition-all duration-500" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-5xl font-light text-white/10 group-hover:text-amber-400/30 transition-colors mb-8">{String(index + 1).padStart(2, '0')}</div>
                <H3 className="text-xl font-medium mb-3">{title}</H3>
                <p className="text-[13px] text-white/55 font-light leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Application fit */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-white relative overflow-hidden section-grid">
        <div className="site-shell max-w-[1440px] mx-auto">
          <div className="reveal-on-scroll" data-reveal="up">
            <SectionHeading eyebrow="Where It Fits" title="APPLICATIONS AND OPERATING ENVIRONMENTS." description="The same core engineering disciplines can support very different sectors, but the test method, materials, risks, and evidence must remain specific." align="center" />
          </div>
          <div className="horizontal-card-scroll mt-14">
            {data.sectors.map((sector, index) => {
              const Icon = DETAIL_ICONS[(index + 4) % DETAIL_ICONS.length];
              return (
                <div key={sector} className="reveal-on-scroll group min-h-[170px] p-7 rounded-2xl border border-black/5 bg-white/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between" style={{ transitionDelay: `${index * 70}ms` }}>
                  <div className="flex justify-between items-start">
                    <Icon size={24} className="text-emerald-600 group-hover:text-amber-500 group-hover:scale-110 transition-all" strokeWidth={1.6} />
                    <span className="text-[10px] tracking-widest text-black/25 font-bold">0{index + 1}</span>
                  </div>
                  <H3 className="text-lg font-medium text-emerald-950 mt-8">{sector}</H3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 — Deliverables + FAQs */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-neutral-50 relative overflow-hidden">
        <div className="site-shell max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal-on-scroll" data-reveal="left">
            <SectionHeading eyebrow="Project Outputs" title="WHAT A WELL-SCOPED ENGAGEMENT SHOULD PRODUCE." description="The exact pack depends on the project stage, but the team should leave each phase with clear decisions and usable evidence." />
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {data.outputs.map((item, index) => (
                <div key={item} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-black/5 shadow-sm">
                  <span className="w-9 h-9 rounded-lg bg-amber-500 text-emerald-950 flex items-center justify-center text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-[13px] font-medium text-emerald-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-on-scroll" data-reveal="right">
            <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-emerald-600 mb-4">Questions Teams Ask</p>
            <div className="space-y-3">
              {data.faqs.map(([question, answer], index) => (
                <details key={question} className="faq-card group bg-white rounded-xl border border-black/5 shadow-sm overflow-hidden" open={index === 0}>
                  <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-5 text-[14px] font-medium text-emerald-950">
                    {question}
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-open:rotate-90 transition-transform">
                      <ChevronRight size={15} />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-[13px] text-black/60 font-light leading-relaxed border-t border-black/5 pt-5">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9 — Page CTA */}
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh] bg-amber-500 text-emerald-950 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[70px] border-emerald-950/5 float-slow" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/15 blur-2xl" />
        <div className="max-w-[1100px] mx-auto text-center relative z-10 reveal-on-scroll" data-reveal="scale">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-5">Next Step</p>
          <H2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter uppercase leading-[1.08]">
            {data.ctaTitle}
          </H2>
          <p className="mt-7 max-w-3xl mx-auto text-[15px] md:text-[17px] text-emerald-950/75 leading-relaxed">
            {data.ctaText}
          </p>
          <button type="button" onClick={() => setPage(data.ctaRoute)} className="mt-10 inline-flex items-center gap-3 bg-emerald-950 text-white px-9 py-4 rounded-xl text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white hover:text-emerald-950 hover:-translate-y-1 transition-all shadow-xl">
            {data.ctaLabel} <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

function BoardGovernanceExpansion({ setPage }) {
  const principles = [
    ['Application Ownership', 'The board and executive leadership keep the discussion anchored to the real process, user, quality requirement, and business outcome.'],
    ['Cross-Functional Review', 'Commercial, application, mechanical, controls, vision, service, finance, and compliance inputs are aligned before key decisions.'],
    ['Evidence over Assumption', 'Trials, samples, calculations, drawings, test records, and acceptance results support major technical and strategic claims.'],
    ['Lifecycle Responsibility', 'Maintainability, documentation, governance, training, change control, and service remain visible beyond commissioning.']
  ];

  return (
    <div>
      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        <div className="site-shell max-w-[1440px] mx-auto relative z-10">
          <div className="reveal-on-scroll" data-reveal="scale">
            <SectionHeading eyebrow="Board Principles" title="DECISIONS THAT PROTECT THE APPLICATION." description="The board’s role is to keep commercial ambition, technical reality, delivery discipline, capital stewardship, and client responsibility aligned." light />
          </div>
          <div className="horizontal-card-scroll mt-14">
            {principles.map(([title, description], index) => (
              <div key={title} className="reveal-on-scroll p-8 rounded-2xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.1] transition-all" style={{ transitionDelay: `${index * 90}ms` }}>
                <p className="text-amber-400 text-[11px] font-bold tracking-widest mb-5">0{index + 1}</p>
                <H3 className="text-2xl font-light mb-3">{title}</H3>
                <p className="text-[14px] text-emerald-100/65 leading-relaxed font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[11vh] xl:py-[14vh] bg-white relative overflow-hidden section-grid">
        <div className="site-shell max-w-[1440px] mx-auto">
          <div className="reveal-on-scroll" data-reveal="left">
            <SectionHeading eyebrow="Governance Rhythm" title="REVIEWS AT THE POINTS WHERE DECISIONS MATTER." description="A visible review cadence helps projects surface risk before it becomes rework at fabrication, integration, commissioning, or investor reporting." />
          </div>
          <div className="horizontal-card-scroll mt-14">
            {[
              ['Scope Review', 'Requirement, samples, success criteria, responsibilities, and exclusions.'],
              ['Concept Review', 'Architecture, interfaces, risks, safety, cycle time, and feasibility evidence.'],
              ['Build Review', 'Drawings, controls, software, procurement, assembly, and test readiness.'],
              ['Acceptance Review', 'FAT, SAT, documentation, training, open points, and handover.']
            ].map(([title, description], index) => (
              <div key={title} className="reveal-on-scroll group p-7 bg-neutral-50 rounded-2xl border border-black/5 hover:bg-white hover:shadow-xl transition-all" style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="w-12 h-12 bg-emerald-950 text-amber-400 rounded-xl flex items-center justify-center mb-7 group-hover:rotate-6 transition-transform">
                  <FileText size={21} />
                </div>
                <H3 className="text-xl font-medium text-emerald-950 mb-3">{title}</H3>
                <p className="text-[13px] text-black/60 leading-relaxed font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-[3%] py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh] bg-amber-500 text-emerald-950 relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto text-center reveal-on-scroll" data-reveal="scale">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5">Strategic Access</p>
          <H2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[1.08]">COMPLEX PROJECTS NEED CLEAR OWNERSHIP.</H2>
          <p className="mt-7 max-w-3xl mx-auto text-[15px] text-emerald-950/75 leading-relaxed">
            Bring the right technical, commercial, financial, and governance stakeholders together early so the project can be scoped around evidence, interfaces, and accountable decisions.
          </p>
          <button type="button" onClick={() => setPage('contact')} className="mt-10 inline-flex items-center gap-3 bg-emerald-950 text-white px-9 py-4 rounded-xl text-[11px] font-bold tracking-widest uppercase hover:bg-white hover:text-emerald-950 transition-all shadow-xl">
            Start a Strategic Discussion <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------
// MAIN APP COMPONENT & ROUTER
// ---------------------------------------------------------
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setMobileMenuOpen(false);
  }, [currentPage]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    const createdViewportMeta = !viewportMeta;
    const previousViewportContent = viewportMeta?.getAttribute('content') || '';

    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }

    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');

    let themeMeta = document.querySelector('meta[name="theme-color"]');
    const createdThemeMeta = !themeMeta;
    const previousThemeColor = themeMeta?.getAttribute('content') || '';

    if (!themeMeta) {
      themeMeta = document.createElement('meta');
      themeMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeMeta);
    }

    themeMeta.setAttribute('content', '#022c22');

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --site-gutter: clamp(1rem, 3vw, 3.5rem);
        --safe-top: env(safe-area-inset-top, 0px);
        --safe-right: env(safe-area-inset-right, 0px);
        --safe-bottom: env(safe-area-inset-bottom, 0px);
        --safe-left: env(safe-area-inset-left, 0px);
      }
      *, *::before, *::after { box-sizing: border-box; }
      html {
        width: 100%;
        max-width: 100%;
        min-width: 320px;
        scroll-behavior: smooth;
        scroll-padding-top: 96px;
        overflow-x: clip;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }
      body {
        margin: 0;
        width: 100%;
        max-width: 100%;
        min-width: 320px;
        font-family: 'Poppins', sans-serif;
        background-color: #f8fafc;
        overflow-x: clip;
        overscroll-behavior-x: none;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      #root { width: 100%; min-height: 100%; overflow-x: clip; }
      img, video, canvas, svg { max-width: 100%; }
      img, video { display: block; }
      button, input, textarea, select { font: inherit; }
      button, [role="button"] { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
      a, button, input, textarea, select { outline-offset: 3px; }
      p, h1, h2, h3, h4 { overflow-wrap: break-word; }
      section { scroll-margin-top: 96px; }
      .site-shell { width: 100%; margin-inline: auto; }
      .site-main { position: relative; isolation: isolate; z-index: 0; }
      .site-nav { top: var(--safe-top); }
      .mobile-menu-overlay {
        padding-top: max(6rem, calc(var(--safe-top) + 4.5rem));
        padding-right: max(1rem, var(--safe-right));
        padding-bottom: max(2rem, var(--safe-bottom));
        padding-left: max(1rem, var(--safe-left));
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
      }
      .tracking-ultra { letter-spacing: 0.25em; }
      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-track { background: #0a0a0a; }
      ::-webkit-scrollbar-thumb { background: #10b981; border-radius: 4px; }
      
      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
      }
      .reveal-on-scroll[data-reveal="left"] { transform: translate3d(-56px, 0, 0); }
      .reveal-on-scroll[data-reveal="right"] { transform: translate3d(56px, 0, 0); }
      .reveal-on-scroll[data-reveal="scale"] { transform: translate3d(0, 24px, 0) scale(.96); }
      .reveal-on-scroll[data-reveal="left"].visible,
      .reveal-on-scroll[data-reveal="right"].visible,
      .reveal-on-scroll[data-reveal="scale"].visible {
        transform: translate3d(0, 0, 0) scale(1);
      }
      .section-grid {
        background-image:
          linear-gradient(rgba(6, 78, 59, .035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 78, 59, .035) 1px, transparent 1px);
        background-size: 48px 48px;
      }
      .animated-grid {
        background-image:
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
        background-size: 54px 54px;
        animation: gridDrift 18s linear infinite;
      }
      .image-zoom-card img { transition: transform 1.2s cubic-bezier(.22,1,.36,1); }
      .image-zoom-card:hover img { transform: scale(1.055); }
      .scan-beam {
        position: absolute;
        left: 0;
        right: 0;
        top: -18%;
        height: 18%;
        background: linear-gradient(to bottom, transparent, rgba(251,191,36,.38), transparent);
        animation: scanBeam 4.8s ease-in-out infinite;
        mix-blend-mode: screen;
        pointer-events: none;
      }
      .float-slow { animation: floatSlow 7s ease-in-out infinite; }
      .faq-card summary::-webkit-details-marker { display: none; }
      /* Shared sticky hero: subsequent page content scrolls over this 100vh panel. */
      .page-hero {
        position: sticky;
        top: 0;
        z-index: 0;
        min-height: 100vh;
        min-height: 100svh;
        height: 100vh;
        height: 100svh;
      }
      @supports (height: 100dvh) {
        .page-hero { min-height: 100dvh; height: 100dvh; }
      }
      .hero-content-scroll {
        min-height: 0;
        overflow: visible;
        overscroll-behavior-y: auto;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }
      .hero-content-scroll::-webkit-scrollbar { display: none; }
      .page-hero + main { position: relative; }
      .hero-copy {
        padding-right: clamp(0rem, 2vw, 2rem);
        padding-bottom: max(0rem, var(--safe-bottom));
      }
      .hero-title {
        max-width: 18ch;
        font-size: clamp(2.6rem, 5.5vw, 5rem);
        line-height: 1.06;
        text-wrap: balance;
      }
      .hero-description { max-width: 78ch; }
      .hero-actions > * { max-width: 100%; }
      .project-strip,
      .grid-4-cols,
      .horizontal-card-scroll {
        scrollbar-width: thin;
        scrollbar-color: rgba(251, 191, 36, .65) transparent;
      }
      .project-strip {
        scroll-snap-type: inline proximity;
        overscroll-behavior-inline: contain;
        -webkit-overflow-scrolling: touch;
        padding-bottom: .2rem;
      }
      .project-strip::-webkit-scrollbar { display: none; }
      .project-strip > * { scroll-snap-align: start; }
      .grid-4-cols,
      .horizontal-card-scroll {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, min(84vw, 370px));
        grid-template-columns: none;
        gap: 1.25rem;
        overflow-x: auto;
        overflow-y: visible;
        overscroll-behavior-inline: contain;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: inline mandatory;
        scroll-padding-inline: .15rem;
        padding: .25rem .15rem 1.35rem;
      }
      .grid-4-cols > *,
      .horizontal-card-scroll > * {
        min-width: 0;
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
      /* Reserve vertical space inside the scroll container for badges that sit
         above the cards. Horizontal overflow creates a clipping context, so
         negative top offsets need real padding inside that context. */
      .methodology-card-scroll {
        padding-top: 1.75rem;
      }
      @media (max-width: 479px) {
        .hero-content-scroll {
          padding-top: max(5.75rem, calc(var(--safe-top) + 5rem));
          padding-right: max(1rem, var(--safe-right));
          padding-bottom: max(4.25rem, calc(var(--safe-bottom) + 3.25rem));
          padding-left: max(1rem, var(--safe-left));
        }
        .hero-title {
          max-width: 100%;
          font-size: clamp(2.45rem, 11.5vw, 3.55rem);
          line-height: 1.06;
          letter-spacing: -.05em;
        }
        .hero-eyebrow { max-width: 34ch; line-height: 1.55; }
        .hero-description { font-size: 12.5px; line-height: 1.52; }
        .hero-description-wrap { max-width: 100%; }
        .hero-actions { width: 100%; }
        .hero-actions button, .hero-actions a { min-height: 46px; }
        .grid-4-cols,
        .horizontal-card-scroll {
          grid-auto-columns: calc(100vw - 2.25rem);
          gap: .9rem;
          margin-right: -1rem;
          padding-right: 1rem;
        }
        .site-main h2 { font-size: clamp(1.9rem, 9.2vw, 2.65rem) !important; line-height: 1.08 !important; }
        .site-main h3 { line-height: 1.25; }
        input, textarea, select { font-size: 16px !important; }
      }
      @media (min-width: 480px) and (max-width: 767px) {
        .hero-title { max-width: 17ch; font-size: clamp(3.25rem, 9.8vw, 4.8rem); }
        .grid-4-cols,
        .horizontal-card-scroll { grid-auto-columns: minmax(0, min(76vw, 360px)); }
      }
      @media (min-width: 768px) and (max-width: 1023px) {
        .hero-title { max-width: 18ch; font-size: clamp(4.25rem, 8.2vw, 6.25rem); }
        .grid-4-cols,
        .horizontal-card-scroll { grid-auto-columns: minmax(320px, 44vw); }
      }
      @media (min-width: 1024px) {
        .grid-4-cols {
          grid-auto-flow: row;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          overflow-x: visible;
          padding-bottom: 0.5rem;
        }
        .grid-4-cols > * {
          padding: 1.5rem !important;
        }
        .horizontal-card-scroll {
          grid-auto-columns: minmax(320px, 31vw);
        }
      }
      @media (min-width: 1600px) {
        .site-shell { max-width: 1560px !important; }
        .hero-title { font-size: clamp(4.2rem, 4.8vw, 5.5rem); }
      }
      @media (min-width: 1920px) {
        .site-shell { max-width: 1740px !important; }
        .hero-title { font-size: clamp(4.8rem, 4.5vw, 6rem); }
        .hero-description { font-size: 18px; }
      }
      @media (min-width: 2400px) {
        .site-shell { max-width: 1920px !important; }
      }
      @media (max-height: 760px) {
        .hero-content-scroll {
          overflow: visible;
          padding-top: max(5rem, calc(var(--safe-top) + 4.4rem));
          padding-bottom: max(2.25rem, calc(var(--safe-bottom) + 1.75rem));
        }
        .hero-title { font-size: clamp(2.6rem, 5.65vw, 4.9rem); }
        .hero-eyebrow { margin-bottom: .75rem; }
        .hero-description { font-size: 12.5px; line-height: 1.45; }
        .hero-actions { margin-top: 1rem; }
        .page-hero-chevron { display: none !important; }
      }
      @media (min-width: 600px) and (max-width: 1100px) and (orientation: landscape) and (max-height: 720px) {
        .hero-content-scroll {
          overflow: visible;
          padding-top: max(4.75rem, calc(var(--safe-top) + 4.25rem));
          padding-bottom: max(2rem, calc(var(--safe-bottom) + 1.5rem));
        }
        .hero-title { max-width: 17ch; font-size: clamp(3rem, 6.2vw, 4.5rem); }
        .hero-description { max-width: 66ch; font-size: 12px; line-height: 1.42; }
        .hero-actions { margin-top: .85rem; }
        .mobile-menu-overlay { justify-content: flex-start; gap: .8rem; padding-top: max(4.75rem, calc(var(--safe-top) + 4.25rem)); }
      }
      @media (pointer: coarse) {
        button, [role="button"] { min-height: 44px; }
      }
      @media (hover: none) {
        .image-zoom-card:hover img { transform: none; }
      }
      @keyframes scanBeam {
        0%, 12% { transform: translateY(0); opacity: 0; }
        25% { opacity: .9; }
        75% { opacity: .65; }
        88%, 100% { transform: translateY(680%); opacity: 0; }
      }
      @keyframes floatSlow {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(0,-18px,0) rotate(4deg); }
      }
      @keyframes gridDrift {
        from { background-position: 0 0, 0 0; }
        to { background-position: 54px 54px, 54px 54px; }
      }
      @media (max-width: 767px) {
        .reveal-on-scroll,
        .reveal-on-scroll[data-reveal="left"],
        .reveal-on-scroll[data-reveal="right"],
        .reveal-on-scroll[data-reveal="scale"] {
          transform: translate3d(0, 24px, 0);
        }
        .reveal-on-scroll.visible,
        .reveal-on-scroll[data-reveal].visible { transform: none; }
      }
      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
        }
        .reveal-on-scroll,
        .reveal-on-scroll[data-reveal] {
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      link.remove();
      style.remove();

      if (createdViewportMeta) viewportMeta.remove();
      else viewportMeta.setAttribute('content', previousViewportContent);

      if (createdThemeMeta) themeMeta.remove();
      else themeMeta.setAttribute('content', previousThemeColor);
    };
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    {
      label: 'About Us',
      id: 'about',
      parentOnly: true,
      dropdown: [
        { label: 'Our Vision', id: 'about' },
        { label: 'Board Members', id: 'board' },
        { label: 'Investor Relations', id: 'investors' }
      ]
    },
    {
      label: 'Solutions',
      id: 'products-overview',
      dropdown: [
        { label: 'All Solutions', id: 'products-overview' },
        { label: 'Industrial Automation & SPMs', id: 'industrial-automation', thumbnail: IMAGES.manufacturing },
        { label: 'Machine Vision & Inspection', id: 'machine-vision', thumbnail: IMAGES.machineVision },
        { label: 'Microscopy & Research', id: 'microscopy', thumbnail: IMAGES.microscopy },
        { label: 'Digital Imaging', id: 'cameras', thumbnail: IMAGES.digitalCameras }
      ]
    },
    {
      label: 'Applications',
      id: 'applications',
      parentOnly: true,
      dropdown: [
        { label: 'All Applications', id: 'applications' },
        { label: 'Drone Technology', id: 'drone-technology', thumbnail: IMAGES.droneHero },
        { label: 'Automotive', id: 'automotive', thumbnail: IMAGES.automotiveHero },
        { label: 'Green Energy', id: 'green-energy', thumbnail: IMAGES.greenEnergyHero }
      ]
    },
    { label: 'Clients', id: 'clients' },
    { label: 'Contact', id: 'contact' }
  ];

  const isActiveMenuItem = (item) =>
    currentPage === item.id || Boolean(item.dropdown?.some((subItem) => subItem.id === currentPage));

  return (
    <div className="min-h-screen w-full selection:bg-amber-500 selection:text-emerald-950 relative flex flex-col text-slate-900">
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay fixed inset-0 bg-emerald-950 z-[200] transition-transform duration-700 flex flex-col justify-start md:justify-center items-center gap-5 text-white overflow-y-auto px-4 py-24 sm:px-6 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button type="button" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)} className="fixed top-8 right-8 bg-white/10 p-2 rounded-xl hover:bg-amber-500 hover:text-emerald-950 transition-colors">
          <X size={24} />
        </button>
        {menuItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center w-full">
            {item.parentOnly ? (
              <div className={`text-xl font-light tracking-widest uppercase ${isActiveMenuItem(item) ? 'text-amber-400' : 'text-white'}`}>
                {item.label}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-xl font-light tracking-widest uppercase transition-colors ${currentPage === item.id ? 'text-amber-400' : 'hover:text-amber-400'}`}
              >
                {item.label}
              </button>
            )}
            {item.dropdown && (
              <div className="flex flex-col items-center gap-4 mt-4 w-full bg-emerald-900/50 py-4">
                {item.dropdown.map(sub => (
                  <button 
                    key={sub.label} 
                    onClick={() => {
                      setCurrentPage(sub.id);
                      setMobileMenuOpen(false);
                    }} 
                    className={`text-[13px] uppercase tracking-widest hover:text-amber-400 transition-colors text-emerald-100 ${
                      sub.thumbnail ? 'flex items-center gap-3 px-6 py-1.5' : ''
                    }`}
                  >
                    {sub.thumbnail && (
                      <img 
                        src={sub.thumbnail} 
                        onError={handleImageError}
                        className="w-8 h-8 object-cover rounded-lg border border-white/10 flex-shrink-0" 
                        alt="" 
                      />
                    )}
                    <span>{sub.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`site-nav fixed top-0 left-0 right-0 z-[100] transition-all duration-700 text-emerald-950 ${
        isScrolled 
        ? 'bg-white/80 backdrop-blur-2xl backdrop-saturate-150 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] py-3 mx-[2%] mt-4 rounded-xl px-2 sm:px-3 lg:px-[1%]' 
        : 'bg-transparent border-transparent py-4 rounded-none px-4 sm:px-6 lg:px-[3%]'
      }`}>
        <div className="site-shell max-w-[1440px] mx-auto flex justify-between items-center w-full">
          <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 cursor-pointer flex items-center h-[70px] md:h-[82px] drop-shadow-md hover:scale-105 transition-transform duration-300">
             <img loading="eager" decoding="async" src={IMAGES.logo} alt="Invade Machines Limited" className="h-full w-auto object-contain" />
          </button>
          
          {/* Main Menu Links */}
          <div className="hidden xl:flex items-center justify-center gap-8 text-[12px] font-semibold tracking-widest uppercase w-full px-4">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id || (item.dropdown && item.dropdown.some(sub => sub.id === currentPage));
              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    onClick={item.parentOnly ? undefined : () => setCurrentPage(item.id)}
                    aria-haspopup={item.dropdown ? 'menu' : undefined}
                    className={`flex items-center gap-2 py-4 drop-shadow-sm transition-colors ${
                      item.parentOnly ? 'cursor-default' : 'cursor-pointer'
                    } ${
                      isActive 
                        ? 'text-amber-600 font-bold' 
                        : 'text-emerald-950 hover:text-amber-600'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                    )}
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown size={14} strokeWidth={2} className="opacity-70" />}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-[100%] left-1/2 -translate-x-1/2 shadow-2xl rounded-xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden flex flex-col p-2 bg-white border border-emerald-100 ${
                      item.dropdown.some(sub => sub.thumbnail) ? 'w-80' : 'w-64'
                    }`}>
                      {item.dropdown.map(subItem => (
                        <button 
                          key={subItem.label} 
                          onClick={() => setCurrentPage(subItem.id)}
                          className={`text-left px-5 py-3.5 text-[11px] rounded-xl transition-colors tracking-widest uppercase font-semibold text-emerald-950 hover:bg-emerald-50 hover:text-amber-600 ${
                            subItem.thumbnail ? 'flex items-center gap-3.5 py-2.5 px-3' : ''
                          }`}
                        >
                          {subItem.thumbnail && (
                            <img 
                              src={subItem.thumbnail} 
                              onError={handleImageError}
                              className="w-10 h-10 object-cover rounded-lg border border-black/5 flex-shrink-0" 
                              alt="" 
                            />
                          )}
                          <span className="leading-snug">{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
 
          <div className="flex-shrink-0 flex items-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className={`hidden lg:flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-widest uppercase rounded-xl transition-all duration-500 ${
              isScrolled 
              ? 'bg-amber-500 text-emerald-950 hover:bg-emerald-950 hover:text-white shadow-xl shadow-amber-500/20' 
              : 'bg-amber-500 text-emerald-950 border border-transparent hover:bg-emerald-950 hover:text-white'
            }`}>
              GET IN TOUCH <ArrowRight size={14} />
            </button>
            <button 
              type="button" 
              aria-label="Open navigation" 
              aria-expanded={mobileMenuOpen} 
              className={`xl:hidden ml-auto rounded-xl p-2 transition-colors ${
                isScrolled ? 'text-emerald-950 hover:bg-black/5' : 'text-white hover:bg-white/10'
              }`} 
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Router Switch */}
      <div className="site-main flex-grow bg-neutral-50">
        {currentPage === 'home' && <HomeContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'about' && <AboutContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'board' && <BoardMembersContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'products-overview' && <ProductsOverviewContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'industrial-automation' && <IndustrialAutomationContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'microscopy' && <MicroscopyContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'cameras' && <CamerasContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'machine-vision' && <MachineVisionContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'applications' && <ApplicationsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'drone-technology' && <DroneTechnologyContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'automotive' && <AutomotiveContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'green-energy' && <GreenEnergyContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'clients' && <ClientsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'investors' && <InvestorsContent setPage={setCurrentPage} currentPage={currentPage} />}
        {currentPage === 'contact' && <ContactContent setPage={setCurrentPage} currentPage={currentPage} />}
      </div>

      {/* Global Footer */}
      <footer className="relative z-10 mt-auto border-t border-emerald-900 bg-emerald-950 px-4 sm:px-6 lg:px-[3%] pb-10 pt-20 text-left text-emerald-50">
        <div className="mx-auto grid w-full site-shell max-w-[1440px] grid-cols-1 items-start gap-12 md:grid-cols-2 xl:grid-cols-12">
          <div className="md:col-span-2 xl:col-span-4">
            <button type="button" onClick={() => setCurrentPage('home')} className="mb-7 flex h-[77px] items-center" aria-label="Go to the Invade Machines home page">
              <img loading="eager" decoding="async" src={IMAGES.logo} alt="Invade Machines Limited" className="h-full w-auto object-contain opacity-95" />
            </button>
            <p className="max-w-md text-[14px] font-light leading-7 text-emerald-100/65">
              Invade Machines Limited is a horizontal engineering company delivering machinery, automation, inspection, imaging, process systems, and research solutions across industrial and scientific applications.
            </p>
            <a href="mailto:info@invademachines.com" className="mt-7 inline-flex items-center gap-3 rounded-xl border border-emerald-800 px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-emerald-100 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-emerald-950">
              <Mail size={16} /> Email the team
            </a>
          </div>

          <div className="xl:col-span-2">
            <H4 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-amber-500">Solutions</H4>
            <ul className="space-y-4 text-[13px] font-light text-emerald-100/70">
              <li><button type="button" onClick={() => setCurrentPage('industrial-automation')} className="w-full text-left transition-colors hover:text-amber-400">Automation & SPMs</button></li>
              <li><button type="button" onClick={() => setCurrentPage('machine-vision')} className="w-full text-left transition-colors hover:text-amber-400">Machine Vision & Inspection</button></li>
              <li><button type="button" onClick={() => setCurrentPage('cameras')} className="w-full text-left transition-colors hover:text-amber-400">Digital Imaging</button></li>
              <li><button type="button" onClick={() => setCurrentPage('microscopy')} className="w-full text-left transition-colors hover:text-amber-400">Microscopy & Research</button></li>
            </ul>
          </div>

          <div className="xl:col-span-2">
            <H4 className="mb-6 text-[11px] font-bold uppercase tracking-widest text-amber-500">Company</H4>
            <ul className="space-y-4 text-[13px] font-light text-emerald-100/70">
              <li><button type="button" onClick={() => setCurrentPage('about')} className="w-full text-left transition-colors hover:text-amber-400">Our Vision</button></li>
              <li><button type="button" onClick={() => setCurrentPage('board')} className="w-full text-left transition-colors hover:text-amber-400">Board Members</button></li>
              <li><button type="button" onClick={() => setCurrentPage('investors')} className="w-full text-left transition-colors hover:text-amber-400">Investor Relations</button></li>
              <li><button type="button" onClick={() => setCurrentPage('applications')} className="w-full text-left transition-colors hover:text-amber-400">Industries & Applications</button></li>
              <li><button type="button" onClick={() => setCurrentPage('clients')} className="w-full text-left transition-colors hover:text-amber-400">Client Network</button></li>
              <li><button type="button" onClick={() => setCurrentPage('contact')} className="w-full text-left transition-colors hover:text-amber-400">Contact</button></li>
            </ul>
          </div>

          <div className="space-y-5 md:col-span-2 xl:col-span-4">
            <div className="flex items-start gap-4 rounded-xl border border-emerald-800/60 bg-emerald-900/30 p-6">
              <MapPin className="mt-1 shrink-0 text-amber-500" size={20} />
              <div className="min-w-0">
                <H4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">Corporate Headquarters</H4>
                <p className="text-[13px] font-light leading-6 text-emerald-100">
                  702, Solus Business Park<br />
                  Hiranandani Estate, Thane 400607<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-emerald-800/60 bg-emerald-900/30 p-6">
              <Mail className="mt-1 shrink-0 text-amber-500" size={20} />
              <div className="min-w-0">
                <H4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400">Project Enquiries</H4>
                <a href="mailto:info@invademachines.com" className="break-all text-[13px] font-light leading-6 text-emerald-100 transition-colors hover:text-amber-400">info@invademachines.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 sm:mt-12 lg:mt-16 flex site-shell max-w-[1440px] flex-col items-start justify-between gap-5 border-t border-emerald-900 pt-7 text-[10px] font-medium uppercase tracking-widest text-emerald-500 md:flex-row md:items-center">
          <p className="leading-relaxed">© {new Date().getFullYear()} Invade Machines Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <button type="button" className="transition-colors hover:text-amber-400">Privacy Policy</button>
            <button type="button" className="transition-colors hover:text-amber-400">Terms of Use</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------
// 1. HOME PAGE
// ---------------------------------------------------------
function HomeContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  
  return (
    <>
      {/* Removed bg-[#0a0a0a] from section to ensure video is the base layer */}
      <PageHero
        eyebrow="Microscope · Machines · Automation · Inspection · Imaging · Process Systems · Research"
        title="ENGINEERED SYSTEMS"
        accent="ACROSS INDUSTRIES."
        description={(
          <>
            <span className="block font-medium text-emerald-950">Current engineering projects include Coffee Processing, Sparkling Water, Olive Oil Processing, and Silo &amp; Storage Systems.</span>
            <span className="mt-2 block text-emerald-900/80">Invade Machines Limited is a horizontal engineering company that designs, integrates, and delivers application-specific machinery, automation, inspection, imaging, process systems, and research solutions across industrial and scientific environments.</span>
          </>
        )}
        image={IMAGES.homeHero}
        alt="Integrated industrial machinery, automation, and process engineering systems"
        actions={(
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <button onClick={() => setPage('products-overview')} className="w-full sm:w-auto bg-amber-500 text-emerald-950 px-9 py-4 text-[11px] font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-emerald-950 hover:text-white transition-all shadow-xl shadow-amber-500/20">
              Explore Portfolio
            </button>
            <button onClick={() => setPage('about')} className="group flex items-center justify-center gap-3 w-full sm:w-auto px-3 py-4 text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-950 hover:text-amber-600 transition-all">
              Our Vision
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        )}
      />

      <main className="relative z-10 bg-neutral-50 rounded-t-xl shadow-[0_-30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
        <section className="border-b border-amber-600/20 bg-amber-500 px-4 sm:px-6 lg:px-[3%] py-4 text-emerald-950" aria-label="Invade Machines capabilities">
          <div className="project-strip mx-auto flex site-shell max-w-[1440px] items-center gap-3 overflow-x-auto">
            <span className="shrink-0 text-[9px] font-black uppercase tracking-[0.22em]">Engineering scope</span>
            {CORE_CAPABILITIES.map((capability) => (
              <span key={capability} className="whitespace-nowrap rounded-lg border border-emerald-950/15 bg-white/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em]">
                {capability}
              </span>
            ))}
          </div>
        </section>
        
        {/* Core Competencies */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full flex flex-col justify-center bg-white relative z-10 overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-10 sm:mb-12 lg:mb-16 gap-8">
               <div className="lg:w-[55%]">
                  <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Precision Engineering</p>
                  <H2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-emerald-950 leading-[1.1] uppercase">
                    BUILT FOR COMPLEX <span className="font-medium text-emerald-700">PRODUCTION & RESEARCH.</span>
                  </H2>
               </div>
               <div className="lg:w-[45%] flex flex-col justify-end">
                 <p className="text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-4">
                   Modern operations need more than standalone equipment. We combine machines, controls, robotics, optics, cameras, software, and service into application-specific systems designed around real production and research requirements.
                 </p>
               </div>
            </div>

            <div className="horizontal-card-scroll site-shell max-w-[1440px] mx-auto">
              {[
                { icon: Settings, title: 'Automation & SPMs', desc: 'Application-specific machines engineered for process, cycle time, safety, controls, and production output.', route: 'industrial-automation' },
                { icon: ScanLine, title: 'Vision & Inspection', desc: 'Washer, syringe, bottle, print, OCR/OCV, dimensional, and automotive component inspection.', route: 'machine-vision' },
                { icon: Cpu, title: 'Robotics & Packaging', desc: 'Pick-and-place, sorting, packing, sealing, handling, and line-integration systems.', route: 'industrial-automation' },
                { icon: Microscope, title: 'Microscopy & Research', desc: 'Optical and digital systems for biomedical, industrial, energy, defence, space, academic, and agro research.', route: 'microscopy' }
              ].map((item, i) => (
                <div key={i} onClick={() => setPage(item.route)} role="button" tabIndex={0} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setPage(item.route); }} className="p-6 sm:p-8 bg-neutral-50 rounded-xl border border-black/5 hover:border-emerald-300 hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-2 flex flex-col h-full">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 border border-black/5 group-hover:bg-emerald-600 transition-colors shadow-sm text-emerald-600 group-hover:text-white flex-shrink-0">
                      <item.icon size={24} />
                  </div>
                  <H3 className="text-xl font-medium mb-3 text-emerald-950 group-hover:text-emerald-700 transition-colors">{item.title}</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed flex-grow">{item.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Partners */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] bg-emerald-950 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
           <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll text-center relative z-10">
              <p className="text-[11px] font-bold tracking-widest text-amber-500 uppercase mb-8">Integrated Technology Ecosystem</p>
              <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 text-white">
                 {['Precision Optics', 'Scientific Imaging', 'Industrial Cameras', 'Vision Software', 'Robotics', 'PLC & Motion', 'Process Equipment'].map((item) => (
                   <span key={item} className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-[12px] font-semibold tracking-widest uppercase hover:bg-white/10 hover:border-amber-400/40 transition-all cursor-default">
                     {item}
                   </span>
                 ))}
              </div>
           </div>
        </section>

        {/* Real Challenges -> Tech Solutions */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Application Areas</p>
              <H2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                REAL CHALLENGES.<br /><span className="font-medium text-emerald-700">PRECISE SOLUTIONS.</span>
              </H2>
            </div>

            <div className="grid-4-cols items-stretch">
              {[
                { icon: Settings, color: 'text-rose-500', bg: 'bg-rose-50', title: 'Industrial Automation & Process Machines', solution: 'Special purpose machines, robotic handling, packing, sealing, and production-line systems engineered around the application.', img: IMAGES.manufacturing, route: 'industrial-automation' },
                { icon: Binary, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Inspection, OCR/OCV & Traceability', solution: 'High-speed inspection for washers, syringes, bottles, labels, print, codes, dimensions, and automotive components.', img: IMAGES.machineVision, route: 'machine-vision' },
                { icon: Microscope, color: 'text-emerald-500', bg: 'bg-emerald-50', title: 'Research, Microscopy & Agro Science', solution: 'Solutions spanning biomedical devices, pharma APIs, oil exploration, virology, defence, space, institutional, and crop research.', img: IMAGES.inspectionLabs, route: 'applications' },
                { icon: Camera, color: 'text-amber-500', bg: 'bg-amber-50', title: 'Digital Imaging & Scientific Cameras', solution: 'High-performance cooled cameras, high-resolution sensors, sensor alignments, and custom spectroscopy camera systems.', img: IMAGES.digitalCameras, route: 'cameras' }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                  <div className="h-[200px] lg:h-[220px] sm:h-[260px] overflow-hidden relative flex-shrink-0">
                    <img loading="lazy" decoding="async" src={item.img} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-6 border border-black/5 flex-shrink-0`}>
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    <H3 className="text-xl font-medium tracking-tight mb-3 text-emerald-950 leading-snug">{item.title}</H3>
                    <p className="text-black/60 font-light text-[14px] leading-relaxed mb-6 flex-grow">{item.solution}</p>
                    <button onClick={() => setPage(item.route)} className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-emerald-600 hover:text-emerald-900 transition-colors w-fit">
                      Explore Sectors <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 1: IMPACT METRICS --- */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] bg-emerald-950 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900 rounded-xl blur-[150px] opacity-30 pointer-events-none"></div>
          <div className="site-shell max-w-[1440px] mx-auto w-full relative z-10 reveal-on-scroll">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center divide-x-0 md:divide-x divide-white/10">
              {[
                ['01', 'Application First', 'Technology follows the real process and acceptance need.'],
                ['02', 'Integrated Scope', 'Machines, controls, optics, software, and handling work together.'],
                ['03', 'Evidence Led', 'Trials and acceptance tests support performance decisions.'],
                ['04', 'Lifecycle Ready', 'Serviceability, documentation, and training are designed in.']
              ].map(([number, title, description]) => (
                <div key={title} className="flex flex-col items-center px-4">
                  <H3 className="text-5xl lg:text-7xl font-light text-amber-500 mb-4">{number}</H3>
                  <p className="text-[12px] font-bold tracking-widest uppercase text-emerald-300">{title}</p>
                  <p className="mt-3 text-[11px] text-emerald-100/50 font-light leading-relaxed max-w-[220px]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 2: METHODOLOGY --- */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh] bg-neutral-50 relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Our Methodology</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                FROM CONCEPT TO <span className="font-medium text-emerald-700">INTEGRATION.</span>
              </H2>
            </div>
            
            <div className="grid-4-cols methodology-card-scroll relative">
              
              {[
                { step: "01", icon: Lightbulb, title: "Discovery & Analysis", text: "We assess your production line speeds, lighting constraints, and precise defect criteria to formulate a bespoke visual architecture." },
                { step: "02", icon: Cpu, title: "Hardware Orchestration", text: "Selecting the exact lenses, high-speed cameras, sensor formats, and polarized lights required to capture perfect data points." },
                { step: "03", icon: Binary, title: "Software & Calibration", text: "Vision recipe programming, algorithm calibration, PLC logic synchronization, and testing reject mechanism triggers." },
                { step: "04", icon: ShieldCheck, title: "Deployment & Validation", text: "Site installation, documented validation support (IQ/OQ), operator training, and preventive-maintenance path setup." }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-black/5 rounded-xl p-6 sm:p-8 lg:p-10 relative z-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap bg-amber-500 text-emerald-950 text-[10px] leading-none tracking-[0.18em] font-black px-5 py-2 rounded-md shadow-md">STEP {item.step}</div>
                  <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-black/5">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <H3 className="text-xl font-medium mb-3 text-emerald-950">{item.title}</H3>
                  <p className="text-black/60 font-light text-[14px] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: TECHNICAL SUPPORT & SERVICING --- */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh] bg-white relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
              <div className="lg:w-1/2 w-full">
                <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Post-Installation Care</p>
                <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                  MAINTENANCE & <span className="font-medium text-emerald-700">VALIDATION.</span>
                </H2>
                <p className="text-black/60 font-light text-[15px] leading-relaxed mb-8">
                  Selling the equipment is only the beginning. In regulated sectors like pharmaceuticals and clinical research, regular calibration and documented validation are mandatory. We can structure preventive-maintenance and service support around calibration, cleaning, backups, wear items, and system health.
                </p>
                <ul className="space-y-4">
                  {[
                    "Preventive Maintenance & Deep Cleaning",
                    "Optical Calibration & Alignment",
                    "Software Updates & 21 CFR Part 11 Validation Support",
                    "On-call Emergency Technical Support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-emerald-950 font-medium text-[14px]">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-black/5 flex items-center justify-center flex-shrink-0">
                        <ChevronRight size={14} className="text-emerald-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full bg-emerald-950 rounded-xl p-6 sm:p-8 md:p-14 shadow-2xl relative border border-emerald-900 overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-xl blur-[80px] opacity-30"></div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-amber-500 border border-white/20">
                      <Settings size={28} />
                    </div>
                    <H3 className="text-2xl font-light text-white mb-4">Dedicated Service Hubs</H3>
                    <p className="text-emerald-100/70 font-light text-[14px] leading-relaxed mb-8">
                      Our factory-trained engineers are strategically located to provide rapid response times across major industrial corridors, ensuring your critical machines, inspection systems, and research equipment operate at peak efficiency year-round.
                    </p>
                    <button onClick={() => setPage('contact')} className="text-[11px] font-bold tracking-widest uppercase text-amber-400 hover:text-white transition-colors flex items-center gap-2 border-b border-amber-400 pb-1 w-fit">
                      Inquire About AMCs <ArrowRight size={14} />
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: TESTIMONIALS --- */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh] bg-neutral-50 relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Industry Voices</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                PROVEN IN <span className="font-medium text-emerald-700">THE FIELD.</span>
              </H2>
            </div>
            <div className="grid-4-cols">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-black/5 shadow-sm relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[15px] font-light leading-relaxed mb-8 relative z-10">
                  Production teams often need print verification that remains stable across artwork, batch variation, line motion, reflective packaging, and controlled reject handling. The correct design begins with real samples and agreed acceptance criteria.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-medium text-emerald-700">
                    SK
                  </div>
                  <div>
                    <H4 className="font-medium text-emerald-950">Production Challenge</H4>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">Print · Code · Traceability</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-black/5 shadow-sm relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[15px] font-light leading-relaxed mb-8 relative z-10">
                  Research teams need the optical method, sample preparation, objectives, illumination, camera, calibration, and reporting workflow to work as one repeatable method—not as disconnected equipment.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-medium text-emerald-700">
                    RJ
                  </div>
                  <div>
                    <H4 className="font-medium text-emerald-950">Research Challenge</H4>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">Materials · Imaging · Measurement</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-black/5 shadow-sm relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[15px] font-light leading-relaxed mb-8 relative z-10">
                  Automation systems need synchronized robotic controllers, programmable logic controllers (PLCs), stable component feed rates, and fail-safe safety barriers to operate continuously. A custom assembly or packaging machine succeeds only when standard components are selected for their real duty cycle.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-medium text-emerald-700">
                    AM
                  </div>
                  <div>
                    <H4 className="font-medium text-emerald-950">Automation Challenge</H4>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">Robotics · Controls · Machinery</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl border border-black/5 shadow-sm relative">
                <span className="absolute top-6 right-8 text-6xl text-emerald-50 font-serif leading-none">"</span>
                <p className="text-black/60 italic text-[15px] font-light leading-relaxed mb-8 relative z-10">
                  Scientific and cooled cameras require careful sensor alignment, low-noise electronics, precise pixel dimensions, and matching spectral illumination. A diagnostic or laboratory imaging setup works only when the lens field of view and sensor speed are engineered as one.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-medium text-emerald-700">
                    DI
                  </div>
                  <div>
                    <H4 className="font-medium text-emerald-950">Imaging Challenge</H4>
                    <p className="text-[11px] text-emerald-600 font-bold uppercase tracking-widest">Sensors · Lenses · Spectroscopy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: FEATURED CASE STUDY --- */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] bg-emerald-950 text-white relative overflow-hidden">
          <img loading="lazy" decoding="async" src={IMAGES.manufacturingBackdrop} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Manufacturing Background" />
          <div className="site-shell max-w-[1440px] mx-auto w-full relative z-10 reveal-on-scroll">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="md:w-1/2 p-6 sm:p-8 lg:p-10 lg:p-16 flex flex-col justify-center">
                <p className="text-amber-400 text-[11px] font-bold tracking-widest uppercase mb-4">Application Example</p>
                <H3 className="text-3xl lg:text-4xl font-light mb-6">Inline Bottle Container Inspection</H3>
                <p className="text-emerald-100/70 leading-relaxed mb-6 font-light text-[15px]">
                 Our inline inspection systems can examine bottles, jars, containers, caps, labels, fill levels, print quality, surface defects, and packaging integrity at production speed. Each system is engineered around the actual product, line speed, defect criteria, and operating environment. Cameras, lenses, lighting, triggering, reject mechanisms, recipe controls, and data capture are integrated into one reliable inspection workflow.
                </p>
                <p className="text-emerald-100/70 leading-relaxed mb-8 font-light text-[15px]">
                  Before final engineering, representative good, defective, borderline, and naturally varying samples are tested to establish the most dependable inspection method.
                </p>
                <button onClick={() => setPage('machine-vision')} className="text-amber-400 font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 hover:text-white transition-colors w-fit">
                  Explore Solutions <ArrowRight size={16} />
                </button>
              </div>
              <div className="md:w-1/2 h-[300px] md:h-auto relative border-l border-white/10">
                <img loading="lazy" decoding="async" src={IMAGES.ampouleInspection} onError={handleImageError} className="w-full h-full object-cover opacity-90" alt="Automated pharmaceutical inspection" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 6: CTA BANNER --- */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-[15vh] bg-amber-500 text-emerald-950 text-center relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <H2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter mb-6">
              READY TO ENGINEER <br /><span className="font-bold">YOUR NEXT SYSTEM?</span>
            </H2>
            <p className="text-emerald-900 font-medium text-[15px] max-w-2xl mx-auto mb-10">
              Move from disconnected equipment to an engineered system built around your process, inspection, handling, and quality goals.
            </p>
            <button onClick={() => setPage('contact')} className="bg-emerald-950 text-white px-10 py-4 text-[12px] font-bold tracking-widest uppercase rounded-xl hover:bg-white hover:text-emerald-950 transition-all shadow-xl hover:shadow-2xl">
              Talk to an Engineer
            </button>
          </div>
        </section>

      
        <PageDetailSections page="home" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 2. ABOUT US (OUR VISION)
// ---------------------------------------------------------
function AboutContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Our Vision"
        title={<span>ONE ENGINEERING<br />PARTNER.</span>}
        accent="MULTIPLE CAPABILITIES."
        description="Invade Machines Limited brings machinery, automation, inspection, imaging, process systems, and research solutions together around the requirements of each application."
        image={IMAGES.aboutHero}
        alt="Industrial engineering and integrated machinery"
      />

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* Section 1: Who We Are */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-24 items-center">
              <div className="lg:w-[55%]">
                <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-6">Who We Are</p>
                <H2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  SEEING IS <br /><span className="font-medium">BELIEVING.</span>
                </H2>
                <div className="space-y-6 text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed">
                  <p>
                    Headquartered in Thane, Invade Machines Limited combines application engineering, machine design, automation, vision, robotics, imaging, and research technologies to solve production and quality challenges across industries.
                  </p>
                  <p>
                    We do not stop at supplying equipment. We study the process, define the machine architecture, integrate controls and inspection, support validation requirements, and deliver a system that can operate reliably on the shop floor or inside the laboratory.
                  </p>
                  <p className="font-medium text-emerald-900 border-l-2 border-emerald-500 pl-4 bg-emerald-50 py-3 pr-4 rounded-r-xl border-t border-r border-b border-emerald-100">
                    Designed with service access, documentation, calibration, and technical support in mind for critical workflows.
                  </p>
                </div>
              </div>
              <div className="lg:w-[45%] w-full">
                 <div className="h-[300px] sm:h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-2xl relative border border-black/5">
                   <img loading="lazy" decoding="async" src={IMAGES.aboutFacility} onError={handleImageError} className="w-full h-full object-cover" alt="Industrial engineering facility" />
                   <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-black/5">
                     <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-1">Corporate HQ</p>
                     <p className="text-[15px] font-medium text-neutral-900">Solus Business Park, Thane</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Global Presence */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-emerald-950 text-white relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/30 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="text-center mb-10 sm:mb-12 lg:mb-24 max-w-5xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-amber-400 uppercase mb-6">The Mission</p>
              <H2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] mb-8 text-white">
                Engineering dependable outcomes through <span className="font-medium text-amber-400">application-specific machines</span>, <span className="font-medium text-amber-400">intelligent inspection</span>, and disciplined integration.
              </H2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.1)] border-emerald-500/30">
                <MapPin className="text-emerald-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[10px] font-bold tracking-ultra text-emerald-400/70 uppercase mb-2">Corporate HQ</p>
                <H3 className="text-2xl font-light text-white mb-4">Thane, India</H3>
                <p className="text-white/60 font-light text-[14px] leading-relaxed">
                  The operational core for machine design, automation, inspection integration, laboratory solutions, project coordination, and direct engineering support.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <Globe2 className="text-blue-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[10px] font-bold tracking-ultra text-white/40 uppercase mb-2">Global Partnerships</p>
                <H3 className="text-2xl font-light text-white mb-4">International Sourcing</H3>
                <p className="text-white/60 font-light text-[14px] leading-relaxed">
                  Technology partnerships and sourcing channels support a wider portfolio spanning optics, imaging, controls, automation, machine vision, robotics, and process equipment.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <Network className="text-amber-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[10px] font-bold tracking-ultra text-white/40 uppercase mb-2">Edge Logistics</p>
                <H3 className="text-2xl font-light text-white mb-4">On-Site Deployment</H3>
                <p className="text-white/60 font-light text-[14px] leading-relaxed">
                  Cross-functional technical reviews that protect quality, software integration, calibration, documentation, and final commissioning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What Sets Us Apart */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="mb-12 lg:mb-16">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">The Invade Advantage</p>
              <H2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-neutral-900">
                WHAT SETS US APART.
              </H2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              <div className="lg:col-span-2 bg-emerald-900 text-white rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <Cpu size={40} className="text-emerald-400 mb-8 relative z-10" strokeWidth={1.5} />
                <H3 className="text-3xl font-light mb-4 relative z-10">Application-Led Engineering</H3>
                <p className="text-emerald-100/80 font-light text-[15px] max-w-md relative z-10 leading-relaxed">
                  We do not push generic catalogue items. We define the application, engineer the machine or system, select the right controls and sensing, and integrate it into the real operating environment.
                </p>
              </div>
              <div className="bg-white border border-black/5 rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
                <ShieldCheck size={36} className="text-amber-500 mb-6" strokeWidth={1.5} />
                <div>
                  <H3 className="text-2xl font-medium mb-3 text-neutral-900">Absolute Compliance</H3>
                  <p className="text-black/60 font-light text-[14px] leading-relaxed">
                    Supporting controlled and regulated environments with documentation, traceability, validation-ready architecture, and 21 CFR Part 11 considerations where applicable.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-black/5 rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
                <Network size={36} className="text-blue-500 mb-6" strokeWidth={1.5} />
                <div>
                  <H3 className="text-2xl font-medium mb-3 text-neutral-900">Zero Latency</H3>
                  <p className="text-black/60 font-light text-[14px] leading-relaxed">
                    Embedded AI processing on the sensor level guarantees defect sorting without slowing down line velocities.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 bg-neutral-900 text-white rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col justify-end">
                <img loading="lazy" decoding="async" src={IMAGES.aboutQuality} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-28" alt="Fields" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-end">
                  <div>
                    <Focus size={40} className="text-emerald-400 mb-6" strokeWidth={1.5} />
                    <H3 className="text-3xl font-light mb-4">Guaranteed Quality Control</H3>
                    <p className="text-white/60 font-light text-[15px] max-w-sm leading-relaxed">
                      Error rates are non-negotiable. We track outcomes through extreme pixel precision, ensuring multi-year yield stability.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <Activity size={24} className="text-white mb-2" />
                    <p className="text-[11px] font-bold tracking-widest uppercase text-amber-400">Measurable Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <PageDetailSections page="about" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 3. BOARD MEMBERS
// ---------------------------------------------------------
function BoardMembersContent({ setPage, currentPage }) {
  usePageScroll(currentPage);

  const boardMembers = [
    {
      name: 'Kamlesh Chotalia',
      title: 'Chairman',
      linkedin: null
    },
    {
      name: 'Meenal S. Patwardhan',
      title: 'Vice-Chairman',
      linkedin: null
    },
    {
      name: 'Bhavin Kapadia',
      title: 'Director – Funds',
      linkedin: 'https://in.linkedin.com/in/bhavin-kapadia-a67b8097'
    },
    {
      name: 'Yagnik Waghela',
      title: 'Director – Investor Relations',
      linkedin: 'https://in.linkedin.com/in/yagnik-dilip-waghela-845a4b45'
    },
    { 
      name: "Vishwas Datir",
      title: null,
      inkedin: null 
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Board Members"
        title="BOARD"
        accent="MEMBERS."
        inlineAccent={true}
        description="The board and executive leadership of Invade Machines Limited guide company strategy, governance, capital stewardship, investor communication, and long-term engineering growth."
        image={IMAGES.teamHero}
        alt="Board members and executive leadership of Invade Machines Limited"
      />

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        {/* Chief Executive Officer */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full flex flex-col justify-center bg-white relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="max-w-[1200px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-4 mb-10">
                <span className="w-12 h-[1px] bg-emerald-500"></span>
                <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-700 uppercase">A Message from the CEO</p>
                <span className="w-12 h-[1px] bg-emerald-500"></span>
              </div>
              <H2 className="text-3xl md:text-5xl lg:text-[4rem] font-light tracking-tighter text-neutral-900 leading-[1.3] mb-10 sm:mb-12 lg:mb-16 max-w-5xl">
                “We don't just supply equipment; <span className="font-medium text-emerald-800">we bridge scientific precision with industrial scale</span>—delivering application-specific microscopes, machine vision, robotics, automation, and process systems built for absolute reliability.”
              </H2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start pt-12 lg:pt-16 border-t border-black/5">
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left w-full">
                <div className="w-20 h-20 rounded-xl bg-emerald-50 border border-black/5 text-emerald-600 flex items-center justify-center mb-6">
                  <span className="text-xl font-medium tracking-widest">SP</span>
                </div>
                <H3 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-2">Shrirang Patwardhan</H3>
                <p className="text-[11px] font-bold tracking-widest text-emerald-700 uppercase mb-2">Chief Executive Officer</p>
                <p className="text-[11px] font-medium tracking-widest text-black/40 uppercase mb-8">Invade Machines Limited</p>
                <a
                  href="https://in.linkedin.com/in/shrirang-microscope-vision-inspection"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-white bg-emerald-950 hover:bg-emerald-800 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Linkedin size={16} />
                  <span className="text-[11px] font-bold tracking-widest uppercase">LinkedIn</span>
                </a>
              </div>
              <div className="md:w-2/3 space-y-6 text-black/60 font-light text-[15px] md:text-[17px] leading-relaxed w-full">
                <p className="text-xl text-black/80 font-medium mb-4">
                  Driving industrial and research outcomes through structured application engineering, technical integration, and accountable execution.
                </p>
                <p>
                  Shrirang Patwardhan leads Invade Machines Limited as Chief Executive Officer, bringing experience across scientific systems, industrial applications, technical sales, machine vision, inspection, and solution development.
                </p>
                <p>
                  He plays a central role in translating customer requirements into focused machine, automation, inspection, imaging, process, and research solutions while aligning strategic partnerships, application reviews, and delivery planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full min-h-[50vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-10 sm:mb-12 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Governance & Direction</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                BOARD MEMBERS.
              </H2>
            </div>
            <div className="horizontal-card-scroll">
              {boardMembers.map((member) => (
                <article key={member.name} className="bg-white border border-black/5 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between text-center min-h-[310px]">
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-emerald-50 text-emerald-600 border border-black/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-950 group-hover:text-white transition-colors duration-500">
                      <span className="text-lg font-medium tracking-widest">{member.name.split(' ').map((part) => part[0]).join('').replace('.', '').substring(0, 2)}</span>
                    </div>
                    <H3 className="text-xl font-medium mb-3 text-neutral-900 leading-snug">{member.name}</H3>
                    <p className="text-emerald-700 text-[11px] font-bold tracking-widest uppercase leading-relaxed">{member.title}</p>
                    <p className="mt-3 text-black/40 text-[10px] tracking-widest uppercase leading-relaxed">Invade Machines Limited</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/5 flex min-h-[42px] items-center justify-center">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-black/40 hover:text-emerald-600 transition-colors"
                        aria-label={`Open ${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={18} />
                        <span className="text-[10px] font-bold tracking-widest uppercase">LinkedIn</span>
                      </a>
                    ) : (
                      <span className="text-[10px] font-medium tracking-widest uppercase text-black/25">Board Profile</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <BoardGovernanceExpansion setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 4. PRODUCTS OVERVIEW PAGE
// ---------------------------------------------------------
function ProductsOverviewContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="INTEGRATED"
        accent="ENGINEERING SYSTEMS."
        description="A horizontal engineering portfolio spanning special purpose machines, automation, inspection, robotic handling, packing and sealing, process projects, microscopy, and digital imaging."
        image={IMAGES.solutionsHero}
        alt="Comprehensive industrial machinery and automation portfolio"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-4 sm:px-6 lg:px-[3%] w-full min-h-[100vh] flex flex-col justify-center relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-10 sm:mb-12 lg:mb-24">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Core Systems</p>
              <H2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-emerald-950">
                THE COMPLETE <span className="font-light">SOLUTION STACK.</span>
              </H2>
            </div>
            <div className="horizontal-card-scroll items-stretch">
              {[
                { id: 'industrial-automation', title: 'Industrial Automation & SPMs', desc: 'Special purpose machines, robotic pick-and-place, packing, sealing, handling, and process-line integration.', img: IMAGES.manufacturing, icon: Settings },
                { id: 'machine-vision', title: 'Machine Vision & Inspection', desc: 'Washer, syringe, bottle, print, OCR/OCV, dimensional, traceability, and automotive part inspection.', img: IMAGES.machineVision, icon: ScanLine },
                { id: 'microscopy', title: 'Microscopy & Research', desc: 'Optical systems for biomedical devices, pharma, filters, energy, virology, packaging QC, defence, space, academia, and agro research.', img: IMAGES.microscopy, icon: Microscope },
                { id: 'cameras', title: 'Digital Imaging', desc: 'Smart, high-speed, scientific, and cooled camera systems for capture, measurement, analysis, and edge processing.', img: IMAGES.digitalCameras, icon: Camera }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-emerald-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer hover:border-amber-400 hover:-translate-y-2" onClick={() => setPage(item.id)}>
                  <div className="h-[220px] sm:h-[260px] overflow-hidden relative flex-shrink-0">
                    <img loading="lazy" decoding="async" src={item.img} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-colors border border-emerald-100">
                      <item.icon size={24} />
                    </div>
                    <H3 className="text-2xl font-bold mb-3 text-emerald-950 leading-snug tracking-tight">{item.title}</H3>
                    <p className="text-emerald-800/70 font-light text-[15px] leading-relaxed mb-8 flex-grow">{item.desc}</p>
                    <button className="mt-auto flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-emerald-700 group-hover:text-amber-500 transition-colors w-fit">
                      Explore Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
        <PageDetailSections page="products" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A. INDUSTRIAL AUTOMATION & SPECIAL PURPOSE MACHINES
// ---------------------------------------------------------
function IndustrialAutomationContent({ setPage, currentPage }) {
  usePageScroll(currentPage);

  return (
    <>
      <PageHero
        eyebrow="Industrial Automation & SPMs"
        title="AUTOMATION BUILT"
        accent="AROUND THE PROCESS."
        description="Application-specific machines, robotics, packing, sealing, handling, controls, and production-line integration designed around cycle time, quality, safety, and output."
        image={IMAGES.automationHero}
        alt="Robotic automation and special purpose machinery"
      />

      <main className="relative z-10 bg-neutral-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh] bg-white relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between gap-10 items-end mb-10 sm:mb-12 lg:mb-16">
              <div className="lg:w-[58%]">
                <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Application-First Engineering</p>
                <H2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                  THE MACHINE FOLLOWS <span className="font-medium text-emerald-700">THE REQUIREMENT.</span>
                </H2>
              </div>
              <p className="lg:w-[42%] text-black/60 font-light text-[15px] leading-relaxed">
                Every project begins with the part, process, quality risk, cycle time, operator workflow, and required output. Hardware, controls, vision, robotics, and software are then selected around that operating reality.
              </p>
            </div>

            <div className="horizontal-card-scroll">
              {INDUSTRIAL_SYSTEMS.map((system, index) => (
                <article key={system.title} className="bg-neutral-50 border border-black/5 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between gap-6 mb-8">
                    <div className="w-14 h-14 bg-white border border-black/5 rounded-xl flex items-center justify-center text-emerald-700 shadow-sm">
                      <system.icon size={25} strokeWidth={1.7} />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-black/20">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <H3 className="text-xl font-medium text-emerald-950 mb-3">{system.title}</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed">{system.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] bg-emerald-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="site-shell max-w-[1440px] mx-auto w-full relative z-10 reveal-on-scroll">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
              <p className="text-[11px] font-bold tracking-widest text-amber-400 uppercase mb-4">Projects in Development</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1]">
                PROCESS PROJECTS <span className="font-medium text-emerald-300">BEYOND INSPECTION.</span>
              </H2>
            </div>
            <div className="horizontal-card-scroll">
              {ACTIVE_PROJECTS.map((project) => (
                <article key={project.title} className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <project.icon size={28} className="text-amber-400 mb-6" strokeWidth={1.5} />
                  <H3 className="text-xl font-medium mb-3">{project.title}</H3>
                  <p className="text-emerald-100/65 font-light text-[14px] leading-relaxed">{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] bg-amber-500 text-emerald-950 text-center">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase mb-6">
              HAVE A PROCESS THAT NEEDS <span className="font-bold">A PURPOSE-BUILT MACHINE?</span>
            </H2>
            <p className="text-emerald-900/80 text-[15px] mb-10 max-w-2xl mx-auto">
              Share the component, process flow, speed, quality checks, and expected output. Our team will help define the right machine architecture.
            </p>
            <button type="button" onClick={() => setPage('contact')} className="bg-emerald-950 text-white px-10 py-4 text-[12px] font-bold tracking-widest uppercase rounded-xl hover:bg-white hover:text-emerald-950 transition-all shadow-xl">
              Discuss Your Requirement
            </button>
          </div>
        </section>
      
        <PageDetailSections page="automation" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5B. SOLUTIONS - MICROSCOPY & RESEARCH
// ---------------------------------------------------------
function MicroscopyContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Microscopy & Research"
        title="MICROSCOPY FOR"
        accent="RESEARCH & INDUSTRY."
        description="Optical and digital microscopy systems for life sciences, pharmaceutical analysis, materials, petroleum, agro research, defence, space, healthcare devices, and institutional laboratories."
        image={IMAGES.microscopyHero}
        alt="Advanced microscopy and laboratory research"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-12 sm:space-y-16 lg:space-y-20">
          
          {/* Intro Section */}
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:w-[55%]">
              <H2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">MICRO & MACRO <span className="font-light text-emerald-700">ANALYSIS.</span></H2>
              <p className="text-emerald-800/80 leading-relaxed mb-6">
                Our microscopy and research division supports applications far beyond routine laboratory observation—from heart stents, industrial filters, and pharmaceutical APIs to virology, oil exploration, defence, space, and crop research.
              </p>
              <p className="text-emerald-800/80 leading-relaxed">
                We configure stereo, compound, inverted, fluorescence, polarized, and digital imaging systems around the sample, method, documentation need, and research workflow.
              </p>
            </div>
            <div className="lg:w-[45%] w-full h-[260px] sm:h-[310px] rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-4 sm:p-5 border border-black/5">
              <img loading="lazy" decoding="async" src={IMAGES.microscopyLab} onError={handleImageError} className="max-h-full max-w-full object-contain" alt="Microscopy and life-science laboratory" />
            </div>
          </section>

          {/* Detailed Hardware Section */}
          <section className="reveal-on-scroll border-t border-emerald-200 pt-16">
            <div className="text-center mb-10 sm:mb-12 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Hardware</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                OPTICAL ARCHITECTURES.
              </H2>
            </div>
            
            <div className="horizontal-card-scroll mb-12">
                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Search size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Stereo Microscope</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Offering 3D images with large fields of view and long working distances. Ideal for Zoology, Forensic Science, Mining, and PCB Inspection. Minimal sample preparation required.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Boom stands & Coarse/Fine columns</li>
                    <li>• Ring Lights & Spot Lights</li>
                    <li>• Tiltable mirrors & Polarizers</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Microscope size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Upright Microscope</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Widely used for Clinical Diagnostics and Material Science. Features Halogen/LED illumination with high-res multi-objective nosepieces.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Phase Contrast for live cells</li>
                    <li>• Strain-free POL objectives</li>
                    <li>• Motorised joystick research ops</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Beaker size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Inverted Microscope</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Light source above, objectives below. Observe live cells in flasks without disruption or study heavy metallurgical polished samples.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• IVF ICSI & IMSI manipulators</li>
                    <li>• Metallurgical grain analysis</li>
                    <li>• Stem Cell observation</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* DIGITAL CONNECTIVITY & ERGONOMICS */}
          <section className="reveal-on-scroll px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] bg-emerald-950 text-white relative overflow-hidden rounded-xl shadow-2xl mt-10 sm:mt-12 lg:mt-16">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-[120px] opacity-40 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-24 items-center">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-bold tracking-widest text-amber-500 uppercase mb-6">The Digital Lab</p>
                <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-white">
                  CONNECTED <br /><span className="font-medium text-amber-400">INTELLIGENCE.</span>
                </H2>
                <p className="text-emerald-100/80 font-light text-[15px] md:text-[16px] leading-relaxed mb-8">
                  Modern laboratories need more than visual clarity. They need controlled data, practical reporting, repeatable calibration, and comfortable operation during prolonged scientific analysis.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-emerald-800 pt-8">
                  <div className="bg-emerald-900/50 p-6 rounded-xl border border-emerald-800 shadow-sm">
                    <Database size={24} className="text-amber-500 mb-4" strokeWidth={1.5} />
                    <H4 className="text-[15px] font-medium text-white mb-2">Pixelr Integration</H4>
                    <p className="text-[12px] text-emerald-200/60 font-light leading-relaxed">Direct tethering to our Pixelr software suite for automated particle size analysis and report generation.</p>
                  </div>
                  <div className="bg-emerald-900/50 p-6 rounded-xl border border-emerald-800 shadow-sm">
                    <Eye size={24} className="text-amber-500 mb-4" strokeWidth={1.5} />
                    <H4 className="text-[15px] font-medium text-white mb-2">Optical Ergonomics</H4>
                    <p className="text-[12px] text-emerald-200/60 font-light leading-relaxed">Eyepiece-less designs and tilting binocular heads to prevent operator fatigue during extended procedures.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                <div className="h-[220px] sm:h-[250px] rounded-xl overflow-hidden shadow-xl border border-emerald-800 transform translate-y-8">
                  <img loading="lazy" decoding="async" src={IMAGES.digitalLabOne} onError={handleImageError} className="w-full h-full object-cover" alt="Advanced research laboratory" />
                </div>
                <div className="h-[220px] sm:h-[250px] rounded-xl overflow-hidden shadow-xl border border-emerald-800">
                  <img loading="lazy" decoding="async" src={IMAGES.digitalLabTwo} onError={handleImageError} className="w-full h-full object-cover" alt="Scientific microscopy workflow" />
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="reveal-on-scroll bg-white p-6 sm:p-8 md:p-14 rounded-xl shadow-sm border border-emerald-100 mt-10 sm:mt-12 lg:mt-16 text-center">
              <H4 className="text-[11px] font-bold tracking-widest uppercase text-emerald-600 mb-10">Sample Preparation to Sample Analysis Workflow</H4>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 font-bold text-sm tracking-wider uppercase">
                  <div className="w-full md:w-auto px-8 py-4 border border-black/5 rounded-xl bg-neutral-50 shadow-sm text-emerald-950">Cutting</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border border-black/5 rounded-xl bg-neutral-50 shadow-sm text-emerald-950">Mounting</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border border-black/5 rounded-xl bg-neutral-50 shadow-sm text-emerald-950">Grinding</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border border-black/5 rounded-xl bg-neutral-50 shadow-sm text-emerald-950">Polishing</div>
                  <ArrowRight className="hidden md:block text-emerald-300"/>
                  <div className="w-full md:w-auto px-8 py-4 border-2 border-amber-500 rounded-xl bg-amber-50 text-amber-600 shadow-md">Analysis</div>
              </div>
          </section>

          <section className="reveal-on-scroll border-t border-emerald-200 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl border border-emerald-100 p-8 md:p-10 shadow-sm">
                <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Microscopy & Analytical Work</p>
                <H3 className="text-2xl md:text-3xl font-light text-emerald-950 mb-8">Established Application Areas</H3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {MICROSCOPY_APPLICATIONS.map((application) => (
                    <li key={application} className="flex items-start gap-3 text-[14px] text-black/65 leading-relaxed">
                      <ChevronRight size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-950 rounded-xl border border-emerald-900 p-8 md:p-10 shadow-xl text-white">
                <p className="text-[10px] font-bold tracking-widest text-amber-400 uppercase mb-4">Agro Research</p>
                <H3 className="text-2xl md:text-3xl font-light mb-8">Crop Protection, Crop Improvement & Bio Technology</H3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {AGRO_RESEARCH_APPLICATIONS.map((application) => (
                    <li key={application} className="flex items-start gap-3 text-[14px] text-emerald-100/75 leading-relaxed">
                      <ChevronRight size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      
        <PageDetailSections page="microscopy" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5C. SOLUTIONS - DIGITAL CAMERAS
// ---------------------------------------------------------
function CamerasContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Digital Imaging"
        title="IMAGING BUILT"
        accent="AROUND THE APPLICATION."
        description="Scientific, industrial, cooled CMOS, USB, GigE, and smart-camera platforms for documentation, measurement, analysis, inspection, and high-speed image acquisition."
        image={IMAGES.camerasHero}
        alt="Digital imaging and industrial camera technology"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-12 sm:space-y-16 lg:space-y-20">
          <section className="reveal-on-scroll flex flex-col lg:flex-row-reverse gap-10 sm:gap-12 lg:gap-24 items-center">
            <div className="lg:w-[50%]">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-6">Data Capture</p>
              <H2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                SENSORS THAT <br /><span className="font-medium">THINK.</span>
              </H2>
              <div className="space-y-6 text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-10">
                <p>Our digital-imaging work spans industrial, scientific, and microscopy cameras selected around the application, optical path, acquisition speed, software workflow, and required evidence.</p>
                <p>Equipped for fluorescence, high-speed sorting, and extreme low-light environments (Cooled CMOS), these cameras act as the digital retinas for automated systems.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-black/5 hover:border-emerald-200 transition-colors">
                  <Zap className="text-amber-500 mb-4" size={32} strokeWidth={1.5} />
                  <H4 className="text-lg font-medium text-emerald-950 mb-1">High Speed</H4>
                  <p className="text-[13px] text-black/50 font-light">Framerate optimization for fast-moving lines.</p>
                </div>
                <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-black/5 hover:border-emerald-200 transition-colors">
                  <Cpu className="text-amber-500 mb-4" size={32} strokeWidth={1.5} />
                  <H4 className="text-lg font-medium text-emerald-950 mb-1">Smart Logic</H4>
                  <p className="text-[13px] text-black/50 font-light">Edge processing embedded directly in the sensor.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl relative border border-black/5">
              <img loading="lazy" decoding="async" src={IMAGES.cameraSensor} onError={handleImageError} className="w-full h-full object-cover" alt="Industrial imaging sensor and electronics" />
            </div>
          </section>

          {/* Environmental Resilience */}
          <section className="reveal-on-scroll bg-white py-[10vh] px-[5%] rounded-xl shadow-sm border border-emerald-100 mt-10 sm:mt-12 lg:mt-16">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Environmental Resilience</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                PERFORMANCE UNDER <span className="font-medium text-emerald-800">PRESSURE.</span>
              </H2>
              <p className="text-black/60 font-light text-[15px] leading-relaxed">
                Industrial sensors must survive environments that destroy standard consumer electronics. Our deployments are rated for extreme conditions.
              </p>
            </div>
            <div className="horizontal-card-scroll">
              {[
                { title: 'Thermal Resistance', text: 'Operational stability in extreme factory heat or cold storage.', icon: Activity },
                { title: 'IP67/69K Housings', text: 'Complete protection against washdowns, dust, and particulates.', icon: ShieldCheck },
                { title: 'Vibration Tolerance', text: 'Maintaining sub-pixel calibration despite heavy machinery vibrations.', icon: Zap },
                { title: 'Cooled CMOS', text: 'Thermoelectric cooling to reduce noise in extreme low-light fluorescence.', icon: Cpu }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-50 rounded-xl p-8 shadow-sm border border-black/5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-black/5 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <H4 className="text-[15px] font-bold text-emerald-950 mb-3">{item.title}</H4>
                  <p className="text-[13px] text-black/60 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="reveal-on-scroll bg-emerald-950 text-white p-6 sm:p-8 lg:p-10 lg:p-16 rounded-xl shadow-2xl relative overflow-hidden mt-10 sm:mt-12 lg:mt-16">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-800 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
             <div className="relative z-10">
                <H3 className="text-3xl font-light text-white mb-10">Camera Technologies We Deploy</H3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-white/80 font-light text-[15px]">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Tucsen Photonics (Michrome, TrueChrome)
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Industrial cameras (model selected by application)
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Entry Level & Smart Cameras
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    USB2, USB3 & Cooled CMOS
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 md:col-span-2 hover:bg-emerald-900/50 transition-colors cursor-default">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-amber-400"><ChevronRight size={18}/></div>
                    Fluorescence specific ultra-low light sensors
                  </div>
               </div>
             </div>
          </section>
        </div>
      
        <PageDetailSections page="cameras" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5D. SOLUTIONS - MACHINE VISION & INSPECTION
// ---------------------------------------------------------
function MachineVisionContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Machine Vision & Inspection"
        title="INSPECTION THAT"
        accent="SEES. VERIFIES. DECIDES."
        description="High-speed systems for washer, syringe, bottle, print, OCR/OCV, filter, dimensional, traceability, packaging, and automotive-component inspection."
        image={IMAGES.visionHero}
        alt="Automated machine vision inspection system"
      />

      <main className="relative z-10 bg-white rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-4 sm:px-6 lg:px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-12 sm:space-y-16 lg:space-y-20 text-center">
            
            <div className="reveal-on-scroll max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Industrial Inspection</p>
              <H2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                FLAWLESS <span className="font-medium text-emerald-800">EXECUTION.</span>
              </H2>
              <p className="text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-10 sm:mb-12 lg:mb-16">
                Our inspection architectures combine controlled lighting, optics, cameras, software, controls, and reject mechanisms to verify products consistently at production speed.
              </p>
            </div>

            <div className="reveal-on-scroll horizontal-card-scroll">
              {[
                { icon: Search, title: 'Washer & Part Inspection', text: 'Presence, orientation, dimensions, surface condition, and automated sorting.' },
                { icon: TestTube2, title: 'Syringe & Bottle Inspection', text: 'Assembly, cap, fill, label, print, contamination, and packaging checks.' },
                { icon: FileText, title: 'Print Verification', text: 'Artwork, label, batch code, serialization, position, and print-quality verification.' },
                { icon: Binary, title: 'OCR & OCV', text: 'Recognition and verification of readable, correct, and traceable production codes.' },
                { icon: Zap, title: 'Automotive Components', text: 'Dimensional, surface, assembly, and traceability inspection for precision parts.' },
                { icon: Layers, title: 'Sorting & Grading', text: 'High-speed presence, absence, classification, and reject-management systems.' }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-50 border border-black/5 rounded-xl p-8 flex flex-col items-center hover:shadow-xl hover:border-emerald-200 transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 border border-black/5 text-emerald-600 shadow-sm">
                     <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <H3 className="text-xl font-medium mb-3 text-emerald-950">{item.title}</H3>
                  <p className="text-black/60 font-light text-[13px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS OF VISION */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] bg-emerald-50 relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
             <div className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
              <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Integration Architecture</p>
              <H2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                THE FOUR PILLARS OF <span className="font-medium text-emerald-800">VISION.</span>
              </H2>
              <p className="text-black/60 font-light text-[15px] leading-relaxed">
                A successful automated inspection system requires four distinct elements working in absolute, synchronized harmony. We engineer all four.
              </p>
            </div>
            
            <div className="horizontal-card-scroll relative">
              {[
                { step: '01', title: 'Illumination', desc: 'Custom strobe and polarized lighting to highlight defects and eliminate ambient factory noise.' },
                { step: '02', title: 'Optics', desc: 'Telecentric and low-distortion lenses to capture flat, geometrically accurate data.' },
                { step: '03', title: 'Capture', desc: 'High-framerate global shutter sensors that freeze motion blur perfectly.' },
                { step: '04', title: 'Processing', desc: 'Deterministic edge-software that analyzes pixels and triggers PLC reject gates in milliseconds.' }
              ].map((pillar, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 relative z-10 hover:-translate-y-2 transition-transform">
                  <div className="text-amber-500 font-bold text-3xl mb-4">{pillar.step}</div>
                  <H4 className="text-[16px] font-bold text-emerald-950 mb-3">{pillar.title}</H4>
                  <p className="text-[13px] text-black/60 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Software & Ergonomics Section */}
        <section className="px-4 sm:px-6 lg:px-[3%] w-full py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh] bg-white relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="bg-neutral-50 p-6 sm:p-8 lg:p-10 lg:p-16 rounded-xl shadow-sm border border-black/5 text-left grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <H3 className="text-3xl font-light text-emerald-950 mb-8">Software & Ergonomics</H3>
                 <ul className="space-y-6 text-black/70 font-light">
                    <li className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-xl border border-black/5 shadow-sm text-emerald-600 flex-shrink-0 mt-0.5"><ChevronRight size={18}/></div> 
                      <div className="text-[15px]"><strong className="font-medium text-black">Pixelr Software:</strong> Tailored for Vision, Particle Size Analysis, and HT Microhardness testing.</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-xl border border-black/5 shadow-sm text-emerald-600 flex-shrink-0 mt-0.5"><ChevronRight size={18}/></div> 
                      <div className="text-[15px]"><strong className="font-medium text-black">Vision Engineering:</strong> Eyepiece-less Inspection, Video Measuring, CMM capabilities.</div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-xl border border-black/5 shadow-sm text-emerald-600 flex-shrink-0 mt-0.5"><ChevronRight size={18}/></div> 
                      <div className="text-[15px]"><em>Key Models:</em> Mantis, ERGO, PIXO, IOTA, Lynx EVO, DRV, TVM Series.</div>
                    </li>
                 </ul>
              </div>
              <div className="bg-emerald-950 p-6 sm:p-8 lg:p-10 rounded-xl text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-600 blur-[60px] opacity-30 rounded-xl pointer-events-none"></div>
                  <H4 className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-8 relative z-10">Key Integrations</H4>
                  <div className="space-y-4 font-light text-emerald-100 text-[15px] relative z-10">
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> Special Purpose Industrial Lenses</p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> High-fidelity Baluns & Cables</p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> Dedicated Lighting Controllers</p>
                    <p className="flex items-center gap-3"><span className="text-emerald-500">•</span> PLC / SCADA Data Handoffs</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      
        <PageDetailSections page="vision" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 6. APPLICATIONS PAGE
// ---------------------------------------------------------
function ApplicationsContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  
  const markets = [
    'Pharmaceuticals', 'Biomedical Devices', 'Automotive', 'Packaging', 'Printing', 'Food & Beverage',
    'Coffee Processing', 'Sparkling Water', 'Olive Oil', 'Silos & Storage', 'Industrial Filters', 'Petroleum & Oil',
    'Virology', 'Microbiology', 'Pharma APIs', 'Heart Stents', 'Defence', 'Space and advanced research applications',
    'IITs & Academic Research', 'Agro Research', 'Grapes', 'Citrus', 'Sugarcane', 'Crop Protection',
    'Cotton Research', 'Asbestos Analysis', 'Metallurgy', 'Electronics', 'Semiconductors', 'Water Treatment',
    'Forensics', 'Environmental Science', 'Nutraceuticals', 'Soil Testing', 'Gems & Jewellery', 'Avionics'
  ];

  return (
    <>
      <PageHero
        eyebrow="Industries & Applications"
        title="ENGINEERED FOR"
        accent="DEMANDING APPLICATIONS."
        description="From pharmaceutical production and automotive inspection to agro research, food-and-beverage projects, petroleum, defence, space, academia, and advanced material analysis."
        image={IMAGES.applicationsHero}
        alt="Scientific and industrial application environments"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-14 sm:space-y-20 lg:space-y-24">
          
          <section className="reveal-on-scroll">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <H2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                GLOBAL SECTORS.
              </H2>
            </div>
            <div className="horizontal-card-scroll">
                {[
                    { title: "Aerospace & Defense", icon: Globe2 },
                    { title: "Automobiles", icon: Settings },
                    { title: "Chemicals & Oil/Gas", icon: Beaker },
                    { title: "Electronics & IT", icon: Cpu },
                    { title: "Food Processing", icon: MonitorPlay },
                    { title: "Gems & Jewellery", icon: Aperture },
                    { title: "Pharmaceuticals", icon: Activity },
                    { title: "Textile & Leather", icon: Layers }
                ].map((s,i) => (
                    <div key={i} className="flex items-center gap-5 p-6 bg-white border border-black/5 rounded-xl text-emerald-950 font-medium shadow-sm hover:shadow-md transition-shadow group">
                        <div className="bg-emerald-50 p-3 rounded-xl text-amber-500 border border-emerald-100 group-hover:bg-amber-500 group-hover:text-white transition-colors"><s.icon size={24} strokeWidth={1.5}/></div> 
                        {s.title}
                    </div>
                ))}
            </div>
          </section>

          {/* --- NEW SECTION: STRICT COMPLIANCE --- */}
          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center bg-white rounded-xl p-6 sm:p-8 lg:p-10 lg:p-16 border border-emerald-100 shadow-sm">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-4">Regulatory Standards</p>
                <H2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-emerald-950">
                  STRICT <span className="font-medium text-emerald-800">COMPLIANCE.</span>
                </H2>
                <p className="text-black/60 font-light text-[15px] leading-relaxed mb-6">
                  In regulated sectors such as pharmaceuticals and biomedical devices, machines and inspection systems must be supported by traceability, controlled access, audit-ready data, and validation-conscious software architecture. 
                </p>
                <p className="text-black/60 font-light text-[15px] leading-relaxed mb-8">
                  Our integrations natively support <strong className="font-bold text-black">FDA 21 CFR Part 11</strong>, ensuring that all electronic records, digital signatures, and audit trails are completely secure, immutable, and exportable.
                </p>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-emerald-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">CFR 21 Part 11</span>
                  <span className="px-4 py-2 bg-emerald-900 text-white rounded-md text-[11px] font-bold tracking-widest uppercase">GMP Ready</span>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                 <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 shadow-sm text-center">
                    <ShieldCheck className="text-emerald-500 mb-4 mx-auto" size={32} />
                    <H4 className="font-bold text-emerald-950 text-sm mb-2">Audit Trails</H4>
                    <p className="text-[12px] text-black/50 leading-relaxed">Automated logging of every system parameter change.</p>
                 </div>
                 <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 shadow-sm text-center">
                    <Database className="text-emerald-500 mb-4 mx-auto" size={32} />
                    <H4 className="font-bold text-emerald-950 text-sm mb-2">Data Integrity</H4>
                    <p className="text-[12px] text-black/50 leading-relaxed">Immutable storage preventing local record tampering.</p>
                 </div>
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <H2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Priority Application Areas</H2>
            <div className="horizontal-card-scroll">
                <div className="p-6 sm:p-8 lg:p-10 bg-white border border-black/5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <H4 className="font-bold text-emerald-600 uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 rounded-lg"><Lightbulb size={18}/></div> Health-Care & FMCG
                    </H4>
                    <p className="text-black/60 font-light text-[15px] leading-relaxed">Inspection of Platinum/Blonde hair treatments, Toothbrushes, Hair Oils, Hair Colors, Toothpaste, Nail Polish, and Anti-dandruff formulations.</p>
                </div>
                <div className="p-6 sm:p-8 lg:p-10 bg-white border border-black/5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <H4 className="font-bold text-emerald-600 uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 rounded-lg"><TestTube2 size={18}/></div> Pharma Dosage Forms
                    </H4>
                    <p className="text-black/60 font-light text-[15px] leading-relaxed">Quality control for Tablets, Capsules, Creams & Cosmetics, IVs (Injectables), Sprays, Syrups, and Drops.</p>
                </div>
                <div className="p-6 sm:p-8 lg:p-10 bg-white border border-black/5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <H4 className="font-bold text-emerald-600 uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                      <div className="p-2 bg-emerald-50 rounded-lg"><Microscope size={18}/></div> Advanced Research
                    </H4>
                    <p className="text-black/60 font-light text-[15px] leading-relaxed">Metal Analysis, Biological Studies, and Advanced Material testing (e.g., Artery Stents down to 0.5mm precision).</p>
                </div>
            </div>
          </section>

          <section className="reveal-on-scroll bg-emerald-950 p-6 sm:p-8 md:p-20 rounded-xl text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-xl blur-[120px] opacity-30 pointer-events-none"></div>
             <div className="relative z-10 text-center">
                <H2 className="text-4xl font-light mb-12">Complete Application Matrix</H2>
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {markets.map(m => (
                        <span key={m} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[13px] font-light tracking-wider hover:bg-amber-500 hover:text-emerald-950 hover:border-amber-500 transition-colors cursor-default shadow-sm">{m}</span>
                    ))}
                </div>
             </div>
          </section>
        </div>
      
        <PageDetailSections page="applications" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 7. SUCCESS STORIES (Clients)
// ---------------------------------------------------------
function ClientsContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  
  const institutions = [
      "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (MUMBAI)",
      "Indian Institute of Technology (ISM) Dhanbad",
      "Mehrangarh Museum Trust",
      "Kolkata Centre For Creativity",
      "MAP (Museum of Art & Photography)",
      "MIT World Peace University (Pune)",
      "Cama & Albless Hospitals",
      "Agharkar Research Institute",
      "National Centre for Cell Science (NCCS)",
      "Bharati Vidyapeeth University",
      "BEL Optronic Devices Limited",
      "CSIR - National Institute of Oceanography",
      "Actorius Innovations and Research Co."
  ];

  const corporateSectors = [
      { name: "Pharma & Healthcare", brands: "Pfizer, GSK, Sun Pharma, Lupin, Sanofi, Novartis, Wockhardt, Serum Institute, Johnson & Johnson, Cipla, Hikal, Emcure, Abbott, Glenmark, Piramal, Alkem" },
      { name: "Automotive & Engineering", brands: "Volvo, Bosch, Tata Motors, Mahindra, Ashok Leyland, Bajaj, Fiat, Mercedes-Benz, Audi, SKF, Kirloskar, L&T, JCB, CEAT" },
      { name: "Chemicals & Oil", brands: "Asian Paints, PPG, Dow, Henkel, Dr. Fixit, BASF, Tata Chemicals, Reliance, Saudi Aramco, Shell, Nayara Energy, Vedanta" },
      { name: "FMCG & Food", brands: "Parle, Marico, L'Oreal, Coca-Cola, PepsiCo, Bisleri, McCain, Godrej, Hindustan Unilever, Mondelez, Mother Dairy, Britannia, ITC, Kellogg's" },
      { name: "IT, Electronics & Others", brands: "Microsoft, TCS, Wipro, IBM, Infosys, Philips, Honeywell, Bharat Electronics, Reliance Jio, Bombay Dyeing, Raymond" }
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Network"
        title="BUILT FOR"
        accent="INDUSTRY & RESEARCH."
        description="Supporting requirements from manufacturing companies, pharmaceutical operations, engineering teams, research institutions, universities, museums, laboratories, and public-sector organisations."
        image={IMAGES.clientsHero}
        alt="Industrial clients, researchers, and engineering teams"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
        <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-14 sm:space-y-20 lg:space-y-24">
          
          {/* Representative engagement model — avoids unverified performance claims */}
          <section className="reveal-on-scroll">
            <div className="bg-emerald-950 rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row text-white">
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-700 blur-[100px] opacity-30 rounded-xl pointer-events-none"></div>
                <p className="text-[11px] font-bold tracking-widest text-amber-500 uppercase mb-4 relative z-10">Representative Engagement Model</p>
                <H3 className="text-3xl md:text-4xl font-light mb-6 relative z-10">Multi-Line Inspection <span className="font-bold">Standardisation</span></H3>
                <p className="text-emerald-100/80 text-[15px] font-light leading-relaxed mb-6 relative z-10">
                  A multi-line program should begin with common defect definitions, optical standards, recipe governance, interface rules, user access, image-retention policy, and acceptance methods.
                </p>
                <p className="text-emerald-100/80 text-[15px] font-light leading-relaxed mb-8 relative z-10">
                  Pilot validation on one representative line can establish the operating window before a controlled rollout across products, lines, or sites.
                </p>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                   <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                     <span className="text-xl font-medium text-amber-400">Pilot First</span>
                     <span className="block mt-2 text-[10px] uppercase tracking-widest text-emerald-300">Reduce technical risk</span>
                   </div>
                   <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                     <span className="text-xl font-medium text-amber-400">Standardise</span>
                     <span className="block mt-2 text-[10px] uppercase tracking-widest text-emerald-300">Scale controlled methods</span>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
                <img loading="lazy" decoding="async" src={IMAGES.clientFactory} onError={handleImageError} className="w-full h-full object-cover opacity-90" alt="Automated manufacturing facility" />
              </div>
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <H2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Eminent Installations & Institutions</H2>
            <div className="horizontal-card-scroll">
                {institutions.map((inst, i) => (
                    <div key={i} className="p-8 border border-black/5 rounded-xl bg-white shadow-sm flex items-start gap-5 hover:border-emerald-200 hover:shadow-lg transition-all group">
                        <div className="bg-emerald-50 p-3 rounded-xl shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors border border-emerald-100">
                          <Building className="text-amber-500 group-hover:text-white" size={20} strokeWidth={1.5} />
                        </div>
                        <p className="font-medium text-[14px] text-emerald-950 pt-1 leading-snug">{inst}</p>
                    </div>
                ))}
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-black/5 pt-20">
            <H2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase mb-12 text-center text-neutral-900">Corporate Clientele by Sector</H2>
            <div className="grid lg:grid-cols-2 gap-8">
                {corporateSectors.map((sector, i) => (
                    <div key={i} className="p-6 sm:p-8 lg:p-10 bg-white border border-black/5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center gap-5 mb-6">
                           <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                              <Briefcase size={24} strokeWidth={1.5} />
                           </div>
                           <H3 className="text-2xl font-medium text-emerald-950">{sector.name}</H3>
                        </div>
                        <p className="text-black/60 leading-relaxed font-light text-[15px] pl-16 md:pl-[4.5rem]">
                          {sector.brands} <span className="text-emerald-500 italic">...and many more.</span>
                        </p>
                    </div>
                ))}
            </div>
          </section>

        </div>
      
        <PageDetailSections page="clients" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 8. INVESTOR RELATIONS PAGE
// ---------------------------------------------------------
function InvestorsContent({ setPage, currentPage }) {
  usePageScroll(currentPage);

  const corporateDirectory = [
    {
      icon: Building,
      eyebrow: 'Registered Address',
      title: 'Invade Machines Limited',
      body: (
        <>
          702, Solus Business Park<br />
          Hiranandani Estate, Thane 400 607<br />
          Maharashtra, India
        </>
      )
    },
    {
      icon: FileText,
      eyebrow: 'Company Secretary',
      title: 'Kaushal Dalal & Associates',
      body: (
        <>
          Practising Company Secretary<br />
          Flat No. 1, Nishant Building, Poddar Street,<br />
          Opposite SVC Bank, Santacruz West, Mumbai – 400054
        </>
      ),
      meta: [
        ['Email', 'team@cskda.com', 'mailto:team@cskda.com'],
        ['Web', 'www.cskda.com', 'https://www.cskda.com']
      ]
    },
    {
      icon: Activity,
      eyebrow: 'Auditor',
      title: 'MRB & Associates',
      body: (
        <>
          A-102, 1st Floor, Shraddha Heights<br />
          Telly Gully Cross Road,<br />
          Andheri East, Mumbai – 400069
        </>
      ),
      meta: [
        ['Email', 'manish.b@mrbassociates.com', 'mailto:manish.b@mrbassociates.com'],
        ['Web', 'www.mrbassociates.com', 'https://www.mrbassociates.com']
      ]
    },
    {
      icon: Network,
      eyebrow: 'Registrar & Transfer Agent',
      title: 'Purva Sharegistry (India) Pvt. Ltd.',
      body: (
        <>
          Unit No. 9, Ground Floor, Shiv Shakti Industrial Estate,<br />
          J. R. Boricha Marg, Lower Parel East,<br />
          Mumbai, Maharashtra – 400011
        </>
      ),
      meta: [
        ['Phone', '022 4790 0138', 'tel:+912247900138'],
        ['Web', 'www.purvashare.com', 'https://www.purvashare.com']
      ]
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="TRANSPARENCY &"
        accent="GOVERNANCE."
        description="Access investor-relations contacts, corporate information, regulatory support details, and the governance framework connected with Invade Machines Limited."
        image={IMAGES.investorsHero}
        alt="Investor relations and corporate governance"
      />

      <main className="relative z-10 overflow-hidden rounded-t-xl bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.12)]">
        <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-[3%] lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell mx-auto w-full max-w-[1440px]">
            <div className="reveal-on-scroll border-b border-black/5 pb-10 lg:pb-14">
              <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="Get in Touch"
                  title="INVESTOR RELATIONS."
                  description="For investor-related enquiries, corporate information, and regulatory communication, contact the investor-relations team directly."
                />
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2">
              <article className="reveal-on-scroll group relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 p-7 shadow-sm sm:p-9 lg:p-12">
                <Briefcase className="absolute -right-8 -top-6 text-emerald-900/[0.06] transition-transform duration-700 group-hover:scale-110" size={190} strokeWidth={1} aria-hidden="true" />
                <div className="relative z-10">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-600">Investor Relations</p>
                  <H2 className="text-3xl font-light tracking-tight text-emerald-950 sm:text-4xl">Yagnik Waghela</H2>

                  <div className="mt-9 space-y-4 sm:mt-10">
                    <a href="tel:+919920779198" className="flex items-center gap-4 rounded-xl border border-emerald-100 bg-white p-4 text-emerald-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-amber-400">
                        <Phone size={17} />
                      </span>
                      <span className="text-[14px] font-medium sm:text-[15px]">+91 99207 79198</span>
                    </a>

                    <a href="mailto:yagnik@invadeagro.com" className="flex items-start gap-4 rounded-xl border border-emerald-100 bg-white p-4 text-emerald-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-amber-400">
                        <Mail size={17} />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block break-all text-[14px] font-medium sm:text-[15px]">yagnik@invadeagro.com</span>
                        <span className="mt-1 block break-all text-[12px] font-light text-emerald-800/70">Alternate: ir@invadeagro.com</span>
                      </span>
                    </a>
                  </div>
                </div>
              </article>

              <article className="reveal-on-scroll image-zoom-card group relative min-h-[360px] overflow-hidden rounded-2xl bg-emerald-950 p-7 text-white shadow-2xl sm:min-h-[430px] sm:p-10 lg:p-12" data-reveal="right">
                <img loading="lazy" decoding="async" src={IMAGES.investorsHero} onError={handleImageError} className="absolute inset-0 h-full w-full object-cover opacity-25" alt="Corporate governance and investor communication" />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 via-emerald-950/90 to-emerald-800/20" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-amber-400">
                    <ShieldCheck size={23} />
                  </div>
                  <div className="mt-16">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-300">Governance Commitment</p>
                    <H3 className="max-w-xl text-2xl font-light leading-snug text-white/90 sm:text-3xl">
                      Transparent communication and disciplined governance support responsible, long-term value creation for every stakeholder.
                    </H3>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-[3%] lg:py-[12vh] xl:py-[15vh]">
          <div className="site-shell mx-auto w-full max-w-[1440px]">
            <div className="reveal-on-scroll mx-auto max-w-4xl text-center">
              <SectionHeading
                eyebrow="Regulatory & Compliance"
                title="CORPORATE DIRECTORY."
                description="Key corporate, compliance, audit, and shareholder-support contacts are listed below for direct reference."
                align="center"
              />
            </div>

            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:mt-16">
              {corporateDirectory.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="reveal-on-scroll group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl sm:p-9" style={{ transitionDelay: `${index * 80}ms` }}>
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-700 transition-all group-hover:rotate-3 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-emerald-950">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-600">{item.eyebrow}</p>
                    <H3 className="mb-4 text-xl font-medium leading-snug text-emerald-950 sm:text-2xl">{item.title}</H3>
                    <div className="text-[13px] font-light leading-7 text-black/60 sm:text-[14px]">{item.body}</div>

                    {item.meta && (
                      <div className="mt-auto space-y-3 border-t border-black/5 pt-6">
                        {item.meta.map(([label, value, href]) => (
                          <p key={label} className="text-[12px] leading-6 text-black/60 sm:text-[13px]">
                            <span className="font-medium text-emerald-950">{label}: </span>
                            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="break-all transition-colors hover:text-emerald-700">{value}</a>
                          </p>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="reveal-on-scroll mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-7">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-0.5 shrink-0 text-amber-600" size={21} />
                <p className="text-[12px] font-light leading-6 sm:text-[13px]">
                  Investor and regulatory details should be reviewed whenever there is a change in the company’s registered office, advisers, auditors, registrar, or authorised investor-relations contacts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-amber-500 px-4 py-16 text-emerald-950 sm:px-6 sm:py-20 lg:px-[3%] lg:py-[11vh]">
          <div className="reveal-on-scroll mx-auto max-w-[1000px] text-center" data-reveal="scale">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em]">Investor Enquiries</p>
            <H2 className="text-3xl font-light uppercase leading-tight tracking-tighter sm:text-4xl lg:text-5xl">NEED CORPORATE OR INVESTOR INFORMATION?</H2>
            <p className="mx-auto mt-6 max-w-2xl text-[14px] font-light leading-7 text-emerald-950/75 sm:text-[15px]">
              Send your requirement to the investor-relations contact or speak with the Invade Machines team for the appropriate corporate information.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:ir@invadeagro.com" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-emerald-950 px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-white hover:text-emerald-950">
                Email Investor Relations <Mail size={16} />
              </a>
              <button type="button" onClick={() => setPage('contact')} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-emerald-950/20 px-7 py-3 text-[11px] font-bold uppercase tracking-widest transition-all hover:-translate-y-1 hover:border-emerald-950 hover:bg-emerald-950 hover:text-white">
                Contact Invade Machines <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 9. CONTACT PAGE 
// ---------------------------------------------------------
function ContactContent({ setPage, currentPage }) {
  usePageScroll(currentPage);

  const [formStatus, setFormStatus] = useState({
    type: 'idle',
    message: ''
  });

  const isSubmitting = formStatus.type === 'loading';

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      requirement: String(formData.get('requirement') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      website: String(formData.get('website') || '').trim()
    };

    setFormStatus({
      type: 'loading',
      message: 'Sending your enquiry…'
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const responseText = await response.text();
      let result = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          result = {};
        }
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
          'We could not send your enquiry. Please try again or email info@invademachines.com.'
        );
      }

      form.reset();
      setFormStatus({
        type: 'success',
        message: result.message || 'Thank you. Your enquiry has been sent successfully.'
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setFormStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again or email info@invademachines.com.'
      });
    }
  };
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="LET US UNDERSTAND"
        accent="YOUR NEEDS."
        description="Whether you need a special purpose machine, automated inspection line, robotic handling cell, packing system, process project, microscopy setup, or digital imaging solution, our team is ready to define the right architecture."
        image={IMAGES.contactHero}
        alt="Contact Invade Machines Limited"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-16 sm:py-20 lg:py-[12vh] xl:py-[15vh]">
        <section className="px-4 sm:px-6 lg:px-[3%] w-full flex flex-col justify-center relative overflow-hidden">
          <div className="site-shell max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-24 items-start">
              
              <div className="lg:w-[50%] w-full">
                <H3 className="text-3xl font-light uppercase tracking-widest text-emerald-900 mb-10">Send a Direct Enquiry</H3>
                <form className="relative space-y-8 w-full" onSubmit={handleContactSubmit} noValidate>
                   {/* Honeypot field: hidden from people, commonly completed by bots. */}
                   <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
                     <label htmlFor="contact-website">Website</label>
                     <input
                       id="contact-website"
                       name="website"
                       type="text"
                       tabIndex={-1}
                       autoComplete="off"
                     />
                   </div>

                   <div>
                     <label htmlFor="contact-name" className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">Full Name</label>
                     <input
                       id="contact-name"
                       name="name"
                       type="text"
                       required
                       maxLength={120}
                       autoComplete="name"
                       disabled={isSubmitting}
                       className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[16px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                       placeholder="John Doe"
                     />
                   </div>
                   <div>
                     <label htmlFor="contact-email" className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">Email Address</label>
                     <input
                       id="contact-email"
                       name="email"
                       type="email"
                       required
                       maxLength={180}
                       autoComplete="email"
                       inputMode="email"
                       disabled={isSubmitting}
                       className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[16px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                       placeholder="john@example.com"
                     />
                   </div>
                   <div>
                     <label htmlFor="contact-requirement" className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">System Requirement</label>
                     <input
                       id="contact-requirement"
                       name="requirement"
                       type="text"
                       required
                       maxLength={250}
                       disabled={isSubmitting}
                       className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[16px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
                       placeholder="SPMs, inspection, robotics, packing, process systems, microscopy..."
                     />
                   </div>
                   <div>
                     <label htmlFor="contact-message" className="block text-[12px] font-bold tracking-widest uppercase text-emerald-800/60 mb-3">Message</label>
                     <textarea
                       id="contact-message"
                       name="message"
                       required
                       minLength={10}
                       maxLength={5000}
                       disabled={isSubmitting}
                       className="w-full bg-white border border-emerald-200 rounded-xl px-5 py-4 text-[16px] text-emerald-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm h-36 resize-y disabled:cursor-not-allowed disabled:opacity-60"
                       placeholder="Tell us about the component, process, speed, checks, and expected output..."
                     ></textarea>
                   </div>

                   <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                     <button
                       type="submit"
                       disabled={isSubmitting}
                       className="bg-emerald-950 text-white px-12 py-4 text-[12px] font-bold tracking-widest uppercase rounded-xl hover:bg-amber-500 hover:text-emerald-950 transition-colors mt-2 w-full sm:w-auto shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                     >
                       {isSubmitting ? 'Sending…' : 'Submit Request'}
                     </button>

                     {isSubmitting && (
                       <span className="inline-flex items-center gap-2 text-[13px] text-emerald-800/70" aria-hidden="true">
                         <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-700/25 border-t-emerald-700" />
                         Please wait
                       </span>
                     )}
                   </div>

                   {formStatus.message && (
                     <div
                       role={formStatus.type === 'error' ? 'alert' : 'status'}
                       aria-live="polite"
                       className={`rounded-xl border px-5 py-4 text-[14px] leading-relaxed ${
                         formStatus.type === 'success'
                           ? 'border-emerald-200 bg-emerald-100 text-emerald-950'
                           : formStatus.type === 'error'
                             ? 'border-red-200 bg-red-50 text-red-700'
                             : 'border-amber-200 bg-amber-50 text-amber-900'
                       }`}
                     >
                       {formStatus.message}
                     </div>
                   )}
                </form>
              </div>

              <div className="lg:w-[50%] w-full bg-emerald-950 text-white rounded-xl p-6 sm:p-8 md:p-14 border border-emerald-900 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-800 rounded-xl blur-[120px] opacity-40 pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 rounded-xl blur-[100px] opacity-20 pointer-events-none"></div>

                 <div className="relative z-10 mb-12">
                   <img loading="eager" decoding="async" src={IMAGES.logo} alt="Invade Machines Limited" className="h-[77px] md:h-24 w-auto object-contain mb-6 drop-shadow-md opacity-90" />
                   <H1 className="text-3xl font-light mb-2">Invade Machines Limited</H1>
                   <p className="text-amber-500 text-[11px] font-bold tracking-widest uppercase">Corporate Directory</p>
                 </div>
                 
                 <div className="space-y-10 relative z-10">
                   <div className="flex items-start gap-6">
                     <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-sm text-amber-500">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <H4 className="text-xl font-bold mb-2">Headquarters</H4>
                       <p className="text-emerald-100 text-[15px] font-light leading-relaxed mb-1">
                         702, Solus Business Park, Hiranandani Estate,<br/>
                         Thane - 400607. <br/>
                         Maharashtra, BHARAT
                       </p>
                     </div>
                   </div>

                   <div className="w-full h-[1px] bg-white/10"></div>

                   <div className="flex items-start gap-6">
                     <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-sm text-amber-500">
                       <Mail size={20} />
                     </div>
                     <div>
                       <H4 className="text-xl font-bold mb-2">Direct Email</H4>
                       <a href="mailto:info@invademachines.com" className="text-emerald-100 text-[15px] font-light leading-relaxed hover:text-amber-400 transition-colors">
                         info@invademachines.com
                       </a>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      
        <PageDetailSections page="contact" setPage={setPage} />
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 13. DRONE TECHNOLOGY PAGE
// ---------------------------------------------------------
function DroneTechnologyContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="DRONE TECHNOLOGY"
        accent="AUTONOMOUS AERIAL ROBOTICS."
        description="High-precision UAV solutions for wind turbine blade inspection, transmission line diagnostics, solar farm surveys, agricultural assessment, and structural integrity analysis."
        image={IMAGES.droneHero}
        alt="Advanced quadcopter drone inspecting industrial site"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-12 sm:space-y-16 lg:space-y-20">
          
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:w-[50%]">
              <H2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Aerial Inspection <span className="font-light text-emerald-700">Reimagined.</span></H2>
              <p className="text-emerald-800/80 leading-relaxed mb-6">
                Invade Machines combines aerial drone platforms with advanced multispectral imaging, radiometric thermal payloads, and cloud-based analytics. We design and deliver complete autonomous workflows that inspect infrastructure without risking field personnel.
              </p>
              <p className="text-emerald-800/80 leading-relaxed">
                By utilizing centimeter-level RTK positioning and automated flight pipelines, our drones repeat identical flight paths periodically to provide reliable, multi-year structural and environmental health data.
              </p>
            </div>
            <div className="lg:w-[50%] w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden shadow-xl">
              <img loading="lazy" decoding="async" src={IMAGES.robotics} onError={handleImageError} className="w-full h-full object-cover" alt="Drone assembly and testing" />
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-emerald-200 pt-16">
            <div className="text-center mb-10 sm:mb-12 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Payloads & Systems</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                AERIAL DIAGNOSTICS.
              </H2>
            </div>
            
            <div className="horizontal-card-scroll mb-12">
                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Activity size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Thermal Diagnostics</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Equipped with radiometric infrared sensors to detect hot-spots, thermal shunts, and micro-cracks in solar arrays and electrical transmission lines.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Sub-0.05°C temperature sensitivity</li>
                    <li>• Dynamic temperature tracking overlays</li>
                    <li>• Automated anomaly report generation</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Eye size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Multispectral Mapping</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Specifically tuned multi-band cameras for agricultural health indices, vegetation mapping, and forest canopy analysis.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Normalized Difference Vegetation Index (NDVI)</li>
                    <li>• High-resolution multispectral sensors</li>
                    <li>• Seamless GIS software integration</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Cpu size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Autonomous Navigation</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Fully programmable flight routes with obstacle avoidance systems for complex industrial or tight environment maneuvering.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• RTK sub-centimeter waypoint accuracy</li>
                    <li>• LiDAR-based collision avoidance</li>
                    <li>• Fail-safe autonomous return-to-home</li>
                  </ul>
                </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 14. AUTOMOTIVE PAGE
// ---------------------------------------------------------
function AutomotiveContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="AUTOMOTIVE"
        accent="PRECISION QUALITY CONTROL."
        description="Automated inline quality control, robotic assembly inspection, 3D laser profiling, and non-contact sub-millimeter measurement systems for modern automotive manufacturing."
        image={IMAGES.automotiveHero}
        alt="Robotic arm scanning vehicle chassis"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-12 sm:space-y-16 lg:space-y-20">
          
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:w-[50%]">
              <H2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Intelligent Production <span className="font-light text-emerald-700">Floors.</span></H2>
              <p className="text-emerald-800/80 leading-relaxed mb-6">
                In modern automotive manufacturing, cycle times are measured in seconds. Invade Machines designs and integrates robotic vision systems that perform automated component checking, surface scanning, and dimensional verification on the fly.
              </p>
              <p className="text-emerald-800/80 leading-relaxed">
                By mounting high-resolution vision sensors on multi-axis industrial robots, we scan critical parameters at production speeds—detecting flaws, weld anomalies, and alignment issues before parts leave the assembly station.
              </p>
            </div>
            <div className="lg:w-[50%] w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden shadow-xl">
              <img loading="lazy" decoding="async" src={IMAGES.manufacturing} onError={handleImageError} className="w-full h-full object-cover" alt="Automotive assembly line" />
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-emerald-200 pt-16">
            <div className="text-center mb-10 sm:mb-12 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Inspection Technologies</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                PRODUCTION INTELLIGENCE.
              </H2>
            </div>
            
            <div className="horizontal-card-scroll mb-12">
                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><ScanLine size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Weld Seam Verification</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">High-speed laser profiling sensors that inspect weld bead geometries, checking for porosity, gaps, and volume deviations in real-time.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Real-time porosity and crack detection</li>
                    <li>• 3D profile triangulation scanners</li>
                    <li>• Instant line-stop control feedback</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Settings size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Dimensional Gauging</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Multi-sensor inspection frames to verify vehicle body-in-white (BiW) geometries and mounting configurations within sub-millimeter limits.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Sub-millimeter accuracy laser trackers</li>
                    <li>• Automated deviation heatmaps</li>
                    <li>• Statistical Process Control (SPC) sync</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Eye size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Surface Defect Scan</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Smart camera arrays powered by deep-learning models to scan painted surfaces for scratches, dust inclusions, or orange peel flaws.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• AI models trained on surface topologies</li>
                    <li>• Structured deflectometry lighting</li>
                    <li>• Automatic defect marking & categorization</li>
                  </ul>
                </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 15. GREEN ENERGY PAGE
// ---------------------------------------------------------
function GreenEnergyContent({ setPage, currentPage }) {
  usePageScroll(currentPage);
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="GREEN ENERGY"
        accent="SUSTAINABLE PROCESS AUTOMATION."
        description="Machine vision and sensor integration for wind turbine health monitoring, solar cell micro-defect detection, EV battery manufacturing inspection, and clean energy process optimization."
        image={IMAGES.greenEnergyHero}
        alt="Solar panel diagnostic inspection"
      />

      <main className="relative z-10 bg-emerald-50 rounded-t-xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-[10vh]">
        <div className="site-shell max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[3%] space-y-12 sm:space-y-16 lg:space-y-20">
          
          <section className="reveal-on-scroll flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:w-[50%]">
              <H2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Powering <span className="font-light text-emerald-700">Sustainability.</span></H2>
              <p className="text-emerald-800/80 leading-relaxed mb-6">
                Clean energy systems require severe structural integrity and maximum operational efficiency. Invade Machines integrates precision vision technology to automate the inspection of solar PV components, EV batteries, and composite turbine blades.
              </p>
              <p className="text-emerald-800/80 leading-relaxed">
                From manufacturing line quality gates that ensure EV battery layers are aligned perfectly, to field inspection drones that evaluate solar farms, we deliver precision systems that safeguard your green energy investments.
              </p>
            </div>
            <div className="lg:w-[50%] w-full h-[280px] sm:h-[350px] rounded-xl overflow-hidden shadow-xl">
              <img loading="lazy" decoding="async" src={IMAGES.integration} onError={handleImageError} className="w-full h-full object-cover" alt="Clean energy assembly" />
            </div>
          </section>

          <section className="reveal-on-scroll border-t border-emerald-200 pt-16">
            <div className="text-center mb-10 sm:mb-12 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Subsystems & Analytics</p>
              <H2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-emerald-950">
                CLEAN INFRASTRUCTURE.
              </H2>
            </div>
            
            <div className="horizontal-card-scroll mb-12">
                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Zap size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Electroluminescence</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">NIR cameras and power supply integrations to capture electroluminescence emissions, exposing micro-cracks and material defects.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Near-infrared (NIR) scientific sensors</li>
                    <li>• Micro-crack and shunt fault detection</li>
                    <li>• In-line cell and module level scanning</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Layers size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">EV Battery Inspection</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Sub-micron accuracy cameras that check battery layer coatings, jellyroll alignment, and electrode tab welding in cleanrooms.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• 3D laser profilers for electrode coatings</li>
                    <li>• High-magnification weld inspection</li>
                    <li>• Cleanroom class 10/100 compatible hardware</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 border border-black/5 mb-6"><Aperture size={28}/></div>
                  <H3 className="text-2xl font-medium text-emerald-950 mb-4">Blade Metrology</H3>
                  <p className="text-black/60 text-[14px] font-light leading-relaxed mb-6">Advanced scanning to inspect composite wind turbine blades during fabrication, checking for internal delamination or shape deviations.</p>
                  <ul className="space-y-2 text-[13px] text-black/50 font-light border-t border-black/5 pt-4">
                    <li>• Ultrasonic and optical scanner combination</li>
                    <li>• Large-volume 3D photogrammetry</li>
                    <li>• Automated structural defect detection</li>
                  </ul>
                </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
