import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBpXhh5eTRV14evbx6RnNB058j1uEfBLxM",
    authDomain: "todo-964f5.firebaseapp.com",
    databaseURL: "https://todo-964f5-default-rtdb.firebaseio.com",
    projectId: "todo-964f5",
    storageBucket: "todo-964f5.appspot.com",
    messagingSenderId: "586160883942",
    appId: "1:586160883942:web:c3d85f5c6a819aa4f41327"
  };
  const app = initializeApp(firebaseConfig);
  import {getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  const db = getDatabase();
  let LoginUserName = document.getElementById("LoginUserName");
  let LoginPassword = document.getElementById("LoginPassword");
  let Loginbtn = document.getElementById("Loginbtn");
  console.log(Loginbtn);

  function login(){
    let flag = 0;
    const dbref =ref(db);
    get(child(dbref, "Users"))
    .then((snapshot)=>{
        var student = [];
        snapshot.forEach(childSnapshot => {
            student.push(childSnapshot.val());
            if(childSnapshot.val().Username ==  LoginUserName.value && childSnapshot.val().Password == LoginPassword.value)
            {
                flag = 1;
            }
        });
        if(flag == 1){
            clearInput("LoginUserName");
            clearInput("LoginPassword");
            window.location = "user_page.html";
        }
        else{
            alert("Account does not Exists");
            clearInput("LoginUserName");
            clearInput("LoginPassword");
        }
    });
}
function clearInput(id){
    document.getElementById(id).value = "";
  }
Loginbtn.addEventListener('click',login);