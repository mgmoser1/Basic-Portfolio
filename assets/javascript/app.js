// ON LOAD //
$(document).ready(function(){

    // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBM9B60-q4qQvRMPrWq5V3UoQDUCL8XMtk",
    authDomain: "portfolio-page-4cb28.firebaseapp.com",
    databaseURL: "https://portfolio-page-4cb28.firebaseio.com",
    projectId: "portfolio-page-4cb28",
    storageBucket: "portfolio-page-4cb28.appspot.com",
    messagingSenderId: "676010984987",
    appId: "1:676010984987:web:93816e4c778db751"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    
   // Create a variable to reference the database.
    var contactPage = firebase.database().ref();  // Was missing .ref()
    
       
    // ON SUBMIT //
    
    $("#submit").on("click", function(){
        event.preventDefault();
      //debugger;
   
        var guestName = $("#name").val().trim();
        var guestEmail = $("#email").val().trim();
        var guestComment = $("#comment").val().trim();
        
       
        var newGuest = {
            name: guestName,
            email: guestEmail,
            comment: guestComment,
                   
        };
        
        
        console.log("Guest: " + newGuest);
    
        contactPage.push(newGuest);
    
    
          // Clear the input divs.
    $("#name").val("");
    $("#email").val("");
    $("#comment").val("");
       
    return false;
    
    });
});