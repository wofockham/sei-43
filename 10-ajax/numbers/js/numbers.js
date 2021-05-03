const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet.
    }

    // Convert the text from the API into a JS data structure.
    const data = JSON.parse(xhr.responseText);

    const p = document.createElement('p'); // detached DOM node
    p.innerHTML = data.text;
    document.body.appendChild(p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // asynchronous
};

// Attach the event handler to a DOM node
document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact is free.
