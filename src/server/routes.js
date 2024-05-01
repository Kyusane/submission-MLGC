const InputError = require('../exceptions/InputError');
const { postPredictHandler, getPredictHistories } = require('../server/handler');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1000000,
        failAction: async (request, h, err) => {
          const errorMessage = err.output.payload.message;
          throw new InputError(errorMessage, 413)
        }
      },
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: getPredictHistories,
  }
]

module.exports = routes;