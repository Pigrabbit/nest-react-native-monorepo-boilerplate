export const hasWhiteSpaceAtBeginOrEnd = (value: string) => !/(^\s+)|(\s+$)/.test(value);

export const whiteSpaceAtBeginOrEndErrorMessage = {
  message: 'Please remove white space.',
};

export const isAlphabet = (value: string) => /^[a-zA-Z\s]+$/.test(value);

export const notAlphabetErrorMessage = {
  message: 'Only alphabet is allowed.',
};

export const isEmail = (value: string) =>
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    value
  );

export const notEmailErrorMessage = {
  message: 'Please enter a valid email address.',
};
