import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Button, Input, Text } from "react-native-elements";

import { Layout } from "components";
import { useColor } from "hooks";
import { UserState } from "types";
import Routes from "app_constants/routes";
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
  const colors = useColor();

  return (
    <Layout>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.primary },
        ]}
      >
        {!keyboardDidShow && (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.popToTop();
                navigation.navigate(Routes.ROOT, { screen: Routes.HOME });
              }}
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
        <View style={styles.content}>
          {!keyboardDidShow && (
            <View style={styles.avatar}>
              <Avatar
                rounded
                size={100}
                source={
                  avatar
                    ? {
                        uri: avatar,
                      }
                    : placeholder
                }
                onPress={selectUserImg}
              />
              <Text style={[styles.warning, { color: colors.text }]}>
                Click on the image to add your profile pic
              </Text>
            </View>
          )}

          <Input
            placeholder="Write your name..."
            leftIcon={{
              type: "ionicon",
              name: "ios-person",
              color: colors.text,
            }}
            label="Who are you?"
            onChangeText={(value: string) => setName(value)}
            containerStyle={[
              styles.inputContainer,
              { marginTop: keyboardDidShow ? 50 : 0 },
            ]}
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
        </View>
      </ScrollView>
    </Layout>
  );
};

type WelcomeViewProps = {
  navigation: any;
  keyboardDidShow: boolean;
  selectUserImg: () => void;
  setName: Function;
  saveUser: () => void;
  user: UserState;
  name: string | undefined;
  avatar: string;
};

export default WelcomeView;
