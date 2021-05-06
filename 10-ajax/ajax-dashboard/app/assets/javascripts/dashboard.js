$(document).ready(function () {
  // setInterval(function () {
  //   $.get('/api/brother').done(function (name) {
  //     $('#brother').text(name);
  //   });
  // }, 4000);
  //
  // setInterval(function () {
  //   $.get('/api/time').done(function (t) {
  //     $('#time').text(t);
  //   });
  // }, 1000);
  //
  // setInterval(function () {
  //   $.get('/api/uptime').done(function (u) {
  //     $('#uptime').text(u);
  //   });
  // }, 6000);

  setInterval(function () {
    $.getJSON('/api/info').done(function (data) {
      $('#brother').text(data.brother);
      $('#time').text(data.time);
      $('#uptime').text(data.uptime);
    });
  }, 2000);

});
