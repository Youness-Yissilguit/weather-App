window.addEventListener('load', (e) => {
  let long;
  let lat;
  let key = 'cfd9069e28faf41a5b030255005a22d8';
  let key2 = '82005d27a116c2880c8f0fcb866998a0'
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      lat = position.coords.latitude;
      long = position.coords.longitude;

      //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=cfd9069e28faf41a5b030255005a22d8`;
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cfd9069e28faf41a5b030255005a22d8`;
      console.log(api);

      fetch(api)
        .then(result => {
          //return result.json();
          let data = result.json();
          console.log(data);
          return data;
        })
        .then(data => {
          console.log(data);
          let location = document.querySelector('.location h1 .h1');
          let country = document.querySelector('.location h1 .span');
          let degree = document.querySelector('.t-degree h2');
          let description = document.querySelector('.t-description');
          let iconWeather = document.querySelector('.location span img')

          //dislplay the display the weather
          location.textContent = data.name;
          country.textContent = data.sys.country;
          degree.textContent = Math.floor(data.main.temp - 273);
          description.textContent = data.weather[0].description;
          iconWeather.src = `icons/${data.weather[0].icon}.png`;
        })

    })
  } else{
    window.alert("Browser doesn't Support Geolocation");
  }
  //display the Date
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[d.getDay()];
  const date = d.getDate();
  const years = d.getFullYear();
  console.log(day, date, years);
  document.getElementById('date').textContent = `${day} ${date}, ${years}`
});
