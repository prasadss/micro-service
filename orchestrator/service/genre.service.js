const _http = require("../helper/http");
const { GENRE_URL } = require("../helper/constants");

module.exports.index = function () {
  return _http
    .doGetCall(GENRE_URL, "")
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};

module.exports.show = function (id) {
  return _http
    .doGetCall(GENRE_URL, `${id}`)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};

module.exports.insert = function (body) {
  return _http
    .doPostCall(GENRE_URL, ``, body)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};

module.exports.remove = function (id) {
  return _http
    .doDeleteCall(GENRE_URL, `${id}`)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};

module.exports.update = function (id, body) {
  return _http
    .doPutCall(GENRE_URL, `${id}`, body)
    .then((data) => {
      return data;
    })
    .catch((ex) => {
      return { error: ex.response.data || ex };
    });
};
