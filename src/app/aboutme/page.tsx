import Image from "next/image";
import NightSkyBackground from "../background/NightSkyBackground";
import {motion} from "framer-motion";
export default function AboutMe() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });
    
    return (        
    <div className="relative text-white w-full overflow-x-hidden bg-black">
      <NightSkyBackground />
      <div className="w-full h-screen flex flex-col items-center ">
        
      </div>

    </div>
  );
}
