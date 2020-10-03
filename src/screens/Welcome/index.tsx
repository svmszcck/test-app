import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, Keyboard, useColorScheme } from "react-native";
import { Avatar, Button, colors, Input, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import Colors from "constants/colors";
import { updateUserInfo } from "store/actions/auth";
import { checkPermission, pickImage } from "utils/image";
import styles from "./styles";

const Welcome = ({ navigation }) => {
  const [keyboardDidShow, setKeyboardDidShow] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  }, []);

  const colors = useMemo(() => Colors[colorScheme], []);

  const _keyboardDidShow = () => setKeyboardDidShow(true);

  const _keyboardDidHide = () => setKeyboardDidShow(false);

  const selectUserImg = async () => {
    const hasPermission = checkPermission();
    console.log("hasPermission: ", hasPermission);
    const result = await pickImage();
  };

  const saveUser = () => {
    dispatch(updateUserInfo({ data: { name } }));
    // navigation.navigate("Root");
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.primary },
      ]}
    >
      {!keyboardDidShow && (
        <>
          <Text
            style={[styles.skip, { color: colors.text }]}
            onPress={() => navigation.navigate("Root")}
          >
            Skip
          </Text>
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
            uri: "https://api.adorable.io/avatars/400/abott@adorable.io.png",
          }}
          onPress={selectUserImg}
        ></Avatar>
        <Text style={[styles.warning, { color: colors.text }]}>
          Click on the image to add your profile pic
        </Text>
      </View>

      <Input
        placeholder="Name Surname"
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
        value={name || auth?.data?.name}
      />

      <Button
        icon={{ name: "check-circle", color: "#fff" }}
        title="Save Profile Info"
        onPress={saveUser}
      />
    </ScrollView>
  );
};

export default Welcome;
