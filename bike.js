
    const bikes = getAllBikes();


async function getAllBikes() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("localhost:3000/getAllBikes", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}