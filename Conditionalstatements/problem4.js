// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username = "kp@gmail.com";
let stored_password = "1234";

let entered_username = "kp@gmail.com"
let entered_password = "1234"

if (stored_username == entered_username) {
  if (stored_password == entered_password){
    console.log("Login Successful");
  }
   else {console.log("Password is Incorrect")}
 

}
else {
  console.log("Wrong Credentials")
}