// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

export function palindrom(str) {
    str = str.toLowerCase()
    let temp = ''
    for (let i = str.length - 1; i >= 0; i--){
        temp += str[i]
    }
    if (str === temp) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

palindrom('Kasur ini rusak')