export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (formName, errors) => ({
  type: RECEIVE_ERRORS,
  formName,
  errors
});
