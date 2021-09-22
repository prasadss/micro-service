const axios = require("axios");
module.exports.doGetCall = async (url, path, params) => {
  const response = await axios.get(`${url}${path}`, { params });
  return validateResponse(response.data);
};

module.exports.doPostCall = async (url, path, body) => {
  const response = await axios.post(`${url}${path}`, body, {});
  return validateResponse(response.data);
};

module.exports.doPutCall = async (url, path, body) => {    
  const response = await axios.put(`${url}${path}`, body, {});
  return validateResponse(response.data);
};

module.exports.doDeleteCall = async (url, path) => {
  const response = await axios.delete(`${url}${path}`, {});
  return validateResponse(response.data);
};

function validateResponse(data) {
  if (Object.keys(data).length == 0) {
    throw new Error("No Response found");
  }
  return data;
}
