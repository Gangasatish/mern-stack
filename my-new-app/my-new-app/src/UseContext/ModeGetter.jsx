import React, { useContext } from "react";
import { modeContext } from "./ModeProvider";
const ModeGetter = () => {
  const { mode, setmode } = useContext(modeContext);
  const ChangeMode = () => {
    setmode((mode) => (mode == "light" ? "dark" : "light"));
  };
  return (
    <div className={`min-h-screen flex items-center justify-center 
        ${mode === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      <div>
        <h1>Mode is : {mode}</h1>
        <button className="px-6  bg-blue-600 text-white rounded-lg" onClick={ChangeMode}>Change</button>
      </div>

    </div>
  );
};
export default ModeGetter;
