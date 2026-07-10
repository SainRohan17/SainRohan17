"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LogoMark() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shapeIndex, setShapeIndex] = useState(0);

    const mode = shapeIndex % 4;

    const N = 40;

    let R_in = 8.5;
    let R_mid = 16.5;
    let R_out = 19.5;
    let theta_mid_offset = -0.28;
    let theta_out_offset = 0.08;

    if (mode === 1) {
        R_in = 4.0;
        R_mid = 12.0;
        R_out = 19.5;
        theta_mid_offset = -0.65;
        theta_out_offset = 0.35;
    } else if (mode === 2) {
        R_in = 12.0;
        R_mid = 15.0;
        R_out = 19.5;
        theta_mid_offset = -0.10;
        theta_out_offset = 0.15;
    } else if (mode === 3) {
        R_in = 14.0;
        R_mid = 6.0;
        R_out = 19.5;
        theta_mid_offset = -0.50;
        theta_out_offset = 0.50;
    }

    const paths = Array.from({ length: N }).map((_, i) => {
        const theta = (i * 2 * Math.PI) / N;

        const x1 = 20 + R_in * Math.cos(theta);
        const y1 = 20 + R_in * Math.sin(theta);

        const theta_mid = theta + theta_mid_offset;
        const x2 = 20 + R_mid * Math.cos(theta_mid);
        const y2 = 20 + R_mid * Math.sin(theta_mid);

        const theta_out = theta + theta_out_offset;
        const x3 = 20 + R_out * Math.cos(theta_out);
        const y3 = 20 + R_out * Math.sin(theta_out);

        return `M ${x1.toFixed(3)} ${y1.toFixed(3)} L ${x2.toFixed(3)} ${y2.toFixed(3)} L ${x3.toFixed(3)} ${y3.toFixed(3)}`;
    });

    const rotateZ = useMotionValue(0);
    const springConfig = { damping: 15, stiffness: 120, mass: 0.6 };
    const springRotateZ = useSpring(rotateZ, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const relX = e.clientX - centerX;
        const relY = e.clientY - centerY;

        const angleRad = Math.atan2(relY, relX);
        const angleDeg = angleRad * (180 / Math.PI);

        const currentRotateZ = rotateZ.get();
        const currentZNormalized = ((currentRotateZ % 360) + 360) % 360;
        let diff = angleDeg - currentZNormalized;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        rotateZ.set(currentRotateZ + diff);
    };

    const handleMouseEnter = () => {
        setShapeIndex((prev) => prev + 1);
    };

    const handleMouseLeave = () => {
        const currentZ = rotateZ.get();
        const targetZ = Math.round(currentZ / 360) * 360;
        rotateZ.set(targetZ);
    };

    return (
        <motion.div
            ref={containerRef}
            className="size-16 md:size-20 cursor-pointer flex items-center justify-center select-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setShapeIndex((prev) => prev + 1)}
        >
            <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-full"
            >
                <motion.g
                    style={{
                        transformOrigin: "20px 20px",
                        rotate: springRotateZ,
                    }}
                >
                    {paths.map((d, index) => (
                        <motion.path
                            key={index}
                            d={d}
                            stroke="#09090b"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ transformOrigin: "20px 20px" }}
                            animate={{
                                d: d,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                delay: (index % 8) * 0.01,
                            }}
                        />
                    ))}
                </motion.g>
            </svg>
        </motion.div>
    );
}
