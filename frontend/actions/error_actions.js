export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = (formName, errors) => {
  return {
    type: RECEIVE_ERRORS,
    formName,
    errors
  };
};

export const clearErrors = (formName) => {
  return {
    type: CLEAR_ERRORS,
    formName
  };
};
