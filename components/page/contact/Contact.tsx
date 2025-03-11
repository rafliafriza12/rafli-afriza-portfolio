"use client";
import { useState } from "react";
import { Mail, Phone, Instagram, Facebook, Send } from "lucide-react";
const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [isNameFocus, setIsNameFocus] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [isEmailFocus, setIsEmailFocus] = useState<boolean>(false);

  const [subject, setSubject] = useState<string>("");
  const [isSubjectFocus, setIsSubjectFocus] = useState<boolean>(false);

  const handleBlur = (type: string): void => {
    if (type === "name") {
      name !== "" ? setIsNameFocus(true) : setIsNameFocus(false);
    } else if (type === "email") {
      email !== "" ? setIsEmailFocus(true) : setIsEmailFocus(false);
    } else if (type === "subject") {
      subject !== "" ? setIsSubjectFocus(true) : setIsSubjectFocus(false);
    }
  };

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center gap-10">
      <div className=" w-full flex justify-center items-center text-white text-4xl font-extrabold">
        <h1 className=" inline pb-2 border-b-[1px] border-gray-600">
          Get In <span className=" text-[#1B5F96]">Touch</span>
        </h1>
      </div>

      <div className=" w-full flex justify-between items-start pl-20 pr-10 text-white">
        <div className=" w-[30%] flex flex-col items-start justify-center gap-7">
          <h1 className=" font-extrabold text-3xl">
            DON'T BE <span className="text-[#1B5F96]">SHY !</span>
          </h1>
          <p className=" w-full font-normal text-base text-gray-300">
            Feel from in get in touch with me. I'm always open to discussing new
            project, creative ideas or opportunities to be part of your vision
          </p>
          <div className=" flex items-center gap-5">
            <div className=" bg-[#31363F] p-2 rounded-md">
              <Mail size={35} color="#1B5F96" />
            </div>
            <div className=" flex flex-col justify-center gap-2">
              <h1 className="text-sm">Mail me :</h1>
              <h1 className=" text-base font-bold">rafliafriza90@gmail.com</h1>
            </div>
          </div>
          <div className=" flex items-center gap-5">
            <div className=" bg-[#31363F] p-2 rounded-md">
              <Phone size={35} color="#1B5F96" />
            </div>
            <div className=" flex flex-col justify-center gap-2">
              <h1 className="text-sm">Call me :</h1>
              <h1 className=" text-base font-bold">+62 - 831 - 9747 - 5917</h1>
            </div>
          </div>
        </div>
        <div className="w-[65%]  flex flex-col items-start gap-8">
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
              className=" w-full bg-transparent border-[3px] border-[#31363F] rounded-lg p-2  focus:outline-none focus:shadow-[0px_0px_7px_#31363F] duration-300"
            ></textarea>
          </div>

          <div className="">
            <button className=" h-[50px] w-[250px] rounded-md border-[3px] border-[#31363F] flex items-center justify-between duration-200 hover:-translate-y-1">
              <h1 className="text-center w-[200px] font-bold text-gray-300">
                Send
              </h1>
              <div className=" h-full w-[50px] flex items-center justify-center bg-[#31363F]">
                <Send size={27} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
