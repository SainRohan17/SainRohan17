"use client";

import { useEffect, useRef, useState } from "react";

interface DotNoiseBgProps {
    density?: number;
}

type NodePoint = {
    x: number;
    y: number;
    vx: number;
    vy: number;
};

type Edge = {
    a: number;
    b: number;
};

type Pulse = {
    edge: Edge;
    t: number;
    speed: number;
};

const snippets = [
    "supabase.auth.getUser()",
    "zustand create()",
    "z.object({...})",
    "useForm()",
    "npm run build",
    "git push origin main",
    "TanStack Query",
    "React Hook Form",
    "row level security",
    "recharts",
    "tailwind.config.ts",
    "whatsapp deep link",
    "const queryClient = new QueryClient()",
    "export default async function Page()",
    "const [state, dispatch] = useReducer()",
    "npm i lucide-react",
    "await db.select().from(users)",
    "next dev --turbo",
    "git commit -m 'feat: overhaul'",
    "type User = z.infer<typeof schema>",
    "api.users.get.useQuery({ id })",
    "useEffect(() => { ... }, [])",
    "className='backdrop-blur-md'",
    "const router = useRouter()",
];

const snippetPositions = [
    { top: "8%", left: "4%" },
    { top: "14%", right: "5%" },
    { top: "42%", left: "2%" },
    { top: "70%", left: "6%" },
    { top: "80%", right: "8%" },
    { top: "50%", right: "3%" },
    { top: "6%", left: "40%" },
    { top: "88%", left: "38%" },
    { top: "26%", right: "14%" },
    { top: "62%", left: "16%" },
    { top: "20%", left: "16%" },
    { top: "76%", right: "20%" },
    { top: "3%", right: "32%" },
    { top: "11%", left: "25%" },
    { top: "28%", left: "5%" },
    { top: "34%", right: "8%" },
    { top: "48%", left: "10%" },
    { top: "56%", right: "18%" },
    { top: "66%", right: "4%" },
    { top: "82%", left: "24%" },
    { top: "92%", right: "28%" },
    { top: "90%", left: "12%" },
    { top: "18%", right: "42%" },
    { top: "74%", left: "44%" },
];

export default function DotNoiseBg({ density = 0.15 }: DotNoiseBgProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setReducedMotion(reduced);

        const canvas = canvasRef.current;
        const wrap = wrapRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !wrap || !ctx) return;

        let width = 0;
        let height = 0;
        let nodes: NodePoint[] = [];
        let edges: Edge[] = [];
        const pulses: Pulse[] = [];
        let frame = 0;
        let lastSpawn = 0;
        const mouse = { x: -9999, y: -9999 };

        const createNodes = () => {
            const count = width < 640 ? 20 : 34;
            const minDistance = width < 640 ? 50 : 70;

            nodes = [];
            let attempts = 0;
            while (nodes.length < count && attempts < 4000) {
                attempts += 1;
                const x = Math.random() * width;
                const y = Math.random() * height;
                const tooClose = nodes.some((node) => {
                    const dx = node.x - x;
                    const dy = node.y - y;
                    return Math.sqrt(dx * dx + dy * dy) < minDistance;
                });

                if (!tooClose) {
                    nodes.push({
                        x,
                        y,
                        vx: (Math.random() - 0.5) * 0.12,
                        vy: (Math.random() - 0.5) * 0.12,
                    });
                }
            }

            edges = [];
            for (let i = 0; i < nodes.length; i += 1) {
                for (let j = i + 1; j < nodes.length; j += 1) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    if (Math.sqrt(dx * dx + dy * dy) < 170) {
                        edges.push({ a: i, b: j });
                    }
                }
            }
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            createNodes();
        };

        const drawDotGrid = () => {
            const gap = Math.max(12, Math.round(15 - density * 12));

            ctx.beginPath();
            ctx.fillStyle = "rgba(0,0,0,0.055)";

            const activeDots: { x: number; y: number; boost: number }[] = [];
            const radius = 0.85;
            const influenceRadius = 75;
            const influenceRadiusSq = influenceRadius * influenceRadius;

            for (let x = gap / 2; x < width; x += gap) {
                for (let y = gap / 2; y < height; y += gap) {
                    const dx = x - mouse.x;
                    const dy = y - mouse.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < influenceRadiusSq) {
                        const distance = Math.sqrt(distSq);
                        const boost = Math.max(0, 1 - distance / influenceRadius);
                        activeDots.push({ x, y, boost });
                    } else {
                        ctx.moveTo(x + radius, y);
                        ctx.arc(x, y, radius, 0, Math.PI * 2);
                    }
                }
            }
            ctx.fill();

            for (const dot of activeDots) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(0,0,0,${0.055 + dot.boost * 0.35})`;
                ctx.arc(dot.x, dot.y, radius + dot.boost * 1.6, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const spawnPulse = () => {
            if (!edges.length) return;
            pulses.push({
                edge: edges[Math.floor(Math.random() * edges.length)],
                t: 0,
                speed: 0.006 + Math.random() * 0.005,
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            drawDotGrid();

            ctx.lineWidth = 0.6;
            for (const edge of edges) {
                const a = nodes[edge.a];
                const b = nodes[edge.b];
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }

            for (const node of nodes) {
                ctx.fillStyle = "rgba(0,0,0,0.15)";
                ctx.beginPath();
                ctx.arc(node.x, node.y, 2.8, 0, Math.PI * 2);
                ctx.fill();
            }

            for (let i = pulses.length - 1; i >= 0; i -= 1) {
                const pulse = pulses[i];
                if (pulse.edge.a >= nodes.length || pulse.edge.b >= nodes.length) {
                    pulses.splice(i, 1);
                    continue;
                }
                const a = nodes[pulse.edge.a];
                const b = nodes[pulse.edge.b];
                const x = a.x + (b.x - a.x) * pulse.t;
                const y = a.y + (b.y - a.y) * pulse.t;
                ctx.fillStyle = "rgba(0,0,0,0.55)";
                ctx.beginPath();
                ctx.arc(x, y, 2.6, 0, Math.PI * 2);
                ctx.fill();
                pulse.t += pulse.speed;
                if (pulse.t >= 1) pulses.splice(i, 1);
            }
        };

        const animate = (time: number) => {
            if (!reduced) {
                for (const node of nodes) {
                    node.x += node.vx;
                    node.y += node.vy;
                    if (node.x < 0 || node.x > width) node.vx *= -1;
                    if (node.y < 0 || node.y > height) node.vy *= -1;
                }
                if (time - lastSpawn > 900) {
                    spawnPulse();
                    lastSpawn = time;
                }
            }

            draw();
            if (!reduced) frame = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = wrap.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };
        const handleMouseLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        resize();
        draw();
        if (!reduced) frame = requestAnimationFrame(animate);
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [density]);

    return (
        <div
            ref={wrapRef}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
        >
            <canvas ref={canvasRef} className="absolute inset-0 size-full" />
            <div className="absolute inset-0 font-mono text-[11px] text-black/12 md:text-xs">
                {snippets.map((snippet, index) => (
                    <div
                        key={snippet}
                        className="absolute whitespace-nowrap motion-safe:animate-snip-float-blur"
                        style={{
                            ...snippetPositions[index % snippetPositions.length],
                            animationDuration: `${7 + (index % 5)}s`,
                            animationDelay: `${(index % 8) * 0.7}s`,
                            opacity: reducedMotion ? 0.04 : undefined,
                        }}
                    >
                        {snippet}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_38%,white_86%]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
}

export function AsciiBlockSide() {
    const block = `
  001101   11111
  11010   01000
  10100   10001
  01/01   01/10
  11110   00110
  01001   00111
  11001   10111
  00001   00011
  `;

    return (
        <pre className="pointer-events-none hidden select-none whitespace-pre font-mono text-[8px] leading-[10px] tracking-[1px] text-neutral-300 opacity-65 sm:block">
            {block.trim()}
        </pre>
    );
}
