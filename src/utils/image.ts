import * as ImagePicker from "expo-image-picker";

export const checkPermission = async () => {
  const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
  if (status !== "granted") {
    alert("Sorry, we need camera roll permissions to make this work!");
    return false;
  }
  return true;
};

export const pickImage = async (setImage: Function) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImage(result.uri);
  }
};
