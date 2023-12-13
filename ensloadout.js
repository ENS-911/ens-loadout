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

        function loadExternalScript() {
            // Create a script element
            const script = document.createElement('script');
          
            // Set the source URL of the external JavaScript file
            script.src = `https://ensloadout.911emergensee.com/ens-packages/${found}.js`;
          
            // Set any attributes if needed, such as async or defer
            // script.async = true;
          
            // Append the script element to the document's head
            document.head.appendChild(script);
          
            // You can optionally add an event listener to handle the script's onload or onerror events
            script.onload = function () {
              console.log('External script loaded successfully');
              // Perform actions after the script is loaded
            };
          
            script.onerror = function () {
              console.error('Error loading external script');
              // Handle error if the script fails to load
            };
          }
          
          // Call the function when needed
          loadExternalScript();
      } catch (error) {
        console.error('Error fetching client information:', error.message);
    }
}

portalOpen(clientID)