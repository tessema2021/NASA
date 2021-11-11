import { settings } from "./settings.js";


const btn = document.querySelector(".btn")


btn.addEventListener("click", () => {
    sendApiRequest()
})

async function sendApiRequest() {
    //let API_Key = "ZgMa88aepXb90U6kQUSMc9jNMNfo8dBevhxqSBVy"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${settings}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}
function useApiData(data) {
    document.querySelector(".display").innerHTML += `<h1>${data.copyright}</h1>
    <h2>${data.date}</h2>
    <h3>${data.explanation}</h3>
    <img src="${data.url}">`
}