firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      var user = firebase.auth().currentUser;
      if(user != null){
        console.log(user);
      }
  
    } else {
      // No user is signed in.
      console.log("Not logged in");
    }
  });

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  
  
  function createAccount(){
    var userEmail = document.getElementById("emailad").value;
    var userPass = document.getElementById("pw").value;
    var confirmPass = document.getElementById("cpw").value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    
    if(userPass.length < 6){
      alert("Passwords must be greater than 6 characters. Please try again.")
      return;
    }
    if(userPass != confirmPass){
      alert("Passwords do not match. Please try again.")
      return;
    }


    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
            return;
          // ... look at all the possible Error codes in the doc to handle the different cases
    
    }).then(function(){
        console.log("Something")
        

    }).then(function(){
    
        //Succesful, do whatever you want in your page
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
          
              var user = firebase.auth().currentUser;

              
              if(user != null){
                console.log(user);
              }
              console.log("redirect");

            var firestore = firebase.firestore();
            var docRef = firestore.doc("users/" + user.email);
        
            docRef.set({
            first: firstName,
            last: lastName,
            location: "",
            preferences: "None",
            hours: 0

            }).then(function(){
            console.log("Saved");
            window.location.href = "create-account2.html";

            }).catch(function (error){
            console.log("got an error: ", error);
            });
          
            } else {
              // No user is signed in.
              console.log("Not logged in");
            }
      });
    });
    console.log("Logging in...")

  
  }

function userInfo(){
    var loc = document.getElementById("location").value;
    //var prefs = document.getElementById("prefs").value;
  var prefs = new Array();
  for(var i = 1; i < 8; i++){
    if (document.getElementById("prefs" + String(i)).checked == true){
      prefs.push(document.getElementById("prefs" + String(i)).value)
    }
  }

    var user = firebase.auth().currentUser;
    var firestore = firebase.firestore();
    var docRef = firestore.doc("users/" + user.email);
  
    docRef.update({
      location: loc,
      preferences: prefs
    }).then(function(){
      console.log("Saved");
    }).catch(function (error){
      console.log("got an error: ", error);
    }).then(function(){    
        //Succesful, do whatever you want in your page
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
          
              var user = firebase.auth().currentUser;
              if(user != null){
                console.log(user);
              }
              console.log("redirect");
              window.location.href = "my-profile.html";
              
            var x = document.getElementById("login-btn");
            x.style.display = "block";
          
            } else {
              // No user is signed in.
              console.log("Not logged in");
            }
      });
    });

}



function login(){
  var userEmail = document.getElementById("emailad").value;
  var userPass = document.getElementById("pw").value;
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
          console.log(errorMessage);
        // ... look at all the possible Error codes in the doc to handle the different cases
      

  }).then(function(){
  
      //Succesful, do whatever you want in your page
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
        
            var user = firebase.auth().currentUser;

            
            if(user != null){
              console.log(user);
            }
          } else {
            // No user is signed in.
            console.log("Not logged in");
          }

          console.log("Saved");
          window.location.href = "my-profile.html";
          //getProfile();
          }).catch(function (error){
          console.log("got an error: ", error);
          });
    });
  }

  function getProfile(){
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
    
        var user = firebase.auth().currentUser;
        //var name = get
        //var user = firebase.auth().currentUser;
     console.log(user);
    var firestore = firebase.firestore();
    //var docRef = firestore.doc("users/" + user.email);
    firestore.collection('users').doc(user.email).get().then(
      function (doc) {
        if (doc && doc.exists) {
          console.log(doc.data().first);
          document.getElementById("fname").innerHTML = doc.data().first;
          document.getElementById("lname").innerHTML = doc.data().last;
          document.getElementById("emailad").innerHTML = user.email;
          document.getElementById("loc").innerHTML = doc.data().location;
          document.getElementById("prefs").innerHTML = doc.data().preferences;
          document.getElementById("hours").innerHTML = doc.data().hours;

        
        }
      }
    )

        if(user != null){
          console.log(user);
        }
    
      } else {
        // No user is signed in.
        console.log("Not logged in");
      }
    });
 
    }



  function logout(){
    firebase.auth().signOut();
    window.location.href = "index.html";
  }