import React, { useMemo } from "react";
import {
  View,
  ScrollView,
  useColorScheme,
  GestureResponderEvent,
} from "react-native";
import { Avatar, Button, colors, Input, Text } from "react-native-elements";

import { Layout, Section } from "components";
import Colors from "constants/colors";
import styles from "./styles";

import placeholder from "assets/images/placeholder.png";

const ProfileView = ({
  navigation,
  name,
  avatar,
  logout,
}: ProfileViewProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);
  return (
    <Layout>
      <View style={styles.topSection}>
        <Avatar
          rounded
          size={80}
          containerStyle={styles.avatar}
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
          <Text style={styles.statItem}>
            You have searched <Text style={styles.searchCount}>10</Text> times
          </Text>
          <Text style={styles.statItem}>
            You have added <Text style={styles.searchCount}>10</Text> movies to
            the favorite list
          </Text>
        </Section>
        <Section text="Actions">
          <View style={styles.actions}>
            <Button
              title="My Favorites"
              onPress={() => navigation.navigate("Favorites")}
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
};

export default ProfileView;
