

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

  let SignupEmail = document.getElementById("SignupEmail");
  let SignupUsername = document.getElementById("SignupUsername");
  let SignupPassword = document.getElementById("SignupPassword");
  let Signupbtn = document.getElementById("Signupbtn");


  console.log(Signupbtn);
  


  function AddData(){
    set(ref(db, 'Users/'+SignupUsername.value),{
        Email : SignupEmail.value,
        Username :SignupUsername.value,
        Password :SignupPassword.value,
    }).then(()=>{
        alert("Account Created");
    }).catch(()=>{
        alert("Unsuccessfull!!!");
        console.log(error);
    })
  }
  function Check(){
    if(SignupEmail.value != "" && SignupUsername.value != "" && SignupPassword.value != ""){
        AddData();
        clearInput("SignupEmail");
        clearInput("SignupUsername");
        clearInput("SignupPassword");

      }
      else{
        alert("Enter all required data !!!");
      }
  }
  function clearInput(id){
    document.getElementById(id).value = "";
  }
  Signupbtn.addEventListener('click',Check);



