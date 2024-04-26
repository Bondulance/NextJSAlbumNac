import Image from "next/image";

interface Props {
  height: number;
  width: number;
  imgSrc: string;
  otherClasses?: string;
}

const StaticCard = ({ height, width, imgSrc, otherClasses }: Props) => {
  return (
    <div className="border-[2px] border-n-200 rounded-lg z-1 shadow-xl overflow-hidden">
      <Image
        src={imgSrc}
        height={height}
        width={width}
        alt="album"
        className={`object-cover pointer-events-none ${otherClasses}`}
      />
    </div>
  );
};

export default StaticCard;
