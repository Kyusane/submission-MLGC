const { Firestore } = require('@google-cloud/firestore');
const path = require("path");

async function getData() {
     const firestore = new Firestore({
          projectId: "submissionmlgc-rahmatrohmani",
          keyFilename: path.join(__dirname, './keyfile.json'),
          databaseId: "submission-mlgc"
     });

     let data = []
     const historiesRef = firestore.collection('prediction');
     const histories = await historiesRef.get();
     histories.forEach(doc => {
          data.push({
               id: doc.id,
               history: doc.data()
          })
     });

     return data
}

module.exports = getData;
