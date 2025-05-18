const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key="80a0e23f33e1e60ad0cdb717e8d5d324";
async function weather(city) {
    const response=await fetch(URL + city + `&appid=${key}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{

    var data =await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        icon.src="images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        icon.src="images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        icon.src="images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        icon.src="images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        icon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";

    }
}


const icon=document.querySelector(".w-icon");
const search=document.querySelector(".search input");
const btn=document.querySelector(".search button");

btn.addEventListener('click', ()=>{
    weather(search.value);
})
