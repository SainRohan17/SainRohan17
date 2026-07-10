"use client";

import React from "react";
import Image from "next/image";

interface ScreenshotMockupProps {
    project: "apexroofing" | "terminalgoods" | "meridian";
    mode: "desktop" | "mobile";
    variant?: "dashboard" | "analytics";
}

const projectMeta: Record<
    string,
    { label: string; url: string; desktopImg: string; mobileImg: string }
> = {
    apexroofing: {
        label: "ApexRoofing",
        url: "r1-seven-omega.vercel.app",
        desktopImg: "/screenshots/Screenshot 2026-07-08 180419.png",
        mobileImg: "/screenshots/Screenshot 2026-07-08 180446.png",
    },
    terminalgoods: {
        label: "Terminal Goods",
        url: "p2-seven-eta.vercel.app",
        desktopImg: "/screenshots/Screenshot 2026-07-08 180544.png",
        mobileImg: "/screenshots/Screenshot 2026-07-08 180559.png",
    },
    meridian: {
        label: "Meridian",
        url: "p3-beta-eight.vercel.app",
        desktopImg: "/screenshots/Screenshot 2026-07-08 180741.png",
        mobileImg: "/screenshots/Screenshot 2026-07-08 180755.png",
    },
};

export default function ScreenshotMockup({ project, mode, variant }: ScreenshotMockupProps) {
    if (mode === "desktop") {
        return <DesktopFrame project={project} variant={variant} />;
    }
    return <MobileFrame project={project} />;
}

function DesktopFrame({ project, variant }: { project: string; variant?: "dashboard" | "analytics" }) {
    const meta = projectMeta[project];
    if (!meta) return null;

    let imgSrc = meta.desktopImg;
    if (project === "meridian" && variant === "analytics") {
        imgSrc = "/screenshots/Screenshot 2026-07-08 180821.png";
    }

    return (
        <div className="w-full h-full bg-white flex flex-col select-none overflow-hidden text-neutral-800 text-left border border-neutral-100 rounded-2xl shadow-bedo">
            <div className="h-8 shrink-0 bg-neutral-50 border-b border-neutral-100 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-neutral-200" />
                    <div className="size-2.5 rounded-full bg-neutral-200" />
                    <div className="size-2.5 rounded-full bg-neutral-200" />
                </div>
                <div className="mx-auto w-[60%] h-5 bg-white border border-neutral-150 rounded-md flex items-center justify-center text-[9px] text-neutral-400 font-mono tracking-tight overflow-hidden">
                    {meta.url}
                </div>
            </div>

            <div className="flex-1 bg-white relative overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={`${meta.label} desktop screenshot`}
                    fill
                    className="object-cover object-top"
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>
        </div>
    );
}

function MobileFrame({ project }: { project: string }) {
    const meta = projectMeta[project];
    if (!meta) return null;

    return (
        <div className="mx-auto w-[240px] h-[440px] bg-neutral-950 p-2.5 rounded-[36px] shadow-2xl flex flex-col select-none border border-neutral-800 shrink-0">
            <div className="flex-1 bg-white rounded-[28px] overflow-hidden flex flex-col relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-950 rounded-b-xl z-20 flex items-center justify-center">
                    <div className="w-8 h-1 bg-neutral-800 rounded-full" />
                </div>

                <div className="flex-1 overflow-hidden relative">
                    <Image
                        src={meta.mobileImg}
                        alt={`${meta.label} mobile screenshot`}
                        fill
                        className="object-cover object-top"
                        draggable={false}
                        sizes="240px"
                    />
                </div>
            </div>
        </div>
    );
}
