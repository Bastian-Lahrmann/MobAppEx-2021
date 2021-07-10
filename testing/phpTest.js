let eventID;
eventID = "04:a6:4a:52:17:3c:80";

//window.location.href = "test.php?js_rfid_one=" + eventID;

const url = 'fetch.php';
const url2 = 'https://reqres.in/api/users';

let send = {
  rfid: eventID
}

//calling()
/*
async function calling(){
    const response = await fetch('fetch.php');
    const movies = await response.json();
  // waits until the request completes...
  console.log(response);
  console.log(movies);
}
*/



/* fetch('fetch.php')
.then(res => res.json())
.then(json => console.log(json)); */


var myInit = {  method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rfid: eventID
                }) 
};
let myRequest = new Request("fetch.php", myInit)
fetch(myRequest)
.then((res) => {
    if (res.ok) {
        return res.json() 
    } else {
        return Promise.reject({ status: res.status, statusText: res.statusText });
    }   
    
})
.then((data) => console.log('success', data))





fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        rfid: eventID
    })
    })
    .then((res) => {
        if (res.ok) {
            return res.json() 
        } else {
            return Promise.reject({ status: res.status, statusText: res.statusText });
        }   
        
    })
    .then((data) => console.log('success', data))
    .catch(err => console.log('Error message:', err.statusText));



/*
var request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers()
});

fetch(request)
.then(function() {
    // Handle response we get from the API
})
*/