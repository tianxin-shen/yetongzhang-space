import React from "react";

const Keywords = ({ word }: { word: string }) => {
  return (
    <div className="inline-flex items-center justify-center bg-zinc-750 rounded-[1.25rem] p-[0.625rem] sm:rounded-[0.9375rem] sm:p-[0.3125rem]">
      {word}
    </div>
  );
};

export default Keywords;
