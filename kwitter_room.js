// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCmUHIhxUqWMaFW0ZY4SHJUsdPLU9sTwUM",
      authDomain: "kwitter-dc5e2.firebaseapp.com",
      databaseURL: "https://kwitter-dc5e2-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc5e2",
      storageBucket: "kwitter-dc5e2.appspot.com",
      messagingSenderId: "91200822398",
      appId: "1:91200822398:web:f5c40fd5efee2ee4ce8c2f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
