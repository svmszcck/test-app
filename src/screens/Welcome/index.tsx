import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, Keyboard, useColorScheme } from "react-native";

import { updateUserInfo } from "store/actions/auth";
import { checkPermission, pickImage } from "utils/image";
import WelcomeView from "./view";

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
    <WelcomeView
      navigation={navigation}
      keyboardDidShow={keyboardDidShow}
      auth={auth}
      name={name}
      setName={setName}
      selectUserImg={selectUserImg}
      saveUser={saveUser}
    />
  );
};

export default Welcome;
