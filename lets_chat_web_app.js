function add_user() 
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location ="lets_chat_web_app_room.html";
    
}