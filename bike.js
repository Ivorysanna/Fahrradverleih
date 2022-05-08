const showAvailableCollections = async () => {
    const availableBikes = await getAvailableBikes();
    if (availableBikes == null) {
        return;
    }

    const collectionsContainer = document.getElementById("bicycles-container");

    /* Create Collections Container Structure */
    availableBikes.forEach((eachBike) => {
        let newHtmlString = `
        <div class="col">
            <div class="card">
                <img src="http://placekitten.com/400/200" class="card-img-top" alt="Katze :)">
                <div class="card-body">
                    <h5 class="card-title">${eachBike.Marke}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `;

        collectionsContainer.insertAdjacentHTML("beforeend", newHtmlString);
    });
};
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

async function getAvailableBikes() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        status: ["0"],
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch("http://localhost:3000/getBikesByFilterOptions", requestOptions)
        .then((response) => response.json())
        .catch((error) => console.log("error", error));
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

showAvailableCollections();
