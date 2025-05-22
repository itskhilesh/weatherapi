let dates = document.querySelector(".date");
let icons = document.querySelector(".icon");
let infotexts = document.querySelector(".maintext");
let temps = document.querySelector(".temp");
let feelslikes = document.querySelector(".feelslikee");
let windspeeds = document.querySelector(".windspeedd");
let humiditys = document.querySelector(".humidityy");


async function getdata(q) {
    link = "https://api.weatherapi.com/v1/current.json?key=4d3a848d50d8451d85a81726251205&q=" +q+ "&aqi=no";
    let res = await fetch(link);
    console.log(res)
    let data = await res.json();
    console.log(data);
    dates.innerHTML = "Last Update: "+data.current.last_updated;
    icons.setAttribute("src", data.current.condition.icon);
    infotexts.innerHTML = data.current.condition.text;
    temps.innerHTML = data.current.temp_c + "°C";
    feelslikes.innerHTML = data.current.feelslike_c + "°C";
    windspeeds.innerHTML = data.current.wind_kph + "kph";
    humiditys.innerHTML = data.current.humidity;

}
document.getElementById("myButton").addEventListener("click", function() {
    var inputText = document.getElementById("myInput").value;
    getdata(inputText);
});

// getdata("sambalpur")
