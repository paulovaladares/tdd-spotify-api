"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADER = exports.API_URL = void 0;
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var API_TOKEN = 'BQCnBeqNi-7UKR3V3wQ3g1vMruc35m8z1uERFugUFsjPruGxCokrSbsPn-Ln7Pe9VbqX0ILCmGzVZDio9JYcRhzIr6r3lAjzOV9s7nbEG6aDYnt2p7vVxt5OCFwkXFGtYtS6TwgQ8eh8R5cIrYT5-w1q24zooGmbpNH62k1poYstjdyOeuCUtVVCYTuXU7VvzrJCwrPe_BMrO9Bq9N33Z1jBqopwJXLwZ51LldbYmQv16I0ulqyU8Vh1C-OP3WvJ1dGvoIfrVosK_XYKTSc_';
var HEADER = {
  headers: {
    Authorization: "Bearer ".concat(API_TOKEN)
  }
};
exports.HEADER = HEADER;