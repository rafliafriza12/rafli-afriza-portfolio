"use client";
import { useState } from "react";
import { Mail, Phone, Instagram, Facebook, Send } from "lucide-react";
// import { Resend } from "resend";

// const resend = new Resend("re_epfx8jyr_MesKgzNMzBnKKsYmw4yNZPrP");
// import { onSendEmail } from "@/utils";
const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [isNameFocus, setIsNameFocus] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [isEmailFocus, setIsEmailFocus] = useState<boolean>(false);

  const [subject, setSubject] = useState<string>("");
  const [isSubjectFocus, setIsSubjectFocus] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");

  const handleBlur = (type: string): void => {
    if (type === "name") {
      name !== "" ? setIsNameFocus(true) : setIsNameFocus(false);
    } else if (type === "email") {
      email !== "" ? setIsEmailFocus(true) : setIsEmailFocus(false);
    } else if (type === "subject") {
      subject !== "" ? setIsSubjectFocus(true) : setIsSubjectFocus(false);
    }
  };

  // const handleSendEmail = async () => {
  //   const { data, error } = await resend.emails.send({
  //     from: email,
  //     to: ["rafliafriza90@gmail.com"],
  //     subject: subject,
  //     html: `<div
  //   style={{
  //     fontFamily: "Arial, sans-serif",
  //     padding: "20px",
  //     maxWidth: "600px",
  //     margin: "0 auto",
  //     border: "1px solid #ddd",
  //     borderRadius: "5px",
  //   }}
  // >
  //   <h1 style={{ color: "#333" }}>${name}!</h1>
  //   <p style={{ fontSize: "16px", color: "#555" }}>${message}</p>
  //   <hr
  //     style={{ margin: "20px 0", border: "none", borderTop: "1px solid #ddd" }}
  //   />
  // </div>`,
  //   });
  // };

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center gap-10 relative z-0">
      <div className=" absolute z-[-10] top-70 -left-9 w-full scale-[1.1] blur-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 220">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00c2cb" />
              <stop offset="50%" stop-color="#a742f5" />
              <stop offset="100%" stop-color="#00c2cb" />
              <animate
                attributeName="x1"
                values="0%;100%;50%;0%;100%;0%"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values="100%;200%;150%;100%;200%;100%"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#a742f5" />
              <stop offset="50%" stop-color="#00c2cb" />
              <stop offset="100%" stop-color="#a742f5" />
              <animate
                attributeName="x1"
                values="0%;100%;50%;0%;100%;0%"
                dur="10s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values="100%;200%;150%;100%;200%;100%"
                dur="10s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path
            fill="transparent"
            filter="url(#glow)"
            opacity="0.8"
            stroke="url(#gradient1)"
            strokeWidth="35"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              keyTimes="0;0.25;0.5;0.75;1"
              values="
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,220 800,100 600,150 C400,220 200,100 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,160 800,140 600,150 C400,160 200,140 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </path>

          <path
            fill="transparent"
            filter="url(#glow)"
            opacity="0.6"
            stroke="url(#gradient2)"
            strokeWidth="35"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              keyTimes="0;0.25;0.5;0.75;1"
              values="
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,240 800,120 600,180 C400,240 200,120 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,150 800,210 600,180 C400,150 200,210 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </path>

          <path
            fill="transparent"
            filter="url(#glow)"
            opacity="0.3"
            stroke="#a742f5"
            strokeWidth="35"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.25;0.5;0.75;1"
              values="
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,140 800,60 600,100 C400,140 200,60 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,160 800,80 600,100 C400,160 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </path>
        </svg>
      </div>
      <div className=" w-full flex justify-center items-center text-white text-4xl font-extrabold">
        <h1 className=" font-extrabold text-3xl pb-2 border-b-[1px] border-gray-600">
          DON'T BE A <span className="text-[#1B5F96]">STRANGER !</span>
        </h1>
        {/* <h1 className=" inline pb-2 border-b-[1px] border-gray-600">
          Get In <span className=" text-[#1B5F96]">Touch</span>
        </h1> */}
      </div>

      <div className=" w-full flex justify-center items-center  text-white">
        <div className=" w-full flex flex-col items-center justify-center gap-16">
          <p className=" w-[40%] font-medium text-center text-lg text-gray-300">
            Feel from in get in touch with me. I'm always open to discussing new
            project, creative ideas or opportunities to be part of your vision
          </p>
          <div className=" flex  gap-10">
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
          </div>
        </div>
        {/* <div className="w-[65%]  flex flex-col items-start gap-8">
          <div className=" w-full grid grid-rows-1 grid-cols-3 gap-5 h-16 text-gray-300 ">
            <div className=" w-full h-full relative">
              <label
                htmlFor="name"
                className={`duration-300 absolute font-semibold ${
                  isNameFocus
                    ? "-top-4 text-[#1B5F96] text-sm"
                    : "top-4 text-[#888888] text-base"
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
                className=" w-full h-12 bg-transparent border-b-[2px] border-[#888888] focus:outline-none text-base font-medium"
              />
            </div>
            <div className=" w-full h-full relative">
              <label
                htmlFor="email"
                className={`duration-300 absolute font-semibold ${
                  isEmailFocus
                    ? "-top-4 text-[#1B5F96] text-sm"
                    : "top-4 text-[#888888] text-base"
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
                type="email"
                className=" w-full h-12 bg-transparent border-b-[2px] border-[#888888] focus:outline-none text-base font-medium"
              />
            </div>
            <div className=" w-full h-full relative">
              <label
                htmlFor="subject"
                className={`duration-300 absolute font-semibold ${
                  isSubjectFocus
                    ? "-top-4 text-[#1B5F96] text-sm"
                    : "top-4 text-[#888888] text-base"
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
                className=" w-full h-12 bg-transparent border-b-[2px] border-[#888888] focus:outline-none text-base font-medium"
              />
            </div>
          </div>

          <div className=" w-full bg-[#1E252D]">
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols={30}
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" w-full bg-transparent border-[3px] border-[#31363F] rounded-lg p-2  focus:outline-none focus:shadow-[0px_0px_7px_#31363F] duration-300"
            ></textarea>
          </div>

          <div className="">
            <button
              // onClick={() => handleSendEmail()}
              className=" h-[50px] w-[250px] rounded-md border-[3px] border-[#31363F] flex items-center justify-between duration-200 hover:-translate-y-1"
            >
              <h1 className="text-center w-[200px] font-bold text-gray-300">
                Send
              </h1>
              <div className=" h-full w-[50px] flex items-center justify-center bg-[#31363F]">
                <Send size={27} />
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactPage;
