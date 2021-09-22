module.exports = function (data) {
  const response = {
    data: null,
    error_message: "",
  };
  if (Object.keys(data).includes("error")) {
    response.error_message =
      typeof data.error == "object" ? data.error.message || "" : data.error;
  } else {
    response.data = data;
  }
  return response;
};
