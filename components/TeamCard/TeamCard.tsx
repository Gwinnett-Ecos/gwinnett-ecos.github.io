"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export type TeamCardProps = {
  name: string;
  position: string;
  description: string;
  image: string;
  className?: string;
};

export default function TeamCard({
  name,
  position,
  description,
  image,
  className,
}: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getShortDescription = (text: string) => {
    const sentenceIndex = /[!?.]\s/.exec(text)?.index ?? text.length - 1;
    if (sentenceIndex > 0 && sentenceIndex < 100) {
      return text.slice(0, sentenceIndex + 1);
    } else {
      return text.slice(0, 100) + "...";
    }
  };

  const variants = {
    expanded: {
      x: "-50%",
      y: "-50%",
      zIndex: 100,
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "80vw",
      fontSize: "1.25rem",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    collapsed: {
      scale: 1,
      x: 0,
      y: 0,
      height: null,
      width: null,
      zIndex: 1,
      position: "relative",
      fontSize: "1rem",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const overlayVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const readMore = (
    <button
      className="text-primary-4-400 font-bold flex items-center gap-1"
      onClick={() => setIsExpanded(true)}
    >
      Read more{" "}
      <span className="material-symbols-outlined">arrow_right_alt</span>
    </button>
  );

  const defaultCardClass =
    "w-64 h-auto flex items-center justify-center md:w-80 md:h-[440px] bg-white rounded-2xl shadow-md cursor-pointer";

  const expandedCardClass =
    "bg-white max-w-3xl rounded-2xl p-4 md:p-12 flex items-center justify-center";

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )}
      </AnimatePresence>
      <motion.div
        className={`${
          isExpanded ? expandedCardClass : defaultCardClass
        } ${className}`}
        variants={variants as any}
        animate={isExpanded ? "expanded" : "collapsed"}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={`flex ${
            isExpanded ? "max-w-3xl flex-col md:flex-row" : "flex-col"
          }`}
        >
          <Image
            src={image}
            className={`self-stretch object-top object-cover h-32 md:h-[196px] m-auto ${
              isExpanded && "h-1/3 md:h-1/3"
            }`}
            width={288}
            height={196}
            alt={`Photo of ${name}`}
          />
          <div className="self-stretch p-8 pt-2 flex-col justify-center items-start gap-1 flex">
            <div className="self-stretch flex-col justify-center items-start gap-0.5 flex">
              <div className="self-stretch text-primary-4-400 text-base md:text-2xl font-extrabold leading-tight">
                {name}
              </div>
              <div className="self-stretch text-primary-4-200 text-sm md:text-base font-bold leading-tight">
                {position}
              </div>
            </div>
            <div
              className={`self-stretch text-slate-700 text-sm md:text-base font-normal leading-loose overflow-hidden ${
                !isExpanded && "h-32"
              }`}
            >
              {isExpanded ? description : getShortDescription(description)}
            </div>
            {getShortDescription(description) !== description &&
              !isExpanded &&
              readMore}
          </div>
        </div>
      </motion.div>
    </>
  );
}
