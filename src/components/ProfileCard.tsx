
export default function ProfileCard() {
  return (
    <div className="bg-[#1a1a1a] border border-cyan-400 rounded-3xl p-6 w-[260px] text-center shadow-xl">
      <div className="w-24 h-24 mx-auto mb-4">
        {/* <Image
          src="/profile.png"
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full"
        /> */}
      </div>
      <h3 className="text-xl font-bold">Touch</h3>
      <p className="text-sm text-gray-400">Full-Stack Developer</p>
      <p className="text-xs text-gray-500 mt-2">Bangkok, Thailand</p>
      <div className="mt-4 flex gap-2 justify-center text-sm">
        <span className="bg-cyan-400/10 px-2 py-1 rounded-full text-cyan-400">Next.js</span>
        <span className="bg-cyan-400/10 px-2 py-1 rounded-full text-cyan-400">React</span>
      </div>
      <a
        href="/cv.pdf"
        download
        className="mt-6 inline-block px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
      >
        Download CV
      </a>
    </div>
  );
}
