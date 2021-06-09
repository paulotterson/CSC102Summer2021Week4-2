function checkcreds() {
    console.log("checkcreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var FullName = firstName + " " + lastName;
    var badgenumb = document.getElementById("badgeID").value;

    //Validate the full name. Less than 20 characters
    if (FullName.length > 20 || FullName.length < 2) {
        document.getElementById("login status").innerHTML = "Invalid Full Name, Please Resubmit";
    } else if(badgenumb > 999 || badgenumb < 1){
        document.getElementById("login status").innerHTML = "Invalid Badge Number, Please Resubmit";
    }else {
        console.log("Submission Passes!");
        alert("Access Granted! Welcome, " + FullName);
        location.replace("UATSpace.html");
    }
}