import axios from "axios";
import globalCode from "constants/globalCode";

const instance = axios.create();

instance.defaults.timeout = 5000;

instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    if (
      response.data.success &&
      response.data.messageCode === globalCode.success
    ) {
      return response.data.data;
    }

    // timout
    if (
      !response.data.success &&
      response.data.messageCode === globalCode.timeout
    ) {
      return Promise.reject({
        messageCode: "timeout"
      });
    }

    // netError
    if (
      response.data.success &&
      response.data.messageCode === globalCode.busyCode
    ) {
      return Promise.reject({
        messageCode: "netError"
      });
    }

    // others
    return Promise.reject(response.data);
  },
  function() {
    // server error
    return Promise.reject({
      messageCode: "sysError"
    });
  }
);

export default instance;
