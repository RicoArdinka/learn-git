const data = [
    { 
        cluster: "A",
        facilities: { mosque: true, park: false, gym: true},

    },
    { 
        cluster: "B",
        facilities: { mosque: false, park: false, gym: true},

    },
    { 
        cluster: "C",
        facilities: { mosque: true, park: true, gym: false},

    },
    { 
        cluster: "D",
        facilities: { mosque: false, park: true, gym: false},

    },
    { 
        cluster: "E",
        facilities: { mosque: false, park: true, gym: true},

    },
];

function getApartmentFacility(key){
    let result = [];

    if(data){
        data.forEach(item => {
            if(item.facilities[key]){
                result.push(item.cluster);
            }
        });
    }
    return result;
}
let park = getApartmentFacility('park')
console.log(park);