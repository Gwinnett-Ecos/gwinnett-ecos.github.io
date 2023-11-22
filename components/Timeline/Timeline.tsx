type TimelineMarkerProps = {
  month: string;
  title: string;
  description: string;
  direction?: "left" | "right";
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
  const monthComponent = (
    <div className="w-[72px] h-3 justify-end items-center gap-2.5 flex">
      <span className="text-primary-1-600 text-xs font-bold leading-3 md:text-2xl">
        {month}
      </span>
    </div>
  );
  const textComponent = (
    <div className="w-56 h-4 md:h-8 flex-col justify-start items-start gap-0.5 inline-flex">
      <div
        className={`w-[158px] text-primary-1-500 text-lg font-extrabold leading-[18px] ${
          direction === "right" && "text-right"
        } md:text-2xl`}
      >
        {title}
      </div>
      <div
        className={`self-stretch text-slate-500 text-xs font-normal leading-normal md:text-base ${
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
    <div
      className={`w-[72px] md:w-[152px] h-1.5 md:h-3 ${
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
    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-1-100 rounded-full flex-shrink-0 flex items-center justify-center">
      {content[variant]()}
    </div>
  );
}

type ConnectorProps = {
  length: number;
};

function Connector({ length }: ConnectorProps) {
  return (
    <div
      className={`w-0.5 origin-top-left border bg-primary-1-400`}
      style={{
        height: `${length}px`,
      }}
    >
      <div className="pulse-gradient"></div>
    </div>
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
      className={`flex flex-col items-center justify-center gap-4 md:gap-6 ${className}`}
      {...props}
    >
      {children.map((child, index) => {
        if ("month" in child) {
          return <TimelineMarker key={index} {...child} />;
        } else if ("variant" in child) {
          return <Roadmap key={index} {...child} />;
        } else {
          return <Connector key={index} {...child} />;
        }
      })}
    </div>
  );
}

Timeline.connect = (length: number) => ({ length });
export default Timeline;
