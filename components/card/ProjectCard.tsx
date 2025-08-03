import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TProjectCardProps } from "@/types/project.type";
const ProjectCard: React.FC<TProjectCardProps> = ({
  slug,
  title,
  description,
  imgUrl,
}) => {
  return (
    <div className=" w-full rounded-2xl flex flex-col gap-5 bg-white/[0.03] p-5 md:p-7 duration-300 border border-white/10 hover:border-white/20 group">
      <div className=" w-full h-[200px] rounded-xl overflow-hidden relative">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="w-full h-full object-cover duration-300 group-hover:scale-[1.2]"
        />
      </div>
      <h1 className=" line-clamp-2 font-bold text-base lg:text-ll text-white">
        {title}
      </h1>
      <p className=" w-full text-left text-xs lg:text-sm text-gray-400 line-clamp-3">
        {description}
      </p>

      <div className="w-full flex justify-end">
        <Link
          href={`/project/${slug}`}
          className="px-4 py-2 rounded-md bg-gray-600 text-white flex items-center gap-2 "
        >
          <span className=" text-sm font-semibold">Details</span>
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
