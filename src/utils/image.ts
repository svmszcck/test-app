import * as ImagePicker from "expo-image-picker";

import { PERMISSION_GRANTED } from "app_constants/device";
import { IMAGE_ASPECT_RATIO, IMAGE_QUALITY } from "app_constants/ui";
import { showCommonError } from "utils/popups";

export const checkPermission = async () => {
  const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
  if (status !== PERMISSION_GRANTED) {
    alert("Sorry, we need camera roll permissions to make this work!");
    return false;
  }
  return true;
};

export const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: IMAGE_ASPECT_RATIO,
    quality: IMAGE_QUALITY,
  });

  if (!result || result.cancelled) {
    showCommonError();
    return;
  }
  return result?.uri;
};
