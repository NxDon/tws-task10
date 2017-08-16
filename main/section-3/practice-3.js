const countSameElements = require("../section-2/practice-1")
const createUpdatedCollections = require("./practice-2")
//此任务代码只需调用之前编写的两个模块就可以完成，为了练习模块加载（其实是懒）,故不把代码粘贴过来而采用了模块引入
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let newArr = countSameElements(collectionA);
    return  createUpdatedCollections(newArr,objectB);

}

