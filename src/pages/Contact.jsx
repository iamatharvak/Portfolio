import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const { FooterLink } = UserData;
  const iconMapping = {
    AiFillGithub: <AiFillGithub />,
    FaLinkedinIn: <FaLinkedinIn />,
    // AiFillInstagram: <AiFillInstagram />,
    AiOutlineTwitter: <AiOutlineTwitter />,
  };
  return (
    <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="pb-6 pt-12 text-center text-3xl tracking-wider text-gray-900 lg:text-5xl">
          Get In Touch
        </h2>
        <p className="font-poppins mx-auto px-2 pb-6 text-center text-sm tracking-wider text-gray-900 lg:w-[50%]">
  Eager to collaborate on cutting-edge projects or swap innovative ideas?  
  Whether you're building the next big thing or just want to geek out over tech,  
  my inbox is always open—drop me a message and let’s create something awesome together!
</p>
        <div className="mb-6 mt-6 flex justify-center space-x-6">
          {UserData.socialMedia.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 transition-colors duration-300 hover:text-gray-900"
            >
              {iconMapping[socialMedia.icon]}
            </a>
          ))}
        </div>
        <button
          onClick={() => {
            window.open(FooterLink);
          }}
          className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:bg-opacity-40"
        >
          Connect Now 🚀
        </button>
      </div>
    </div>
  );
}

export default Contact;
