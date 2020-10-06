import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Keyboard } from "react-native";

import { updateUserInfo } from "store/actions/user";
import { checkPermission, pickImage } from "utils/image";
import Routes from "app_constants/routes";
import { Store } from "types";
import { useKeyboardHandler } from "hooks";
import WelcomeView from "./view";

const Welcome = ({ navigation }: WelcomeProps) => {
  const [keyboardDidShow, setKeyboardDidShow] = useState<boolean>(false);
  const [name, setName] = useState<string>();
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
    dispatch(updateUserInfo({ name }));
    navigation.navigate(Routes.ROOT);
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
