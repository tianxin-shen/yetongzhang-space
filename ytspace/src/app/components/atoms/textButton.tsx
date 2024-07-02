import React from "react";

const TextButton = ({ text }: { text: string }) => {
  return (
    <button className="font-courierPrime text-[20px] md:text-[14px]">
      {text}
    </button>
  );
};

export default TextButton;
