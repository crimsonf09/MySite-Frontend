import { FaUser, FaCode, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col items-center gap-6 px-4 py-8 bg-[#181818] border-r border-gray-700">
      {[FaUser, FaCode, FaEnvelope, FaGithub, FaLinkedin].map((Icon, i) => (
        <Icon key={i} className="text-gray-400 hover:text-cyan-400 transition text-xl cursor-pointer" />
      ))}
    </div>
  );
}
