const countSameElements = require("../section-2/practice-2")
const createUpdatedCollections = require("./practice-2")

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let newArr = countSameElements(collectionA);
    return createUpdatedCollections(newArr,objectB);
}

