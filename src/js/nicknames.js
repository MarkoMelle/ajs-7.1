/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(nick) {
    return (nick.match(/[a-z]{1}[a-z\-_\d]+[a-z]{1}/i)[0] === nick) && !/[\d]{4,}/.test(nick);
  }
}
