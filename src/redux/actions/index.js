import md5 from 'crypto-js/md5';

export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (user) => {
  const userData = md5(user.email).toString();
  return {
    type: USER_LOGIN,
    name: user.name,
    email: user.email,
    gravatar: `https://www.gravatar.com/avatar/${userData}`,
  };
};
