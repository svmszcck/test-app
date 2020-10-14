import * as Linking from "expo-linking";

export const openLink = (link: string) => Linking.openURL(link);
