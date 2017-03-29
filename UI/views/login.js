/*global $*/
/*global Login*/
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var loginBtn = $("#login_btn");
    var loginModel;
    loginBtn.on("click", function(ev) {
        ev.preventDefault();
        var emailValue = $("[name='user_email']").val();
        var passValue =$("[name='user_password']").val();
        
        loginModel = new Login({
            email: emailValue,
            pass: passValue
        });
        var loginReq = loginModel.signIn();
        loginReq.done(redirectUserToArticlesPage);
    });
    function redirectUserToArticlesPage() {
        if (loginModel.isLogged) {
            window.location.href = "https://web9-andrei.c9users.io/curs/blog/UI/pages/articles.html"
        } else {
            alert("Login failed");
        }
    }
}