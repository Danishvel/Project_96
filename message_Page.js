var firebaseConfig = {
      apiKey: "AIzaSyAX59vQosGHb13CyifOu3ZrkAfRXkRt1QQ",
      authDomain: "dwitter-3d78f.firebaseapp.com",
      databaseURL: "https://dwitter-3d78f-default-rtdb.firebaseio.com",
      projectId: "dwitter-3d78f",
      storageBucket: "dwitter-3d78f.appspot.com",
      messagingSenderId: "353658125060",
      appId: "1:353658125060:web:37e217fe8f3bf48594ae51",
      measurementId: "G-MRTMD9XSC2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

Room_name = localStorage.getItem("Room Name");
User_name = localStorage.getItem("User_Name");
function post() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(Room_name).push({
            Name : User_name,
            Message = msg,
            Likes : 0
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
