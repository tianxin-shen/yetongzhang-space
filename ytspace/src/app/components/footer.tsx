import { BORDER, SUBSUBTEXT } from "../assets/colors/colorConstants";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div
        className="flex items-center flex-col gap-[0.3125em] p-[0.625rem] md:flex-row md:justify-between md:h-[3.75em] md:p-[1.25em]"
        style={{
          borderTop: "1px solid " + BORDER,
        }}
      >
        <span
          className="md:text-[0.9rem] text-[0.75rem]"
          style={{
            color: SUBSUBTEXT,
          }}
        >
          Website designed & coded by Tianxin Shen
        </span>
        <span
          className="md:text-[0.9rem] text-[0.75rem]"
          style={{ color: SUBSUBTEXT }}
        >
          © 2024 YetongZhang. All rights reserved
        </span>
      </div>
    </footer>
  );
}
