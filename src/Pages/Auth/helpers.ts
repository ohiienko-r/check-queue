const emailRegExp = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~\-=[\]\\;',./]).{6,}$/;

const validateEmail = (email: string): boolean => {
  return emailRegExp.test(email);
};

const validatePassword = (password: string): boolean => {
  return passwordRegExp.test(password);
};

export const validateAuthData = (email: string, password: string): boolean => {
  if (validateEmail(email) && validatePassword(password)) {
    return true;
  } else return false;
};
