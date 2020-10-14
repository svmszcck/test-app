import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { updateUserInfo } from "store/actions/user";
import { checkPermission, pickImage } from "utils/image";
import Routes from "app_constants/routes";
import { DEFAULT_ERROR_TITLE } from "app_constants/general";
import { Store } from "types";
import { useKeyboardHandler } from "hooks";
import { validateName } from "utils/validation";
import WelcomeView from "./view";

const Welcome = ({ navigation }: WelcomeProps) => {
  const [keyboardDidShow, setKeyboardDidShow] = useState<boolean>(false);
  const [name, setName] = useState<string | undefined>();
  const dispatch = useDispatch();
  const user = useSelector((state: Store) => state.user);
  const { avatar } = user;

  const _keyboardDidShow = () => setKeyboardDidShow(true);

  const _keyboardDidHide = () => setKeyboardDidShow(false);

  useKeyboardHandler(_keyboardDidShow, _keyboardDidHide);

  const selectUserImg = async () => {
    let result;
    const hasPermission = await checkPermission();
    if (hasPermission) result = await pickImage();
    if (result) dispatch(updateUserInfo({ avatar: result }));
  };

  const saveUser = () => {
    if (!name) {
      Alert.alert(DEFAULT_ERROR_TITLE, "Please write your name");
    } else if (!validateName(name)) {
      Alert.alert(DEFAULT_ERROR_TITLE, "Please write a correct name");
    } else {
      Keyboard.dismiss();
      dispatch(updateUserInfo({ name }));
      navigation.navigate(Routes.ROOT, { screen: Routes.HOME });
      setName(undefined);
    }
  };

  return (
    <WelcomeView
      navigation={navigation}
      keyboardDidShow={keyboardDidShow}
      user={user}
      name={name}
      setName={setName}
      selectUserImg={selectUserImg}
      saveUser={saveUser}
      avatar={avatar}
    />
  );
};

type WelcomeProps = {
  navigation: any;
};

export default Welcome;
