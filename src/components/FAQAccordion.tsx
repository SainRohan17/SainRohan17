"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems: FAQItem[] = [
        {
            question: "What technologies do you work with?",
            answer: (
                <div>
                    I build rich, responsive web applications with <strong>React</strong> and <strong>Next.js (App Router)</strong>, and write backend scripts and automation tools with <strong>Python</strong> and <strong>JavaScript</strong>. My everyday toolkit includes:
                    <ul className="mt-2 ml-4 list-disc flex flex-col gap-1">
                        <li>TypeScript (strict, type-safe development)</li>
                        <li>Tailwind CSS (utility-first, responsive layouts)</li>
                        <li>Python & JavaScript (automation, scripting, web scraping)</li>
                        <li>Framer Motion (smooth, delightful micro-animations)</li>
                        <li>Supabase (auth, database, and row-level security)</li>
                        <li>State managers like Zustand and caching layers like TanStack Query</li>
                    </ul>
                </div>
            ),
        },
        {
            question: "Are you available for freelance or internship work?",
            answer: (
                <p>
                    Yes! I am open to freelance projects, contract roles, and software engineering internships. I am ready to join your workspace, adapt to your workflows, and start shipping clean production-ready code immediately.
                </p>
            ),
        },
        {
            question: "How can I get in touch with you?",
            answer: (
                <p>
                    The fastest way to reach me is via email at{" "}
                    <a href="mailto:sainrohan17@gmail.com" className="underline font-semibold hover:text-neutral-600">
                        sainrohan17@gmail.com
                    </a>
                    . You can also view my live code and repositories on my{" "}
                    <a
                        href="https://github.com/SainRohan17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold hover:text-neutral-600"
                    >
                        GitHub profile
                    </a>
                    . I check both daily and will get back to you within a few hours.
                </p>
            ),
        },
        {
            question: "Are your project repositories public?",
            answer: (
                <p>
                    Yes! I have designed and completed three extensive personal projects (ApexRoofing, Terminal Goods, and Meridian). Their repositories are public and you can view the codebases directly via the links in the Showcase section.
                </p>
            ),
        },
        {
            question: "What is your approach to code organization?",
            answer: (
                <p>
                    I follow the principle of self-contained, modular architecture. I keep UI state decoupled from server state, write strict TypeScript types to eliminate runtime crashes, and enforce consistent component and styling patterns. My codebases are built to be easily readable, documented, and maintained by any engineering team.
                </p>
            ),
        },
        {
            question: "Do you only do frontend work?",
            answer: (
                <p>
                    No — alongside frontend development, I build automation scripts, web scrapers, and backend tooling using Python and Node.js. Whether it&apos;s scraping data from complex websites, automating repetitive workflows, or building internal CLI tools, I treat automation as a core skill, not an afterthought. I can ship both the interface and the engine behind it.
                </p>
            ),
        },
    ];

    return (
        <div className="mx-auto mt-6 -mb-4 flex w-full max-w-xl flex-col divide-y divide-neutral-100 lg:mt-12">
            {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                    <div key={idx} className="w-full py-2">
                        <h3>
                            <button
                                onClick={() => toggleIndex(idx)}
                                className="group relative flex w-full cursor-pointer items-center justify-between py-4 text-left text-sm font-semibold text-neutral-900 transition-colors hover:text-neutral-600 sm:text-base focus:outline-none"
                                type="button"
                                aria-expanded={isOpen}
                            >
                                <span className="flex-1 pr-4">{item.question}</span>

                                <div className="size-5 flex items-center justify-center shrink-0 relative">
                                    <div className="absolute w-3.5 h-0.5 bg-neutral-900 rounded" />
                                    <motion.div
                                        className="absolute w-0.5 h-3.5 bg-neutral-900 rounded"
                                        animate={{
                                            rotate: isOpen ? 90 : 0,
                                            opacity: isOpen ? 0 : 1,
                                            scaleY: isOpen ? 0 : 1,
                                        }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    />
                                </div>
                            </button>
                        </h3>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                        transition: {
                                            height: { duration: 0.3, ease: "easeOut" },
                                            opacity: { duration: 0.2, delay: 0.1 },
                                        },
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                        transition: {
                                            opacity: { duration: 0.15 },
                                            height: { duration: 0.25, ease: "easeIn" },
                                        },
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-4 pt-1 text-sm text-neutral-600 leading-relaxed sm:text-base">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
