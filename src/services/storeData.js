const { Firestore } = require('@google-cloud/firestore');
const path = require("path");

async function storeData(id, data) {
  const firestore = new Firestore({
    projectId: "submissionmlgc-rahmatrohmani",
    keyFilename: path.join(__dirname, './keyfile.json'),
  });

  const docRef = firestore.collection('predictions').doc(id);
  await docRef.set(data);
}

module.exports = storeData;
