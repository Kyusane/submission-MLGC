const ClientError = require("../exceptions/ClientError");

class InputError extends ClientError {
     constructor(message, statusCode) {
          super(message);
          this.statusCode = statusCode
          this.name = 'InputError';
     }
}

module.exports = InputError;
