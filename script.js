function getWeather(){
    input = document.querySelector("input").value;
$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=0fb72d578d3fef25752255137659a4df`,
    success: function (data) {

        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".country").innerHTML =","+data.sys.country;
        document.querySelector(".temprature").innerHTML = data.main.temp;
        document.querySelector(".humd").innerHTML = data.main.humidity;
        document.querySelector(".descript").innerHTML = data.weather[0].main;

         let updateTime = new Date();
            let newUpdate = updateTime.toLocaleString();
            document.querySelector(".update-time").innerHTML =newUpdate + " Local Time";

        console.log("Success!!!")
    },
    error: function (error) {
         document.querySelector(".error").innerHTML = error.responseJSON.message;
    }
})
}