import React from "react";
import { CustomButtonProps } from "@/types/index.types";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  textStyles,
  type,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`rounded-full px-6 py-2 transition-all ${containerStyles}`}
    >
      <span className={textStyles}>{title}</span>
    </button>
  );
};

export default CustomButton;
