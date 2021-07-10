let eventID;
eventID = "04:0D:4C:52:17:3C:81";   //PKW
eventID2 = "04:4C:4D:52:17:3C:80";   //Ehrich
eventID3 = "04:d6:4b:52:17:3c:80";
//window.location.href = "test.php?js_rfid_one=" + eventID;

const url = 'fetch.php';

let send = {
  rfid: eventID
}
var person;
var fahrzeug;

var myInit = {  method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rfid: eventID
                }) 
};
let myRequest = new Request("fetch.php", myInit);

getDataset()
async function getDataset() {
    let response = await fetch(myRequest);
    let data = await response.json();
    console.log(data);
    check(data);
}

function check(data){
    console.log(data[0])
    if(data[0].Typ == 1){
        fahrzeug = data;
    }
    if(data[0].Typ == 0){
        person = data;
    }
    
}

/*
fetch(myRequest)
.then((res) => {
    if (res.ok) {
        return res.json() 
    } else {
        return Promise.reject({ status: res.status, statusText: res.statusText });
    }   
    
})
.then((data) => console.log(data))
.then(data => obj = data)
.then(() => console.log(obj))
.catch(err => console.log('Error message:', err.statusText));
*/