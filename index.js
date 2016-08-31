function iterativeLog(array) {
  array.forEach((item, index, array) => {
    console.log(`${index}: ${item}`)
  })
}

function iterate(callback) {
  array = [ "hello","my", "name", "is", "jasper"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
