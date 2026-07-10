"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ChevronRight, ArrowUpRight, ExternalLink, Rocket } from "lucide-react";
import LogoMark from "../components/LogoMark";
import DotNoiseBg, { AsciiBlockSide } from "../components/DotNoiseBg";
import ProjectCarousel from "../components/ProjectCarousel";
import ScreenshotMockup from "../components/ScreenshotMockup";
import FAQAccordion from "../components/FAQAccordion";

export default function Home() {
  const taglineTop = "Clean frontend.";
  const taglineBottom = "Shipped with precision.";

  const projects = [
    {
      id: "apexroofing",
      name: "ApexRoofing",
      tagline: "High-conversion landing page for a professional roofing company.",
      summary: "A production-grade, highly performant landing page engineered for a roofing services business. Features complete local SEO with structured JSON-LD schemas, fully accessible semantic layouts, optimized page-speed assets, and an integrated lead capture funnel to convert visitors into booked consultations.",
      liveUrl: "https://r1-seven-omega.vercel.app/",
      repoUrl: "https://github.com/SainRohan17/ApexRoofing",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zod", "React Hook Form", "Supabase Client"],
    },
    {
      id: "terminalgoods",
      name: "Terminal Goods",
      tagline: "Static product catalog and persistent cart with WhatsApp checkout.",
      summary: "A frictionless ecommerce solution designed to bypass heavy checkout setups by packaging client shopping carts directly into pre-formatted, deep-linked WhatsApp messages. Built with client-side persistent state to guarantee zero data loss across sessions.",
      liveUrl: "https://p2-seven-eta.vercel.app/",
      repoUrl: "https://github.com/SainRohan17/TerminalGoods",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand Store", "WhatsApp API"],
    },
    {
      id: "meridian",
      name: "Meridian",
      tagline: "Secure analytics dashboard with dynamic metrics and charting.",
      summary: "A complete analytics and client management dashboard protected by Supabase Auth and strict Row Level Security. Integrates real-time performance indicators, SVG data charting, and a fully searchable, paginated data grid for scalable oversight.",
      liveUrl: "https://p3-beta-eight.vercel.app/",
      repoUrl: "https://github.com/SainRohan17/Meridian",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase Auth & DB", "TanStack Query", "Recharts"],
    },
  ];

  return (
    <main className="isolate min-h-screen bg-white">
      <section className="relative isolate flex min-h-[90vh] flex-col justify-center py-12 md:py-20 overflow-hidden border-b border-neutral-100">
        <DotNoiseBg density={0.15} />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6">
          <div className="mb-6 md:mb-10">
            <LogoMark />
          </div>

          <motion.h1
            className="site-title text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="block text-neutral-400">{taglineTop}</span>
            <span className="block text-neutral-900">{taglineBottom}</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-center text-sm text-neutral-600 max-w-lg md:mt-6 md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            I build responsive, high-speed frontend systems and write automation scripts that make your digital products and workflows production-ready.
          </motion.p>

          <motion.div
            className="mt-6 flex items-center justify-center gap-3 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="relative isolate size-2 shrink-0">
                <div className="size-2 shrink-0 rounded-full bg-emerald-500" />
                <div className="absolute top-1/2 left-1/2 -z-1 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-emerald-200" />
              </div>
              <span className="text-xs font-semibold text-neutral-600 tracking-tight">
                Open to work
              </span>
            </div>

            <div className="h-3.5 w-px bg-neutral-200" />

            <div className="flex items-center gap-1.5">
              <Rocket className="size-3 text-sky-500 shrink-0" />
              <span className="text-xs font-semibold text-neutral-600 tracking-tight">
                3 projects shipped
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mt-8 md:mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="mailto:sainrohan17@gmail.com"
              className="btn btn-dark px-6 font-semibold"
            >
              <span>Email Me</span>
              <ChevronRight className="size-4 shrink-0 text-white/80" />
            </a>
            <a
              href="https://github.com/SainRohan17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light px-6 font-semibold"
            >
              <span>View GitHub</span>
              <ExternalLink className="size-3.5 shrink-0 text-neutral-500" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-100 overflow-hidden">
        <div className="mx-auto w-full max-w-4xl px-6">
          <h2 className="section-title flex flex-col items-center text-center whitespace-pre-line">
            <span className="text-neutral-300">Built.</span>
            Not just designed.
          </h2>
        </div>

        <ProjectCarousel />
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-100">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title flex flex-col items-center whitespace-pre-line">
              <span className="text-neutral-300">Deep Dives.</span>
              Proven architecture.
            </h2>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group border border-neutral-100 rounded-2xl bg-neutral-25/50 p-5 md:p-8 shadow-sm flex flex-col lg:flex-row gap-6 md:gap-8 items-center hover:border-neutral-200 transition-colors"
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 font-mono tracking-wider uppercase mb-1">
                      0{index + 1} / Project
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-500 mt-1 leading-relaxed">
                      {project.tagline}
                    </p>
                    <p className="text-xs md:text-sm text-neutral-600 mt-4 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-neutral-100 text-neutral-600 text-[9px] font-bold font-mono px-2 py-0.5 rounded border border-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-dark h-9 px-4 text-xs font-bold"
                      >
                        <span>View Live</span>
                        <ArrowUpRight className="size-3 shrink-0 text-white/80" />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-light h-9 px-4 text-xs font-bold"
                      >
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[48%] aspect-[4/3] lg:aspect-[620/400] shrink-0 rounded-xl overflow-hidden bg-neutral-50 flex items-center justify-center p-1.5 border border-neutral-150">
                  <div className="w-full h-full">
                    <ScreenshotMockup
                      project={project.id as "apexroofing" | "terminalgoods" | "meridian"}
                      mode="desktop"
                      variant={project.id === "meridian" ? "analytics" : undefined}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-100 bg-neutral-25/30">
        <div className="mx-auto w-full max-w-4xl px-6">
          <h2 className="section-title flex flex-col items-center text-center whitespace-pre-line">
            <span className="text-neutral-300">Reliable Partner.</span>
            Clean implementation.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:mt-16">
            <div className="flex flex-col items-start gap-3">
              <div className="size-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 480"
                  className="size-6 shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M360 289.7c43.4 0 86.9-16.6 120-49.7a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Speed of adaptation.
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                As a fast learner, I don&apos;t require onboarding buffers. I independently researched and successfully launched three complex, production-grade applications using advanced tech stacks.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="size-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 480"
                  className="size-6 shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="m349.4 276.5 54.7 18.2a57.7 57.7 0 1 0 0-109.4l-54.7 18.2a57.4 57.4 0 0 1-27.1 2.4c5.1-7 12-13 20.8-17.5l51.6-25.8a57.7 57.7 0 1 0-77.3-77.3l-25.8 51.6a57.4 57.4 0 0 1-17.5 20.8 57.4 57.4 0 0 1 2.4-27.1l18.2-54.7a57.6 57.6 0 1 0-109.4 0l18.2 54.7a57.4 57.4 0 0 1 2.4 27.1 57.3 57.3 0 0 1-17.5-20.8l-25.8-51.6a57.7 57.7 0 1 0-77.3 77.3l51.5 25.8a57.4 57.4 0 0 1 21 17.5c-8.7 1.4-18 .7-27.2-2.4l-54.7-18.2a57.7 57.7 0 1 0 0 109.4l54.7-18.2a57.4 57.4 0 0 1 27.1-2.4 57.3 57.3 0 0 1-20.8 17.5l-51.6 25.8a57.7 57.7 0 1 0 77.3 77.3l25.8-51.5a57.4 57.4 0 0 1 17.5-21c1.4 8.7.7 18-2.4 27.2l-18.2 54.7a57.7 57.7 0 1 0 109.4 0l-18.2-54.7a57.4 57.4 0 0 1-2.4-27.1c7 5.1 13 12 17.5 20.9l25.8 51.5a57.7 57.7 0 1 0 77.4-77.4l-51.6-25.7a57.4 57.4 0 0 1-21-17.5c8.7-1.4 18-.7 27.2 2.4M240 300a60 60 0 1 1 0-120 60 60 0 0 1 0 120"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Code that scales.
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                I keep codebases modular. I enforce strict type constraints, maintain clean separation between presentation and state, and build accessible, semantic component structures.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="size-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 480"
                  className="size-6 shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M480 240a169.2 169.2 0 0 0-120-49.7 169.2 169.2 0 0 0 49.7-120c-46.9 0-89.3 19-120 49.7 0-43.4-16.6-86.9-49.7-120a169.2 169.2 0 0 0-49.7 120 169.2 169.2 0 0 0-120-49.7c0 46.8 19 89.3 49.7 120-43.4 0-86.9 16.6-120 49.7a169.2 169.2 0 0 0 120 49.7 169.2 169.2 0 0 0-49.7 120c46.8 0 89.3-19 120-49.7 0 43.4 16.6 86.9 49.7 120a169.2 169.2 0 0 0 49.7-120 169.2 169.2 0 0 0 120 49.7c0-46.9-19-89.3-49.7-120 43.4 0 86.9-16.6 120-49.7m-240 60a60 60 0 1 1 0-120 60 60 0 0 1 0 120"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Clear communication.
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                I understand that clarity is key. I keep project goals aligned, provide clear status updates, and maintain responsive channels to ensure smooth collaboration between clients and developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50/70 border-y border-neutral-100 py-12 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-6 flex justify-between items-center gap-6">
          <div className="relative flex flex-col md:flex-row gap-4 items-center">
            <AsciiBlockSide />
            <div className="text-center md:text-left">
              <div className="text-base md:text-lg font-medium text-neutral-800 leading-relaxed">
                &ldquo;Architecture without execution is a sketch. I build to ensure my code performs flawlessly across viewports, layouts, and networks.&rdquo;
              </div>
              <div className="mt-3 text-xs text-neutral-400 font-bold uppercase font-mono tracking-wider">
                Rohan Sain
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-100">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="rounded-2xl border border-neutral-100 bg-neutral-25/30 px-6 py-8 md:p-12 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8 justify-between">
              <div className="flex-1">
                <span className="text-[10px] font-bold text-neutral-400 font-mono tracking-wider uppercase">
                  Available for work
                </span>
                <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight mt-1">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-neutral-600 mt-2 max-w-lg leading-relaxed">
                  I am available for contract opportunities, internship roles, and freelance collaborations. Send me an email and let&apos;s start building.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 shrink-0">
                <a
                  href="mailto:sainrohan17@gmail.com"
                  className="btn btn-dark px-6 font-semibold"
                >
                  <span>Email Me</span>
                  <ChevronRight className="size-4 shrink-0 text-white/80" />
                </a>
                <a
                  href="https://github.com/SainRohan17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light px-6 font-semibold"
                >
                  <span>View GitHub</span>
                  <ExternalLink className="size-3.5 shrink-0 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-neutral-100 bg-neutral-25/10">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-10">
            <h2 className="section-title flex flex-col items-center whitespace-pre-line">
              <span className="text-neutral-300">Questions.</span>
              Answered.
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-4xl flex-col sm:flex-row justify-between items-center gap-4 px-6 py-8 text-neutral-500">
        <span className="text-xs text-neutral-500">
          All rights reserved © Rohan Sain 2026
        </span>

        <div className="flex gap-4">
          <a
            href="mailto:sainrohan17@gmail.com"
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://github.com/SainRohan17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
