var app = new Vue({
  el: '#app',
  data: {
    joke: 'That is a funny joke',
  },
  methods: {
    getJoke: function () {
      let that = this;
      axios.get('https://autumnfish.cn/api/joke').then(
        function (response) {
          console.log(response.data);
          that.joke = response.data;
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },
});

document.querySelector('.get').onclick = function () {
  let that = this;
  axios.get('https://autumnfish.cn/api/joke/list?num=6').then(
    function (response) {
      console.log(response.data);
      that.joke = response.data;
    },
    function (err) {}
  );
};

document.querySelector('.post').onclick = function () {
  axios
    .post('https://autumnfish.cn/api/user/reg', { username: 'HYAKUYA' })
    .then(
      function (response) {
        console.log(response);
      },
      function (err) {
        console.log(err);
      }
    );
};
