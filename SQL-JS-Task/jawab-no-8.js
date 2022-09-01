const transaksi = [
    {id: 1, totalPrice: 652000, day: "senin"},
    {id: 2, totalPrice: 254000, day: "selasa"},
    {id: 3, totalPrice: 214000, day: "rabu"},
    {id: 4, totalPrice: 664000, day: "kamis"},
    {id: 5, totalPrice: 144000, day: "minggu"},
    {id: 6, totalPrice: 422000, day: "sabtu"},
    {id: 7, totalPrice: 263000, day: "minggu"},
    {id: 8, totalPrice: 655000, day: "rabu"},
    {id: 9, totalPrice: 426000, day: "selasa"},
    {id: 10, totalPrice: 512000, day: "kamis"},
];

let result = transaksi.reduce((item, next) => {
    let key = next.day;

    if(!item[key]){
        item[key] = next.totalPrice;
    }else {
        item[key] = item[key] + next.totalPrice;
    }
    return item;
},[])
console.log(result);