"use client";

import { motion } from "framer-motion";
import NightSkyBackground from "./background/NightSkyBackground";

export default function Home() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
  });

  return (
    <div className="relative text-white w-full overflow-x-hidden bg-black">
      <NightSkyBackground />

      <section className="flex flex-col w-full max-w-[1600px] mx-auto gap-32 py-10 relative z-10">
        {/* Intro Section */}
        <div className="flex flex-col justify-center text-center md:text-left gap-6 h-screen w-full px-10 md:px-20">
          <div className="flex flex-col justify-center w-5/8 h-full">
            <motion.h2 className="text-cyan-400 text-2xl font-bold mb-2" {...fadeUp(0)}>
              Data Scientist & Developer
            </motion.h2>
            <motion.h1 className="text-4xl md:text-5xl font-extrabold leading-tight" {...fadeUp(0.1)}>
              Hey, I'm <span className="text-cyan-400">Touch</span>,<br />
              Data Scientist & <br className="md:hidden" />
              Full Stack Developer
            </motion.h1>
            <motion.p className="text-gray-400 mt-6 text-base md:text-lg" {...fadeUp(0.2)}>
              I focus on making sense of data and turning it into action.
              Also able to switch gears to build user-friendly web apps that are ready to solve real problems.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block mt-8 text-cyan-400 hover:underline text-lg font-semibold"
              {...fadeUp(0.3)}
            >
              Let’s chat →
            </motion.a>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row justify-center h-screen pl-2 pr-8">
          {/* Avatar Card */}
          <motion.div className="w-3/8 md:w-1/3 flex py-8 justify-center h-fit mt-8" {...fadeUp(0)}>
            <div className="flex">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full max-w-sm shadow-lg hover:shadow-xl transition">
                <div className="w-32 h-32 rounded-full bg-cyan-400/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-cyan-400 font-bold">T</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Touch</h3>
                  <p className="text-gray-400 text-sm mb-2">Data Scientist • Developer</p>
                  <p className="text-gray-500 text-sm italic">“Always learning, always building.”</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <div className="w-5/8 md:w-2/3 text-center md:text-left">
            <motion.h3 className="text-3xl font-bold text-white mb-4" {...fadeUp(0.1)}>
              Hey, I'm Touch
            </motion.h3>
            <div className="text-gray-400 text-lg flex flex-col gap-5 mb-10 leading-relaxed">
              <motion.p {...fadeUp(0.2)}>
                I'm a <span className="text-cyan-400">Data Scientist</span> and <span className="text-cyan-400">Full-stack Developer</span> based in Bangkok.
                I enjoy making sense of complex data and turning it into things people can actually use.
              </motion.p>
              <motion.p {...fadeUp(0.3)}>
                Currently studying <span className="text-cyan-400">Computer Engineering</span> at Chulalongkorn University,
                focusing on data, web tech, and anything that keeps me curious.
              </motion.p>
              <motion.p {...fadeUp(0.4)}>
                Whether it’s building a clean UI or digging into a messy dataset — if it’s challenging and hands-on, I’m all in.
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div className="mb-12" {...fadeUp(0.5)}>
              <h4 className="text-xl font-semibold text-white mb-4">Tools I Work With</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                  "Python", "JavaScript", "Next.js", "Tailwind CSS",
                  "Pandas", "TensorFlow", "Torch", "Node.js", "MongoDB",
                  "SQL", "React", "Docker", "Golang", "Git",
                ].map((tool, i) => (
                  <motion.span
                    key={i}
                    {...fadeUp(0.6 + i * 0.05)}
                    className="bg-[#252525] px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div {...fadeUp(1)}>
              <h4 className="text-xl font-semibold text-white mb-4">A quick look at my journey</h4>
              <ul className="space-y-4 border-l-2 border-cyan-400 pl-4">
                <li>
                  <div className="text-cyan-400 font-semibold">2022 - Present</div>
                  <div className="text-white">Studying at Chulalongkorn University</div>
                  <p className="text-gray-400 text-sm">B.Eng. in Computer Engineering</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative flex flex-col justify-center items-center text-center gap-5 h-screen px-4">
          <div className="absolute w-[450px] h-[300px] bg-cyan-400/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="z-10">
            <motion.h3 className="text-3xl md:text-4xl font-bold text-white mb-2" {...fadeUp(0)}>
              Want to know more about me?
            </motion.h3>
            <motion.p className="text-gray-400 text-base md:text-lg mb-6" {...fadeUp(0.2)}>
              Talk to my friend Armin 👇
            </motion.p>
            <motion.button
              className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-300 hover:shadow-xl transition-all duration-200"
              {...fadeUp(0.4)}
            >
              Chat
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
