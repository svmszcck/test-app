import { useMemo } from "react";
import { useColorScheme } from "react-native";
import Colors from "constants/colors";

const useColor = () => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return colors;
};

export default useColor;
