function findHighestProfit(arr = arr){
    let highest = 0;
    let awalNaik = arr[0];
    for (let index = 1; index < arr.length;index++){
        const[angkaSekarang, angkaSelanjutnya] = [arr[index],arr[index + 1]];
        if (angkaSekarang >= awalNaik && angkaSelanjutnya > angkaSekarang) continue;
        if(angkaSekarang - awalNaik > highest){
            highest = angkaSekarang - awalNaik;
            awalNaik = angkaSelanjutnya;
        }
    }
    return highest || "Tidak bisa profit hari ini";
}
console.log(findHighestProfit([33, 29, 11, 3]))