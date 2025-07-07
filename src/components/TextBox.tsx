"use client";

import React, { useEffect, useState } from "react";

type InputBoxProps = {
  shadow: string;
  checker: (value: number | string) => boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  type: string;
  setCondition?: React.Dispatch<React.SetStateAction<boolean>>;
  style?: string;
  scroll: boolean;
};

export default function InputBox({
  shadow,
  checker,
  setValue,
  value,
  type,
  setCondition,
  style,
  scroll,
}: InputBoxProps) {
  const [status, setStatus] = useState(false);
  const [state, setState] = useState<"neutral" | "correct" | "incorrect">("neutral");

  useEffect(() => {
    const result = checker(value);
    setStatus(result);
    setCondition?.(result);

    if (value === "") setState("neutral");
    else setState(result ? "correct" : "incorrect");
  }, [value]);

  const ringClass =
    state === "correct"
      ? "focus:ring-blue-400"
      : state === "incorrect"
      ? "focus:ring-white"
      : "focus:ring-cyan-400";

  const borderClass =
    state === "correct"
      ? "border-blue-400"
      : state === "incorrect"
      ? "border-white"
      : "border-gray-700";

  const underlineClass =
    state === "correct"
      ? "from-cyan-400 via-blue-400 to-indigo-500 animate-underline-glow"
      : state === "incorrect"
      ? "from-white to-white animate-underline-glow"
      : "from-cyan-400 via-blue-400 to-indigo-500 animate-underline-glow";

  return (
    <div className={`relative group ${style || "w-full max-w-md"}`}>
      {scroll ? (
        <textarea
          id="input"
          rows={4}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder=" "
          className={`peer w-full h-full px-4 pt-5 pb-2 text-sm text-white placeholder-transparent bg-[#0a0a0a] border-2 rounded-lg outline-none resize-none transition duration-300 overflow-auto ${ringClass} ${borderClass}`}
        />
      ) : (
        <input
          id="input"
          type={type || "text"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder=" "
          className={`peer w-full h-full px-4 pt-5 pb-2 text-sm text-white placeholder-transparent bg-[#0a0a0a] border-2 rounded-lg outline-none transition duration-300 overflow-hidden ${ringClass} ${borderClass}`}
        />
      )}

      <label
        htmlFor="input"
        className="absolute left-4 top-[5px] text-sm px-[2px] text-gray-400 transition-all duration-300
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-500
          peer-focus:top-[5px] peer-focus:text-sm peer-focus:text-cyan-400"
      >
        {shadow}
      </label>

      <span
        className={`absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r ${underlineClass} transition-all duration-500 group-focus-within:w-full blur-sm opacity-80 shadow-[0_0_8px] shadow-current`}
      />
    </div>
  );
}
