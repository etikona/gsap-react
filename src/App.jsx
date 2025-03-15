import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const App = () => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1000,
      duration: 2,
      delay: 1,
      rotate: 720,
      repeat: -1,
    });
  });
  return (
    <main>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#010126_1px)] bg-[size:20px_20px]"></div>
      <div
        ref={gsapRef}
        className="box bg-rose-600 w-40 h-40 p-20 rounded-lg"
      ></div>
    </main>
  );
};

export default App;
