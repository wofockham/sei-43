const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet.
    }

    // Convert the JSON text from the API into a real JS object.
    const data = JSON.parse(xhr.responseText);

    const p = document.createElement('p'); // detached DOM node
    p.innerHTML = data.text;
    document.body.appendChild(p); // attach the DOM node
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // asynchronous
};

// Attach the event handler to a DOM node
document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact is free.
