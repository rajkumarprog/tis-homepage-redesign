"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Trophy,
  Users,
  Building2,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Experience", href: "#experience" },
  { label: "Stories", href: "#stories" },
];

const stats = [
  { value: "22+", label: "Acres of Campus", icon: Building2 },
  { value: "16+", label: "Sports & Activities", icon: Trophy },
  { value: "20+", label: "Years of Excellence", icon: GraduationCap },
  { value: "1:15", label: "Student Teacher Ratio", icon: Users },
];

const programs = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "A learning environment that encourages curiosity, independent thinking and a global outlook.",
  },
  {
    number: "02",
    title: "Beyond Classrooms",
    description:
      "Sports, arts, activities and experiences designed to help every student discover their strengths.",
  },
  {
    number: "03",
    title: "Future Ready",
    description:
      "Students develop confidence, communication and skills for an evolving world.",
  },
];

const testimonials = [
  {
    quote:
      "TIS has created an environment where children can learn, explore and grow with confidence.",
    name: "TIS Parent",
    role: "Parent Community",
  },
  {
    quote:
      "The combination of academics, sports and activities gives students a truly well-rounded experience.",
    name: "TIS Family",
    role: "School Community",
  },
  {
    quote:
      "The school encourages students to become curious learners and responsible individuals.",
    name: "TIS Parent",
    role: "Parent Community",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
      <span className="h-px w-8 bg-amber-600" />
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#14261d]">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-amber-500"
      />

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#10251c]/90 px-5 py-3 text-white shadow-xl backdrop-blur-xl md:px-7">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-serif text-lg font-bold text-[#10251c]">
              T
            </div>
            <div>
              <div className="font-serif text-lg font-bold leading-none">
                TULAS
              </div>
              <div className="text-[9px] tracking-[0.2em] text-white/60">
                INTERNATIONAL SCHOOL
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-amber-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#contact"
              className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-[#10251c] transition-transform hover:scale-105"
            >
              Admissions
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-4 mt-2 rounded-3xl bg-[#10251c] p-5 text-white shadow-2xl md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-4"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-full bg-amber-400 px-5 py-3 text-center font-bold text-[#10251c]"
            >
              Admissions
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#10251c] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#10251c] via-[#10251c]/90 to-[#10251c]/35" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36 md:px-10">
          <div className="max-w-4xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Tulas International School
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
                Where curiosity
                <span className="block text-amber-300">
                  meets possibility.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                An environment where students learn, explore and grow into
                confident individuals ready to make a difference in the world.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-bold text-[#10251c] transition-all hover:gap-5 hover:bg-amber-300"
                >
                  Explore TIS
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#about"
                  className="flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                >
                  Discover our story
                </a>
              </div>
            </Reveal>
          </div>

          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/50 md:flex"
          >
            Scroll to explore
            <ChevronDown size={18} />
          </motion.a>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[#14261d]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
                className="border-r border-[#14261d]/10 last:border-r-0"
              >
                <div className="p-7 md:p-10">
                  <Icon size={23} className="mb-6 text-amber-600" />
                  <div className="font-serif text-4xl font-bold md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem]">
              <div
                className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85')",
                }}
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-[#10251c]/90 p-5 text-white backdrop-blur">
                <div className="font-serif text-2xl font-bold">20+</div>
                <div className="text-xs text-white/60">
                  years of excellence
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <SectionLabel>About TIS</SectionLabel>

              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Education that goes
                <span className="block text-amber-600">
                  beyond the classroom.
                </span>
              </h2>

              <p className="mt-7 leading-8 text-slate-600">
                Tulas International School creates an engaging environment
                where academic learning is combined with experiences that
                develop confidence, creativity and character.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                From academics and sports to arts and activities, students are
                encouraged to discover their potential and become lifelong
                learners.
              </p>

              <a
                href="#academics"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#10251c] transition hover:gap-4"
              >
                Discover the TIS experience
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACADEMICS */}
      <section
        id="academics"
        className="bg-[#10251c] px-6 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Our approach</SectionLabel>
            <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-end">
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Building minds.
                <span className="block text-amber-300">Building futures.</span>
              </h2>
              <p className="max-w-xl leading-7 text-white/60">
                A balanced approach to education helps students develop
                knowledge, confidence, creativity and the ability to think
                independently.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
            {programs.map((program, index) => (
              <Reveal key={program.number} delay={index * 0.1}>
                <div className="group h-full bg-[#10251c] p-8 transition-colors hover:bg-[#193629] md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-amber-300">
                      {program.number}
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-white/30 transition-transform group-hover:translate-x-2 group-hover:text-amber-300"
                    />
                  </div>

                  <h3 className="mt-20 font-serif text-2xl md:text-3xl">
                    {program.title}
                  </h3>

                  <p className="mt-5 leading-7 text-white/55">
                    {program.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Life at TIS</SectionLabel>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              Learning happens
              <span className="text-amber-600"> everywhere.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div
                className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=85')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Campus
                  </span>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                    Space to explore.
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                    A vibrant campus designed to support learning,
                    collaboration and discovery.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              <Reveal delay={0.1}>
                <div className="rounded-[2rem] bg-amber-100 p-8">
                  <Trophy className="text-amber-700" size={28} />
                  <h3 className="mt-12 font-serif text-3xl">
                    Sport & wellness
                  </h3>
                  <p className="mt-3 leading-6 text-slate-600">
                    Develop teamwork, discipline and confidence beyond the
                    classroom.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-[2rem] bg-[#dfe8df] p-8">
                  <Users className="text-[#10251c]" size={28} />
                  <h3 className="mt-12 font-serif text-3xl">
                    Community
                  </h3>
                  <p className="mt-3 leading-6 text-slate-600">
                    A supportive environment where students and families grow
                    together.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="stories" className="bg-[#e8e4d8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Stories from our community</SectionLabel>
            <h2 className="font-serif text-4xl md:text-6xl">
              Voices of <span className="text-amber-700">TIS.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.quote} delay={index * 0.1}>
                <article className="h-full rounded-[2rem] bg-white p-8 shadow-sm md:p-9">
                  <div className="text-5xl font-serif text-amber-500">“</div>
                  <p className="mt-2 leading-7 text-slate-700">
                    {item.quote}
                  </p>
                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <div className="font-bold">{item.name}</div>
                    <div className="mt-1 text-sm text-slate-500">
                      {item.role}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#10251c] px-7 py-16 text-center text-white md:px-16 md:py-24">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative">
              <SectionLabel>Begin the journey</SectionLabel>

              <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
                Give your child a place
                <span className="block text-amber-300">
                  to discover more.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl leading-7 text-white/60">
                Discover the Tulas International School experience and take the
                next step towards your child&apos;s future.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://tis.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 font-bold text-[#10251c] transition hover:bg-amber-300"
                >
                  Visit TIS
                  <ArrowRight size={18} />
                </a>

                <a
                  href="mailto:info@tis.edu.in"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
                >
                  Contact Admissions
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1913] px-6 py-14 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-serif font-bold text-[#10251c]">
                T
              </div>
              <div>
                <div className="font-serif text-lg font-bold">TULAS</div>
                <div className="text-[9px] tracking-[0.2em] text-white/40">
                  INTERNATIONAL SCHOOL
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/45">
              Nurturing confident learners through academic excellence,
              experiences and a supportive community.
            </p>
          </div>

          <div>
            <div className="mb-5 text-sm font-bold uppercase tracking-wider text-amber-300">
              Explore
            </div>
            <div className="grid gap-3 text-sm text-white/55">
              <a href="#about" className="hover:text-white">
                About TIS
              </a>
              <a href="#academics" className="hover:text-white">
                Academics
              </a>
              <a href="#experience" className="hover:text-white">
                Campus Life
              </a>
              <a href="#stories" className="hover:text-white">
                Stories
              </a>
            </div>
          </div>

          <div>
            <div className="mb-5 text-sm font-bold uppercase tracking-wider text-amber-300">
              Contact
            </div>

            <div className="grid gap-4 text-sm text-white/55">
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-amber-300" />
                <span>Tulas International School</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="shrink-0 text-amber-300" />
                <span>Contact the admissions team</span>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="shrink-0 text-amber-300" />
                <span>info@tis.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/30">
          © {new Date().getFullYear()} Tulas International School. Homepage
          redesign assessment.
        </div>
      </footer>
    </main>
  );
}