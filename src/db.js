import Firebase from 'firebase/app'
import 'firebase/database'
import config from '../config'
const firebaseApp = Firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
})
const db = firebaseApp.database()
export default db
