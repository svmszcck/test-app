import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "store/actions/user";
import { Store } from "types";
import ProfileView from "./view";

const Profile = ({ navigation }: ProfileProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: Store) => state.user);
  const { name, avatar } = user;

  const doLogout = () => {
    dispatch(logout());
    navigation.navigate("Welcome");
  };

  return (
    <ProfileView
      name={name}
      avatar={avatar}
      navigation={navigation}
      logout={doLogout}
    />
  );
};

type ProfileProps = {
  navigation: any;
};

export default Profile;
