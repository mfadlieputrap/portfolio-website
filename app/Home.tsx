"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";

// --- ANIMATION VARIANTS ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// --- DATA: PROJECTS ---
// Masukkan semua link GitHub dan Demo di sini.
const DATA_PROJECTS = [
  {
    title: "GhostLink — Zero-Knowledge Secure Messaging",
    // Deskripsi ini "menjual" fitur security & stack modern kamu
    desc: "End-to-end encrypted messaging platform with self-destruct mechanism. Features zero-knowledge architecture using Hybrid Encryption (AES-256 + PASETO v4), ensuring the server never sees the raw data.",
    // Tag teknologi yang kita pakai (Paseto & Cryptography itu keyword mahal!)
    tags: ["NestJS", "Next.js", "PostgreSQL", "PASETO", "Cryptography"], 
    demoUrl: "https://ghostlink-swart.vercel.app/", 
    repoUrl: "https://github.com/mfadlieputrap/ghostlink", 
    featured: true, 
    },
  {
    title: "PelamarID — Job Board Platform",
    desc: "Job discovery platform enabling seamless connection between companies and talent. Includes complex filtering and applicant tracking.",
    tags: ["Next.js", "PostgreSQL", "Kafka"],
    demoUrl: "https://pelamarid.vercel.app", // Link External
    repoUrl: "https://github.com/username/pelamarid",
  },
  {
    title: "Coffee Night — Business Landing",
    desc: "A focused landing page demo showing how lightweight frontend work can support real business needs.",
    tags: ["React", "Tailwind"],
    demoUrl: "/demo/coffee-night", 
    repoUrl: "https://github.com/username/coffee-night",
  },
  {
    title: "BersihKilat — Laundry Service",
    desc: "Service-based UMKM landing page focused on WhatsApp conversion and pricing clarity.",
    tags: ["Next.js", "Framer Motion"],
    demoUrl: "/demo/laundry-kiloan",
    repoUrl: "https://github.com/username/bersih-kilat",
  },
  {
    title: "Klinik Sehat Sentosa — Healthcare Service",
    desc: "Modern landing page for a medical clinic optimized for patient trust. Features doctor schedules, service catalog, and direct WhatsApp appointment booking.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoUrl: "/demo/klinik",
    repoUrl: "https://github.com/mfadlieputrap/klinik-medika",
  },
  {
    title: "Resilient Order Processing System — Event-Driven Microservices",
    desc: "A high-performance backend architecture using NestJS and Apache Kafka. Implements the Saga Pattern for distributed data consistency and proven to handle 1,000 concurrent users with 0% data loss during service failures.",
    tags: ["NestJS", "Apache Kafka", "Microservices", "PostgreSQL", "Docker"],
    demoUrl: '', 
    repoUrl: "https://github.com/mfadlieputrap/resilient-order-processing-system",
  },
  {
    title: "SyncBoard — Scalable Real-time Collaboration Platform",
    desc: "A Trello-like Kanban board engineered for high concurrency. Features a distributed WebSocket architecture using Redis Pub/Sub adapter for horizontal scaling, and implements the Lexorank algorithm to ensure O(1) complexity for drag-and-drop persistence.",
    tags: ["NestJS", "Next.js 15", "Socket.io", "Redis (Valkey)", "Docker"],
    demoUrl: '',
    repoUrl: "https://github.com/mfadlieputrap/syncboard-api",
  },
];

// --- DATA: SERVICES ---
const DATA_SERVICES = [
  {
    title: "Backend & API Development",
    desc: "Design and build scalable APIs, authentication systems, and backend foundations ready for production use.",
  },
  {
    title: "Product-Oriented Engineering",
    desc: "From MVPs to internal tools — I focus on building features that solve real problems, not just shipping code.",
  },
  {
    title: "Minimal Frontend Delivery",
    desc: "When needed, I ship clean and fast frontends that support the product flow without over-engineering.",
  },
];

const DATA_PROCESS = [
  "Problem Understanding",
  "System Design",
  "Build & Iterate",
  "Ship & Improve",
];

// --- MAIN PAGE COMPONENT ---
export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <p className="text-sm font-semibold tracking-tight">
            Fadlie — Backend Engineer
          </p>
          <nav className="hidden gap-6 text-sm text-neutral-400 md:flex">
            <a href="#work" className="transition-colors hover:text-white">Work</a>
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#process" className="transition-colors hover:text-white">Process</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Let’s Talk
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl"
        >
          I build reliable backend systems
          and ship <span className="text-neutral-300">real products</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="mt-6 max-w-xl text-neutral-400"
        >
          Backend-first engineer with a product mindset.
          I specialize in scalable backend systems, API reliability, and pragmatic engineering. 
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mt-10 flex gap-4"
        >
          <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200">
            View Work
          </a>
          <a href="#contact" className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 hover:bg-neutral-900">
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* WORK SECTION (UPDATED) */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20 scroll-mt-20">
        <h2 className="text-2xl font-semibold">Selected Work</h2>
        <p className="mt-2 max-w-lg text-sm text-neutral-400">
          Showcasing backend architectures and full-stack implementations.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {DATA_PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="border-t border-neutral-800 bg-neutral-900/30 py-20 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl font-semibold">How I Can Help</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DATA_SERVICES.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-20 scroll-mt-20">
        <h2 className="text-2xl font-semibold">Working Process</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {DATA_PROCESS.map((step, i) => (
            <div key={step} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-xs text-neutral-500">Step {i + 1}</p>
              <p className="mt-1 font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="border-t border-neutral-800 bg-neutral-950 py-20 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="max-w-xl text-3xl font-semibold">Ready to collaborate?</h2>
          <p className="mt-3 text-neutral-400">Let&apos;s discuss your system architecture or product idea.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/6283193452115" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800 py-8 text-center text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Fadlie. Built with Next.js.</p>
      </footer>
    </main>
  );
}

/* --------------------------------------------------------- */
/* ------------------- COMPONENTS -------------------------- */
/* --------------------------------------------------------- */

interface ProjectCardProps {
  title: string;
  desc: string;
  demoUrl?: string; // Boleh kosong
  repoUrl?: string; // Boleh kosong
  tags?: string[];
  featured?: boolean;
}

function ProjectCard({ title, desc, demoUrl, repoUrl, tags, featured }: ProjectCardProps) {
  // Cek apakah link demo itu internal (diawali /) atau external (http)
  const isInternalDemo = demoUrl?.startsWith("/");

  return (
    <article className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all hover:border-neutral-600 hover:shadow-lg hover:shadow-neutral-900/50">
      
      {/* Content Bagian Atas */}
      <div>
        <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
            {featured && (
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-500">
                    Featured
                </span>
            )}
        </div>
        
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{desc}</p>

        {/* Tags (Optional: Biar kelihatan tech stacknya) */}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded px-1.5 py-0.5 text-[10px] font-medium text-neutral-500 bg-neutral-800">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons (Footer Card) */}
      <div className="mt-8 flex items-center gap-3 border-t border-neutral-800 pt-4">
        {/* Tombol Demo */}
        {demoUrl && (
            isInternalDemo ? (
                <Link
                    href={demoUrl}
                    className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-950 transition hover:bg-white"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Live Demo
                </Link>
            ) : (
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-950 transition hover:bg-white"
                >
                    Live Demo ↗
                </a>
            )
        )}

        {/* Tombol GitHub */}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-xs font-medium text-neutral-300 transition hover:border-neutral-500 hover:bg-neutral-800 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            Source Code
          </a>
        )}
      </div>
    </article>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
      <p className="font-semibold text-neutral-100">{title}</p>
      <p className="mt-2 text-sm text-neutral-400">{desc}</p>
    </div>
  );
}

// --- ICONS (SVG) ---
// Kita buat komponen icon sendiri biar gak perlu install library tambahan
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}