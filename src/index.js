// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    {
        propertyName:''
    }
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        set: function (newValue) {
            propertyName = newValue
        },
        get: function () {
            return propertyName;
        }
    });
    return propertyName
};

const createProtoMagicObject = () => {
    let object = function a() {
    };
    object.__proto__ = object.prototype;
    return object
};


var value = [];
const incrementor = () => {
    value.push(1);
    return incrementor;
};
incrementor.valueOf = function () {
    return value.length;
};

var valueAsync = [];
const asyncIncrementor = () => {
    return new Promise(resolve =>{
        valueAsync.push(1);
        return resolve(valueAsync.length)
    });

};



const createIncrementer = () => {
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {
   return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, 1000);

    })
};

var counter = function (prop) {
    var count = 0;
    for(var i in prop) {
        if(this.hasOwnProperty(i))
            count = count + 1;
    }
    return count;
};

const getDeepPropertiesCount = (prop) => {
};

const createSerializedObject = () => {
    var res = new Boolean(true);
    return res
};
const toBuffer = () => {
};
const sortByProto = (value) => {
    return value.sort((a, b)  => a.__proto__ - b.__proto__)
};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
