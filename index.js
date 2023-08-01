document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("myForm").addEventListener('submit', validarform);
});

function validarform (evento) {
    evento.preventDefault();
    var firstn = document.getElementById("first-name").value;
    var lastn = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    
    if ((firstn.length == 0) || (lastn.length == 0) || (email.length == 0) || (pass.length < 8)) {
        document.getElementById("myForm").className += " unhidden";
        document.getElementById("i1").className = "icon ";
        document.getElementById("i2").className = "icon ";
        document.getElementById("i3").className = "icon ";
        document.getElementById("i4").className = "icon ";
        document.getElementById("t1").className = "text ";
        document.getElementById("t2").className = "text ";
        document.getElementById("t3").className = "text ";
        document.getElementById("t4").className = "text ";
    }
    else {
        document.getElementById("myForm").className = "myForm ";
        document.getElementById("i1").className = "icon hidden";
        document.getElementById("i2").className = "icon hidden";
        document.getElementById("i3").className = "icon hidden";
        document.getElementById("i4").className = "icon hidden";
        document.getElementById("t1").className = "text hidden";
        document.getElementById("t2").className = "text hidden";
        document.getElementById("t3").className = "text hidden";
        document.getElementById("t4").className = "text hidden";
        alert("Thanks For Your Register");
        this.submit();
    }
    
} 
