// ------- Custom Button Props ------
export interface CustomButtonProps {
  title: string;
  handleClick?: () => void;
  containerStyles?: string;
  textStyles?: string;
  type?: "button" | "submit";
}
