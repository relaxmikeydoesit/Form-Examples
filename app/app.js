function initListeners () {
    $("#submit").click(function (e) { 
        e.preventDefault();
        let firstName = $("#fName").val();  
        let lastName = $("#lName").val();    
        let email = $("#email").val();
        let passPhrase = $("#passPhrase").val();  
        console.log("inputs " + firstName + " " + lastName + " " + email + " " + passPhrase);
});
}
    $("#edit").click(function (e) { 
        e.preventDefault();

        let userObj = {
            fName: "Mikey",
            lName: "Lee",
            email: "leemike@iu.edu",
            passPhrase: "Passw0rd"
        };
        
        console.log(userObj);
        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        $("#email").val(userObj.email);
        $("#passPhrase").val(userObj.passPhrase);
});

    $("#submitInfo").click(function (e) { 
        e.preventDefault();
        let clientName = $("#clientName").val();  
        let clientEmail = $("#clientEmail").val();    
        let clientPhone = $("#clientPhone").val();
        let clientLocation = $("#clientLocation").val();
        let scheduling = $("#scheduling").val();
        let indoorOutdoor = $("#indoorOutdoor").val();
        let pets = $("#pets").val();
        let hours = $("#hours").val();
        let referral = $("#referral").val();
        let moreInfo = $("#moreInfo").val();  
        console.log("inputs " + clientName + " " + clientEmail + " " + clientPhone + " " + clientLocation + " " + scheduling + " " + pets + " " + hours + " " + referral + " " + moreInfo);
});

$("#clientEdit").click(function (e) { 
    e.preventDefault();

    let clientObj = {
            clientName: "Mikey Lee",
            clientEmail: "leemikey@iu.edu",
            clientPhone: "3177668755",
            clientLocation: "5933 Wycombe Lane",
            scheduling: "09/26/2023",
            indoorOutdoor: "indoor",
            pets: "1 dog",
            hours: "2 hours",
            referral: "facebook",
            moreInfo: "no."
    };

    console.log(clientObj);
    $("#clientName").val(clientObj.clientName);
    $("#clientEmail").val(clientObj.clientEmail);
    $("#clientPhone").val(clientObj.clientPhone);
    $("#clientLocation").val(clientObj.clientLocation);
    $("#scheduling").val(clientObj.scheduling);
    $("#indoorOutdoor").val(clientObj.indoorOutdoor);
    $("#pets").val(clientObj.pets);
    $("#hours").val(clientObj.hours);
    $("#referral").val(clientObj.referral);
    $("#moreInfo").val(clientObj.moreInfo);

});

        // console.log("inputs " + firstName + " " + lastName);
        

$(document).ready(function() {
   initListeners();
});