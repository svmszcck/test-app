export const validateName = (text: string) =>
  /^[a-zA-ZâäèéêëîïôœùûüÿçşöğÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇŞÖĞ\s]+$/.test(text);
