let weather = {
    'apiKey': '9a6bdb2a44bc588e8cc941bc4d93cf72',
}

/* 
san diego -- imperial system
https://api.openweathermap.org/data/2.5/weather?lat=32.715736&lon=-117.161087&units=imperial&appid=9a6bdb2a44bc588e8cc941bc4d93cf72
san diego -- metric system
https://api.openweathermap.org/data/2.5/weather?lat=32.715736&lon=-117.161087&units=metric&appid=9a6bdb2a44bc588e8cc941bc4d93cf72
*/




// i.e. GEOCODING
/* FROM NAME
    http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

    FROM ZIP / POST CODE
    http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}

*/


// current weather
/*
    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
*/