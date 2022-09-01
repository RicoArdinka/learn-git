function hitungUangKembalian(total_pembelian,uang){
    output = {
        1000: 0,
        2000: 0,
        5000: 0,
        10000: 0,
        50000: 0,
    };

    if(total_pembelian > uang){
        return "Uang tidak cukup";
    }
    else if (total_pembelian == uang){
        return "Tidak ada kembalian uang pas"
    }

    let kembalian = uang - total_pembelian;
    for(const[key,value] of Object.entries(output).reverse()){
        if(key <= kembalian){
            console.log(key);
            const jumlahLembar = (kembalian - (kembalian % key)) / key;
            kembalian = kembalian % key;
            output[key] = jumlahLembar;
        }
        if (kembalian == 0){
            break;
        }
    }
    return output; 
}
console.log(hitungUangKembalian(262000,300000));