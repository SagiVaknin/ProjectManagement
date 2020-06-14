
window.onload = function () {
    initApp();
};

function initApp() {

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
    var json = {
        app: 1
    };

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log('logged');
        } else {
            // No user is signed in.
            console.log('no logged');
        }
    });
}



function accept(objec) {
    fetch("/api/adminRequest", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "CSRF-Token": Cookies.get("XSRF-TOKEN"),
        },
        body: JSON.stringify({ uid: objec.value, flag: "true" }),
    })
        .then(response => response.json())
        // eslint-disable-next-line prefer-arrow-callback
        .then(function (resJ) {
            console.log(resJ.data);
            alert("accepted");
        }).catch(function (error) {
            console.log('data error');
        });
    location.reload();

}

function decline(objec) {
    fetch("/api/adminRequest", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "CSRF-Token": Cookies.get("XSRF-TOKEN"),
        },
        body: JSON.stringify({ uid: objec.value, flag: "false" }),
    })
        .then(response => response.json())
        .then(function (resJ) {
            console.log(resJ.data);
            alert("declined");
        }).catch(function (error) {
            console.log('data error');
        });
    location.reload();
}


function hasImg() {
    console.log("hasIMg");
    if (true) {
        return "https://firebasestorage.googleapis.com/v0/b/projectmanagement-612b8.appspot.com/o/icons%2Fcompact_camera.png?alt=media&token=e23f870d-4f38-4e92-a4fb-d3eddffd65da";

    }
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

