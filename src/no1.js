// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, 
// dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika
// habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

export default function fishBash(data) {
    let result = ''
    for (let i = 1; i <= data; i++){
        if (i % 15 == 0) {
            result += 'fish bash'
        } else if (i % 5 == 0) {
            result += 'bash'
        } else if (i % 3 == 0) {
            result += 'fish'
        } else {
            result += i.toString()
        }
    }
    console.log(result)
    return result
}

fishBash(15)
