
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
        for (let i = 0; i < res.list.length; i += 8) {
            let day = $('<div>').addClass('days');
            let cityName = $('<h3>').html(res.city.name + ' ' + res.city.country);
            let date = $('<p>').html((res.list[i].dt_txt).slice(0, 10));
            let currentTemp = $('<p>').html(Math.round(res.list[i].main.temp));
            let degreeIcon = $('<img src="https://image.flaticon.com/icons/png/512/88/88692.png">').addClass('degreeIcon');
            currentTemp.append(degreeIcon);
            let weatherDescription = $('<p>').html(res.list[i].weather[0].description);
            let icon = $('<img src="http://openweathermap.org/img/w/' + res.list[i].weather[0].icon + '.png"/>');

            day.append(cityName, date, currentTemp, weatherDescription, icon);
            $('#result').append(day);
        }
        
    }

    function displayError(err) {
        console.log(err);
    }
})



