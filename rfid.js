

function ausgabe(){
    document.getElementById("scanButton").style.fontSize = "20px";
    document.getElementById("scanButton").innerHTML = "Scan..";
}

let eventID;
let rfidOne;
let rfidTwo;

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
        storeNfcValue(event.serialNumber)
    };
});

//stores the tag id into variables and changes the text into the id
function storeNfcValue(value){
    if(rfidOne == undefined) {    
        rfidOne = value;
        console.log(rfidOne+' stored as RFID_ONE');
        document.getElementById("idPerson").innerHTML = rfidOne;
        platzhalter(1);
        document.getElementById("scan-anzeige1").style.visibility ="visible";
    } else if(value != rfidOne) {
        rfidTwo = value;
        console.log(rfidTwo+' stored as RFID_TWO');
        document.getElementById("idCompare").innerHTML = rfidTwo;
        platzhalter(2);
        document.getElementById("scan-anzeige2").style.visibility ="visible";
    }

}
//changes the text when reading tags, just for optical reasons- can be discarded later
function platzhalter(value){
    if(value == 1){
        document.getElementById("dataPerson").innerHTML = "Max Mustermann";
    }
    if(value == 2){
        document.getElementById("dataCompare").innerHTML = "Kehrmaschine 42";
    }

}