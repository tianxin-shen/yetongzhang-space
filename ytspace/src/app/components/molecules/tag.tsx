import workIcon from "../../assets/icons/suitcase-solid.svg";
import eduIcon from "../../assets/icons/graduation-cap-solid.svg";
import libIcon from "../../assets/icons/book-open-solid.svg";
import Image from "next/image";
import { SUBSUBTEXT } from "@/app/assets/colors/colorConstants";

export function Tag({ tag }: { tag: string }) {
  let icon = null;

  switch (tag) {
    case "Work":
      icon = workIcon;
      break;
    case "Education":
      icon = eduIcon;
      break;
    case "Code Library":
      icon = libIcon;
      break;
    default:
      break;
  }

  return (
    <div className="inline-flex items-center gap-[0.3125rem] p-[0.3125rem] md:gap-[0.625rem] md:p-[0.875rem_0.75rem]">
      {icon && <Image src={icon} alt={tag} width={16} height={16} />}
      <span
        className="text-[0.875rem] md:text-[1.25rem]"
        style={{ color: SUBSUBTEXT }}
      >
        {tag}
      </span>
    </div>
  );
}
