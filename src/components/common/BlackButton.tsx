import { ArrowLeft } from "./ArrowLeft";
import { Arrowright } from "./Arrowright";

interface Props {
  title: string;
  arrow?: "right" | "left";
  colorInverse?: boolean;
  onClick?: () => void;
}

export const BlackButton = ({
  title,
  arrow,
  onClick,
  colorInverse = false,
}: Props) => {
  const arrowStyles = arrow
    ? arrow === "right"
      ? "flex-row-reverse"
      : "flex-row"
    : "";
  return (
    <button
      onClick={onClick}
      className={`${
        colorInverse
          ? "bg-white text-black border-black"
          : "bg-black text-white border-white"
      } cursor-pointer uppercase tracking-wider flex ${arrowStyles} border-white border-2 rounded-md py-2 px-5 w-fit font-amsterdam text-xl items-center gap-2 duration-100 hover:scale-105`}
    >
      {arrow ? arrow === "left" ? <ArrowLeft /> : <Arrowright /> : null}
      {title}
    </button>
  );
};
