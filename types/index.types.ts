// ------- Custom Button Props ------
export interface CustomButtonProps {
  title: string;
  handleClick?: () => void;
  containerStyles?: string;
  textStyles?: string;
  type?: "button" | "submit";
}

export interface CarProps {
  city_mpg: number;
  class: "string";
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}