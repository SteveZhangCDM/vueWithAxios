var app = new Vue({
  el: '#app',
  data: {
    city: '',
    weatherList: [],
  },
  methods: {
    searchWeather: function () {
      let that = this;
      axios
        .get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then(function (response) {
          console.log(response.data.data.forecast);
          that.weather = response.data.data.forecast;
        })
        .catch(function () {});
    },
    changeCity: function (city) {
      this.city = city;
      this.searchWeather();
    },
  },
});
