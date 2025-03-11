const ResumePage: React.FC = () => {
  return (
    <div className="w-full bg-transparent flex flex-col gap-12 items-center py-20">
      <div className=" w-full text-center text-white text-4xl font-extrabold">
        <h1 className=" inline pb-2 border-b-[1px] border-gray-600">Resume</h1>
      </div>

      <div className=" w-full px-20 flex justify-between items-start">
        <div className=" w-[58%] flex flex-col gap-10 items-start">
          <div className=" w-full flex flex-col items-start gap-5">
            <div>
              <h1 className=" font-bold text-2xl text-white">Education</h1>
              <div className="rounded-full h-1 mb-4 bg-gray-700">
                <div
                  className="bg-[#1B5F96] h-1 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className=" w-full px-4">
              <ol className="relative border-s border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Informatics{" "}
                      <span className=" animate-pulse text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-[#1B5F96] text-white ms-3">
                        Latest
                      </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      Syiah Kuala University, 2022 - Present
                    </time>
                    <p className="text-base font-normal text-gray-400">
                      Educated at Syiah Kuala University majoring in
                      Informatics, mastering basic to advanced concepts in
                      software development, programming and information
                      technology.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Mathematics and Natural Sciences
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      SMA Negeri 1 TebingTinggi City, 2019 - 2022
                    </time>
                    <p className="text-base font-normal text-gray-400">
                      High school graduate majoring in Mathematics and Natural
                      Sciences, has a strong foundation in mathematics, problem
                      solving, as well as sharp analytical skills.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Junior High School
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      SMP Negeri 1 TebingTinggi City, 2016 - 2019
                    </time>
                    <p className="text-base font-normal text-gray-400">
                      Complete junior high school education with good academic
                      achievements, develop basic skills in various fields of
                      science, and build a strong foundation for further
                      education.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Elementary School
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      SD Negeri 163080 TebingTinggi City, 2010 - 2016
                    </time>
                    <p className="text-base font-normal text-gray-400">
                      Complete basic education in elementary school with
                      satisfactory achievements, building a strong foundation in
                      reading, writing, arithmetic and social skills.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className=" w-full flex flex-col items-start gap-5">
            <div>
              <h1 className=" font-bold text-2xl text-white">Experience</h1>
              <div className="rounded-full h-1 mb-4 bg-gray-700">
                <div
                  className="bg-[#1B5F96] h-1 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>

            <div className=" w-full px-4">
              <ol className="relative border-s border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Front-End Engineer{" "}
                      <span className=" animate-pulse text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-[#1B5F96] text-white ms-3">
                        Latest
                      </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      HiEvents, 2024 - Present
                    </time>
                    <p className="text-base font-normal text-gray-400">
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
        </div>

        <div className=" w-[40%] flex flex-col gap-14 items-start">
          <div className=" w-full flex flex-col items-start">
            <div>
              <h1 className=" font-bold text-2xl text-white pb-1">
                Design Skills
              </h1>
              <div className="rounded-full h-[1px] mb-4 bg-gray-700"></div>
            </div>

            <div className=" w-full flex flex-col gap-1 text-white">
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">Web Design</h1>
                  <h1 className=" text-gray-400">87%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">Figma</h1>
                  <h1 className=" text-gray-400">70%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-col items-start">
            <div>
              <h1 className=" font-bold text-2xl text-white pb-1">
                Coding Skills
              </h1>
              <div className="rounded-full h-[1px] mb-4 bg-gray-700"></div>
            </div>

            <div className=" w-full flex flex-col gap-1 text-white">
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">React.JS</h1>
                  <h1 className=" text-gray-400">85%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">Laravel</h1>
                  <h1 className=" text-gray-400">92%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">Javasript</h1>
                  <h1 className=" text-gray-400">95%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">Typesript</h1>
                  <h1 className=" text-gray-400">80%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">HTML</h1>
                  <h1 className=" text-gray-400">100%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">CSS</h1>
                  <h1 className=" text-gray-400">98%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">C</h1>
                  <h1 className=" text-gray-400">75%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" w-full flex items-center justify-between">
                  <h1 className=" font-bold text-base ">Java</h1>
                  <h1 className=" text-gray-400">78%</h1>
                </div>
                <div className="rounded-full h-1 mb-4 bg-gray-700">
                  <div
                    className="bg-[#1B5F96] h-1 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-col items-start">
            <div>
              <h1 className=" font-bold text-2xl text-white pb-1">Knowledge</h1>
              <div className="rounded-full h-[1px] mb-4 bg-gray-700"></div>
            </div>

            <div className=" w-full flex flex-wrap justify-start gap-2 text-white font-semibold text-sm">
              <div className=" px-3 bg-[#1B5F96]">React.JS</div>
              <div className=" px-3 bg-[#1B5F96]">Next.JS</div>
              <div className=" px-3 bg-[#1B5F96]">Javascript</div>
              <div className=" px-3 bg-[#1B5F96]">Typescript</div>
              <div className=" px-3 bg-[#1B5F96]">Express.JS</div>
              <div className=" px-3 bg-[#1B5F96]">Mongo DB</div>
              <div className=" px-3 bg-[#1B5F96]">Laravel</div>
              <div className=" px-3 bg-[#1B5F96]">C</div>
              <div className=" px-3 bg-[#1B5F96]">Java</div>
              <div className=" px-3 bg-[#1B5F96]">Python</div>
              <div className=" px-3 bg-[#1B5F96]">SQL</div>
              <div className=" px-3 bg-[#1B5F96]">Internet of Things</div>
              <div className=" px-3 bg-[#1B5F96]">Docker</div>
              <div className=" px-3 bg-[#1B5F96]">REST API</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
