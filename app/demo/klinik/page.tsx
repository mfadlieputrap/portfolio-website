"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Stethoscope, Activity, Clock, Users, Phone, ChevronRight, Star, Check } from "lucide-react";

interface ScheduleItemProps {
    day: string;
    time: string;
    active: boolean;
    closed: boolean;
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function ClinicDemo() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 text-slate-900">
            {/* NAVBAR */}
            <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
                            <Heart className="h-5 w-5 text-white" fill="white" />
                        </div>
                        <div>
                            <p className="text-base font-bold text-teal-700">Klinik Sehat Sentosa</p>
                            <p className="text-xs text-slate-500">Your Health Partner</p>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
                        <a href="#layanan" className="transition hover:text-teal-600">Layanan</a>
                        <a href="#dokter" className="transition hover:text-teal-600">Dokter</a>
                        <a href="#jadwal" className="transition hover:text-teal-600">Jadwal</a>
                        <a href="#testimoni" className="transition hover:text-teal-600">Testimoni</a>
                    </nav>

                    <a
                        href="https://wa.me/6281234567890"
                        className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105"
                    >
                        <Phone className="h-4 w-4" />
                        <span>Booking</span>
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                </div>
            </header>

            {/* HERO */}
            <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl"></div>
                <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl"></div>
                
                <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700"
                        >
                            <Activity className="h-4 w-4" />
                            Klinik Terpercaya & Profesional
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            className="text-5xl font-bold leading-tight lg:text-6xl"
                        >
                            Pelayanan Kesehatan yang
                            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> Aman & Menenangkan</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.1 }}
                            className="mt-6 text-lg leading-relaxed text-slate-600"
                        >
                            Klinik Sehat Sentosa melayani pemeriksaan dan konsultasi kesehatan umum
                            dengan tenaga medis berpengalaman, suasana nyaman, dan proses
                            pendaftaran yang sederhana.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.2 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <a
                                href="https://wa.me/6281234567890"
                                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-teal-500/30 transition hover:shadow-2xl hover:shadow-teal-500/40 hover:scale-105"
                            >
                                Booking Sekarang
                                <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#layanan"
                                className="flex items-center gap-2 rounded-full border-2 border-teal-300 bg-white px-8 py-4 text-base font-semibold text-teal-700 transition hover:border-teal-400 hover:bg-teal-50"
                            >
                                Lihat Layanan
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                            className="mt-12 grid grid-cols-3 gap-6"
                        >
                            <motion.div variants={fadeUp} className="text-center">
                                <p className="text-3xl font-bold text-teal-600">500+</p>
                                <p className="mt-1 text-sm text-slate-600">Pasien Puas</p>
                            </motion.div>
                            <motion.div variants={fadeUp} className="text-center">
                                <p className="text-3xl font-bold text-teal-600">5+</p>
                                <p className="mt-1 text-sm text-slate-600">Tahun Pengalaman</p>
                            </motion.div>
                            <motion.div variants={fadeUp} className="text-center">
                                <p className="text-3xl font-bold text-teal-600">24/7</p>
                                <p className="mt-1 text-sm text-slate-600">Konsultasi Online</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-100 to-cyan-100 p-8 shadow-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-32 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur">
                                        <Stethoscope className="h-8 w-8 text-teal-600" />
                                        <p className="mt-2 text-sm font-semibold text-slate-700">Pemeriksaan Menyeluruh</p>
                                    </div>
                                    <div className="h-40 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur">
                                        <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                                        <p className="mt-2 text-sm font-semibold text-slate-700">Perawatan Terbaik</p>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-40 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur">
                                        <Activity className="h-8 w-8 text-cyan-600" />
                                        <p className="mt-2 text-sm font-semibold text-slate-700">Monitoring Kesehatan</p>
                                    </div>
                                    <div className="h-32 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur">
                                        <Users className="h-8 w-8 text-teal-600" />
                                        <p className="mt-2 text-sm font-semibold text-slate-700">Tim Profesional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LAYANAN */}
            <section
                id="layanan"
                className="scroll-mt-24 bg-white/50 backdrop-blur py-20"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-slate-900">
                            Layanan <span className="text-teal-600">Klinik Kami</span>
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Pelayanan kesehatan terlengkap untuk keluarga Anda
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <ServiceCard
                            icon={<Stethoscope className="h-8 w-8" />}
                            title="Pemeriksaan Umum"
                            desc="Cek kesehatan dan konsultasi langsung dengan dokter berpengalaman."
                            color="teal"
                        />
                        <ServiceCard
                            icon={<Heart className="h-8 w-8" />}
                            title="Konsultasi Kesehatan"
                            desc="Keluhan ringan hingga kontrol rutin dengan penanganan maksimal."
                            color="rose"
                        />
                        <ServiceCard
                            icon={<Activity className="h-8 w-8" />}
                            title="Pemeriksaan Lab"
                            desc="Pemeriksaan tekanan darah, gula darah, dan lab dasar dengan hasil cepat."
                            color="cyan"
                        />
                    </motion.div>
                </div>
            </section>

            {/* DOKTER */}
            <section
                id="dokter"
                className="scroll-mt-24 bg-gradient-to-br from-teal-50 to-cyan-50 py-20"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-slate-900">
                            Tim <span className="text-teal-600">Dokter Profesional</span>
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Berpengalaman & berdedikasi untuk kesehatan Anda
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mt-16 grid gap-8 md:grid-cols-2"
                    >
                        <DoctorCard
                            name="dr. Andi Pratama"
                            role="Dokter Umum"
                            desc="Berpengalaman menangani pasien dewasa & anak dengan pendekatan holistik."
                            specialties={["Kesehatan Umum", "Pediatri", "Geriatri"]}
                        />
                        <DoctorCard
                            name="dr. Rina Kusuma"
                            role="Dokter Umum"
                            desc="Ramah, teliti, dan komunikatif dalam memberikan pelayanan terbaik."
                            specialties={["Konsultasi Kesehatan", "Penyakit Dalam", "Preventif"]}
                        />
                    </motion.div>
                </div>
            </section>

            {/* JADWAL */}
            <section
                id="jadwal"
                className="scroll-mt-24 bg-white/50 backdrop-blur py-20"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-slate-900">
                                Jam <span className="text-teal-600">Praktek</span>
                            </h2>
                            <p className="mt-4 text-lg text-slate-600">
                                Kami siap melayani Anda dengan jadwal yang fleksibel
                            </p>

                            <div className="mt-8 space-y-4">
                                <ScheduleItem day="Senin – Jumat" time="08.00 – 20.00" active={true} />
                                <ScheduleItem day="Sabtu" time="08.00 – 17.00" />
                                <ScheduleItem day="Minggu & Hari Libur" time="Tutup" closed={true} />
                            </div>

                            <div className="mt-10 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 p-6 text-white shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Darurat 24/7?</p>
                                        <p className="mt-1 text-sm text-teal-50">Hubungi hotline kami untuk konsultasi darurat</p>
                                        <a href="tel:+6281234567890" className="mt-3 inline-block font-bold">+62 812-3456-7890</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-3xl bg-gradient-to-br from-teal-100 to-cyan-100 p-8">
                                <div className="space-y-6">
                                    {[
                                        { time: "08:00", status: "Check-up Rutin", patient: "5 Pasien" },
                                        { time: "10:00", status: "Konsultasi", patient: "3 Pasien" },
                                        { time: "14:00", status: "Pemeriksaan Lab", patient: "4 Pasien" },
                                        { time: "16:00", status: "Available", patient: "Slot Tersedia", highlight: true }
                                    ].map((slot, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className={`flex items-center justify-between rounded-2xl p-4 shadow-lg ${
                                                slot.highlight 
                                                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white' 
                                                    : 'bg-white/80 backdrop-blur'
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                                    slot.highlight ? 'bg-white/20' : 'bg-teal-100'
                                                }`}>
                                                    <Clock className={`h-6 w-6 ${slot.highlight ? 'text-white' : 'text-teal-600'}`} />
                                                </div>
                                                <div>
                                                    <p className={`font-semibold ${slot.highlight ? 'text-white' : 'text-slate-900'}`}>
                                                        {slot.time}
                                                    </p>
                                                    <p className={`text-sm ${slot.highlight ? 'text-teal-50' : 'text-slate-600'}`}>
                                                        {slot.status}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className={`text-sm font-medium ${slot.highlight ? 'text-white' : 'text-slate-600'}`}>
                                                {slot.patient}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TESTIMONI */}
            <section
                id="testimoni"
                className="scroll-mt-24 bg-gradient-to-br from-teal-50 to-cyan-50 py-20"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-slate-900">
                            Apa Kata <span className="text-teal-600">Pasien Kami</span>
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Pengalaman nyata dari mereka yang telah mempercayakan kesehatan pada kami
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <TestimonialCard
                            name="Budi Santoso"
                            role="Pasien Rutin"
                            review="Pelayanannya sangat ramah dan dokternya jelas menjelaskan setiap kondisi kesehatan saya. Sangat puas!"
                            rating={5}
                        />
                        <TestimonialCard
                            name="Maya Kusuma"
                            role="Ibu Rumah Tangga"
                            review="Klinik yang bersih dan nyaman. Proses pendaftaran sangat cepat, tidak perlu antri lama."
                            rating={5}
                        />
                        <TestimonialCard
                            name="Agus Pratama"
                            role="Karyawan Swasta"
                            review="Konsultasi terasa tenang dan tidak terburu-buru. Dokter benar-benar mendengarkan keluhan saya."
                            rating={5}
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600 py-24 text-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMzZjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>
                
                <div className="relative mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white lg:text-5xl">
                            Kami Siap Membantu Kesehatan Anda
                        </h2>
                        <p className="mt-6 text-lg text-teal-50">
                            Hubungi kami sekarang untuk konsultasi atau pendaftaran pemeriksaan kesehatan
                        </p>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="https://wa.me/6281234567890"
                                className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-teal-600 shadow-2xl transition hover:scale-105"
                            >
                                <Phone className="h-5 w-5" />
                                <span>Booking via WhatsApp</span>
                                <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
                            </a>
                            <a
                                href="tel:+6281234567890"
                                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                            >
                                Atau Telepon Langsung
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-8 text-teal-50">
                            <div className="flex items-center gap-2">
                                <Check className="h-5 w-5" />
                                <span className="text-sm">Respon Cepat</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-5 w-5" />
                                <span className="text-sm">Dokter Berpengalaman</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-5 w-5" />
                                <span className="text-sm">Harga Terjangkau</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-900 py-12 text-slate-400">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600">
                            <Heart className="h-5 w-5 text-white" fill="white" />
                        </div>
                        <p className="text-lg font-bold text-white">Klinik Sehat Sentosa</p>
                    </div>
                    <p className="text-sm">
                        Jl. Kesehatan No. 123, Tangerang, Banten | +62 812-3456-7890
                    </p>
                    <p className="mt-6 text-xs">
                        © 2024 Klinik Sehat Sentosa. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}

/* ---------- COMPONENTS ---------- */

function ServiceCard({ icon, title, desc, color }: {
    icon: React.ReactNode,
    title: string,
    desc: string,
    color: string,
}) {
    const colorClasses = {
        teal: 'from-teal-500 to-teal-600 hover:shadow-teal-500/30',
        rose: 'from-rose-500 to-rose-600 hover:shadow-rose-500/30',
        cyan: 'from-cyan-500 to-cyan-600 hover:shadow-cyan-500/30'
    };

    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-lg transition hover:shadow-2xl"
        >
            <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${colorClasses[color]} text-white shadow-lg transition group-hover:scale-110`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{desc}</p>
            
            <div className="mt-6 flex items-center text-sm font-semibold text-teal-600 opacity-0 transition group-hover:opacity-100">
                Pelajari lebih lanjut
                <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
            </div>

            <div className={`absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br ${colorClasses[color]} opacity-0 blur-2xl transition group-hover:opacity-10`}></div>
        </motion.div>
    );
}

function DoctorCard({ name, role, desc, specialties }: {
    name: string,
    role: string,
    desc: string,
    specialties: string[],
}) {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="group overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-lg transition hover:shadow-2xl"
        >
            <div className="mb-6 flex items-start justify-between">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
                    <Users className="h-10 w-10" />
                </div>
                <div className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                    Tersedia
                </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
            <p className="text-teal-600 font-medium">{role}</p>
            <p className="mt-4 leading-relaxed text-slate-600">{desc}</p>

            <div className="mt-6 flex flex-wrap gap-2">
                {specialties.map((spec: string, i: number) => (
                    <span key={i} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 border border-teal-200">
                        {spec}
                    </span>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
                <a href="https://wa.me/6281234567890" className="group flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-700">
                    Jadwalkan Konsultasi
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
            </div>
        </motion.div>
    );
}

function TestimonialCard({ name, role, review, rating }: {
    name: string,
    role: string,
    review: string,
    rating: number,
}) {
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-lg transition hover:shadow-xl"
        >
            <div className="mb-4 flex gap-1">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
            </div>
            
            <p className="leading-relaxed text-slate-700 italic">"{review}"</p>
            
            <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-slate-900">{name}</p>
                    <p className="text-sm text-slate-600">{role}</p>
                </div>
            </div>

            <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-teal-500/5"></div>
        </motion.div>
    );
}

function ScheduleItem({ day, time, active, closed }: ScheduleItemProps) {
    return (
        <div className={`flex items-center justify-between rounded-2xl p-4 transition ${
            closed 
                ? 'bg-slate-100 border border-slate-200' 
                : active 
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg' 
                    : 'bg-white border border-slate-200 hover:border-teal-300'
        }`}>
            <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    closed ? 'bg-slate-200' : active ? 'bg-white/20' : 'bg-teal-100'
                }`}>
                    <Clock className={`h-5 w-5 ${
                        closed ? 'text-slate-500' : active ? 'text-white' : 'text-teal-600'
                    }`} />
                </div>
                <p className={`font-semibold ${
                    closed ? 'text-slate-600' : active ? 'text-white' : 'text-slate-900'
                }`}>
                    {day}
                </p>
            </div>
            <p className={`font-medium ${
                closed ? 'text-slate-500' : active ? 'text-white' : 'text-slate-700'
            }`}>
                {time}
            </p>
        </div>
    );
}