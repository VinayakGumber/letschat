const firebaseConfig = {
      apiKey: "AIzaSyCLjzcobf0FxzK1HljpfeLSzVer_7gQZzM",
      authDomain: "letschat-76034.firebaseapp.com",
      databaseURL: "https://letschat-76034-default-rtdb.firebaseio.com",
      projectId: "letschat-76034",
      storageBucket: "letschat-76034.appspot.com",
      messagingSenderId: "752987182501",
      appId: "1:752987182501:web:ff23d472ba06886375c44c",
      measurementId: "G-T7CBZFQK85"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name +" ! " ;

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "lets_chat_web_app_page.html";
  }

    function redirectToRoomName(name) 
    {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "lets_chat_web_app_page.html";
    }

    function logout() 
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
          
    }

    function getData() 
    {
          firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
                Room_names = childKey;
      //Start code
      console.log("Room name - " + room_name);
      row = "<div class = 'room_name' id = "+room_name+" onclick = 'redirectToRoomName(this.id)' > # "+room_name+" </div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

