import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "purple",
    blur: {
      top: "purple",
    },
  },
};

export default theme;