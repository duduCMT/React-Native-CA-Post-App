import { PressableProps } from "react-native";

import { TextWeight } from "@/presentation/components/Text/types";
import { ReactNode } from "react";

export type TextButtonProps = PressableProps & {
  color?: "light" | "dark";
  weight?: TextWeight;
  children: ReactNode;
};