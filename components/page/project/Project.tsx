import ProjectCard from "@/components/card/ProjectCard";
const Project: React.FC = () => {
  return (
    <div className="full bg-transparent flex flex-col gap-12 items-center py-20">
      <div className=" w-full text-center text-white text-4xl font-extrabold">
        <h1 className=" inline pb-2 border-b-[1px] border-gray-600">Project</h1>
      </div>

      <div className=" grid grid-cols-2 gap-10 items-center w-full px-[8%]">
        {[1, 2, 3, 4, 5, 1, 1, 1, 1, 1].map((data: number, i: number) => {
          return <ProjectCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default Project;
