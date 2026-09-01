import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { projects } from './content'

gsap.registerPlugin(ScrollTrigger)

function useCinemaScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => { gsap.ticker.remove(tick); lenis.destroy() }
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  const nav = [['WORK', '#work'], ['ABOUT', '#about'], ['KERAWA', '#kerawa'], ['CONTACT', '#contact']]
  return <>
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Shawn home">SHAWN<span>®</span></Link>
      <nav aria-label="Main navigation">{nav.map(([label, href]) => <a key={label} href={`/${href}`}>{label}</a>)}</nav>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open}>{open ? 'CLOSE' : 'MENU'}</button>
    </header>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{clipPath:'inset(0 0 100% 0)'}} animate={{clipPath:'inset(0 0 0% 0)'}} exit={{clipPath:'inset(0 0 100% 0)'}} transition={{duration:.55,ease:[.76,0,.24,1]}}>
      {nav.map(([label, href], i) => <a key={label} href={`/${href}`}><small>0{i+1}</small>{label}</a>)}
    </motion.div>}</AnimatePresence>
  </>
}

function Home() {
  const root = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.credit-line > *', { yPercent: 120, duration: 1.2, stagger: .08, ease: 'power4.out', delay: .2 })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => gsap.fromTo(el, {clipPath:'inset(12% 0 12% 0)'}, {clipPath:'inset(0% 0 0% 0)', ease:'none', scrollTrigger:{trigger:el,start:'top 85%',end:'top 35%',scrub:1}}))
      gsap.utils.toArray<HTMLElement>('.project-title').forEach(el => gsap.from(el, {xPercent:-8, opacity:0, scrollTrigger:{trigger:el,start:'top 88%',end:'top 55%',scrub:.8}}))
    }, root)
    return () => ctx.revert()
  }, [])
  return <main ref={root}>
    <section className="opening" aria-label="Introduction">
      <div className="opening-image" />
      <div className="grain" />
      <div className="opening-top"><span>A FILM BY</span><span>KERAWA STUDIO</span></div>
      <div className="credit-line"><span>SHAWN</span></div>
      <div className="opening-bottom"><div><span>FILMMAKER</span><span>DIRECTOR</span></div><p>Stories live<br/>between frames.</p><span>SCROLL TO ENTER ↓</span></div>
    </section>

    <section className="intro" id="work">
      <p className="eyebrow">SELECTED WORK / 2024—26</p>
      <h1>Images made to<br/><em>stay with you.</em></h1>
      <p className="intro-note">A selection of films, music videos, campaigns and visual experiments.</p>
    </section>

    <section className="work-list">
      {projects.map((project, i) => <article className={`project project-${i+1} ${project.ratio}`} key={project.slug}>
        <Link to={`/work/${project.slug}`} className="project-media" data-reveal aria-label={`View ${project.title}`}>
          <img src={project.image} alt="Editorial placeholder — replace with project still" loading={i < 1 ? 'eager' : 'lazy'} />
          <span className="view-cue">VIEW FILM ↗</span>
        </Link>
        <div className="project-copy">
          <span className="project-index">({project.index})</span>
          <Link to={`/work/${project.slug}`} className="project-title">{project.title}</Link>
          <div className="project-meta"><span>{project.category}</span><span>{project.role}</span><span>{project.year}</span></div>
        </div>
      </article>)}
    </section>

    <section className="manifesto" id="about">
      <div className="manifesto-stamp">ABOUT / SHAWN</div>
      <blockquote>“I look for the moment<br/>before words arrive.”</blockquote>
      <div className="about-grid">
        <figure data-reveal><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=88" alt="Placeholder portrait on a film set" loading="lazy"/><figcaption>PORTRAIT PLACEHOLDER — SHAWN</figcaption></figure>
        <div className="about-copy"><p>Shawn is a filmmaker and director shaping stories through atmosphere, movement and human presence.</p><p className="placeholder-note">This biography is intentionally provisional. Replace it with Shawn’s own story, influences and verified filmography.</p><dl><div><dt>Based</dt><dd>Benin / France</dd></div><div><dt>Working in</dt><dd>Film, music, culture</dd></div><div><dt>Available for</dt><dd>Selected commissions</dd></div></dl></div>
      </div>
    </section>

    <section className="studio" id="kerawa">
      <div className="studio-number">K—01</div><p className="eyebrow">THE PRODUCTION HOUSE</p>
      <h2>KERAWA<br/><span>STUDIO</span></h2>
      <div className="studio-copy"><p>Kerawa Studio is Shawn’s creative home: a space for moving images, new voices and ambitious productions.</p><p className="placeholder-note">Studio services, team, clients and production details to be supplied.</p></div>
      <div className="ticker"><span>DEVELOPMENT · PRODUCTION · DIRECTION · POST-PRODUCTION · </span><span aria-hidden="true">DEVELOPMENT · PRODUCTION · DIRECTION · POST-PRODUCTION · </span></div>
    </section>

    <footer id="contact">
      <p className="eyebrow">END CREDITS / NEW BEGINNINGS</p><h2>LET’S MAKE<br/><em>SOMETHING.</em></h2>
      <div className="contact-row"><a href="mailto:hello@placeholder.com">HELLO@PLACEHOLDER.COM ↗</a><div><a href="#">INSTAGRAM ↗</a><a href="#">VIMEO ↗</a></div></div>
      <div className="end-note"><span>SHAWN / KERAWA STUDIO</span><span>© {new Date().getFullYear()}</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </main>
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <main className="not-found"><h1>Frame not found.</h1><Link to="/">Return home</Link></main>
  return <main className={`project-detail tone-${project.tone}`}>
    <section className="detail-title"><span>{project.index} / {project.year}</span><h1>{project.title}</h1><div><span>{project.category}</span><span>{project.role}</span><span>{project.location}</span></div></section>
    <figure className="detail-hero"><img src={project.image} alt="Editorial project placeholder"/><figcaption>PROJECT MEDIA PLACEHOLDER / 16:9</figcaption></figure>
    <section className="detail-statement"><p>DIRECTOR’S NOTE</p><blockquote>{project.statement}</blockquote></section>
    <section className="detail-stills"><figure><img src={project.altImage} alt="Editorial film still placeholder"/></figure><figure><img src={project.image} alt="Editorial film still placeholder"/></figure></section>
    <section className="credits"><h2>CREDITS</h2><dl><div><dt>Direction</dt><dd>Shawn</dd></div><div><dt>Production</dt><dd>Kerawa Studio</dd></div><div><dt>Cast / Crew</dt><dd>To be confirmed</dd></div><div><dt>Client</dt><dd>To be confirmed</dd></div></dl></section>
    <Link className="next-project" to={`/work/${projects[(projects.indexOf(project)+1)%projects.length].slug}`}><span>NEXT PROJECT</span><strong>{projects[(projects.indexOf(project)+1)%projects.length].title}</strong><span>→</span></Link>
  </main>
}

export default function App() {
  useCinemaScroll()
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return <><Header/><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.35}}><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/work/:slug" element={<ProjectDetail/>}/></Routes></motion.div></AnimatePresence></>
}
