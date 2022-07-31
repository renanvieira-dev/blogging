// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyAe8mJ7hfrpoFdnEWWlghNnxMrDDpIjOhs",
    authDomain: "blog-2-7fe7c.firebaseapp.com",
    projectId: "blog-2-7fe7c",
    storageBucket: "blog-2-7fe7c.appspot.com",
    messagingSenderId: "182915820409",
    appId: "1:182915820409:web:f180574c2d5981194f1da8"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();