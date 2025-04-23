import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ResumePage: React.FC = () => {
  return (
    <div className="w-full bg-transparent flex flex-col gap-12 items-center py-20">
      <div className=" w-full text-center text-white text-4xl font-extrabold">
        <h1 className=" inline pb-2 border-b-[1px] border-gray-600">Resume</h1>
      </div>

      <div className=" w-full px-20 flex justify-between items-start">
        <div className=" w-[50%] flex flex-col gap-10 items-start">
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

        <div className=" w-[48%] flex flex-col gap-14 items-start">
          <div className=" w-full flex flex-col items-start gap-5">
            <div>
              <h1 className=" font-bold text-2xl text-white">Project</h1>
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
                      AquaLink{" "}
                      <span className=" animate-pulse text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-[#1B5F96] text-white ms-3">
                        Latest
                      </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      Dec 2024 - Feb 2025
                    </time>
                    <p className="text-base font-normal text-gray-400 mb-2">
                      Developed a blockchain-based platform for water credit
                      trading and conservation incentives, promoting sustainable
                      water usage through transparent and secure transactions.
                      This system is integrated with an IoT tool capable of
                      detecting water discharge and controlling automatic taps,
                      enabling real-time monitoring and management.
                      Additionally, it features historical visualization of
                      water usage data, providing valuable insights to encourage
                      responsible consumption and support data-driven
                      decision-making.
                    </p>
                    <Link
                      href={"https://aqualink.site"}
                      target="_blank"
                      className="text-base font-normal text-gray-400 flex items-center gap-2"
                    >
                      <span>Go to Project</span>
                      <span>
                        <ArrowRight size={17} />
                      </span>
                    </Link>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Outcome Based Education Sentiment Analysis
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      Jan 2025
                    </time>
                    <p className="text-base font-normal text-gray-400 mb-2">
                      Outcome Based Education Sentiment Analysis is a project
                      aimed at analyzing public sentiment toward the
                      Outcome-Based Education (OBE) curriculum on Twitter. The
                      workflow includes data scraping, cleaning, feature
                      normalization using Word2Vec, sentiment annotation with
                      GPT-4o-mini, and training machine learning models such as
                      SVM, Naive Bayes, and fine-tuned IndoBERT. It also
                      features data visualizations like label distribution,
                      annotation agreement evaluation using Cohen's Kappa, word
                      clouds, and model performance comparisons to gain deeper
                      insights into sentiment trends in education discussions.
                    </p>
                    <Link
                      href={
                        "https://github.com/rafliafriza12/outcome-based-education-sentiment-analysis"
                      }
                      target="_blank"
                      className="text-base font-normal text-gray-400 flex items-center gap-2"
                    >
                      <span>Go to Source Code</span>
                      <span>
                        <ArrowRight size={17} />
                      </span>
                    </Link>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Findora
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      Dec 2024
                    </time>
                    <p className="text-base font-normal text-gray-400 mb-2">
                      Developed an Indonesian News Search Engine using
                      TypeScript, Next.js, Express, and MongoDB, enabling fast
                      and relevant news searches through the TF-IDF algorithm.
                      Built on a corpus of local Indonesian news, the platform
                      delivers accurate results through an interactive and
                      user-friendly interface, providing an efficient and
                      seamless search experience.
                    </p>
                    <Link
                      href={"https://github.com/rafliafriza12/findora-frontend"}
                      target="_blank"
                      className="text-base font-normal text-gray-400 flex items-center gap-2"
                    >
                      <span>Go to Source Code</span>
                      <span>
                        <ArrowRight size={17} />
                      </span>
                    </Link>
                  </div>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3  bg-[#1B5F96]"></span>
                  <div className=" px-3">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      Aspirasi Mahasiswa Politeknik Citra Widya Edukasi
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      Nov 2024
                    </time>
                    <p className="text-base font-normal text-gray-400 mb-2">
                      Developed a student aspiration platform for Politeknik
                      Citra Widya Edukasi using the MERN stack to efficiently
                      collect and manage student feedback. The platform ensures
                      secure data handling and seamless communication between
                      the frontend and backend through RESTful APIs and MongoDB
                      integration, enabling a reliable and responsive user
                      experience.
                    </p>
                    <Link
                      href={
                        "https://aspirasi-mahasiswa-politeknik-citra-widya-edukasi.vercel.app"
                      }
                      target="_blank"
                      className="text-base font-normal text-gray-400 flex items-center gap-2"
                    >
                      <span>Go to Project</span>
                      <span>
                        <ArrowRight size={17} />
                      </span>
                    </Link>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
