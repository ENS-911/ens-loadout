const rootDiv = document.getElementById("ENSLoadOut");

const loading = document.createElement("h1");
rootDiv.appendChild(loading);
loading.innerText = `LOADING ${clientID}`;

async function portalOpen() {
    try {
        const response = await fetch(`http://ec2-3-143-219-120.us-east-2.compute.amazonaws.com/client/${clientID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Client Information:', data);
        // Handle the retrieved data as needed in your application
      } catch (error) {
        console.error('Error fetching client information:', error.message);
    }
}

portalOpen(clientID)