const showAvailableCollections = async () => {
    const availableCollectionsJson = await getAvailableCollections();
    if (availableCollectionsJson == null) {
        return;
    }

    const getAvailableCollections = async () => {
        try {
            const response = await fetch("http://localhost:3000/getAllBikes", {
                method: "GET",
            });
            const myJson = await response.json();
            return myJson;
        } catch (error) {
            alert("error: " + error);
            return;
        }
    };

    const collectionsContainer = document.getElementById("bicycles-container");

    /* Create Collections Container Structure */
    for (let i = 0; i < availableCollectionsJson.length; i++) {
        // Collection Div
        const collection = document.createElement("div");
        collection.setAttribute("class", "collection");

        // Collection Name
        const collectionName = document.createElement("h3");
        collectionName.innerHTML = availableCollectionsJson[i].Marke;
        collection.appendChild(collectionName);

        // Collection Systems
        const systems = document.createElement("h4");
        systems.innerHTML = "Collection Systems:";
        collection.appendChild(systems);

        async function getAllBikes() {
            try {
                const response = await fetch("http://localhost:3000/getAllBikes", {
                    method: "GET",
                });
                const myJson = await response.json();
                console.log(myJson);
                return myJson;
            } catch (error) {
                console.log(error);
                return;
            }
        }
    }
};
