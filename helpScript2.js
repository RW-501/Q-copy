

		
var Loggedin = document.cookie.split('; ').find(row => row.startsWith('loggedIn=')).split('=')[1];
	
	// Check if user is logged in
  if (Loggedin == 'true') {
 console.log("Logged In"); 

  }else{
	 console.log("Logged Out"); 
  
  }
		
fetch('/elements/navbar2.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('#navbar').innerHTML = data;



      const navUserInfo = JSON.parse(localStorage.getItem("userInfo"));
 console.log('navUserInfo.profilePic 1 ', navUserInfo.profilePic);
  document.getElementById('profile-pic').src = navUserInfo.profilePic;
   
// Check if user is logged in
		var cookieValue = document.cookie.split('; ').find(row => row.startsWith('loggedIn=')).split('=')[1];

	
	// Check if user is logged in
  if (cookieValue == 'true') {
    // User is logged in
    document.getElementById('navLoggedin').innerHTML = "<div onclick=\"logOutFunction()\">Log Out</div>";
  } else {
    // User is not logged in
    document.getElementById('navLoggedin').innerHTML = "<div onclick=\"openPopup()\">Log In</div>";
  }
    console.log("cookieValue: ", cookieValue);


// Log out function
function logOutFunction() {
  firebase.auth().signOut().then(function() {
    // Log out successful
      // Set the logged-in cookie
      document.cookie = 'loggedIn=false';
	  console.log("User logged out.");
  }).catch(function(error) {
    // An error occurred
    console.log("Error logging out:", error);
  });
}


	
    $(document).ready(function() {
      console.log($('.navbar-toggler'));
      $('.navbar-toggler').click(function() {
        $('#navbarNav').toggleClass('collapse');
      });
    });
  });

fetch('/elements/footer2.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('#mainFooter').innerHTML = data;
});



  
