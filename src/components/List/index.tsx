import React, { useMemo } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useColorScheme,
} from "react-native";
import { Avatar, Button, Text, ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import Colors from "constants/colors";
import { IMAGE_URL } from "constants/api";
import { IMAGE_SMALL } from "constants/ui";
import { DELAY_TIME } from "constants/general";
import { delayTask } from "utils/ui";

const List = ({
  navigation,
  elements,
  hasAction = false,
  icon,
  rightAction,
  hasLoadMore = false,
  isLoading = false,
  loadMore,
  warning,
}: ListProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);

  console.log("length: ", elements.length);

  return (
    <View>
      {!isLoading && elements.length === 0 && warning && (
        <Text style={[styles.warning, { color: colors.textBold }]}>
          {warning}
        </Text>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <FlatList
          keyExtractor={(item) => item.id}
          data={elements}
          renderItem={({
            item: {
              id,
              title,
              poster_path: posterPath,
              vote_average: voteAverage,
            },
          }) => (
            <ListItem
              style={styles.item}
              onPress={() => navigation.navigate("MovieDetails", { id })}
            >
              <Avatar
                size="large"
                source={{
                  uri: `${IMAGE_URL(IMAGE_SMALL)}/${posterPath}`,
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{title}</ListItem.Title>
                <ListItem.Subtitle style={{ color: colors.text }}>{`Score: ${
                  voteAverage ? voteAverage : "-"
                }`}</ListItem.Subtitle>
              </ListItem.Content>
              {hasAction ? (
                <Ionicons
                  onPress={() => rightAction(id)}
                  size={30}
                  color={colors.text}
                  name={icon}
                />
              ) : (
                <ListItem.Chevron />
              )}
            </ListItem>
          )}
        />
        <View style={styles.bottomSection}>
          {hasLoadMore && !isLoading && elements.length > 0 && (
            <Button
              buttonStyle={[
                styles.loadMore,
                { backgroundColor: colors.secondary },
              ]}
              title="Load More"
              onPress={() => delayTask(loadMore, DELAY_TIME)}
            />
          )}
          {isLoading && (
            <ActivityIndicator
              animating
              size="large"
              color={colors.text}
              style={styles.loading}
            />
          )}
        </View>
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
  loading: {
    marginTop: 20,
  },
});

type ListProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

export default List;
