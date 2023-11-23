import Image from "next/image";

export type TeamCardProps = {
  name: string;
  position: string;
  description: string;
  image: string;
};

export default function TeamCard({
  name,
  position,
  description,
  image,
}: TeamCardProps) {
  <div className="w-72 h-[440px] bg-white rounded-2xl shadow flex-col justify-start items-start gap-1 inline-flex">
    <Image
      src={image}
      className="self-stretch h-[196px]"
      width={288}
      height={196}
      alt={`Photo of ${name}`}
    />
    <div className="self-stretch p-8 flex-col justify-center items-start gap-1 flex">
      <div className="self-stretch h-11 flex-col justify-center items-start gap-0.5 flex">
        <div className="self-stretch text-primary-4-400 text-lg font-extrabold leading-tight">
          {name}
        </div>
        <div className="self-stretch text-primary-4-200 text-base font-normal leading-tight">
          {position}
        </div>
      </div>
      <div className="self-stretch h-32 text-slate-700 text-base font-normal leading-loose">
        {description}
      </div>
    </div>
  </div>;
}
