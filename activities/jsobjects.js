var deepEqual =function (obj1, obj2){
    if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)){
        if (obj1 === obj2){
            return true;
        }
        if (Object.keys(obj1).length != Object.keys(obj2).length){
            return false;
        }
        for (var prop in obj1){
            if (obj2.hasOwnProperty(prop)){
                if (!deepEqual(obj1[prop], obj2[prop])){
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    else if (obj1 != obj2){
        return false;
    }
    else{
        return true;
    }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
