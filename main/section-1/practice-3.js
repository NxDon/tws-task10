'use strict';


module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter((elem) => {
        return objectB.value.includes(elem);
    });
}
