export type ColorKey =
  | "blue"
  | "green"
  | "teal"
  | "purple"
  | "orange"
  | "pink"
  | "gold";

export const SUBJECT_COLOR_MAP: Record<
  ColorKey,
  { bg: string; icon: string; border: string; solid: string }
> = {
  blue: {
    bg: "hsl(210, 85%, 40%, 0.08)",
    icon: "hsl(210, 85%, 40%)",
    border: "hsl(210, 85%, 40%, 0.2)",
    solid: "hsl(210, 85%, 40%)",
  },
  green: {
    bg: "hsl(152, 64%, 35%, 0.08)",
    icon: "hsl(152, 64%, 33%)",
    border: "hsl(152, 64%, 35%, 0.2)",
    solid: "hsl(152, 64%, 35%)",
  },
  teal: {
    bg: "hsl(172, 60%, 35%, 0.08)",
    icon: "hsl(172, 60%, 33%)",
    border: "hsl(172, 60%, 35%, 0.2)",
    solid: "hsl(172, 60%, 35%)",
  },
  purple: {
    bg: "hsl(265, 55%, 48%, 0.08)",
    icon: "hsl(265, 55%, 45%)",
    border: "hsl(265, 55%, 48%, 0.2)",
    solid: "hsl(265, 55%, 48%)",
  },
  orange: {
    bg: "hsl(25, 85%, 50%, 0.08)",
    icon: "hsl(25, 85%, 47%)",
    border: "hsl(25, 85%, 50%, 0.2)",
    solid: "hsl(25, 85%, 50%)",
  },
  pink: {
    bg: "hsl(340, 65%, 48%, 0.08)",
    icon: "hsl(340, 65%, 45%)",
    border: "hsl(340, 65%, 48%, 0.2)",
    solid: "hsl(340, 65%, 48%)",
  },
  gold: {
    bg: "hsl(42, 90%, 45%, 0.08)",
    icon: "hsl(42, 90%, 40%)",
    border: "hsl(42, 90%, 45%, 0.2)",
    solid: "hsl(42, 90%, 45%)",
  },
};
