//Shows on screen wheter the device supports web nfc, does not mean device has nfc hardware
if ("NDEFReader" in window) { 
    document.getElementById("ndefSupport").innerHTML = "Web-NFC is supported"
} else{
    document.getElementById("ndefSupport").innerHTML ='Web-NFC is NOT supported'
}

function ausgabe(){
    document.getElementById("p1").innerHTML = "NOW Scanning ..."
}

let eventID;
let rfidOne;
let rfidTwo;

// NFC-reader snippet taken from "https://gerritniezen.com/getting-started-with-web-nfc"
document.addEventListener('DOMContentLoaded', event => {
    const scanButton = document.getElementById('scan');
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
    } else if(value != rfidOne) {
        rfidTwo = value;
        console.log(rfidTwo+' stored as RFID_TWO');
        document.getElementById("idCompare").innerHTML = rfidTwo;
        platzhalter(2);
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