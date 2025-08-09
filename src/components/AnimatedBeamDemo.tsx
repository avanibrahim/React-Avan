"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="
  flex w-full
  max-h-[220px] lg:max-h-[260px]
  max-w-none lg:max-w-6xl
  flex-col items-stretch justify-between gap-10
">

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const iconClass = "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12";

const Icons = {
  notion: () => (
    <img
    src="https://images.icon-icons.com/1508/PNG/512/python_104451.png" 
    alt="Python Logo" 
      className={iconClass}
      loading="lazy"
      draggable="false"
    />
  ),
  openai: () => (
    <img
      src="https://cdn.simpleicons.org/openai/000000"
      alt="OpenAI"
      className={iconClass}
      loading="lazy"
      draggable="false"
    />
  ),
  googleDrive: () => (
    <img
      src="https://cdn.simpleicons.org/googledrive/1A73E8"
      alt="Google Drive"
      className={iconClass}
      loading="lazy"
      draggable="false"
    />
  ),
  whatsapp: () => (
    <img
      src="https://cdn.simpleicons.org/whatsapp/25D366"
      alt="WhatsApp"
      className={iconClass}
      loading="lazy"
      draggable="false"
    />
  ),
  // Full-color logo (bukan single-color)
  googleDocs: () => (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Docs_2020_Logo.svg"
      alt="Google Docs"
      className={iconClass}
      loading="lazy"
      draggable="false"
    />
  ),
  zapier: () => (
    <img
      src="https://cdn.simpleicons.org/zapier/FF4F00"
      alt="Zapier"
      className={iconClass}
      loading="lazy"
      draggable="false"
    />
  ),
  messenger: () => (
    <img
      src="https://cdn.simpleicons.org/messenger/00B2FF"
      alt="Messenger"
      className={iconClass}
      loading="lazy"
      draggable="false"
    />
  ),
};
