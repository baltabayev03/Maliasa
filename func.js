var button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  document.getElementById('reg').style.display = "grid";
  document.getElementById('log').style.display = "none";
});
var button2 = document.getElementById('buttonc');
button2.addEventListener('click', function() {
  document.getElementById('reg').style.display = "none";
  document.getElementById('log').style.display = "grid";
})

function reg() {
  var name = document.forms["myForm"]["fullname"].value;
  if (name == "") {
    alert("Name must be filled out");
  } else {
    var pass = document.forms["myForm"]["password"].value;
    if (pass.length >= 8) {
      var i = 0;
      var n = 0;
      for (i = 0; i < pass.length; i++) {
        var lowerCaseLetters = /[a-z]/;
        if (pass[i].match(lowerCaseLetters)) {
          n++;
        }
      }
      if (n > 0) {
        n = 0;
        i = 0;
        for (i = 0; i < pass.length; i++) {
          var upperCaseLetters = /[A-Z]/g;
          if (pass[i].match(upperCaseLetters)) {
            n++;
          }
        }
        if (n > 0) {
          n = 0;
          i = 0;
          for (i = 0; i < pass.length; i++) {
            var symbols = /[^a-zA-Z\d]/g;
            if (pass[i].match(symbols)) {
              n++;
            }
          }
          if (n > 0) {
            var mail = document.forms["myForm"]["email"].value;
            if (mail == "") {
              alert("Email must be filled out");

            }
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (mail.match(mailformat)) {
              alert("succesfull registered!");
            } else {
              alert("You have entered an invalid email address!");

            }
          } else {
            alert("password must contain at least 1 special symbol(!@#$%^&)");

          }
        } else {
          alert("password must contain at least 1 uppercase letter");

        }
      } else {
        alert("password must contain at least 1 lowercase letter");

      }
    } else {
      alert("password must contain at least 8 symbols");

    }
  }
}
