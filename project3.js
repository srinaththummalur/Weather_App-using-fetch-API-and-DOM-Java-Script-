const weather_inputed=document.querySelector(".input_field input")

const temperature_message=document.querySelector(".temperature-showcase")
const temperatureFeelslike_message=document.querySelector(".temperaturefeelslike-showcase")
const weather_message=document.querySelector(".wheather-showcase")

const humidity_message=document.querySelector(".humidity-showcase")
const wind_speed_message=document.querySelector(".wind-showcase")
const pressure_message=document.querySelector(".pressure-showcase")

const visibility_message=document.querySelector(".visibility-showcase")
const sunrise_message=document.querySelector(".sunrise-showcase")
const sunset_message=document.querySelector(".sunset-showcase")
const uv_message=document.querySelector(".uv-showcase")

const button_click=document.querySelector(".button-field button")
const date_message=document.querySelector(".date")
const time_message=document.querySelector(".time")

const getdata=async(event)=>{
    if(weather_inputed.value===""){
        alert("City not Entered");
        return;
    }

const BASE_URL=`https://wttr.in/${weather_inputed.value}?format=j1`

let response=await fetch(BASE_URL);

let data=await response.json();

temperature_message.innerHTML="Temperature°C:<br><br>"+data.current_condition[0].temp_C+"°C";
temperatureFeelslike_message.innerHTML=" °C feels like:<br><br>"+data.current_condition[0].FeelsLikeC+"°C";
weather_message.innerHTML="Weather:<br>"+data.current_condition[0].weatherDesc[0].value;
humidity_message.innerHTML="Humidity:<br><br>"+data.current_condition[0].humidity+"%";
wind_speed_message.innerHTML="Wind speed:<br><br>"+data.weather[0].hourly[0].windspeedKmph+"kmph";
pressure_message.innerHTML="Pressure:<br><br>"+data.weather[0].hourly[0].pressure+"mb";
visibility_message.innerHTML="Visibility:<br><br>"+data.current_condition[0].visibility;
sunrise_message.innerHTML="Sunrise time<br><br>"+data.weather[0].astronomy[0].sunrise;
sunset_message.innerHTML="Sunset time:<br><br>"+data.weather[0].astronomy[0].sunset;
uv_message.innerHTML="UV Index:<br><br>"+data.current_condition[0].uvIndex;
const temp = Number(data.current_condition[0].temp_C);

if(temp <= 0){
document.body.style.backgroundImage =
"url('https://images.unsplash.com/photo-1483664852095-d6cc6870702d')";
}

else if(temp <= 10){
document.body.style.backgroundImage =
"url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1950&q=80')";
}

else if(temp <= 20){
document.body.style.backgroundImage =
"url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e')";
}

else if(temp <= 30){
document.body.style.backgroundImage =
"url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')";
}

else if(temp <= 40){
document.body.style.backgroundImage =
"url('https://images.unsplash.com/photo-1509316785289-025f5b846b35')";
}

else{
document.body.style.backgroundImage =
"url('https://images.unsplash.com/photo-1473580044384-7ba9967e16a0')";
}

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
const elements=document.querySelectorAll(".elements div")
elements.forEach((cards)=>{
    cards.style.backdropFilter = "blur(20px)";
    cards.style.background = "rgba(255,255,255,0.1)";
    cards.style.borderRadius = "10px";
});
}

button_click.addEventListener("click",(event)=>{
    event.preventDefault();
    getdata();
})
  setInterval(function showdateandtime(){
        const now =new Date();
        let date=now.toLocaleDateString();
        let time=now.toLocaleTimeString();
        date_message.innerText=date;
        time_message.innerText=time;
},1000);
