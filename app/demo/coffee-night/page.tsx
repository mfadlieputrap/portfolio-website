"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-50">
            {/* NAVBAR */}
            <header className="sticky top-0 z-30 border-b border-zinc-800/60 bg-black/40 backdrop-blur">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-lg">
              ☕
            </span>
                        <div>
                            <p className="text-sm font-semibold tracking-tight">
                                Coffe Night Studio
                            </p>
                            <p className="text-xs text-zinc-400">
                                Landing Page untuk Coffee Shop
                            </p>
                        </div>
                    </div>

                    <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
                        <a href="#why" className="hover:text-amber-400 transition">
                            Kenapa Perlu
                        </a>
                        <a href="#demo" className="hover:text-amber-400 transition">
                            Demo
                        </a>
                        <a href="#pricing" className="hover:text-amber-400 transition">
                            Paket
                        </a>
                        <a href="#contact" className="hover:text-amber-400 transition">
                            Kontak
                        </a>
                    </nav>

                    <a
                        href="#contact"
                        className="rounded-full border border-amber-500/60 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-500/20 transition"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            </header>

            {/* HERO */}
            <section className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-16 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.4 }}
                        className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300/70"
                    >
                        Landing Page untuk Coffee Shop
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
                    >
                        Biar customer{" "}
                        <span className="text-amber-300">gampang order</span>,
                        bukan cuma lihat Instagram.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.5, delay: 0.12 }}
                        className="mt-5 text-sm text-zinc-300 md:text-base"
                    >
                        Coffe Night bantu coffee shop lokal punya landing page cepat & simpel
                        dengan menu, promo, dan tombol order langsung ke WhatsApp / GoFood —
                        tanpa ribet ngurus teknis.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.5, delay: 0.18 }}
                        className="mt-7 flex flex-wrap items-center gap-3"
                    >
                        <a
                            href="#demo"
                            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-amber-400 transition"
                        >
                            Lihat Contoh Landing Page
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-amber-400 hover:text-amber-300 transition"
                        >
                            Konsultasi Gratis via WhatsApp
                        </a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mt-6 flex flex-wrap gap-6 text-xs text-zinc-400"
                    >
                        <div>
                            <p className="font-semibold text-zinc-100">
                                Fokus coffee shop lokal
                            </p>
                            <p>Flow dibuat khusus buat cara orang beneran order kopi.</p>
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-100">
                                Siap dikembangkan backend
                            </p>
                            <p>Sudah terbayang struktur API & payment kalau mau naik level.</p>
                        </div>
                    </motion.div>
                </div>

                {/* SIDE CARD / MOCKUP */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 w-full md:mt-0 md:max-w-sm"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-xl shadow-amber-500/10">
                        <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Demo: Kopi Senja
              </span>
                            <span>Mobile-first</span>
                        </div>

                        <div className="space-y-4 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-4">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wide text-amber-400">
                                    Kopi Senja
                                </p>
                                <p className="mt-1 text-lg font-semibold">
                                    Cozy coffee shop di tengah kota.
                                </p>
                                <p className="mt-2 text-xs text-zinc-400">
                                    Landing page khusus menu, promo, dan tombol order WhatsApp.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-3 text-center text-xs">
                                <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                                    <p className="text-lg font-semibold text-amber-300">+32%</p>
                                    <p className="mt-1 text-[10px] text-zinc-400">
                                        Klik WhatsApp
                                    </p>
                                </div>
                                <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                                    <p className="text-lg font-semibold text-amber-300">1 Hal</p>
                                    <p className="mt-1 text-[10px] text-zinc-400">
                                        Semua info penting
                                    </p>
                                </div>
                                <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                                    <p className="text-lg font-semibold text-amber-300">3 hr</p>
                                    <p className="mt-1 text-[10px] text-zinc-400">
                                        Estimasi pengerjaan
                                    </p>
                                </div>
                            </div>

                            <button className="mt-1 w-full rounded-full bg-amber-500/90 py-2 text-xs font-semibold text-zinc-950 hover:bg-amber-400 transition">
                                Lihat detail demo
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* PROBLEM SECTION */}
            <section
                id="why"
                className="border-t border-zinc-900/80 bg-black/40 py-16"
            >
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-xl font-semibold md:text-2xl">
                        Masalah yang sering dialami coffee shop
                    </h2>
                    <p className="mt-2 max-w-xl text-sm text-zinc-300">
                        Bukan kurang konten, tapi customer bingung mau order dari mana.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {[
                            {
                                title: "Instagram rame, tapi order sedikit",
                                desc: "Feed bagus, tapi nggak ada satu tempat khusus yang jelasin menu, harga, dan cara order.",
                            },
                            {
                                title: "Customer sering tanya menu & harga",
                                desc: "Setiap hari balas chat yang sama: harga, varian, jam buka. Buang waktu dan energi.",
                            },
                            {
                                title: "Link berantakan di bio",
                                desc: "WhatsApp, GoFood, Maps, promo—semua tersebar, nggak rapi dalam satu alur.",
                            },
                            {
                                title: "Nggak punya website yang simpel",
                                desc: "Takut website terlalu rumit dan susah di-manage, padahal yang dibutuhin cuma satu halaman.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
                            >
                                <p className="text-sm font-medium text-zinc-50">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-xs text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION SECTION */}
            <section className="py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-xl font-semibold md:text-2xl">
                        Solusi sederhana, langsung kepakai
                    </h2>
                    <p className="mt-2 max-w-xl text-sm text-zinc-300">
                        Coffe Night bikin landing page 1 halaman yang fokus ke satu hal:
                        mempermudah orang order kopi dari coffee shop kamu.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {[
                            {
                                title: "Menu & best seller",
                                desc: "Tampilkan menu, harga, dan rekomendasi signature drink dengan rapi.",
                            },
                            {
                                title: "Tombol order jelas",
                                desc: "WhatsApp, GoFood, GrabFood, atau pesan langsung—semua dipandu di satu halaman.",
                            },
                            {
                                title: "Promo & voucher",
                                desc: "Section khusus promo biar gampang dishare ke story / broadcast.",
                            },
                            {
                                title: "Mobile-first",
                                desc: "Desain dioptimalkan buat HP, bukan layar besar doang.",
                            },
                            {
                                title: "Cepat & ringan",
                                desc: "Dibuat dengan Next.js, tanpa plugin berat yang nggak perlu.",
                            },
                            {
                                title: "Siap dikembangkan",
                                desc: "Backend & payment gateway bisa ditambahkan kapan saja kalau sudah ready.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4"
                            >
                                <p className="text-sm font-medium text-zinc-50">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-xs text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEMO PROJECT SECTION */}
            <section
                id="demo"
                className="border-y border-zinc-900/80 bg-zinc-950/50 py-16"
            >
                <div className="mx-auto max-w-5xl px-4">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-md">
                            <h2 className="text-xl font-semibold md:text-2xl">
                                Demo: <span className="text-amber-300">Kopi Senja</span>
                            </h2>
                            <p className="mt-2 text-sm text-zinc-300">
                                Contoh landing page untuk coffee shop yang fokus ke menu,
                                promo, dan tombol order. Bisa diadaptasi untuk brand kamu.
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                                <li>• Section hero dengan tagline & CTA WhatsApp</li>
                                <li>• Menu singkat (signature drink + harga)</li>
                                <li>• Section promo (Buy 1 Get 1 / seasonal)</li>
                                <li>• Lokasi, jam buka, dan link Maps</li>
                            </ul>
                            <p className="mt-4 text-xs text-zinc-400">
                                *Demo ini bisa dijadikan starting point, lalu disesuaikan dengan
                                branding & kebutuhan coffee shop kamu.
                            </p>
                        </div>

                        <div className="w-full md:max-w-sm">
                            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-4 shadow-lg shadow-amber-500/10">
                                {/* fake phone frame */}
                                <div className="mx-auto w-[240px] rounded-[2rem] border border-zinc-700 bg-black p-3">
                                    <div className="mb-3 flex justify-center">
                                        <div className="h-1 w-16 rounded-full bg-zinc-700" />
                                    </div>
                                    <div className="space-y-3 text-[10px]">
                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-wide text-amber-300">
                                                Kopi Senja
                                            </p>
                                            <p className="mt-1 text-xs text-zinc-100">
                                                Cozy coffee shop buat kerja & ngobrol santai.
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-zinc-900/80 p-2">
                                            <p className="text-[10px] font-medium text-zinc-100">
                                                Signature Menu
                                            </p>
                                            <div className="mt-1 space-y-1 text-[9px] text-zinc-300">
                                                <p>• Caramel Night Latte — 28K</p>
                                                <p>• Cold Brew Senja — 26K</p>
                                                <p>• Vanilla Oat White — 30K</p>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-zinc-900/80 p-2">
                                            <p className="text-[10px] font-medium text-zinc-100">
                                                Promo Minggu Ini
                                            </p>
                                            <p className="mt-1 text-[9px] text-zinc-300">
                                                Buy 1 Get 1 untuk semua menu latte, berlaku Senin–Kamis
                                                jam 14.00–17.00.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <button className="w-full rounded-full bg-amber-500 py-1 text-[10px] font-semibold text-zinc-950">
                                                Order via WhatsApp
                                            </button>
                                            <button className="w-full rounded-full border border-zinc-700 py-1 text-[10px] text-zinc-200">
                                                Lihat di Google Maps
                                            </button>
                                        </div>
                                        <p className="pt-1 text-center text-[8px] text-zinc-500">
                                            Dibuat oleh Coffe Night Studio
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-3 text-center text-[11px] text-zinc-400">
                                Demo ini bisa kamu pakai sebagai portfolio & contoh ke calon
                                klien coffee shop.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section id="pricing" className="py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="text-xl font-semibold md:text-2xl">
                        Paket landing page untuk coffee shop
                    </h2>
                    <p className="mt-2 max-w-xl text-sm text-zinc-300">
                        Simple, transparan, dan bisa dikembangkan kalau nanti mau tambah
                        fitur order & pembayaran online.
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        {/* BASIC */}
                        <div className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6">
                            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                                Basic
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-zinc-50">
                                Rp 750.000
                            </p>
                            <p className="mt-1 text-xs text-zinc-400">
                                Cocok untuk coffee shop yang butuh satu halaman rapi buat menu &
                                cara order.
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-zinc-300">
                                <li>• 1 halaman landing page</li>
                                <li>• Section menu & best seller</li>
                                <li>• Tombol order WhatsApp / GoFood</li>
                                <li>• Responsive (mobile-friendly)</li>
                                <li>• 1x revisi konten</li>
                            </ul>
                            <a
                                href="#contact"
                                className="mt-6 inline-flex items-center justify-center rounded-full border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-100 hover:border-amber-400 hover:text-amber-300 transition"
                            >
                                Diskusikan paket Basic
                            </a>
                        </div>

                        {/* PRO */}
                        <div className="relative flex flex-col rounded-3xl border border-amber-500/70 bg-zinc-950/80 p-6 shadow-xl shadow-amber-500/20">
              <span className="absolute right-5 top-5 rounded-full bg-amber-500 px-3 py-0.5 text-[10px] font-semibold text-zinc-950">
                Paling direkomendasikan
              </span>
                            <p className="text-xs font-medium uppercase tracking-wide text-amber-300">
                                Pro
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-amber-200">
                                Rp 1.500.000
                            </p>
                            <p className="mt-1 text-xs text-zinc-300">
                                Untuk coffee shop yang ingin serius mengarahkan traffic & promo
                                lewat website.
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-zinc-200">
                                <li>• Semua fitur paket Basic</li>
                                <li>• Section promo & voucher online</li>
                                <li>• Highlight event / live music / seasonal menu</li>
                                <li>• 2x revisi desain & konten</li>
                                <li>• Struktur siap dikembangkan ke sistem order</li>
                            </ul>
                            <a
                                href="#contact"
                                className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-amber-400 transition"
                            >
                                Diskusikan paket Pro
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section
                id="contact"
                className="border-t border-zinc-900/80 bg-black/50 py-16"
            >
                <div className="mx-auto max-w-5xl px-4">
                    <div className="max-w-xl">
                        <h2 className="text-xl font-semibold md:text-2xl">
                            Mau coffee shop kamu punya landing page seperti ini?
                        </h2>
                        <p className="mt-2 text-sm text-zinc-300">
                            Kirim detail singkat tentang coffee shop kamu. Saya akan bantu
                            rekomendasikan struktur landing page yang pas, tanpa komitmen di
                            awal.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-3 text-sm text-zinc-300">
                            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                                Info yang bisa kamu kirim:
                            </p>
                            <ul className="space-y-2 text-xs">
                                <li>• Nama coffee shop</li>
                                <li>• Lokasi</li>
                                <li>• Link Instagram (kalau ada)</li>
                                <li>• Mau fokus ke apa? (menu, promo, event, dll)</li>
                            </ul>
                        </div>

                        <div className="space-y-3 text-sm">
                            {/* GANTI NOMOR & EMAIL BERIKUT DENGAN PUNYA KAMU */}
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20Coffe%20Night%2C%20saya%20mau%20buat%20landing%20page%20untuk%20coffee%20shop."
                                target="_blank"
                                className="flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition"
                            >
                                Chat via WhatsApp
                            </a>
                            <a
                                href="mailto:youremail@example.com?subject=Landing%20Page%20Coffee%20Shop&body=Halo%2C%20saya%20tertarik%20buat%20landing%20page%20untuk%20coffee%20shop."
                                className="flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-xs font-medium text-zinc-100 hover:border-amber-400 hover:text-amber-300 transition"
                            >
                                Kirim brief via email
                            </a>
                            <p className="text-[11px] text-zinc-500">
                                *Saya akan balas secepat mungkin. Bisa call singkat 10–15 menit
                                kalau perlu diskusi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-zinc-900/80 bg-black py-6">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-[11px] text-zinc-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Coffe Night Studio. Dibuat dengan
                        Next.js.
                    </p>
                    <p>Fokus ke coffee shop & bisnis kecil lokal.</p>
                </div>
            </footer>
        </main>
    );
}
