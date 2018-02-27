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
            window.location = "http://localhost:63342/ALIRDonorGoggles/index.html?_ijt=iiq15vbsmf83t9ce140agcf4j7";
        });

    }

}

checkCookies();

function checkUserAuth() {


    var username = $('#userName').val();
    var password = $('#userPass').val();

    var r_text = [];
    r_text[0] = "Noooooooo!";
    r_text[1] = "Ma!";
    r_text[2] = "Non capisco!";
    r_text[3] = "Ma che fai!";
    r_text[4] = "Perchè?";
    r_text[5] = "Accidenti!";
    r_text[6] = "Ritenta XD";

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
            window.location = "/inded.html";
        });

    }

}