const makeMadLib = function () {
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const name = $('#person').val();

  $('#story').text(`${ name } really likes ${ adjective } ${ noun }.`);
};

$('#lib-button').on('click', makeMadLib);

// const button = document.getElementById('lib-button');
//
// const makeMadLib = function () {
//   const noun = document.getElementById('noun').value;
//   const adjective = document.getElementById('adjective').value;
//   const name = document.getElementById('person').value;
//
//   const story = `${ name } really likes ${ adjective } ${ noun }.`;
//
//   document.getElementById('story').innerText = story;
// };
//
// button.addEventListener('click', makeMadLib);
