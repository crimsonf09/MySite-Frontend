"use client";

import InputBox from "@/components/TextBox";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  function nameChecker(value: string | number) {
    return String(value).length > 3;
  }
  function emailChecker(value: string | number) {
    const val = String(value);
    return val.length > 7 && val.includes(".com") && val.includes("@");
  }
  function companyChecker(value: string | number) {
    return String(value).length > 3;
  }
  function textChecker(value: string | number) {
    return String(value).length > 0;
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex justify-center px-4 py-16 mt-20">
      <section className="w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent select-none mb-6">
          Contact Meee
        </h1>

        <InputBox
          shadow="Name"
          checker={nameChecker}
          setValue={setName}
          value={name}
          type="text"
          scroll={false}
        />
        <InputBox
          shadow="Email"
          checker={emailChecker}
          setValue={setEmail}
          value={email}
          type="email"
          scroll={false}
        />
        <InputBox
          shadow="Company Name"
          checker={companyChecker}
          setValue={setCompanyName}
          value={companyName}
          type="text"
          scroll={false}
        />
        <InputBox
          shadow="Message"
          checker={textChecker}
          setValue={setMessage}
          value={message}
          type="text"
          style="w-full h-[200px]"
          scroll={true}
        />

        {/* Placeholder for radio buttons or other inputs */}
        <div className="flex flex-col gap-3">
          {/* Example: */}
          {/* <label className="flex items-center gap-2">
            <input type="radio" name="contactReason" value="support" />
            <span>Support</span>
          </label> */}
        </div>
      </section>
    </main>
  );
}
