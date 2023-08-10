const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apikey ="tsYuOrzeGUQSWREov/Cikg==lRARMz34yAmcuf7s";

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apikey,
    },
};

const  apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"

async function getjoke(){

    // if network is not available
    try{

    jokeEl.innerText = "Updating...";
    btnEl.ariaDisabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch( apiURL, options);
    const data = await response.json();

    btnEl.ariaDisabled = false;
    btnEl.innerText = "TELL ME JOKE";
    
    jokeEl.innerText = data[0].joke;
    } catch (error){
        // alert('Network Error');
        jokeEl.innerText = "An error happen, try again";
        btnEl.ariaDisabled = false;
        btnEl.innerText = "TELL ME JOKE";

        console.log(error);
    }
  
}


btnEl.addEventListener("click", getjoke)