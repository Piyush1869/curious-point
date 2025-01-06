// login.js
   document.getElementById("root").innerHTML=`<center>      <div id="form_cont" >
      <div class="branding" >
      <h1 class="heading"> Rishav tution classess </h1>
      <span class="tagline">be curious , be inovative , be the best</span>
      </div>
       <h2> login by usear id given by your teacher</h2> <br><br>
      <form id="myForm" action="" method="post" onsubmit="login(); return false;">
        <input id="usearname" type="text" value="usear_name" onfocus="if(this.value === 'usear_name'){this.value = '';}
       " >
        
        <br><br><br>
        <input type="submit" id="submit" value="submit">
      </form>
      <div id="login_status"></div></div></center>`





function login() {
    let usearname = document.getElementById("usearname").value;
    console.log (usearname);
    console.log("Username:", usearname);
    // You can now use the username to authenticate the user
    // For example, you can check if the username exists in a database or an object
    let users = {
      "avi09": { class: 9, subject: 1 },
      "ansh": { class: 10, subject: 2 },
      
      "shruti":{class : 10, subject : 3 },
    };
  
    if (usearname in users) {
      let userData = { username: usearname, className: users[usearname].class, subject: users[usearname].subject };
      // Send data to tution.js
      tution.handleUserData(userData);
      document.getElementById("login_status").innerHTML = "Login successful!";
     
    } else {
      document.getElementById("login_status").innerHTML = "Username not found!";
    }
  }






// // Create an object to store usernames and classes
// let users = {
//     "avi09": "Math",
//     "ansh": "Science",
//     "avinashi": "English"
//   };
  
//   // Function to check if a user exists
//   function checkUser(username) {
//     if (users[username]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   // Function to login
//   function login(username) {
//     console.log(username);
//     if (checkUser(username)) {
//       // Send data to tution.js
//       let userData = { username: username, className: users[username] };
//       // Assuming you have a function in tution.js to handle the data
//       tution.handleUserData(userData);
//       alert("Successful login!");
//     } else {
//       alert("Username not found!");
//     }
//   }
  
//   // Login attempt
//   login("avi09"); // Should alert "Successful login!"
//   login("ansh"); // Should alert "Successful login!"
//   login("avinashi"); // Should alert "Successful login!"
//   login("unknownUser"); // Should alert "Username not found!"