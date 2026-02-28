"use client";

import { useEffect, useState } from "react";

export const InlineSVG = ({ src }: { src: string }) => {
    const [svg, setSvg] = useState("");

    useEffect(() => {
        if (!src) return;

        fetch(src)
            .then((res) => res.text())
            .then((data) => {
                const cleaned = data.replace(/fill=".*?"/g, 'fill="currentColor"');
                setSvg(cleaned);
            });
    }, [src]);

    return (
        <div
            className="w-full h-full flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};