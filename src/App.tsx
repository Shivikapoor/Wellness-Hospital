import { ArrowUpRight, CalendarDays, Check, ChevronDown, Menu, Play, ShieldCheck, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';
import FeaturesCards from '@/components/ui/feature-shader-cards';

const testimonials = [
  { name: 'Maya Patel', role: 'Client, 2 years', body: 'I finally feel like my care has a clear rhythm. My counsellor and I are always on the same page.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face', tone: 'coral' },
  { name: 'Daniel Brooks', role: 'Client, 8 months', body: 'The little check-ins help me notice patterns before they become overwhelming.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face', tone: 'blue' },
  { name: 'Sofia Williams', role: 'Client, 1 year', body: 'Booking a session takes seconds, and the reminders mean I never lose momentum.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face', tone: 'yellow' },
  { name: 'Aiden Clarke', role: 'Client, 5 months', body: 'It feels private, calm and genuinely made for the way real life works.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face', tone: 'green' },
  { name: 'Leah Morgan', role: 'Client, 3 years', body: 'The mood tracker helped me turn vague feelings into useful conversations.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face', tone: 'blue' },
  { name: 'Noah Bennett', role: 'Client, 10 months', body: 'I can reach my counsellor when I need support without adding more friction to my day.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face', tone: 'coral' },
  { name: 'Amara Johnson', role: 'Client, 1 year', body: 'Seeing my progress over time has made the work feel encouraging and real.', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop&crop=face', tone: 'green' },
  { name: 'Ethan Reed', role: 'Client, 7 months', body: 'The video sessions are reliable, and I never have to search through old messages.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=face', tone: 'yellow' },
  { name: 'Priya Shah', role: 'Client, 2 years', body: 'Wellness Hub makes my appointments feel like a part of my routine, not another task.', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&h=120&fit=crop&crop=face', tone: 'coral' },
  { name: 'Lucas Martin', role: 'Client, 4 months', body: 'My counsellor has more context, so our sessions get to the meaningful part faster.', img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=120&h=120&fit=crop&crop=face', tone: 'blue' },
  { name: 'Chloe Evans', role: 'Client, 9 months', body: 'The gentle reminders keep me consistent without ever feeling intrusive.', img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=120&h=120&fit=crop&crop=face', tone: 'yellow' },
  { name: 'Marcus Lee', role: 'Client, 18 months', body: 'It is reassuring to have one calm place for messages, sessions and reflections.', img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=120&h=120&fit=crop&crop=face', tone: 'green' },
  { name: 'Grace Turner', role: 'Client, 6 months', body: 'I feel more involved in my own care, and that has changed how I show up for it.', img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=120&h=120&fit=crop&crop=face', tone: 'coral' },
];

function TestimonialCard({ review }: { review: (typeof testimonials)[number] }) {
  return (
    <Card className={`review-card review-card--${review.tone}`}>
      <CardContent className="review-card__content">
        <div className="review-card__person">
          <Avatar className="size-9 ring-2 ring-white/80">
            <AvatarImage src={review.img} alt={review.name} />
            <AvatarFallback>{review.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="review-card__name">{review.name}</p>
            <p className="review-card__role">{review.role}</p>
          </div>
          <span className="review-card__check"><Check size={12} strokeWidth={3} /></span>
        </div>
        <blockquote>“{review.body}”</blockquote>
      </CardContent>
    </Card>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Wellness Hub home">
          <span className="brand-mark"><Sparkles size={15} fill="currentColor" /></span>
          <span>Wellness <strong>Hospitals</strong></span>
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#features">How it works</a>
          <a href="#stories">Patient stories</a>
          <a href="#professionals">For counsellors</a>
          <a href="#about">About us</a>
          <button className="nav-login">Log in <ArrowUpRight size={15} /></button>
          <a href="#get-started" className="button button--nav">Get started <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <h1>Centralized Care for <em>Doctors </em> and clients.</h1>
          <p className="hero-description">Book appointments, consult with doctors, access your medical reports, and stay on top of your healthcare—all from one secure platform.</p>
          <div className="hero-actions" id="get-started">
            <a className="button button--primary" href="#features">Explore features <ArrowUpRight size={17} /></a>
           
          </div>
          <div className="proof-row">
            <div><strong>7<span>+</span></strong><small>Core workflows</small></div>
            <div><strong>24/7</strong><small>Client access</small></div>
            <div><strong>100<span>%</span></strong><small>Human-led care</small></div>
          </div>
        </div>

        <div className="hero-visual hero-visual--background" id="stories" aria-label="Patient reviews scrolling in a three-dimensional display">
          <div className="visual-orbit visual-orbit--one" />
          <div className="visual-orbit visual-orbit--two" />
          <div className="visual-label"><span className="live-dot" /> Live patient stories</div>
          <div className="marquee-stage">
            <div className="marquee-track">
              <Marquee vertical pauseOnHover repeat={2} className="marquee-column marquee-column--left" ariaLabel="Patient reviews">
                {testimonials.map((review) => <TestimonialCard key={`left-${review.name}`} review={review} />)}
              </Marquee>
              <Marquee vertical pauseOnHover reverse repeat={2} className="marquee-column marquee-column--right" ariaLabel="Patient reviews">
                {testimonials.map((review) => <TestimonialCard key={`right-${review.name}`} review={review} />)}
              </Marquee>
              <Marquee vertical pauseOnHover repeat={2} className="marquee-column marquee-column--third" ariaLabel="Patient reviews">
                {testimonials.map((review) => <TestimonialCard key={`third-${review.name}`} review={review} />)}
              </Marquee>
            </div>
          </div>
          <div className="visual-fade visual-fade--top" />
          <div className="visual-fade visual-fade--bottom" />
          <div className="visual-note"><ShieldCheck size={14} /> Private by design</div>
        </div>
      </section>

      <section className="care-strip container" id="care">
        <div className="care-strip__intro"><span>One connected space</span><h2>Less admin.<br /><strong>More presence.</strong></h2></div>
        <div className="care-item"><span className="care-icon care-icon--blue"><CalendarDays size={18} /></span><div><strong>Appointments</strong><p>Simple scheduling for every care journey.</p></div></div>
        <div className="care-item"><span className="care-icon care-icon--coral"><ShieldCheck size={18} /></span><div><strong>Secure & human</strong><p>Designed around trust, privacy and connection.</p></div></div>
        <div className="care-item"><span className="care-icon care-icon--yellow"><Sparkles size={18} /></span><div><strong>Small steps, visible</strong><p>Progress tools that make growth feel tangible.</p></div></div>
      </section>

      <FeaturesCards />

      <footer className="footer container" id="about"><span>© 2024 Wellness Hub</span><span>Care, connected.</span><span>Made for better conversations.</span></footer>
    </main>
  );
}

export default App;
