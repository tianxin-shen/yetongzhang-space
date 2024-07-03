import React from "react";

const TextButton = ({ text }: { text: string }) => {
  return (
    <button className="font-courierPrime text-[14px] md:text-[20px]">
      {text}
    </button>
  );
};

export default TextButton;
