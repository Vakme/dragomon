const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.createUserTable = functions.auth.user().onCreate(async (user) => {
  console.log('A new user signed in for the first time.');
  const email = user.email || 'Anonymous';
  
  // Saves the new welcome message into the database
  // which then displays it in the FriendlyChat clients.
  await admin.database().ref('users').push({
    email: email,
    statistics: [],
    monsters: [],
    items: []
  });
  console.log('New user in the database.');
});