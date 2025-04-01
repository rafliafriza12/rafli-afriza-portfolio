import Link from "next/link";
import Image from "next/image";
const ProjectCard: React.FC = () => {
  return (
    <Link
      href={"#"}
      className=" w-full h-[500px] rounded-md bg-[#31363F] text-[#e4e3e3] flex flex-col gap-2 overflow-hidden group"
    >
      <div className=" w-full h-[50%] overflow-hidden relative">
        <Image
          src={"/assets/songPic/d4vd.jpeg"}
          alt="project"
          fill
          className=" object-cover group-hover:scale-[1.1] duration-500"
        />
      </div>

      <div className=" flex flex-col w-full px-4 gap-3">
        <h1 className=" font-bold text-2xl">Aqualink</h1>
        <p>
          I have completed developing a landing page for the Informatics Student
          Association using Next.js TypeScript. The project includes a
          responsive and modern interface design, with optimized performance to
          ensure a seamless user experience across devices. By leveraging the
          advantages of server-side rendering and efficient routing from
          Next.js, I was able to create pages that were fast, secure, and easy
          to manage, while meeting the organization's needs in conveying
          information to students effectively.
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
