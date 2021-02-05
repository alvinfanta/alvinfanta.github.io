function getInfo() {
	var usernames = document.getElementById("username").value
    var passwords = document.getElementById("password").value
    
    if(usernames == "Akun" && passwords == "Password" ){
        console.log( usernames + " is logged in")
        location.href = "room1.html"
    }
    else if(usernames == "Fanta" && passwords == "Kun" ) {
        console.log( usernames + " is logged in")
        location.href = "room1.html"
    }
    else {
        alert("OIIIIII WHO ARE YOU TRYING TO LOG IN")
    }
}