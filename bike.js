function loadBikes() {
    const bikes = getAllBikes();


}

async function getAllBikes() {
  try {
    const response = await fetch("http://localhost:3000/getAllBikes", {
      method: "GET",
    });
    const myJson = await response.json();
    console.log(myJson);
    return myJson;
  } catch (error)  {
    alert("error: " + error);
    return;
  }
}