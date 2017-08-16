/*自己实现map、reduce两个高阶函数*/


Array.prototype.mymap = function (callback, thisArg = this) {
    var arr = this.slice(0);//深拷贝this,避免修改原数组
    arr.forEach(function (elem, index, array) {
        array[index] = callback(elem, index, array);
    }.bind(thisArg));
    return arr;
};


//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
Array.prototype.myreduce = function (callback, initialValue = null) {
    if (this.length === 0 && !initialValue) {//根据标准reduce的行为，空数组调用reduce时没有设置初始值将会报错。
        throw TypeError('Reduce of empty array with no initial value');
    } else if (this.length === 0 && initialValue) {
        return initialValue;
    } else if (this.length !== 0 && initialValue) {
        for (let i = 0; i < this.length; i++) {
            var pre = pos || initialValue;
            var pos = callback(pre, this[i], i, this);
        }
        return pos;
    } else {
        for (let i = 0; i < this.length; i++) {
            var pre = pos || this[i];
            var pos = callback(pre, this[i + 1], i, this);
        }
        return pre;
    }
};

