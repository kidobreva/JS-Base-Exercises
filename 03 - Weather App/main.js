
$('form').submit((e) => {
    e.preventDefault();
    let city = $('.search').val();
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=d1c92bde7e1ec8a845352f7c15fde8d3'

    $.ajax({
        url: url,
        success: getData,
        error: displayError
    })

    $('#result').empty();
    function getData(res) { 
        console.log(res);       
        for (let i = 0; i < res.list.length; i += 8) {
            let day = $('<div>').addClass('days').attr('id', 'div_' + (i + 1));
            let cityName = $('<h3>').html(res.city.name + ' ' + res.city.country);
            let date = $('<p>').html((res.list[i].dt_txt).slice(0, 10));
            const degreeIcon = $('<img src="https://image.flaticon.com/icons/png/512/88/88692.png">').addClass('degreeIcon');
            let currentTemp = $('<p>').html(Math.round(res.list[i].main.temp)).append(degreeIcon);
            let weatherDescription = $('<p>').html(res.list[i].weather[0].description);
            let icon = $('<img src="http://openweathermap.org/img/w/' + res.list[i].weather[0].icon + '.png"/>');

            day.append(cityName, date, currentTemp, weatherDescription, icon);
            $('#result').append(day);

            let addData = $('<div>').addClass('addData');
            let minTemp = $('<p>').html('Min: ' + Math.round(res.list[i].main.temp_min));
            let maxTemp = $('<p>').html('Max: ' + Math.round(res.list[i].main.temp_max));
            let tempIcon = $('<img src="https://image.flaticon.com/icons/png/512/88/88692.png">').addClass('degreeIcon');
            tempIcon.appendTo(maxTemp, minTemp);
            let clouds = $('<p>').html('Clouds: ' + res.list[i].clouds.all + '%');
            let wind = $('<p>').html('Wind: ' + res.list[i].wind.speed);
            let humidity = $('<p>').html('Humidity: ' + res.list[i].main.humidity + '%');
            let pressure = $('<p>').html('Pressure: ' + res.list[i].main.pressure);

            addData.append(minTemp, maxTemp, clouds, wind, humidity, pressure);
            day.append(addData);

            addData.hide();
        }     
        
        $('.days').click(function () {
           $(this).find($('.addData')).toggle();
        })
    }    

    function displayError(err) {
        console.log(err);
    }
})



