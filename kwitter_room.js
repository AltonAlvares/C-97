
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBKFlnGEOs7IWJV_3T_nkCwMBpya8c2bzQ",
      authDomain: "c-94-3f3e2.firebaseapp.com",
      databaseURL: "https://c-94-3f3e2-default-rtdb.firebaseio.com",
      projectId: "c-94-3f3e2",
      storageBucket: "c-94-3f3e2.appspot.com",
      messagingSenderId: "342928891366",
      appId: "1:342928891366:web:a92ea6e3ddd08acf7a0a27"
    };

    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  
  window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}