const rootDiv = document.getElementById("ENSLoadOut");

const loading = document.createElement("h1");
rootDiv.appendChild(loading);
loading.innerText = `LOADING ${clientID}`;

let found = ""

async function portalOpen() {
    console.log(clientID)
    try {
        const response = await fetch(`https://matrix.911-ens-services.com/client/${clientID}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Client Information:', data);
        found = data;
        // Handle the retrieved data as needed in your application
        const loaded = document.createElement("h2");
        rootDiv.appendChild(loaded);
        loaded.innerText = `CLIENT FOUND, SUBSCRIPTION LEVEL = ${found}`;
      } catch (error) {
        console.error('Error fetching client information:', error.message);
    }
}

portalOpen(clientID)