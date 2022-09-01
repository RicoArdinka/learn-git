function sanitizeBody(object, filter){
    let temp = {};
    Object.keys(object).forEach(key => {
        if(filter.includes(key)){
            temp[key] = object[key];
        }
    })

    return temp;
}

let result = sanitizeBody({username:'andi',password:'andi123',lastname:'siahaan'},['username','password']);
console.log(result);