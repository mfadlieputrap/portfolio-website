"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function LaundryDemo() {
    return (
        <main className="min-h-screen bg-sky-50 text-slate-900">
            {/* NAVBAR */}
            <header className="fixed top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
                    {/* BRAND */}
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-sky-700">
                            BersihKilat
                        </p>
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">
                            Buka
                        </span>
                    </div>

                    {/* NAV */}
                    <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
                        <a href="#pricing" className="hover:text-sky-600">
                            Harga
                        </a>
                        <a href="#testimoni" className="hover:text-sky-600">
                            Testimoni
                        </a>
                        <a href="#area" className="hover:text-sky-600">
                            Area
                        </a>
                    </nav>

                    {/* CTA */}
                    <a
                        href="https://wa.me/6281234567890"
                        className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-500"
                    >
                        WhatsApp
                    </a>
                </div>
            </header>

            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 pt-24 pb-20">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    {/* LEFT */}
                    <div>
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            className="text-4xl font-semibold leading-tight md:text-5xl"
                        >
                            Laundry numpuk
                            <span className="text-sky-600"> tapi nggak sempat nyuci?</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.1 }}
                            className="mt-6 max-w-xl text-slate-600"
                        >
                            BersihKilat Laundry melayani laundry kiloan cepat, bersih,
                            dan wangi. Cocok untuk anak kos, karyawan, dan keluarga
                            yang nggak mau ribet.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.2 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <a
                                href="https://wa.me/6281234567890"
                                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-500"
                            >
                                Pesan via WhatsApp
                            </a>
                            <a
                                href="#pricing"
                                className="rounded-full border border-slate-300 px-6 py-3 text-sm text-slate-700 hover:border-slate-500"
                            >
                                Lihat Harga
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT – DUMMY STORE */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.15 }}
                        className="relative"
                    >
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-sky-700">
                                    BersihKilat Laundry
                                </p>
                                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
                  Buka
                </span>
                            </div>

                            <p className="mt-2 text-sm text-slate-600">
                                Laundry kiloan cepat & terpercaya
                            </p>

                            <div className="mt-4 space-y-3">
                                <StoreItem label="Cuci + Kering" price="Rp 7.000 / kg" />
                                <StoreItem label="Cuci + Setrika" price="Rp 9.000 / kg" />
                                <StoreItem label="Express 6 Jam" price="Rp 12.000 / kg" />
                            </div>

                            <div className="mt-5 flex items-center justify-between">
                                <div className="flex items-center gap-1 text-yellow-400">
                                    ★★★★☆
                                    <span className="ml-1 text-xs text-slate-500">4.8</span>
                                </div>
                                <span className="text-xs text-slate-500">
                  120+ pelanggan
                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* VALUE */}
            <section className="border-t border-slate-200 bg-white py-16">
                <div className="mx-auto max-w-6xl grid gap-6 px-5 md:grid-cols-3">
                    <ValueCard
                        title="24 Jam Beres"
                        desc="Pakaian bersih tanpa nunggu lama."
                    />
                    <ValueCard
                        title="Gratis Antar-Jemput"
                        desc="Tinggal chat, kami yang jemput & antar."
                    />
                    <ValueCard
                        title="Bersih & Wangi"
                        desc="Dicuci terpisah, hasil lebih segar."
                    />
                </div>
            </section>

            {/* PRICING */}
            <section id="pricing" className="py-20">
                <div className="mx-auto max-w-6xl px-5">
                    <h2 className="text-2xl font-semibold">Layanan & Harga</h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <PriceCard
                            title="Cuci + Kering"
                            price="Rp 7.000 / kg"
                            desc="Pilihan hemat sehari-hari."
                        />
                        <PriceCard
                            highlight
                            title="Cuci + Setrika"
                            price="Rp 9.000 / kg"
                            desc="Rapi dan siap dipakai."
                        />
                        <PriceCard
                            title="Express 6 Jam"
                            price="Rp 12.000 / kg"
                            desc="Untuk kebutuhan mendesak."
                        />
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="border-t border-slate-200 bg-white py-20">
                <div className="mx-auto max-w-6xl px-5">
                    <h2 className="text-2xl font-semibold">
                        Apa kata pelanggan kami
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <TestimonialCard
                            name="Rina"
                            role="Mahasiswi"
                            review="Laundry-nya bersih, wangi, dan cepat. Cocok banget buat anak kos."
                        />
                        <TestimonialCard
                            name="Andi"
                            role="Karyawan"
                            review="Enak nggak perlu antri, tinggal WhatsApp langsung dijemput."
                        />
                        <TestimonialCard
                            name="Sari"
                            role="Ibu Rumah Tangga"
                            review="Hasil rapi, nggak bau apek. Sudah langganan."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-semibold">
                    Tinggal chat, kami jemput & beresin.
                </h2>
                <p className="mt-3 text-slate-600">
                    Biarkan kami urus laundry kamu.
                </p>

                <a
                    href="https://wa.me/6281234567890"
                    className="mt-8 inline-block rounded-full bg-sky-600 px-8 py-4 text-sm font-semibold text-white hover:bg-sky-500"
                >
                    Booking via WhatsApp
                </a>
            </section>
        </main>
    );
}

/* ---------- COMPONENTS ---------- */

function StoreItem({ label, price }: any) {
    return (
        <div className="flex items-center justify-between text-sm">
            <span>{label}</span>
            <span className="font-medium">{price}</span>
        </div>
    );
}

function ValueCard({ title, desc }: any) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-sky-50 p-5">
            <p className="font-semibold text-sky-700">{title}</p>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
        </div>
    );
}

function PriceCard({
                       title,
                       price,
                       desc,
                       highlight,
                   }: any) {
    return (
        <div
            className={`rounded-3xl border p-6 ${
                highlight
                    ? "border-sky-500 bg-sky-100"
                    : "border-slate-200 bg-white"
            }`}
        >
            <p className="font-semibold">{title}</p>
            <p className="mt-2 text-2xl font-semibold">{price}</p>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
        </div>
    );
}

function TestimonialCard({ name, role, review }: any) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-sky-50 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs text-slate-500">{role}</p>
                </div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
            </div>
            <p className="mt-4 text-sm text-slate-700">“{review}”</p>
        </div>
    );
}
