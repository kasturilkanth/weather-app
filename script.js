function func(){
let input=document.getElementById('input-box').value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=103dac38b79616e18a19b29baac046cf`)
.then(response=>response.json())
.then(data=>{
document.getElementById('place').innerHTML=`${data.name}`;
document.getElementById('temp').innerHTML=`Temp:${data.main.temp}°C`;
document.getElementById('temp-max').innerHTML=`Max-Temp:${data.main.temp_max}°C`;
document.getElementById('temp-min').innerHTML=`Min-Temp:${data.main.temp_min}°C`;
})
}
