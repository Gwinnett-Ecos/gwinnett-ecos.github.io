"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type TimelineMarkerProps = {
  month: string;
  title: string;
  description: string;
  direction?: "left" | "right";
};

const fadeIn = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 50 },
};

function TimelineMarker({
  month,
  title,
  description,
  direction = "left",
}: TimelineMarkerProps) {
  if (direction !== "left" && direction !== "right") {
    throw Error(`Invalid direction: ${direction}. Must be "left" or "right"`);
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const monthComponent = (
    <div className="w-[72px] md:w-28 h-3 justify-end items-center gap-2.5 flex flex-shrink-0">
      <span className="text-primary-1-600 text-xs font-bold leading-3 md:text-2xl">
        {month}
      </span>
    </div>
  );
  const textComponent = (
    <div className="w-48 md:w-64 h-6 md:h-8 flex-col justify-start items-start gap-0.5 inline-flex flex-shrink-0">
      <div
        className={`text-primary-1-500 text-lg font-extrabold leading-relaxed ${
          direction === "right" && "text-right"
        } md:text-2xl`}
      >
        {title}
      </div>
      <div
        className={`self-stretch text-slate-500 text-xs font-normal leading-relaxed md:text-base ${
          direction === "right" && "text-right"
        }`}
      >
        {description}
      </div>
    </div>
  );
  const connectorComponent = (
    <div className="w-3 md:w-4 h-[0px] border border-primary-1-100 flex-shrink-0"></div>
  );
  const markerComponent = (
    <div className="w-1.5 h-1.5 md:w-3 md:h-3 bg-primary-1-400 rounded-full flex-shrink-0" />
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <div
        className={`w-[158px] md:w-[260px] h-1.5 md:h-3 ${
          direction === "left" ? "justify-start" : "justify-end"
        } items-center gap-1 md:gap-3 inline-flex`}
      >
        {direction === "left" ? (
          <>
            {monthComponent}
            {markerComponent}
            {connectorComponent}
            {textComponent}
          </>
        ) : (
          <>
            {textComponent}
            {connectorComponent}
            {markerComponent}
            {monthComponent}
          </>
        )}
      </div>
    </motion.div>
  );
}

type RoadmapProps = {
  variant: "upcoming" | "start" | "year";
  year?: string;
};

const checkRoadmapProps = ({ variant, year }: RoadmapProps) => {
  if (variant !== "upcoming" && variant !== "start" && variant !== "year") {
    throw Error(
      `Invalid variant: ${variant}. Must be "upcoming", "start" or "year"`
    );
  }
  if (variant === "year" && !year) {
    throw Error(`Missing year prop for variant "year"`);
  }
  if (variant !== "year" && year) {
    throw Error(`Unexpected year prop for variant ${variant}`);
  }
};

function Roadmap({ variant, year }: RoadmapProps) {
  checkRoadmapProps({ variant, year });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const content = {
    year: () => (
      <div className="text-center text-primary-1-800 text-[11px] font-bold md:text-xl md:font-extrabold">
        {year}
      </div>
    ),
    start: () => (
      <div className="material-symbols-rounded text-primary-800 text-[40px] md:text-[52px] text-primary-1-600">
        psychiatry
      </div>
    ),
    upcoming: () => (
      <div className="material-symbols-rounded text-primary-800 text-[40px] md:text-[52px] text-primary-1-600">
        next_plan
      </div>
    ),
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-1-100 rounded-full flex-shrink-0 flex items-center justify-center">
        {content[variant]()}
      </div>
    </motion.div>
  );
}

type ConnectorProps = {
  length: number;
};

function Connector({ length }: ConnectorProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className={`w-0.5 origin-top-left border bg-primary-1-400 border-none h-[${length}px] md:h-[${
        length * 1.5
      }px]`}
    />
  );
}

type TimelineProps = {
  content: (TimelineMarkerProps | RoadmapProps | ConnectorProps)[];
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
};

function Timeline({ content: children, className, ...props }: TimelineProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 md:gap-6 ${className} w-min mr-auto md:w-full`}
      {...props}
    >
      {children.map((child, index) => {
        let Component;
        if ("month" in child) {
          Component = TimelineMarker;
        } else if ("variant" in child) {
          Component = Roadmap;
        } else {
          Component = Connector;
        }
        return <Component {...(child as any)} key={index} />;
      })}
    </div>
  );
}

export default Timeline;
