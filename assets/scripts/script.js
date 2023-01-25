let table = [""];
let index = 0;
const characters = ["0","1","2","3","4","5","6","7","8","9","0","+","-","*","=","/",".",",","Enter","Backspace","Delete"];
const display = document.querySelector("#display")

document.addEventListener("keyup", (event) => {
    pushKey(event.key)
})
function pushKey(nbr) {
    if (characters.indexOf(nbr) !== -1) {
        if (nbr == "Enter" || nbr == "=") {
            calcul()
        } else if (nbr == "Backspace") {
            table[index] = ""
            display.innerHTML = table[index]
        } else if (nbr == "Delete") {
            table.length = 1
            table[0] = ""
            display.innerHTML = table[index]
        } else if (isNaN(parseInt(nbr)) == true && nbr != "." && nbr != ",") {
            index++
            table.push(nbr)
            index++
            table[index] = ""
            display.innerHTML = table[index]
        } else {
            if (nbr == ",") {
                table[index] += "."
            } else {
                table[index] += (nbr)
            }
            display.innerHTML = table[index]
        }
    }
}
function calcul() {
    for (let i = 0; i < table.length; i++) {
        if (table[i] == "/") {
            table[i - 1] = (parseFloat(table[i - 1]) / parseFloat(table[i + 1])).toString()
            table.splice(i, 2)
            i--
        }
        if (table[i] == "*") {
            table[i - 1] = (parseFloat(table[i - 1]) * parseFloat(table[i + 1])).toString()
            table.splice(i, 2)
            i--
        }
    }
    for (let i = 0; i < table.length; i++) {
        if (table[i] == "+") {
            table[i - 1] = (parseFloat(table[i - 1]) + parseFloat(table[i + 1])).toString()
            table.splice(i, 2)
            i--
        }
        if (table[i] == "-") {
            table[i - 1] = (parseFloat(table[i - 1]) - parseFloat(table[i + 1])).toString()
            table.splice(i, 2)
            i--
        }
    }
    display.innerHTML = table[0]
    index = table.length - 1;
}