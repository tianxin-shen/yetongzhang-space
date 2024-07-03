import repoIcon from "../../assets/icons/code-fork-solid.svg";
import Image from "next/image";
import { TEXTBUTTON, SUBSUBTEXT } from "../../assets/colors/colorConstants";
import { ArrowIcon } from "../atoms/arrow";

export function CodeRepo({
  repoName,
  repoDescription,
  repoUrl,
}: {
  repoName: string;
  repoDescription: string;
  repoUrl: string;
}) {
  return (
    <div className="flex justify-start w-100 min-w-[10rem] md:min-w-[22.5rem] md:p-[0.3125rem_1.25rem] w-[14.625rem] p-[0.3125rem_0.9375rem]">
      <div className="">
        <Image
          src={repoIcon}
          alt="repo-icon"
          className="w-[20px] h-[23px] md:w-[35px] md:h-[39px] m-[0.3125rem]"
        />
      </div>
      <div className="flex flex-col px-[20px]">
        <span
          className="text-[0.825rem] md:text-[1.08rem] md:font-semibold font-medium"
          style={{ color: TEXTBUTTON.UNFOCUSED }}
        >
          {repoName}
        </span>
        <span
          className="text-[0.75rem] md:text-[1rem]"
          style={{ color: SUBSUBTEXT }}
        >
          {repoDescription}
        </span>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[0.65rem] md:text-[0.85rem] text-teal-400 underline flex flex-row items-center gap-[0.3125rem] mt-[0.3125rem]"
        >
          View on Github
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
