var requestUser = "alirgoggles";
var requestPass = "apritisesamo";
var authLogin = "Basic " + btoa(requestUser + ":" + requestPass);


moment.locale("it");

function testcall() {
    $.ajax({
        url: " http://192.168.30.77:8000/donations",
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

function testcall2() {

    var userId =  5;
    var donationDate = "2016-05-18";
    var expirationDate = "2016-05-18";
    var userSteamId = 76561197960737527;
    var donationAmount = 50;
    var adminNotes = "";


    var requestData = "?userId=" + userId + "&donationDate=" + donationDate + "&expirationDate=" + expirationDate + "&userSteamId=" + userSteamId + "&donationAmount=" + donationAmount + "&adminNotes=" + adminNotes;

    $.ajax({
        url: " http://192.168.30.77:8000/donations" + requestData,
        type: 'POST',
        timeout: 5000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", authLogin);
        }
    }).done(function (data) {
        console.log(data);
    });

}

function testcall3(id) {

    var requestData = "?id=" + id;

    $.ajax({
        url: " http://192.168.30.77:8000/donations" + requestData,
        type: 'DELETE',
        timeout: 5000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", authLogin);
        }
    }).done(function (data) {
        console.log(data);
    });

}

function testcall4(id) {

    var userId =  5;
    var donationDate = "2016-05-18";
    var expirationDate = "2016-05-18";
    var userSteamId = 76561197960737527;
    var donationAmount = 50;
    var adminNotes = "";

    console.log(id);

    var requestData = "?id=" + id +"&userId=" + userId + "&donationDate=" + donationDate + "&expirationDate=" + expirationDate + "&userSteamId=" + userSteamId + "&donationAmount=" + donationAmount + "&adminNotes=" + adminNotes;

    $.ajax({
        url: " http://192.168.30.77:8000/donations" + requestData,
        type: 'PUT',
        timeout: 5000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", authLogin);
        }
    }).done(function (data) {
        console.log(data);
    });

}

function testcall5(id) {

    var requestData = "?steamId=" + id;

    $.ajax({
        url: " http://192.168.30.77:8000/donations/id" + requestData,
        type: 'GET',
        dataType: "json",
        timeout: 5000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", authLogin);
        }
    }).done(function (data) {

        if(data.length === 0){
            console.log("Nessun risultato")
        }else if(data.length === 1){
            console.log("1 Risultato trovato");
            console.log(data);

            const donationDateParse = new Date(data[0].donationDate);
            const expirationDateParse = new Date(data[0].expirationDate);

            console.log("SteamID: " + data[0].userSteamId);
            console.log("adminNotes: " + data[0].adminNotes);
            console.log("donationAmount: " +data[0].donationAmount);
            console.log("donationDate: " +  moment(donationDateParse).format('L'));
            console.log("expirationDate: " +  moment(expirationDateParse).format('L'));
            console.log("Scadenza: " +  moment(expirationDateParse).endOf('day').fromNow());
            console.log("userId: " +  data[0].userId);

        }else{
            console.log("Interessante! Ho trovato" + data.length + " risultati! Non è logicamente possibile XD");
        }
    });

}
