"use client";

import { useEffect, useRef } from "react";

type AdFormat = "native" | "rectangle" | "mobile" | "leaderboard";

const bannerConfig = {
  rectangle: { key: "50bdc15b09131d1758580e00235a6288", width: 300, height: 250 },
  mobile: { key: "5f2c9e9163280d41ff6005728ac06f1b", width: 320, height: 50 },
  leaderboard: { key: "d00fbc157c060f483bab7aad74110f53", width: 728, height: 90 },
} as const;

function bannerDocument(format: Exclude<AdFormat, "native">) {
  const { key, width, height } = bannerConfig[format];
  return `<!doctype html><html><head><base target="_blank"><style>html,body{margin:0;background:transparent;overflow:hidden}body{display:grid;place-items:center;min-height:${height}px}</style></head><body><script>window.atOptions={key:'${key}',format:'iframe',height:${height},width:${width},params:{}};<\/script><script src="https://www.highperformanceformat.com/${key}/invoke.js"><\/script></body></html>`;
}

const nativeDocument = `<!doctype html><html><head><base target="_blank"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;background:transparent;color-scheme:dark}*{box-sizing:border-box}</style></head><body><div id="container-3e2f5c651a6d2f6d7f0a12a11356e6e5"></div><script async data-cfasync="false" src="https://pl30454823.effectivecpmnetwork.com/3e2f5c651a6d2f6d7f0a12a11356e6e5/invoke.js"><\/script></body></html>`;

export function AdsterraAd({ format, className = "" }: { format: AdFormat; className?: string }) {
  const isNative = format === "native";
  const dimensions = isNative ? null : bannerConfig[format];
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const frame = document.createElement("iframe");
    frame.title = `${format} advertisement`;
    frame.width = String(dimensions?.width ?? "100%");
    frame.height = String(dimensions?.height ?? 180);
    frame.loading = "lazy";
    frame.scrolling = isNative ? "auto" : "no";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox");
    frame.className = "block max-w-full border-0";
    host.appendChild(frame);
    const doc = frame.contentDocument;
    if (doc) {
      doc.open();
      doc.write(isNative ? nativeDocument : bannerDocument(format));
      doc.close();
    }
    return () => frame.remove();
  }, [dimensions?.height, dimensions?.width, format, isNative]);

  return <aside className={`adsterra-slot ${className}`} aria-label="Advertisement" data-adsterra-format={format}>
    <p className="mb-2 text-center text-[9px] font-black uppercase tracking-[.2em] text-zinc-700">Advertisement</p>
    <div ref={hostRef} className="mx-auto overflow-hidden rounded-xl bg-white/[.018]" style={dimensions ? { width: dimensions.width, maxWidth: "100%", minHeight: dimensions.height } : { width: "100%", minHeight: 120 }} />
  </aside>;
}
