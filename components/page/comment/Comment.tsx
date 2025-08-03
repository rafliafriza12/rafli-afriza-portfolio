"use client";
import Wave from "@/components/svg/Wave";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronRight, CircleUser } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import API from "@/utils/API";

const CommentPage: React.FC = () => {
  const [comments, setComments] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAllComments = () => {
    API.get("/api/comment/")
      .then((res) => {
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="w-full min-h-screen bg-transparent flex flex-col gap-12 items-center justify-center py-10 md:py-20 px-5 sm:px-6 lg:px-8 relative z-0">
      <div className="absolute z-[-10] top-20 sm:top-60 -left-1/4 sm:-left-9 w-[150%] sm:w-full scale-[1.1] opacity-70 blur-md">
        <Wave />
      </div>
      <div className="w-full grid grid-cols-1  gap-10 place-items-start ">
        <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/20 w-full flex flex-col gap-5 max-h-full overflow-y-auto">
          <div className="w-full p-4 rounded-xl border transition-all relative group hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/30 hover:bg-gradient-to-r hover:from-indigo-500/15 hover:to-purple-500/15">
            <div className="flex items-center gap-2 mb-3 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pin w-4 h-4"
              >
                <path d="M12 17v5"></path>
                <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path>
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">
                Pinned Comment
              </span>
            </div>
            <div className="flex w-full items-start gap-3 sm:gap-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={"/assets/img/photo2.png"}
                  alt="Rafli's Profile"
                  fill
                  className="relative rounded-full border-2 border-indigo-500/50 object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium truncate text-indigo-200 text-base sm:text-lg">
                      Rafli Afriza Nugraha
                    </h4>
                    <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-full flex-shrink-0">
                      Admin
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400 whitespace-nowrap block sm:block">
                      Jun 14, 2025
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm break-words leading-relaxed mt-1">
                  Thanks for stopping by! Drop a comment if you have any
                  feedback or just want to say hi 👋
                </p>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="w-full bg-white/[0.02] backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 w-full flex flex-col gap-5 animate-pulse">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-600 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-600 rounded w-full"></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-600 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-600 rounded w-full"></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gray-600 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-600 rounded w-full"></div>
                </div>
              </div>
            </div>
          ) : (
            comments.map((comment: any, index: number) => {
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl border transition-all relative group hover:shadow-lg hover:-translate-y-0.5 bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <div className="flex w-full items-start gap-3 sm:gap-4">
                    {comment.profileImg ? (
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <Image
                          src={comment.profileImg}
                          alt="User Profile"
                          fill
                          className="relative rounded-full border-2 border-indigo-500/50 object-cover"
                        />
                      </div>
                    ) : (
                      <CircleUser size={40} className="text-indigo-500" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                        <div className=" flex items-center gap-2 text-indigo-200 text-base sm:text-lg">
                          <h4 className="font-medium truncate text-indigo-200 text-base sm:text-lg">
                            {comment.name}
                          </h4>
                          <ChevronRight size={15} />
                          <Link
                            href={`/project/${comment.projectSlug}`}
                            className=" font-medium hover:underline text-sm sm:text-base"
                          >
                            {comment.projectSlug.replace("-", " ")}
                          </Link>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-400 whitespace-nowrap block sm:block">
                            {moment(comment.createdAt).fromNow()}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm break-words leading-relaxed mt-1">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
