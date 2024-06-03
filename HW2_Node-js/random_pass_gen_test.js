const generatePassword = (
  length = 10,
  useNumbers = true,
  useLetters = true,
  useChars = true
) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let validCharacters = "";
  if (useNumbers) {
    validCharacters += "0123456789";
  }
  if (useLetters) {
    validCharacters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useChars) {
    validCharacters += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  }
  if (validCharacters === "") {
    throw new Error("There are no characters in the password");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validCharacters.length);
    password += validCharacters.charAt(randomIndex);
  }
  return password;
};

module.exports = {
  generatePassword,
};
