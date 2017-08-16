'use strict';


function hasValue(collection, value) {
    return collection.some((obj) => {
        return obj.key === value;
    })
}

module.exports = function collectSameElements(collectionA, objectB) {
    return objectB.value.filter((elem) => {
        return hasValue(collectionA, elem);
    })
}
