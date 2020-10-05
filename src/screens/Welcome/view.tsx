import React, { useMemo } from "react";
import {
  View,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { Avatar, Button, colors, Input, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import { Layout } from "components";
import Colors from "constants/colors";
import { UserState } from "types";
import styles from "./styles";

import placeholder from "assets/images/placeholder.png";

const WelcomeView = ({
  navigation,
  keyboardDidShow,
  selectUserImg,
  setName,
  saveUser,
  user,
  name,
  avatar,
}: WelcomeViewProps) => {
  const colorScheme = useColorScheme();
  const colors = useMemo(() => Colors[colorScheme], []);

  return (
    <Layout>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.primary },
        ]}
      >
        {!keyboardDidShow && (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate("Root")}
              style={styles.skip}
            >
              <Text style={[styles.skipText, { color: colors.text }]}>
                Skip
              </Text>
            </TouchableOpacity>
            <Text h4 style={styles.info}>
              We need your information
            </Text>
          </>
        )}
        <View style={styles.avatar}>
          <Avatar
            rounded
            size={100}
            source={{
              uri: avatar || placeholder,
            }}
            onPress={selectUserImg}
          />
          <Text style={[styles.warning, { color: colors.text }]}>
            Click on the image to add your profile pic
          </Text>
        </View>

        <Input
          placeholder="Write your name..."
          leftIcon={{
            type: "ionicon",
            name: "ios-person",
            color: Colors[colorScheme].text,
          }}
          label="Who are you?"
          onChangeText={(value) => setName(value)}
          containerStyle={styles.inputContainer}
          style={{ color: colors.text }}
          labelStyle={{ color: colors.textBold }}
          value={name || user.name}
        />

        <Button
          icon={{ name: "check-circle", color: "#fff" }}
          title="Save Profile Info"
          onPress={saveUser}
          buttonStyle={{ backgroundColor: colors.secondary }}
          titleStyle={styles.buttonText}
        />
      </ScrollView>
    </Layout>
  );
};

type WelcomeViewProps = {
  navigation: any;
  keyboardDidShow: boolean;
  selectUserImg: () => void;
  setName: Function;
  saveUser: () => void;;
  user: UserState;
  name: string;
  avatar: string;
};

export default WelcomeView;
