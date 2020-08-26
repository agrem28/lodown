'use strict';

// YOU KNOW WHAT TO DO //



/**
 * identity: takes a value and returns it unchanged
 * 
 * @param {*} value: single value that can be any datatype
 * 
 * @returns {*}: the input value unchanged
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: takes a value and returns the data type as a string
 * 
 * @param {*} value: single value of any datatype
 * 
 * @returns {string}: the datatype of the input value as a string
 */
 function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === "object") {
        if (!value) return "null";
        else return "object";
    }
    else return typeof value;
}
module.exports.typeOf = typeOf;

/**
 * first: takes an array and returns the first n elements of the 
 * array
 * 
 * @param {Array} array: the array from which elements are taken
 * @param {Number} n: the number of elements to be retrieved
 * 
 * @returns {Array, *}: the array of the first n elements; if no 
 * n is given, returns the first element in the array
 */
function first(array, n) {
    if (!Array.isArray(array)) return [];
    if (typeof n !== "number") return array[0];
    var newArray = [];
    for (var i = 0; i < n && i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
module.exports.first = first;

/**
 * last: takes an array and returns the last n elements of the
 * array
 * 
 * @param {Array} array: the array from which elements are taken
 * @param {Number} n: the number of elements to be retrieved
 * 
 * @returns {Array, *}: the array of the last n elements; if no
 * n is given, returns the last element in the array
*/
function last(array, n) {
    if (!Array.isArray(array)) return [];
    if (typeof n !== "number") return array[array.length-1];
    var newArray = [];
    for (var i = array.length-1; i > array.length-1-n && i > -1; i--) {
        newArray.unshift(array[i]);
    }
    return newArray;
}
module.exports.last = last;

/** 
 * indexOf: takes an array and a value and returns the index of the value
 * in the array; if the value is not found, returns -1
 * 
 * @param {Array} array: the array to be searched
 * @param {*} value: the value to be found
 * 
 * @returns {Number}: the index of the specified value
*/
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
}
module.exports.indexOf = indexOf;

/** 
 * contains: searches through an array and returns true if the given value
 * is in the array, otherwise, returns false
 * 
 * @param {Array} array: the array to be searched
 * @param {*} value: the value to be tested
 * 
 * @returns {Boolean}: true if array contains value, false if not
*/
function contains(array, value) {
    return array.includes(value);
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection with params (currentElement, index, array)
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 
* unique: given an array of values, deletes duplicate values and returns the 
* new array 
* 
* @param {Array} array: array of values
* 
* @return {Array}: original array with duplicates removed
*/
function unique(array) {
    return Array.from(new Set(array));
}
module.exports.unique = unique;

/** 
* filter: searches through an array and performs the callback function on
* each element; returns a new array that passes the test in the function
* 
* @param {Array} array: array to be looped through and tested
* @param {Function} action: function which tests each element with params
* (currentElement, index, array)
* 
* @return {Array}: array of values which tested true
*/
function filter(array, action) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (action(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.filter = filter;

/** 
* reject: searches through an array and performs the callback function on
* each element; returns a new array that fails the test in the function
* 
* @param {Array} array: array to be looped through and tested
* @param {Function} action: function which tests each element with params
* (currentElement, index, array)
* 
* @return {Array}: array of values which tested false
*/
function reject(array, action) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!action(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.reject = reject;

/** 
* partition: searches through an array and performs the callback function on
* each element; returns a new array with two sub-arrays: one for passing elements,
* and one for failing elements
* 
* @param {Array} array: array to be looped through and tested
* @param {Function} action: function which tests each element with params
* (currentElement, index, array)
* 
* @return {Array}: array with two sub-arrays: one with elements which tested true,
* and one with elements which tested false
*/
function partition(array, action) {
    let newArray = [[],[]];
    for (let i = 0; i < array.length; i++) {
        if (action(array[i], i, array)) {
            newArray[0].push(array[i]);
        } else newArray[1].push(array[i]);
    }
    return newArray;
}
module.exports.partition = partition;

/** 
* map: loops through a collection - either an array or an object - and applies
* the callback function to each element and pushes the new value to a new array;
* returns the new array
* 
* @param {Array or Object} collection: The collection over which to iterate.
* @param {Function} action: The Function to be applied to each value in the 
* collection with params (currentElement, index, array)
* 
* @return {Array}: array of values returned from callback function
*/
function map(collection, action) {
    let newArray = [];
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            newArray.push(action(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
            newArray.push(action(collection[key], key, collection));
        }
    }
    return newArray;
}
module.exports.map = map;

/** 
* pluck: takes an array of objects and a property and returns an array of values 
* whose key is the same as property
* 
* @param {Array} array: an array of objects 
* @param {String} property: key whose value is logged in the new array
* 
* @return {Array}: array of values from each object in <array> whose key is 
* <property>
*/
function pluck(array, property) {
    return map(array, function(e) {return e[property]});
}
module.exports.pluck = pluck;

/** 
* every: loops through a collection and passes the callback function on each element;
* if the callback function returns true for all values, return true; otherwise return 
* false; if no callback function is given, returns true if all values are truthy, 
* otherwise returns false
* 
* @param {Array or Object} collection: collection whose values are tested
* @param {Function} action: The Function to be applied to each value in the 
* collection with params (currentElement, index, array)
* 
* @return {Boolean}: returns true if all values pass the function test; otherwise
* returns false
*/
function every(collection, action) {
    if (!action) {
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i]) return false;
        }
        return true;
    }
    var result = map(collection, action);
    for (let i = 0; i < result.length; i++) {
        if (!result[i]) return false;
    }
    return true;
}
module.exports.every = every;

/** 
 * some: loops through a collection and passes the callback function on each element;
* if the callback function returns true for any value, return true; otherwise return 
* false; if no callback function is given, returns true if any value is truthy, 
* otherwise returns false
* 
* @param {Array or Object} collection: collection whose values are tested
* @param {Function} action: The Function to be applied to each value in the 
* collection with params (currentElement, index, array)
* 
* @return {Boolean}: returns true if any value passes the function test; otherwise
* returns false
*/
function some(collection, action) {
    if (!action) {
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i]) return false;
        }
        return true;
    }
    var result = map(collection, action);
    for (let i = 0; i < result.length; i++) {
        if (result[i]) return true;
    }
    return false;
}
module.exports.some = some;

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
* 
* reduce: loops over an array of values and passes the callback function to each
* element; previousResult argument is the return value of the previous call of the 
* function; the seed acts as previousResult for the first iteration; if no seed 
* is given, uses the first value of the array as the seed
* 
* @param {Array} array: array to be reduced
* @param {Function} action: the Function to be applied to each value in the
* array with the parameters (previousResult, currentElement, index)
* @param {*} seed: first value to be used in the first use of the action function;
* seed will have the same type as the return value
* 
* @return {*}: value of the final instance of the action function
*/
function reduce(array, action, seed) {
    index = 0;
    if (seed === undefined) {
        seed = array[0];
        var index = 1;
    }
    var result = action(seed, array[index], index);
    for (let i = index+1; i < array.length; i++) {
        result = action(result, array[i], i);
    }
    return result;
}
module.exports.reduce = reduce;

/** 
* extend: copies any number of objects' properties to a master object, overwriting 
* any properties whose keys are the same
* 
* @param {Object} arguments[0]: master object which is collecting all other objects'
* properties
* @param {Object} arguments[1...arguments.length-1]: objects to be copied to the 
* master object
* 
* @return {Object}: master object with all other objects' properties copied
*/
function extend() {
    for (let i = 1; i < arguments.length; i++) {
        for (let key in arguments[i]) {
            arguments[0][key] = arguments[i][key];
        }
    }
    return arguments[0];
}
module.exports.extend = extend;
