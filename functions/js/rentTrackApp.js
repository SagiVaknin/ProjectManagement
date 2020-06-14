/* eslint-disable no-constant-condition */
/* eslint-disable promise/always-return */

window.onload = function() {
    initApp();
  };

function initApp()
{

    // Set the configuration for your app
    // TODO: Replace with your project's config object
    
    var config = {
        apiKey: "AIzaSyDwIvIUQ02UrYTeJ_H96jW49NaQkXMTBVc",
        authDomain: "projectmanagement-612b8.firebaseapp.com",
        databaseURL: "https://projectmanagement-612b8.firebaseio.com/",
        projectId: "projectmanagement-612b8",

    };
    firebase.initializeApp(config);
    
    const database = firebase.database();
    const auth = firebase.auth();
    const sss = document.getElementById("myTable");
    var json={
        app:1
    };




}
//-------------end init




function Approved(objec){
        
       fetch("/api/renterResponse", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "CSRF-Token": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({uid:objec.value,flag:"true",sid:objec.dataset.value3,totalBill:objec.dataset.value2}),
            })
        .then(response => response.json())
        // eslint-disable-next-line prefer-arrow-callback
        .then(function(resJ){
            console.log(resJ.data);
            alert("Contract accepted");
        }).catch(function (error) {
            console.log('data error');
        });
}



    //--------------------------------


    function Declined(objec){
        fetch("/api/renterResponse", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "CSRF-Token": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({uid:objec.value,flag:"false"}),
            })
            .then(response => response.json())
            // eslint-disable-next-line prefer-arrow-callback
            .then(function(resJ){
                console.log(resJ.data);
                alert("Contract declined");    
            }).catch(function (error) {
                console.log('data error');
            });
    }


