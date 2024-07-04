"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  const colors = [
    "#FF0000", // red
    "#FFC0CB", // pink
    "#FFA500", // orange
    "#FFFF00", // yellow
    "#008000", // green
    "#ADD8E6", // lightblue
    "#0000FF", // blue
    "#A52A2A", // brown
    "#000000", // black
    "#FFFFFF", // white
  ];
  const [color, setColor] = useState("");

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div
      className="flex items-center justify-center h-screen overflow-hidden"
      style={{ backgroundColor: color }}
      onMouseDown={changeBackgroundColor}
    >
      <div className="absolute top-0 left-0 m-4">
        <Link href="/">
          <button
            className={`${
              color === "#FFFFFF" ||
              color === "#FFFF00" ||
              color === "#FFC0CB" ||
              color === "#FFA500" ||
              color === ""
                ? "text-slate-700"
                : "text-slate-50"
            } p-2 text-2xl`}
          >
            <FaArrowLeft />
          </button>
        </Link>
      </div>
    </div>
  );
}
