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
        style={{
          borderTop: "1px solid " + BORDER,
          display: "flex",
          height: "3.75em",
          padding: "1.25em",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <span
          style={{
            color: SUBSUBTEXT,
            fontSize: "0.9rem",
          }}
        >
          Website designed & coded by Tianxin Shen
        </span>
        <span style={{ color: SUBSUBTEXT, fontSize: "0.9rem" }}>
          © 2024 YetongZhang. All rights reserved
        </span>
      </div>
    </footer>
  );
}
