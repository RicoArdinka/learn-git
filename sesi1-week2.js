//MIN MAX Nilai Array
let nilai = [1,2,3,4,5];
let hasil = []; // untuk menampung hasil min max

let arrCollection = []; // untuk menampung seluruh hasil penjumlahan
for (let i = 0; i < nilai.length; i++){
    let total = 0 
    for ( let j = 0; j < nilai.length; j++){
        if(nilai[j] === nilai[i]) {continue;}
        total += nilai[j];
    }
    arrCollection.push(total);
}

hasil.push(Math.min.apply(null, arrCollection))
hasil.push(Math.max.apply(null, arrCollection))
console.log(arrCollection);
console.log(hasil);


// Task Bilangan Prima
const bilPrima = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
        if(angka % i == 0){
            pembagi++
        }
    }
    if(pembagi == 2){
        console.log("True")
    }else {
        console.log("False")
    }
}

bilPrima(3);