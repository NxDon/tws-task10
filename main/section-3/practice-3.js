const countSameElements = require("../section-2/practice-1")
const createUpdatedCollections = require("./practice-2")

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let newArr = countSameElements(collectionA);
    let summarizedArray = createUpdatedCollections(newArr,objectB);
    return summarizedArray
}

