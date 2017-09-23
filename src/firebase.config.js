import * as firebase from 'firebase'
import secrets from './secrets.js'

export default firebase.initializeApp(secrets).database()


