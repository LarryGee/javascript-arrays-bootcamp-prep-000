var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
  ]
  
function addElementToBeginningOfArray(array, element) {
  var new_array = [element, array]
  new_array.unshift("element")
}

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push()
}