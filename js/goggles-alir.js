var requestUser = "alirgoggles";
var requestPass = "apritisesamo";

function testcall() {
    $.ajax({
        url: " http://192.168.30.77:8000/donations",
        type: 'GET',
        dataType: "json",
        timeout: 5000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(requestUser + ":" + requestPass));
        }
    }).done(function (data) {
        console.log(data);
    });

}
