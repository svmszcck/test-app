import React, { useMemo } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";

const List = ({
  navigation,
  elements,
  hasAction = false,
  icon,
  rightAction,
  hasLoadMore = false,
  loadMore,
  warning,
}: ListProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <View>
      {elements.length === 0 && (
        <Text style={[styles.warning, { color: colors.textBold }]}>
          {warning}
        </Text>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {elements.map(
          ({
            id,
            title,
            poster_path: posterPath,
            vote_average: voteAverage,
          }) => (
            <ListItem
              leftAvatar={{
                size: "large",
                source: {
                  uri: `${IMAGE_URL(IMAGE_SMALL)}/${posterPath}`,
                },
                rounded: false,
              }}
              underlayColor={colors.primary}
              title={title}
              subtitle={`Score: ${voteAverage}`}
              containerStyle={styles.item}
              onPress={() => navigation.navigate("MovieDetails", { id })}
              rightIcon={
                hasAction ? (
                  <Ionicons
                    onPress={() => rightAction(id)}
                    size={30}
                    color={colors.text}
                    name={icon}
                  />
                ) : undefined
              }
            />
          )
        )}
        {hasLoadMore && elements.length > 0 && (
          <View style={styles.bottomSection}>
            <Button
              buttonStyle={[
                styles.loadMore,
                { backgroundColor: colors.secondary },
              ]}
              title="Load More"
              onPress={loadMore}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  warning: {
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
  },
  bottomSection: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  loadMore: {
    margin: 20,
    backgroundColor: "white",
  },
  item: {
    marginBottom: 12,
  },
});

type ListProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

export default List;
