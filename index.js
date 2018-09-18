fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(testArr, alert) {
      for (let element in testArr){
        alert(testArr[element])
      }
      return testArr
    },

    map: function(testArr, callback) {

      let newArr = []

      for (let element in testArr) {
        newArr.push(callback(testArr[element]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      let result = acc!== undefined? acc : 0 //if result equ accumulator is NOT undefinded question (or defined) then give me accumulator else give me zero
      for (let element in collection) {
        // debugger
        result = callback(result, collection[element])
      }
      return result
    },

    find: function(collection, predicate) {
      // debugger
      for (element of collection) {
      if (!!predicate(element)) {
        return element
      }
    }
    },

    filter: function(collection, predicate) {
      let result = []

      for (element of collection) {
        if (!!predicate(element)){
          result.push(element)
        }
      }
      return result
    },

    size: function(collection) {

      let counter = 0;

      if (!Array.isArray(collection)) {
        for(let key in collection) {
          // debugger
          counter++
        }
      } else {
          return collection.length
        }
        return counter
      },

    first: function(array, n) {
      if (n !== undefined) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (n !== undefined) {
        return array.slice(-(n))
      } else {
        return array[array.length - 1]
      }
    },

    compact: function(array) {
      let result = []

      for(let element of array) {
        if (!!element) {
          result.push(element)
        } else {
          continue; // continue just skips to next iteration. continue is an action needed in an if..else
        }
      }
      return result
    },

    sortBy: function(array, callback) {
      // debugger
      let arr = array.slice() //variable is being split
      return arr.sort(function(a, b){ //sorting array of strings (.sort only sorts strings)...need to pass in another function with a representing small integer and b representing large integer
        return callback(a) - callback(b) //the return gives an range of small (a) to large (b) and tell it to sort
      })
    },

    flatten: function(array, shallow = false) {
      for(let element of array) {

      }

    }



  }
})()

fi.libraryMethod()
