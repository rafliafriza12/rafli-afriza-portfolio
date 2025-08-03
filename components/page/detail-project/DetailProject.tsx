"use client";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CodeXml,
  Star,
  Github,
  MessageSquare,
} from "lucide-react";
import { useParams } from "next/navigation";
import { getProjectBySlug } from "@/datas/project";
import { useMemo } from "react";
import Image from "next/image";
import { IRepositories } from "@/types/project.type";
import { useState, useEffect, useCallback } from "react";
import { XCircle } from "lucide-react"; // Import icon XCircle untuk tombol hapus
import API from "@/utils/API";
import { CircleUser } from "lucide-react";
import moment from "moment";
import { ToastContainer, Bounce, toast } from "react-toastify";

const DetailProjectPage: React.FC = () => {
  const { slug } = useParams();

  const project = useMemo(() => {
    if (!slug || typeof slug !== "string") return undefined;
    return getProjectBySlug(slug);
  }, [slug]);

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null
  ); // State untuk URL pratinjau
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null); // State untuk pesan error upload
  const [comments, setComments] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // isValidFileType sekarang mengembalikan string pesan error atau true
  const isValidFileType = useCallback((file: File): string | boolean => {
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
    const maxSize = 5 * 1024 * 1024; // 5MB (dikoreksi agar konsisten dengan teks di UI)

    if (!validTypes.includes(file.type)) {
      return "Tipe file tidak valid. Hanya JPG, JPEG, dan PNG yang diizinkan.";
    }

    if (file.size > maxSize) {
      return `Ukuran file melebihi batas 5MB.`;
    }

    return true;
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProfileImage(null); // Reset gambar sebelumnya
      setProfileImagePreview(null); // Reset pratinjau
      setUploadError(null); // Reset error

      const file = e.target.files?.[0];

      if (file) {
        const validationResult = isValidFileType(file);

        if (validationResult === true) {
          setProfileImage(file);
          setProfileImagePreview(URL.createObjectURL(file)); // Buat URL objek untuk pratinjau
        } else {
          setUploadError(validationResult as string); // Set pesan error
        }
      }
      // Penting: Reset input file agar onChange event terpicu lagi jika file yang sama dipilih
      e.target.value = "";
    },
    [isValidFileType] // Tambahkan isValidFileType sebagai dependensi
  );

  // Fungsi untuk menghapus gambar yang diunggah
  const handleRemoveImage = useCallback(() => {
    setProfileImage(null);
    setProfileImagePreview(null);
    setUploadError(null);
    // Jika Anda ingin mereset input file secara fisik, Anda bisa menggunakan ref
    // Contoh: if (fileInputRef.current) fileInputRef.current.value = '';
  }, []);

  const handlePostComment = () => {
    setIsPosting(true); // Aktifkan loading saat posting dimulai
    const formData = new FormData();
    formData.append("name", name);
    formData.append("comment", message);
    formData.append("projectSlug", project?.slug ?? "");
    if (profileImage) {
      formData.append("image", profileImage);
    }
    API.post(`/api/comment/${project?.id}`, formData)
      .then((res) => {
        setName("");
        setMessage("");
        handleRemoveImage();
        getComment(); // Panggil fungsi untuk memuat ulang komentar
        toast.success(res.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        // console.log(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message ?? "Fail while send comment", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .finally(() => {
        setIsPosting(false); // Nonaktifkan loading setelah proses selesai
      });
  };

  const getComment = () => {
    API.get(`/api/comment/${project?.id}`)
      .then((res) => {
        setComments(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getComment();
  }, []);

  if (!project) {
    return (
      <div className="w-full bg-transparent flex flex-col gap-10 sm:gap-14 items-center py-10 relative z-0 px-10 md:px-16 lg:px-20">
        <div className="w-full flex items-center justify-start">
          <Link
            href={"/#projects"}
            className="px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-gray-600 text-white flex items-center gap-2 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:translate-x-[-3px] duration-200"
            />
            <span className="text-xs sm:text-sm font-semibold">Back</span>
          </Link>
        </div>
        <div className="text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full bg-transparent flex flex-col gap-10 sm:gap-14 items-center py-10 relative z-0 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="w-full flex flex-row sm:items-center justify-start gap-3 sm:gap-0">
        <Link
          href={"/#projects"}
          className="px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-gray-600 text-white flex items-center gap-2 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:translate-x-[-3px] duration-200"
          />
          <span className="text-xs sm:text-sm font-semibold">Back</span>
        </Link>
        <nav
          className="flex px-3 sm:px-5 py-2 sm:py-3 text-gray-700"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li>
              <div className="flex items-center">
                <Link
                  href={"/#projects"}
                  className="ms-1 text-sm font-medium md:ms-2 text-gray-400 hover:text-white"
                >
                  Projects
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium md:ms-2 text-white line-clamp-1">
                  {project?.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="w-full flex flex-col items-start justify-start gap-5 sm:gap-7">
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {project.title}
          </h1>
          <div className="w-full rounded-full h-[2px] bg-gradient-to-r from-[#1B5F96] via-[#1B5F96]/30 to-transparent"></div>
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden block md:hidden">
            <Image
              src={project.imgUrl}
              alt={project.title}
              fill
              className="w-full h-full object-cover duration-300 hover:scale-[1.1]"
            />
          </div>
          {project.liveDemoUrl && (
            <Link
              href={project.liveDemoUrl}
              target="_blank"
              className="flex md:hidden w-full py-2 sm:py-3 bg-[#1B5F96] text-white rounded-md cursor-pointer duration-300 hover:translate-y-[-4px] font-bold items-center justify-center gap-2  text-sm sm:text-base"
            >
              <span>Live Demo</span>
              <ArrowRight color="white" size={18} />
            </Link>
          )}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {project.description}
          </p>
          <div className="w-full grid grid-cols-2 gap-4 sm:gap-5 text-white lg:mt-5">
            <div className="w-full h-[60px] sm:h-[70px] flex items-center rounded-md border-[3px] border-[#31363F] hover:shadow-[0px_0px_10px_rgba(27,95,150,0.5)] hover:-translate-y-1 duration-300">
              <div className="w-[25%] sm:w-[20%] h-full bg-[#31363F] flex justify-center items-center flex-shrink-0">
                <CodeXml size={22} color="#888888" />
              </div>
              <div className="w-[75%] sm:w-[80%] px-3 sm:px-5 flex flex-col justify-center">
                <h1 className="font-extrabold text-base sm:text-lg text-[#1B5F96]">
                  {project.technologies.length}
                </h1>
                <h1 className="text-xs sm:text-sm font-bold">Technologies</h1>
              </div>
            </div>
            <div className="w-full h-[60px] sm:h-[70px] flex items-center rounded-md border-[3px] border-[#31363F] hover:shadow-[0px_0px_10px_rgba(27,95,150,0.5)] hover:-translate-y-1 duration-325">
              <div className="w-[25%] sm:w-[20%] h-full bg-[#31363F] flex justify-center items-center flex-shrink-0">
                <Star size={22} color="#888888" />
              </div>
              <div className="w-[75%] sm:w-[80%] px-3 sm:px-5 flex flex-col justify-center">
                <h1 className="font-extrabold text-base sm:text-lg text-[#1B5F96]">
                  {project.keyFeatures.length}
                </h1>
                <h1 className="text-xs sm:text-sm font-bold">Key Features</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
            <CodeXml size={22} color="#1B5F96" />
            <h1 className="text-lg sm:text-xl font-semibold text-white/90">
              Technologies Used
            </h1>
          </div>

          <div className="w-full flex flex-wrap justify-start gap-2 text-white font-semibold text-xs sm:text-sm">
            {project.technologies.map((technology: string) => {
              return (
                <div
                  key={technology}
                  className="px-3 py-1 bg-[#1B5F96] rounded"
                >
                  {technology}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
            <Github size={22} color="#1B5F96" />
            <h1 className="text-lg sm:text-xl font-semibold text-white/90">
              Repositories
            </h1>
          </div>
          <div className="w-full flex justify-start items-center gap-3 sm:gap-5 flex-wrap">
            {project.repositories.map((repository: IRepositories) => {
              return (
                <Link
                  key={repository.url}
                  target="_blank"
                  href={repository.url}
                  className="px-5 py-3 w-full md:w-auto sm:px-7 sm:py-4 rounded-md bg-white/[0.02] text-white flex items-center justify-center gap-2 hover:translate-y-[-4px] duration-300 border-gray-700 hover:border-[#1B5F96] border-[2px] text-xs sm:text-sm"
                >
                  <span className="font-semibold">{repository.title}</span>
                  <ArrowRight size={16} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-8 sm:gap-10">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden hidden md:block">
            <Image
              src={project.imgUrl}
              alt={project.title}
              fill
              className="w-full h-full object-cover duration-300 hover:scale-[1.1]"
            />
          </div>
          {project.liveDemoUrl && (
            <Link
              href={project.liveDemoUrl}
              target="_blank"
              className="hidden md:flex w-full py-2 sm:py-3 bg-[#1B5F96] text-white rounded-md cursor-pointer duration-300 hover:translate-y-[-4px] font-bold items-center justify-center gap-2  text-sm sm:text-base"
            >
              <span>Live Demo</span>
              <ArrowRight color="white" size={18} />
            </Link>
          )}
          <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 space-y-4 sm:space-y-6 hover:border-white/20 transition-colors duration-300 group">
            <h3 className="text-lg sm:text-xl font-semibold text-white/90 flex items-center gap-2 sm:gap-3">
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
                className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 text-[#1B5F96] group-hover:rotate-[20deg] transition-transform duration-300"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              Key Features
            </h3>
            <ul className="list-none space-y-2">
              {project.keyFeatures.map((item: string, i: number) => {
                return (
                  <li
                    key={i}
                    className="group flex items-start space-x-2 sm:space-x-3 p-2 sm:p-2.5 md:p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                  >
                    <div className="relative mt-1.5 sm:mt-2">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                      <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
        <MessageSquare size={22} color="#1B5F96" />
        <h1 className="text-lg sm:text-xl font-semibold text-white/90">
          Discussion Forum
        </h1>
      </div>
      <div className="w-full grid grid-cols-1  gap-10 place-items-start ">
        <form
          action={handlePostComment}
          className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/20 w-full flex flex-col gap-10"
        >
          <div
            className="space-y-2 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              required
            />
          </div>
          <div
            className="space-y-2 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              required
              placeholder="Write your comment here"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              rows={5}
            ></textarea>
          </div>
          <div
            className="space-y-2 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <label
              htmlFor="profileImg"
              className="block text-sm font-medium text-white"
            >
              Profile Photo <span className="text-gray-400">(optional)</span>
            </label>
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-full">
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg" // Lebih spesifik di sini
                  className="hidden"
                  onChange={handleFileInput} // Langsung panggil handler
                  id="profileImg"
                />
                {!profileImagePreview ? ( // Tampilkan tombol choose jika belum ada gambar
                  <label
                    htmlFor="profileImg"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-all border border-dashed border-indigo-500/50 hover:border-indigo-500 group cursor-pointer" // Tambahkan cursor-pointer
                  >
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
                      className="lucide lucide-image-plus w-5 h-5 group-hover:scale-110 transition-transform"
                    >
                      <path d="M16 5h6"></path>
                      <path d="M19 2v6"></path>
                      <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"></path>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                      <circle cx="9" cy="9" r="2"></circle>
                    </svg>
                    <span>Choose Profile Photo</span>
                  </label>
                ) : (
                  // Tampilkan pratinjau gambar dan tombol hapus jika sudah ada gambar
                  <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden group flex justify-center items-center">
                    {" "}
                    {/* Sesuaikan tinggi pratinjau */}
                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden relative">
                      <Image
                        src={profileImagePreview}
                        alt="Profile Preview"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute flex items-center gap-2 top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-red-500/80 transition-colors z-10"
                      aria-label="Remove photo"
                    >
                      <XCircle size={20} />
                      <span className="hidden md:block">Delete Photo</span>
                    </button>
                    {/* Overlay nama file */}
                    <div className="absolute inset-x-0 bottom-0  text-white text-xs p-1 text-center truncate">
                      {profileImage?.name}
                    </div>
                  </div>
                )}
                <p className="text-center text-gray-400 text-sm mt-2">
                  Max file size: 5MB
                </p>
                {uploadError && ( // Tampilkan pesan error jika ada
                  <p className="text-center text-red-400 text-sm mt-1">
                    {uploadError}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            data-aos="fade-up"
            data-aos-duration="1000"
            disabled={isPosting}
            className="relative  w-full h-12 bg-gradient-to-r bg-[#1B5F96] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
          >
            <div className="relative flex items-center justify-center gap-2">
              {isPosting ? ( // Tampilkan teks berbeda saat loading
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Posting...</span>
                </>
              ) : (
                // Tampilan normal saat tidak loading
                <>
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
                    className="lucide lucide-send w-4 h-4"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  <span>Post Comment</span>
                </>
              )}
            </div>
          </button>
        </form>
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
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium truncate text-indigo-200 text-base sm:text-lg">
                            {comment.name}
                          </h4>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default DetailProjectPage;
