const { Firestore } = require('@google-cloud/firestore');
const path = require("path");

async function storeData(id, data) {
  const firestore = new Firestore({
    projectId: "submissionmlgc-rahmatrohmani",
    keyFilename: path.join(__dirname, './keyfile.json'),
    databaseId: "submission-mlgc"
  });

  const predictCollection = firestore.doc(`prediction/${id}`);
  await predictCollection.set(data);
}

module.exports = storeData;
