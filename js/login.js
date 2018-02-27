function checkCookies() {

    var loggedInInfo = Cookies.get('myalir-uulog');

    if (loggedInInfo) {

        $.ajax({
            url: "http://192.168.30.77:8000/checksec",
            type: 'GET',
            dataType: "json",
            timeout: 5000,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + loggedInInfo);
            },
            statusCode: {
                401: function (xhr) {
                    if (window.console) {
                        $('#alertErrorLogin').attr('hidden', true);
                        $('#notAllowedData').removeAttr('hidden');
                    }
                }
            }
        }).done(function () {
            //window.location = "http://localhost:63342/index.html";
        });

    }

}

// See https://github.com/daneden/animate.css/issues/644
var animationEnd = (function(el) {
    var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd'
    };

    for (var t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
});

checkCookies();

function accessWithSteam() {
    $('#loginWithSteam').one(animationEnd, $('#loginWithSteam').animateCss('bounceOutLeft'));
    $('#loginWithBasic').attr('hidden', true);
    $('#alertErrorLogin').attr('hidden', true);
    $('#alertErrorLogin2').attr('hidden', true);
    $('#notAllowedData').attr('hidden', true);
    $('#notAllowedData2').attr('hidden', true);
    $('#loginWithSteam').removeAttr('hidden')
}

function accessWithPassword() {
    $('#loginWithSteam').attr('hidden', true);
    $('#alertErrorLogin').attr('hidden', true);
    $('#alertErrorLogin2').attr('hidden', true);
    $('#notAllowedData').attr('hidden', true);
    $('#notAllowedData2').attr('hidden', true);
    $('#loginWithBasic').removeAttr('hidden')
}

function checkUserSteam() {

    
}

function checkUserAuth() {

    var username = $('#userName').val();
    var password = $('#userPass').val();

    var r_text = ["Noooooooo!","Ma!","Non capisco!","Ma che fai!","Perchè?","Accidenti!","Ritenta XD"];

    var i = Math.floor(7 * Math.random());

    if (!username && !password) {
        $('#alertErrorLogin').removeAttr('hidden');
        $('#errorStrong').html(r_text[i]);
        $('#errorSpan').html("Username e password sono obbligatori!");
    } else if (!username) {
        $('#alertErrorLogin').removeAttr('hidden');
        $('#errorStrong').html(r_text[i]);
        $('#errorSpan').html("Hai dimenticato l'username!");
    } else if (!password) {
        $('#alertErrorLogin').removeAttr('hidden');
        $('#errorStrong').html(r_text[i]);
        $('#errorSpan').html("Non vedo la password!");
    } else {

        var authLogin = btoa(username + ":" + password);

        $.ajax({
            url: "http://192.168.30.77:8000/checksec",
            type: 'GET',
            dataType: "json",
            timeout: 5000,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + authLogin);
            },
            statusCode: {
                401: function (xhr) {
                    if (window.console) {
                        $('#alertErrorLogin').attr('hidden', true);
                        $('#notAllowedData').removeAttr('hidden');
                    }
                }
            }
        }).done(function (data) {
            Cookies.set('myalir-uulog', authLogin, {expires: 20});
            window.location = "../pages/index.html";
        });

    }

}
