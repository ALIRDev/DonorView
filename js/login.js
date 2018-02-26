function loadLogins() {
    console.log("dsa");
    console.log(Cookies.get('MyALIR-1967usr894'));
}
loadLogins();

function loginHand(username, password) {

    Cookies.set('MyALIR-1967usr894', username, {expires: 7});
    Cookies.set('MyALIR-1967pas642', password, {expires: 7});
}

function checkUserAuth(username, password) {

    var authLogin = "Basic " + btoa(username + ":" + password);

    $.ajax({
        url: " http://192.168.30.77:8000/checksec",
        type: 'GET',
        dataType: "json",
        timeout: 5000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", authLogin);
        }
    }).done(function (data) {
        console.log(data);
    });

}