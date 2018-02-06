function validateForm() {
    var username = document.forms["form1"]["user_name"].value;
    var password = document.forms["form1"]["password"].value;
    if (username == "") {
        alert("Name must be filled out");
        return false;
    }

}

function validateForm1() {
    var firstname = document.forms["form2"]["first_name"].value;
    var lastname = document.forms["form2"]["last_name"].value;
    var email = document.forms["form2"]["email"].value;
    var password = document.forms["form2"]["password"].value;
    var password_confirmation = document.forms["form2"]["password_confirmation"].value;

    if (firstname == "" || lastname == "") {
        alert("Name must be filled out");
        return false;
    }

}
