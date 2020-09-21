//btn - back to the top of the page
function backToTheTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

//contact form validation
function sendComment() {
    var comment = document.getElementById("inputComment").value;
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var errMsg = "* Morate popuniti obavezna polja!";

    if(comment === "") {
        document.getElementById("comment-validation").innerHTML = errMsg;
    }

    if(name === "") {
        document.getElementById("name-validation").innerHTML = errMsg;
    }
    
    if(name === "") {
        document.getElementById("email-validation").innerHTML = errMsg;
    }

    if (comment === "" && name === "" && email === "") {
        alert(errMsg);
    }
}