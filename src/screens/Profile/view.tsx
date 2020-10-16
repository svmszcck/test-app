import React from "react";
import { View, ScrollView, GestureResponderEvent } from "react-native";
import { Avatar, Button, Text } from "react-native-elements";

import { Layout, Section } from "components";
import { useColor } from "hooks";
import Routes from "app_constants/routes";
import styles from "./styles";

import placeholder from "assets/images/placeholder.png";

const ProfileView = ({
  navigation,
  name,
  avatar,
  logout,
  searchCount,
  favoritesCount,
  selectUserImg,
}: ProfileViewProps) => {
  const colors = useColor();
  return (
    <Layout>
      <View style={styles.topSection}>
        <Avatar
          rounded
          size={80}
          containerStyle={styles.avatar}
          onPress={selectUserImg}
          source={
            avatar
              ? {
                  uri: avatar,
                }
              : placeholder
          }
        />
        <Text style={[styles.title, { color: colors.textBold }]}>{name}</Text>
      </View>
      <ScrollView>
        <Section text="Statistics">
          <Text style={[styles.statItem, { color: colors.text }]}>
            You have searched
            <Text style={[styles.searchCount, { color: colors.textBold }]}>
              {` ${searchCount}`}
            </Text>
            {searchCount > 1 ? " times" : " time"}.
          </Text>
          <Text style={[styles.statItem, { color: colors.text }]}>
            You have added
            <Text style={styles.searchCount}>{` ${favoritesCount}`}</Text>
            {favoritesCount > 1 ? " movies" : " movie"} to the favorite list.
          </Text>
        </Section>
        <Section text="Actions">
          <View style={styles.actions}>
            <Button
              title="My Favorites"
              onPress={() => navigation.navigate(Routes.FAVORITES)}
              buttonStyle={{ backgroundColor: colors.secondary }}
              titleStyle={styles.buttonText}
              containerStyle={styles.action}
            />
            <Button
              title="Log out"
              onPress={logout}
              buttonStyle={{ backgroundColor: colors.secondary }}
              titleStyle={styles.buttonText}
              containerStyle={styles.action}
            />
          </View>
        </Section>
      </ScrollView>
    </Layout>
  );
};

type ProfileViewProps = {
  navigation: any;
  name: string;
  avatar: string;
  logout: (event: GestureResponderEvent) => void;
  searchCount: number;
  favoritesCount: number;
  selectUserImg: () => void;
};

export default ProfileView;
