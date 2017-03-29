/*global $*/
function Login(options) {
    this.email = options.email;
    this.pass = options.pass;
}

Login.prototype.signIn = function(){
   
    var that = this;
    var config = {
        url: "https://web9-andrei.c9users.io/curs/curs22-PHP-API/login",
        method: "POST",
        data:{
            email:this.email,
            pass:this.pass
        },
        dataType: "json",
        success: function(resp){
            if (resp) {
                that.isLogged = resp.isLogged || false;
            }
        },
        error: function(xhr, status, error) {
            alert("Oops!Something is wrong " + error);
        },
        complete: function(){
            console.log("The request is complete");
        }
    };
    // singIn method will return the jqXHR object returned by
    // the ajax request
    return $.ajax(config);
};