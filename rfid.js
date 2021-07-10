

function ausgabe(){
    document.getElementById("scanButton").style.fontSize = "20px";
    document.getElementById("scanButton").innerHTML = "Scan..";
}

let eventID;
let rfidOne;
let rfidTwo;
let person;
let fahrzeug;

const url = 'fetch.php';

/* let  send = {
    rfid: eventID
  }; 
*/
var send = {
    rfid: eventID
}

// NFC-reader snippet taken from "https://gerritniezen.com/getting-started-with-web-nfc"
document.addEventListener('DOMContentLoaded', event => {
    const scanButton = document.getElementById('scanButton');
    const reader = new NDEFReader();

    scanButton.addEventListener('click', async () => {
        try {
        console.log('Scanning..');
        await reader.scan();
        } catch(e) {
        console.error("Error: ", e);
        }
    });

    reader.onreading = event => {
        console.log('Event:', event);
        eventID = event.serialNumber;
        send.rfid=eventID;
        console.log(' this is eventID: '+eventID);
        storeNfcValue(event.serialNumber)
    };
});

//stores the tag id into variables and changes the text into the id
function storeNfcValue(value){
    if(rfidOne == undefined) {    
        rfidOne = value;
        eventID = value;
        localStorage.setItem("RFID", rfidOne);
        console.log(rfidOne+' stored as RFID_ONE');
        getDataset()
        
    } else if(value != rfidOne) {
        rfidTwo = value;
        eventID = value;
        localStorage.setItem("RFID",rfidTwo);
        console.log(rfidTwo+' stored as RFID_TWO');
        getDataset()
        
    }

}

async function getDataset() {
    let response = await fetch('fetch.php', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({rfid: eventID}) });
    let data = await response.json();
    console.log(data);
    check(data);
}
function check(data){
    console.log(data[0])
    if(data[0].Typ == 1){
        if(fahrzeug == undefined){
            fahrzeug = data;
            platzhalter(2);
        }else{console.log("person already defined");}
    }
    if(data[0].Typ == 0){
        if(person == undefined){
            person = data;
            platzhalter(1);
        } else{console.log("person already defined");}
    }
    if(person != undefined){
        if(fahrzeug != undefined){
            // Hier soll der Vergleich geschehen - oder eine Vergleichsfunktion aufgerufen werden
            console.log("Hier soll der Vergleich geschehen");
            
            vergleich();
        }
    }
    
}

function vergleich(){
    /**/person[0].C=0;
    fahrzeug[0].C=1;
    fahrzeug[0].B=1;
    fahrzeug[0].BE=1;
    let counter=0; 
    let ausgabe="";
    if(fahrzeug[0].B == 1){
        if(person[0].B==0){ console.log("B false"); counter++;ausgabe += "; B";}    
    }
    if(fahrzeug[0].BE == 1){
        if(person[0].BE==0){ console.log("BE false");counter++;ausgabe += "; BE";}    
    }
    if(fahrzeug[0].C == 1){
        if(person[0].C==0){ console.log("c false");counter++;ausgabe += "; C";}    
    }
    if(fahrzeug[0].C1E == 1){
        if(person[0].C1E==0){ console.log("C1E false");counter++;ausgabe += "; C1E";}    
    }
    if(fahrzeug[0].C1 == 1){
        if(person[0].C1==0){ console.log("C1 false");counter++;ausgabe += "; C1";}    
    }
    if(fahrzeug[0].CE == 1){
        if(person[0].CE==0){ console.log("CE false");counter++;ausgabe += "; CE";}    
    }
    if(fahrzeug[0].D == 1){
        if(person[0].D==0){ console.log("D false");counter++;ausgabe += "; D";}    
    }
    if(fahrzeug[0].D1 == 1){
        if(person[0].D1==0){ console.log("D1 false");counter++;ausgabe += "; D1";}    
    }
    if(fahrzeug[0].D1E == 1){
        if(person[0].D1E==0){ console.log("D1E false");counter++;ausgabe += "; D1E";}    
    }
    if(fahrzeug[0].DE == 1){
        if(person[0].DE==0){ console.log("DE false");counter++;ausgabe += "; DE";}    
    }
    if(fahrzeug[0].L == 1){
        if(person[0].L==0){ console.log("L false");counter++;ausgabe += "; L";}    
    }
    if(fahrzeug[0].T == 1){
        if(person[0].T==0){ console.log("T false");counter++;ausgabe += "; T";}    
    }
    if(fahrzeug[0].Q1 == 1){
        if(person[0].Q1==0){ console.log("Q1 false");counter++;}    
    }
    if(fahrzeug[0].Q2 == 1){
        if(person[0].Q2==0){ console.log("Q2 false");counter++;}    
    }
console.log("fertig");
if(counter >0){
    document.body.style.background = "#ff0000";
    //window.alert("Du bist nicht berechtigt, Dir fehlen"+ausgabe);
    ausgabe = "Du bist nicht berechtigt! <br> Dir fehlen"+ausgabe;
    overlayON(ausgabe);
    
}if(counter ==0){
    document.body.style.background = "#00ff00";
    //document.getElementById("topbar").style.backgroundColor = "00ff00"
}
function overlayON(text){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayText").innerHTML = text;
    //overlayOFF is onclick event in html
}


}
//changes the text when reading tags, just for optical reasons- can be discarded later
function platzhalter(value){
    if(value == 1){
        document.getElementById("dataPerson").innerHTML = person[0].Vorname +" "+person[0].Nachname;
        document.getElementById("idPerson").innerHTML = person[0].Mitarbeiter_RFID;
        document.getElementById("scan-anzeige1").style.visibility ="visible";
    }
    if(value == 2){
        document.getElementById("dataCompare").innerHTML = fahrzeug[0].Fahrzeug +" "+fahrzeug[0].Kennzeichen;
        document.getElementById("idCompare").innerHTML = fahrzeug[0].Fahrzeug_RFID;
        document.getElementById("scan-anzeige2").style.visibility ="visible";
    }

}