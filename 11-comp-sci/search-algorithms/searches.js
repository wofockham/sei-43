function binarySearch (haystack, needle){
  let start = 0;
  let end = haystack.length - 1;
  let midpoint = Math.floor( (start + end) / 2 ); // there is a bug on this line.

  // not needle is not found AND still have haystack to consider
  while (haystack[midpoint] !== needle && start < end) {
    if (needle < haystack[midpoint]) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
    midpoint = Math.floor( (start + end) / 2);
  }

  return (haystack[midpoint] === needle) ? midpoint : -1;
}

function recursiveBinarySearch(haystack,
                               needle,
                               start=0,
                               end=haystack.length-1,
                               midpoint=Math.floor((start+end)/2)) {
  if (haystack[midpoint] === needle) {
    return midpoint; // base case: success
  }

  if (start >= end) {
    return -1; // base case: failure
  }

  if (needle > haystack[midpoint]) {
    start = midpoint + 1;
  } else {
    end = midpoint - 1;
  }

  return recursiveBinarySearch(haystack, needle, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
