"use client";

import React, { useRef, useState } from "react";
import ScreenshotMockup from "./ScreenshotMockup";

export default function ProjectCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="w-full relative mt-6 md:mt-10">
            <div
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`flex gap-4 overflow-x-auto py-6 overscroll-x-contain scroll-smooth hide-scrollbar select-none cursor-grab px-4 md:px-[calc(50%-384px)] ${isDragging ? "cursor-grabbing active:scale-[0.99] transition-transform duration-200" : ""
                    }`}
                style={{
                    scrollbarWidth: "none",
                }}
            >
                <div className="h-[240px] w-[320px] md:h-[400px] md:w-[620px] shrink-0 rounded-2xl overflow-hidden bg-neutral-50 p-2 flex items-center justify-center border border-neutral-100 shadow-sm">
                    <ScreenshotMockup project="meridian" mode="desktop" variant="analytics" />
                </div>

                <div className="h-[240px] w-[320px] md:h-[400px] md:w-[620px] shrink-0 rounded-2xl overflow-hidden bg-neutral-50 p-2 flex items-center justify-center border border-neutral-100 shadow-sm">
                    <ScreenshotMockup project="terminalgoods" mode="desktop" />
                </div>

                <div className="grid w-[200px] shrink-0 grid-cols-1 grid-rows-2 gap-4 md:w-[320px]">
                    <div className="h-[112px] md:h-[192px] rounded-2xl overflow-hidden bg-neutral-50 p-2 border border-neutral-100 shadow-sm flex items-center justify-center">
                        <div className="scale-[0.45] md:scale-[0.75] origin-center shrink-0">
                            <ScreenshotMockup project="apexroofing" mode="mobile" />
                        </div>
                    </div>
                    <div className="h-[112px] md:h-[192px] rounded-2xl overflow-hidden bg-neutral-50 p-2 border border-neutral-100 shadow-sm flex items-center justify-center">
                        <div className="scale-[0.45] md:scale-[0.75] origin-center shrink-0">
                            <ScreenshotMockup project="meridian" mode="mobile" />
                        </div>
                    </div>
                </div>

                <div className="h-[240px] w-[320px] md:h-[400px] md:w-[620px] shrink-0 rounded-2xl overflow-hidden bg-neutral-50 p-2 flex items-center justify-center border border-neutral-100 shadow-sm">
                    <ScreenshotMockup project="apexroofing" mode="desktop" />
                </div>

                <div className="h-[240px] w-[200px] md:h-[400px] md:w-[320px] shrink-0 rounded-2xl overflow-hidden bg-neutral-50 py-4 flex items-center justify-center border border-neutral-100 shadow-sm">
                    <div className="scale-[0.5] md:scale-[0.85] origin-center shrink-0">
                        <ScreenshotMockup project="terminalgoods" mode="mobile" />
                    </div>
                </div>

                <div className="h-[240px] w-[320px] md:h-[400px] md:w-[620px] shrink-0 rounded-2xl overflow-hidden bg-neutral-50 p-2 flex items-center justify-center border border-neutral-100 shadow-sm">
                    <ScreenshotMockup project="meridian" mode="desktop" />
                </div>
            </div>

            <div className="flex justify-center mt-3 text-neutral-300 gap-1 font-mono text-[8px]">
                <span>← Drag or scroll to view projects →</span>
            </div>
        </div>
    );
}
