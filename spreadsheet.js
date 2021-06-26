const spreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const creds = require('./client_secret.json')

const doc = new spreadsheet.GoogleSpreadsheet('1-s0On7zt7eTrXXOsKqHOJdm2sPzY0gy8L0mVH-EgA4Q');

async function accessSpreadsheet() {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
  
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
  
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    console.log(sheet.title);
    //console.log(sheet.rowCount);
    (await sheet.getRows()).forEach(row=>console.log(row.LTP))
  
  }

  accessSpreadsheet()