const searchTemperature = () =>{
    const city = document.getElementById('input-field').value;

    const API_KEY = `cab2781aabf24366135fab143665e119`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
   fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));

};
const setInnerText =(id,text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature =>{
    setInnerText('city-name',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);

    //set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgTag = document.getElementById('weather-icon').setAttribute('src',url);
}