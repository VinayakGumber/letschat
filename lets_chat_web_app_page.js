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
  room_name = localStorage.getItem("room_name");

  function send() 
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      });
      document.getElementById("msg").value = "";
  }

  function logout() 
  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }