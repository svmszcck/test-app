import React, { useMemo, ReactNode } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { Text } from "react-native-elements";

import Colors from "app_constants/colors";

const Section = ({ text, children, style }: SectionProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.textBold, ...style }]}>
        {text}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 25,
  },
});

type SectionProps = {
  text: string;
  children: ReactNode;
  style: Object;
};

export default Section;
