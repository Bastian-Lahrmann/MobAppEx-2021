if ("NDEFReader" in window) { 
    document.getElementById("ndefSupport").innerHTML = "NDEF-Reader is supported"
} else{
    document.getElementById("ndefSupport").innerHTML ='NDEF not supported'
}

function ausgabe(){
    document.getElementById("p1").innerHTML = "NOW Scanning ..."
}

let rfidOne;
let rfidTwo;

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
        console.log('done scanning')
    });

    reader.onreading = event => {
        console.log('Event:', event);
        rfidOne = event.serialNumber;
        document.getElementById("p2").innerHTML = rfidOne;
    };
});