const ResumePage: React.FC = () => {
  return (
    <div className="w-full bg-transparent flex flex-col gap-12 items-center py-10 md:py-20 px-5 sm:px-6 lg:px-8">
      {" "}
      {/* Added responsive horizontal padding */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
        {" "}
        {/* Max width for larger screens and consistent gap */}
        {/* Left Column: Education and Organization Experience */}
        <div className="w-full md:w-[50%] flex flex-col gap-10 items-start">
          <div className="w-full flex flex-col items-start gap-5">
            <div>
              <h1 className="font-bold text-lg md:text-2xl text-white">
                Education
              </h1>
              <div className="rounded-full h-1 mb-4 bg-gray-700">
                <div
                  className="bg-[#1B5F96] h-1 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="w-full px-2 sm:px-4">
              {" "}
              {/* Adjusted horizontal padding for smaller screens */}
              <ol className="relative border-s border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Informatics{" "}
                      <span className="animate-pulse text-xs sm:text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-[#1B5F96] text-white ms-3">
                        Latest
                      </span>
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      Syiah Kuala University, 2022 - Present
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      Educated at Syiah Kuala University majoring in
                      Informatics, mastering basic to advanced concepts in
                      software development, programming and information
                      technology.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Mathematics and Natural Sciences
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      SMA Negeri 1 TebingTinggi City, 2019 - 2022
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      High school graduate majoring in Mathematics and Natural
                      Sciences, has a strong foundation in mathematics, problem
                      solving, as well as sharp analytical skills.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Junior High School
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      SMP Negeri 1 TebingTinggi City, 2016 - 2019
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      Complete junior high school education with good academic
                      achievements, develop basic skills in various fields of
                      science, and build a strong foundation for further
                      education.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Elementary School
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      SD Negeri 163080 TebingTinggi City, 2010 - 2016
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      Complete basic education in elementary school with
                      satisfactory achievements, building a strong foundation in
                      reading, writing, arithmetic and social skills.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-5">
            <div>
              <h1 className="font-bold text-lg md:text-2xl text-white">
                {" "}
                {/* Made text size responsive here too */}
                Organization Experience
              </h1>
              <div className="rounded-full h-1 mb-4 bg-gray-700">
                <div
                  className="bg-[#1B5F96] h-1 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            <div className="w-full px-2 sm:px-4">
              {" "}
              {/* Adjusted horizontal padding for smaller screens */}
              <ol className="relative border-s border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Head of the Student Development and Research Department{" "}
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      Informatics Student Association (HMIF) USK, Feb 2025 -
                      Present
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      Led the Student Research and Development Department (PPM),
                      driving academic innovation and student development
                      programs. Managed cross-functional teams to deliver
                      impactful events and workshops, while fostering
                      collaboration, mentoring members, and promoting a culture
                      of innovation within the tech student community.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Head of Informatics Club
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      Informatics Department of Syiah Kuala University, Feb 2024
                      - Present
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      Led the Informatics Club, overseeing member coordination
                      and the execution of weekly classes in Software
                      Development, Machine Learning, and IoT. Actively served as
                      the main instructor for Software Development classes,
                      delivering hands-on sessions and technical guidance.
                      Assigned division-specific tasks to enhance members'
                      skills and fostered a collaborative, growth-focused
                      learning environment.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Vice Head of the Student Research and Development
                      Department
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      Informatics Student Association (HMIF) USK, Feb 2024 - Feb
                      2025
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      Experienced as Vice Head of the Student R&D Department
                      (PPM), leading academic innovation programs and tech
                      events. Held key roles in INFEST Expo, Informatics Club,
                      and tech education initiatives like NGOBAR, Tech Talk, and
                      Linux Installation. Skilled in leadership, event
                      management, and community development.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* Right Column: Professional Experience, Technical Skills, Soft Skills, Language */}
        <div className="w-full md:w-[48%] flex flex-col gap-10 md:gap-14 items-start">
          {" "}
          {/* Adjusted gap for consistency */}
          <div className="w-full flex flex-col items-start gap-5">
            <div>
              <h1 className="font-bold text-lg md:text-2xl text-white">
                {" "}
                {/* Made text size responsive here too */}
                Professional Experience
              </h1>
              <div className="rounded-full h-1 mb-4 bg-gray-700">
                <div
                  className="bg-[#1B5F96] h-1 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>

            <div className="w-full px-2 sm:px-4">
              {" "}
              {/* Adjusted horizontal padding for smaller screens */}
              <ol className="relative border-s border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      FullStack Engineer{" "}
                      <span className="animate-pulse text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-[#1B5F96] text-white ms-3">
                        Latest
                      </span>
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      Physics Department of Syiah Kuala University, May 2025 -
                      Aug 2025
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      As a Full-Stack Engineer, focusing on developing robust
                      and scalable laboratory management systems using Laravel
                      and MySQL. Experienced in building responsive web
                      interfaces with Tailwind CSS for inventory control,
                      equipment rental tracking, and visitor scheduling.
                      Proficient in implementing complex CRUD operations,
                      managing database relationships, and handling dynamic form
                      submissions with real-time status updates.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center h-3 w-3 md:w-6 md:h-6 rounded-full -start-[7px] md:-start-3 bg-[#1B5F96]"></span>
                  <div className="px-3">
                    <h3 className="mb-1 text-base md:text-lg font-semibold text-white">
                      Frontend Engineer{" "}
                    </h3>
                    <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500">
                      HiEvents, June 2024 - June 2025
                    </time>
                    <p className="text-sm md:text-base font-normal text-gray-400">
                      As a Front-End Engineer, focusing on developing responsive
                      and intuitive user interfaces using HTML, CSS, JavaScript,
                      Bootstrap, and React. Experienced in working with modern
                      frameworks such as React to create dynamic and
                      user-friendly web experiences.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-1 md:gap-5">
            {" "}
            {/* Added gap for consistency */}
            <div>
              <h1 className="font-bold text-lg md:text-2xl text-white pb-1">
                {" "}
                {/* Made text size responsive here too */}
                Technical Skill
              </h1>
              <div className="rounded-full h-[1px] mb-4 bg-gray-700"></div>
            </div>
            <div className="w-full flex flex-wrap justify-start gap-2 text-white font-semibold text-sm">
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                React.JS
              </div>{" "}
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Next.JS
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Javascript
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Typescript
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Express.JS
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Mongo DB
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Laravel
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                C
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Java
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Python
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                SQL
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Internet of Things
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Docker
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                REST API
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-1 md:gap-5">
            {" "}
            {/* Added gap for consistency */}
            <div>
              <h1 className="font-bold text-lg md:text-2xl text-white pb-1">
                {" "}
                {/* Made text size responsive here too */}
                Soft Skill
              </h1>
              <div className="rounded-full h-[1px] mb-4 bg-gray-700"></div>
            </div>
            <div className="w-full flex flex-wrap justify-start gap-2 text-white font-semibold text-sm">
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Leadership
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Communication
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Problem Solving
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Project Management
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-1 md:gap-5">
            {" "}
            {/* Added gap for consistency */}
            <div>
              <h1 className="font-bold text-lg md:text-2xl text-white pb-1">
                {" "}
                {/* Made text size responsive here too */}
                Language
              </h1>
              <div className="rounded-full h-[1px] mb-4 bg-gray-700"></div>
            </div>
            <div className="w-full flex flex-wrap justify-start gap-2 text-white font-semibold text-sm">
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                Indonesia (native)
              </div>
              <div className="px-3 py-1 bg-[#1B5F96] rounded text-xs md:text-base">
                English (basic)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
