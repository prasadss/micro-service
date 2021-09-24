const _http = require("../helper/http");
const { MOVIE_URL } = require("../helper/constants");

module.exports.index = function () {
  return _http
    .doGetCall(MOVIE_URL, "")
    .then((data) => {
      return data;
    })
    .catch((ex) => {        
      return { error: ex.response.data || ex };
    });
};

module.exports.show = function (id) {
  return _http
    .doGetCall(MOVIE_URL, `${id}`)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};

module.exports.insert = function (body) {
  return _http
    .doPostCall(MOVIE_URL, ``, body)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};

module.exports.remove = function (id) {
  return _http
    .doDeleteCall(MOVIE_URL, `${id}`)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};

module.exports.update = function (id, body) {    
  return _http
    .doPutCall(MOVIE_URL, `${id}`, body)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};
