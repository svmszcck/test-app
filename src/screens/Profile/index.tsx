import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ProfileView from "./view";

const Profile = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { data } = user;
  const { name, avatar } = data;

  return <ProfileView name={name} avatar={avatar} navigation={navigation} />;
};

export default Profile;
