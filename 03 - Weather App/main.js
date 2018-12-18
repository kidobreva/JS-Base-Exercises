
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
                let day = $('<div>').addClass('days')
                    .append('<h3>' + res.city.name + ' ' + res.city.country + '</h3>')
                    .append('<p>' + (res.list[i].dt_txt).slice(0, 10) + '</p>')
                    .append('<p>' + Math.round(res.list[i].main.temp)
                                  + '<img class="degreeIcon" src="https://image.flaticon.com/icons/png/512/88/88692.png">'
                                  + '</p>')
                    .append('<p>' + res.list[i].weather[0].description + '</p>')
                    .append('<img src="http://openweathermap.org/img/w/' + res.list[i].weather[0].icon + '.png"/>');
                
                $('#result').append(day);

                let addData = $('<div>').addClass('addData')
                    .append('<p>Min: ' + Math.round(res.list[i].main.temp_min)
                                    + '<img class="degreeIcon" src="https://image.flaticon.com/icons/png/512/88/88692.png">'
                                    + '</p>')
                    .append('<p>Max: ' + Math.round(res.list[i].main.temp_max)
                                    + '<img class="degreeIcon" src="https://image.flaticon.com/icons/png/512/88/88692.png">'
                                    + '</p>')
                    .append('<p>Clouds: ' + res.list[i].clouds.all + '%' + '</p>')
                    .append('<p>Wind: ' + res.list[i].wind.speed + ' m/s' + '</p>')
                    .append('<p>Humidity: ' + res.list[i].main.humidity + '%' + '</p>')
                    .append('<p>Pressure: ' + res.list[i].main.pressure + ' hPa' + '</p>');
                
                day.append(addData);

                addData.hide();
            }     
        
        $('.days').click(function () {
            if($(this).hasClass('shown')) {
                $(this).css('height', '300px');
                $(this).removeClass('shown');                
            } else {
                $(this).css('height', '600px');
                $(this).addClass('shown'); 
            }
            
            $(this).find($('.addData')).toggle();
        })
    }    

    function displayError(err) {
        console.log(err);
    }
})



