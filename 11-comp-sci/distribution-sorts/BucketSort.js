function bucketSort(items, bucketSize=5) {
  if (items.length === 0) { return items; }

  let min = Infinity, max = -Infinity;

  for (let i = 0; i < items.length; i++) {
    if (items[i] < min) {
      min = items[i];
    }

    if (items[i] > max) {
      max = items[i];
    }
  }

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // distribute items
  for (let i = 0; i < items.length; i++) {
    buckets[ Math.floor( (items[i] - min) / bucketSize) ].push( items[i] );
  }

  items = [];
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = classicSort( buckets[i] );
    items = items.concat( buckets[i] );
  }

  console.log( buckets );

  return items;
}

const classicSort = (array) => {
  return array.sort((a, b) => {
    return a - b;
  });
}

module.exports = bucketSort;
