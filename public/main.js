$(document).ready(function() {
  /* openWeather = "http://api.openweathermap.org/data/2.5/weather?id=4341513&APPID=71cfd3707f340e2292aac7c5274f16e2", */

  // openWeather = "";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var openWeather =
        "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude +
        "&APPID=71cfd3707f340e2292aac7c5274f16e2"
      console.log(openWeather)
      getLocation(openWeather)
    })
  }

  // This code used to return the city of the user, but IP address locations can be inaccurate (i.e., Saying I was in Tallahassee, FL when I'm in Shreveport, LA)
  //
  //
  // $.getJSON("http://ipinfo.io/json?", function(json) {
  //   var openWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + json.city + "," + json.country +
  //     "&APPID=71cfd3707f340e2292aac7c5274f16e2";
  //   //console.log(openWeather);
  //   getLocation(openWeather);
  // });
})

$("#temp").click(function() {
  var temp = $("#temp")
  if (temp.html() == tempF + "°F") {
    temp.html(tempC + "°C")
  } else {
    temp.html(tempF + "°F")
  }
})

function getLocation(openWeather) {
  // eslint-disable-next-line no-undef
  $.getJSON(openWeather, function(json) {
    // console.log(json);
    // eslint-disable-next-line no-undef
    temp = +json.main.temp
    // eslint-disable-next-line no-undef
    tempF = Math.round(temp * (9 / 5) - 459.67)
    // eslint-disable-next-line no-undef
    tempC = Math.round(temp - 273.15)
    }

    $("#temp").html(tempF + "°F")
    $("#city").html(json.name + ", " + json.sys.country)
  })
}
