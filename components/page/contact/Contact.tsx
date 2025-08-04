"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Send,
  Laptop,
  Loader2,
} from "lucide-react";
import Wave from "@/components/svg/Wave";
import Link from "next/link";
import { ToastContainer, Bounce, toast } from "react-toastify";
import API from "@/utils/API";
import { IsDesktop } from "@/hooks";

const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [isNameFocus, setIsNameFocus] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [isEmailFocus, setIsEmailFocus] = useState<boolean>(false);

  const [subject, setSubject] = useState<string>("");
  const [isSubjectFocus, setIsSubjectFocus] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isDesktop = IsDesktop();

  const handleBlur = (type: string): void => {
    if (type === "name") {
      name !== "" ? setIsNameFocus(true) : setIsNameFocus(false);
    } else if (type === "email") {
      email !== "" ? setIsEmailFocus(true) : setIsEmailFocus(false);
    } else if (type === "subject") {
      subject !== "" ? setIsSubjectFocus(true) : setIsSubjectFocus(false);
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    API.post("/api/email/send", {
      fromName: name,
      email: email,
      subject: subject,
      text: message,
    })
      .then((res) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsNameFocus(false);
        setIsEmailFocus(false);
        setIsSubjectFocus(false);
        toast.success(res.data.message, {
          position: isDesktop ? "bottom-right" : "top-center",
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
      .catch((err) => {
        toast.error(err.response.data.message ?? "Fail while send message", {
          position: isDesktop ? "bottom-right" : "top-center",
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
        setIsLoading(false);
      });
  };

  return (
    <div className=" w-full min-h-screen flex flex-col items-center justify-center gap-20 relative z-0 py-10">
      <div className=" absolute hidden lg:block z-[-10] top-70 -left-9 w-full scale-[1.1] blur-md">
        <Wave />
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 text-white px-10 lg:px-20 gap-10 lg:gap-5">
        <div className=" w-full flex flex-col items-center lg:items-start justify-center gap-8">
          <h1 className=" font-extrabold text-lg md:text-xl lg:text-3xl pb-2 border-b-[1px] border-gray-600 text-white">
            DON'T BE A <span className="text-[#1B5F96]">STRANGER !</span>
          </h1>
          <p className=" font-medium text-center lg:text-left text-sm md:text-base lg:w-[100%]  lg:text-lg text-gray-300">
            Feel from in get in touch with me. I'm always open to discussing new
            project, creative ideas or opportunities to be part of your vision
          </p>
          <div className=" hidden lg:flex flex-wrap gap-10">
            <div className=" flex fcol items-center gap-5">
              <div className=" bg-[#31363F] p-2 rounded-md">
                <Mail size={35} color="#1B5F96" />
              </div>
              <div className=" flex flex-col justify-center gap-2">
                <h1 className="text-sm">Mail me :</h1>
                <h1 className=" text-base font-bold">
                  rafliafriza90@gmail.com
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" bg-[#31363F] p-2 rounded-md">
                <Phone size={35} color="#1B5F96" />
              </div>
              <div className=" flex flex-col justify-center gap-2">
                <h1 className="text-sm">Call me :</h1>
                <h1 className=" text-base font-bold">
                  +62 - 831 - 9747 - 5917
                </h1>
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" bg-[#31363F] p-2 rounded-md">
                <Laptop size={35} color="#1B5F96" />
              </div>
              <div className=" flex flex-col justify-center gap-2">
                <h1 className="text-sm">Software House :</h1>
                <Link
                  href={"https://www.gutechdeveloper.site"}
                  target="_blank"
                  className=" text-base font-bold"
                >
                  www.gutechdeveloper.site
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-8 mt-5">
          <form
            onSubmit={handleSubmitForm}
            className="flex flex-col w-full items-start gap-8"
          >
            <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:h-16 text-gray-300 ">
              <div className=" w-full h-full relative">
                <label
                  htmlFor="name"
                  className={`duration-300 absolute font-semibold ${
                    isNameFocus
                      ? "-top-2 lg:-top-4 text-[#1B5F96] text-xs lg:text-sm"
                      : "top-4 text-[#888888] text-sm lg:text-base"
                  }`}
                >
                  Your name
                </label>
                <input
                  onFocus={() => setIsNameFocus(true)}
                  onBlur={() => handleBlur("name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="text"
                  required
                  className=" w-full h-12 bg-transparent border-b-[2px] border-[#888888] focus:outline-none text-sm lg:text-base font-medium"
                />
              </div>
              <div className=" w-full h-full relative">
                <label
                  htmlFor="email"
                  className={`duration-300 absolute font-semibold ${
                    isEmailFocus
                      ? "-top-2 lg:-top-4 text-[#1B5F96] text-xs lg:text-sm"
                      : "top-4 text-[#888888] text-sm lg:text-base"
                  }`}
                >
                  Your Email
                </label>
                <input
                  onFocus={() => setIsEmailFocus(true)}
                  onBlur={() => handleBlur("email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  required
                  type="email"
                  className=" w-full h-12 bg-transparent border-b-[2px] border-[#888888] focus:outline-none text-sm lg:text-base font-medium"
                />
              </div>
              <div className=" w-full h-full relative">
                <label
                  htmlFor="subject"
                  className={`duration-300 absolute font-semibold ${
                    isSubjectFocus
                      ? "-top-2 lg:-top-4 text-[#1B5F96] text-xs lg:text-sm"
                      : "top-4 text-[#888888] text-sm lg:text-base"
                  }`}
                >
                  Subject
                </label>
                <input
                  onFocus={() => setIsSubjectFocus(true)}
                  onBlur={() => handleBlur("subject")}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  id="subject"
                  type="text"
                  required
                  className=" w-full h-12 bg-transparent border-b-[2px] border-[#888888] focus:outline-none text-sm lg:text-base font-medium"
                />
              </div>
            </div>

            <div className=" w-full ">
              <textarea
                placeholder="Write your message"
                name=""
                id=""
                cols={30}
                required
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" placeholder:text-[#888888] w-full bg-white/[0.03]  rounded-lg p-2 focus:outline-none focus:shadow-[0px_0px_20px_rgba(27,95,150,0.5)] duration-300 border border-white/10 text-sm lg:text-base"
              ></textarea>
            </div>

            <div className="w-full">
              <button
                type="submit"
                disabled={isLoading} // Tombol dinonaktifkan saat loading
                className=" h-[50px] w-full lg:w-[250px] rounded-md border-[3px] border-[#31363F] flex items-center justify-between duration-200 hover:-translate-y-1 hover:shadow-[0px_0px_20px_rgba(27,95,150,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <h1 className="text-center w-full lg:w-[200px] font-bold text-gray-300">
                  {isLoading ? "Sending..." : "Send"}
                </h1>
                <div className=" h-full w-[50px] flex items-center justify-center bg-[#31363F]">
                  {isLoading ? (
                    <Loader2 size={27} className="animate-spin" />
                  ) : (
                    <Send size={27} />
                  )}
                </div>
              </button>
            </div>
          </form>

          <div className="flex lg:hidden flex-wrap gap-10 mt-10">
            <div className=" flex  items-center gap-5">
              <div className=" bg-[#31363F] p-2 rounded-md">
                <Mail size={20} color="#1B5F96" />
              </div>
              <div className=" flex flex-col justify-center gap-2">
                <h1 className="text-xs">Mail me :</h1>
                <h1 className=" text-sm font-bold">rafliafriza90@gmail.com</h1>
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" bg-[#31363F] p-2 rounded-md">
                <Phone size={20} color="#1B5F96" />
              </div>
              <div className=" flex flex-col justify-center gap-2">
                <h1 className="text-xs">Call me :</h1>
                <h1 className=" text-sm font-bold">+62 - 831 - 9747 - 5917</h1>
              </div>
            </div>
            <div className=" flex items-center gap-5">
              <div className=" bg-[#31363F] p-2 rounded-md">
                <Laptop size={20} color="#1B5F96" />
              </div>
              <div className=" flex flex-col justify-center gap-2">
                <h1 className="text-xs">Software House :</h1>
                <Link
                  href={"https://www.gutechdeveloper.site"}
                  target="_blank"
                  className=" text-sm font-bold"
                >
                  www.gutechdeveloper.site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position={isDesktop ? "bottom-right" : "top-center"}
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

export default ContactPage;
