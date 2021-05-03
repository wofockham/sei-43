const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet.
    }

    const p = document.createElement('p'); // detached DOM node
    p.innerHTML = xhr.responseText;
    document.body.appendChild(p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia');
  xhr.send(); // asynchronous
};

// Attach the event handler to a DOM node
document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact is free.
