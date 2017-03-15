export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const EMPTY_ERRORS = "EMPTY_ERRORS";

export const receiveErrors = (formName, errors) => ({
  type: RECEIVE_ERRORS,
  formName,
  errors
});

export const emptyErrors = () => ({
  type: EMPTY_ERRORS,
});
