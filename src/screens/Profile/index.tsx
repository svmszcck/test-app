import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout, updateUserInfo } from "store/actions/user";
import { resetPosts } from "store/actions/posts";
import { Store } from "types";
import Routes from "app_constants/routes";
import { checkPermission, pickImage } from "utils/image";
import { resetNavigationState } from "utils/general";
import ProfileView from "./view";

const Profile = ({ navigation }: ProfileProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: Store) => state.user);
  const { name, avatar, searchCount, favorites } = user;

  const doLogout = () => {
    dispatch(logout());
    dispatch(resetPosts());
    resetNavigationState(navigation);
    navigation.navigate(Routes.WELCOME);
  };

  const selectUserImg = async () => {
    let result;
    const hasPermission = await checkPermission();
    if (hasPermission) result = await pickImage();
    if (result) dispatch(updateUserInfo({ avatar: result }));
  };

  return (
    <ProfileView
      name={name}
      avatar={avatar}
      navigation={navigation}
      logout={doLogout}
      searchCount={searchCount}
      favoritesCount={favorites?.length}
      selectUserImg={selectUserImg}
    />
  );
};

type ProfileProps = {
  navigation: any;
};

export default Profile;
