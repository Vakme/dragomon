const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.createUserTable = functions.auth.user().onCreate(async (user) => {
  await admin.database().ref('users/' + user.uid + '/monsterCount').set(0);
  console.log('New user in the database.');
});