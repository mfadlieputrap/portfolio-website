"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function PortfolioHome() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100">
            {/* HEADER */}
            <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                    <p className="text-sm font-semibold tracking-tight">
                        Fadlie — Backend Engineer
                    </p>
                    <nav className="hidden gap-6 text-sm text-neutral-400 md:flex">
                        <a href="#work" className="hover:text-white">Work</a>
                        <a href="#services" className="hover:text-white">Services</a>
                        <a href="#process" className="hover:text-white">Process</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </nav>
                    <a
                        href="#contact"
                        className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-neutral-200"
                    >
                        Let’s Talk
                    </a>
                </div>
            </header>

            {/* HERO */}
            <section className="scroll-mt-24 mx-auto max-w-6xl px-5 pb-24 pt-20">
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
                    I focus on scalable APIs, clean system design, and occasionally build
                    modern, minimal frontends to make products usable — not just impressive.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.2 }}
                    className="mt-10 flex gap-4"
                >
                    <a
                        href="#work"
                        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 hover:border-neutral-500"
                    >
                        Contact Me
                    </a>
                </motion.div>

                <p className="mt-6 text-xs text-neutral-500">
                    Backend · APIs · Product Engineering · Lightweight Frontends
                </p>
            </section>

            {/* WORK */}
            <section id="work" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20">
                <h2 className="text-2xl font-semibold">Selected Work</h2>
                <p className="mt-2 max-w-lg text-sm text-neutral-400">
                    A small set of projects showcasing how I think about systems, products,
                    and real-world usage.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <WorkCard
                        title="Coffee Night — Business Landing Page Demo"
                        desc="A focused landing page demo showing how lightweight frontend work can support real business needs like ordering and promotion."
                        link="/demo/coffee-night"
                    />

                    <WorkCard
                        title="BersihKilat Laundry — UMKM Service Landing Page"
                        desc="Service-based UMKM landing page demo focused on WhatsApp conversion, pricing clarity, and customer trust."
                        link="/demo/laundry-kiloan"
                    />

                    <WorkCard
                        title="KlinikSehat Plus — Healthcare Clinic Landing Page"
                        desc="Modern clinic landing page with appointment booking, doctor profiles, service catalog, and patient testimonials for healthcare trust."
                        link="/demo/klinik"
                    />

                    <WorkCard
                        title="Velocity — Modern Company Profile Landing Page"
                        desc="Premium company profile with interactive animations, feature showcases, pricing tiers, and team collaboration focus for B2B SaaS."
                        link="/demo/company-profile"
                    />

                    <ExternalWorkCard
                        title="PelamarID — Job Board Startup"
                        desc="An early-stage job board startup built to simplify job discovery in Indonesia. Currently shipping a landing page MVP while core backend features are under development."
                        href="https://pelamarid.vercel.app"
                        note="Founder project · MVP stage"
                    />
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="scroll-mt-24 border-t border-neutral-800 bg-neutral-900/30 py-20">
                <div className="mx-auto max-w-6xl px-5">
                    <h2 className="text-2xl font-semibold">How I Can Help</h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <ServiceCard
                            title="Backend & API Development"
                            desc="Design and build scalable APIs, authentication systems, and backend foundations ready for production use."
                        />
                        <ServiceCard
                            title="Product-Oriented Engineering"
                            desc="From MVPs to internal tools — I focus on building features that solve real problems, not just shipping code."
                        />
                        <ServiceCard
                            title="Minimal Frontend Delivery"
                            desc="When needed, I ship clean and fast frontends that support the product flow without over-engineering."
                        />
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section id="process" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20">
                <h2 className="text-2xl font-semibold">Working Process</h2>

                <div className="mt-10 grid gap-6 md:grid-cols-4">
                    {["Problem Understanding", "System Design", "Build & Iterate", "Ship & Improve"].map(
                        (step, i) => (
                            <div
                                key={step}
                                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5"
                            >
                                <p className="text-xs text-neutral-500">Step {i + 1}</p>
                                <p className="mt-1 font-semibold">{step}</p>
                                <p className="mt-2 text-xs text-neutral-400">
                                    Clear and predictable steps with a focus on long-term maintainability.
                                </p>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="scroll-mt-24 border-t border-neutral-800 bg-neutral-950 py-20">
                <div className="mx-auto max-w-6xl px-5">
                    <h2 className="max-w-xl text-3xl font-semibold">
                        Want to build something solid?
                    </h2>
                    <p className="mt-3 max-w-xl text-neutral-400">
                        Share a brief description of your idea or system.
                        I’ll help you assess the right technical direction and next steps.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://wa.me/6283193452115"
                            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                        >
                            Chat on WhatsApp
                        </a>
                        <a
                            href="mailto:mfadlieputrap@gmail.com"
                            className="rounded-full border border-neutral-700 px-6 py-3 text-sm text-neutral-200 hover:border-neutral-500"
                        >
                            Send an Email
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
                © {new Date().getFullYear()} Fadlie. Built with Next.js.
            </footer>
        </main>
    );
}

/* ---------- Components ---------- */

function WorkCard({ title, desc, link }: any) {
    return (
        <Link
            href={link}
            className="group rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-600"
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{desc}</p>
            <p className="mt-4 text-sm font-medium text-neutral-300 group-hover:underline">
                View Project →
            </p>
        </Link>
    );
}

function ServiceCard({ title, desc }: any) {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <p className="font-semibold">{title}</p>
            <p className="mt-2 text-sm text-neutral-400">{desc}</p>
        </div>
    );
}

function ExternalWorkCard({ title, desc, href, note }: any) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-600"
        >
            {note && (
                <span className="absolute right-4 top-4 rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] text-neutral-300">
                    {note}
                </span>
            )}
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{desc}</p>
            <p className="mt-4 text-sm font-medium text-neutral-300 group-hover:underline">
                Visit Website →
            </p>
        </a>
    );
}
