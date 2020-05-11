var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
});

document.querySelector('.get').onclick = function () {
  axios.get('https://autumnfish.cn/api/joke/list?num=6').then(
    function (response) {
      console.log(response);
    },
    function (err) {
      console.log(err);
    }
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
