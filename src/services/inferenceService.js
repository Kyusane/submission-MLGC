const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

async function predictClassification(model, image) {
     try {
          const tensor = tf.node
               .decodeJpeg(image)
               .resizeNearestNeighbor([224, 224])
               .expandDims()
               .toFloat()

          const prediction = model.predict(tensor);
          const score = await prediction.data();

          let label, suggestion;
          const threshold = 0.5;

          if (score > threshold) {
               label = "Cancer"
               suggestion = "Segera konsultasi dengan dokter !!"
          }

          if (score <= threshold) {
               label = "Non-cancer"
               suggestion = "Anda dapat berkonsultasi dengan dokter untuk memastikan penyakit anda"
          }

          return { label, suggestion };

     } catch (error) {
          throw new InputError(`Terjadi kesalahan dalam melakukan prediksi`, 400)
     }
}
module.exports = predictClassification;