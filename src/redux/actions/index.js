import md5 from 'crypto-js/md5';

export const USER_LOGIN = 'USER_LOGIN';
export const FAIL_FECTH = 'FAIL_FECTH';

export const userLogin = (user) => {
  const userData = md5(user.email).toString();
  return {
    type: USER_LOGIN,
    name: user.name,
    email: user.email,
    gravatar: `https://www.gravatar.com/avatar/${userData}`,
  };
};

export const failFecth = (error) => ({
  type: FAIL_FECTH,
  error,
});
