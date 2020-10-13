import { useMemo } from "react";
import { useColorScheme } from "react-native";

import Colors from "app_constants/colors";

const useColor = () => {
  const colorScheme: string | null | undefined = useColorScheme();
  const colors: object = useMemo(() => Colors[colorScheme], [
    Colors,
    colorScheme,
  ]);
  return colors;
};

export default useColor;
