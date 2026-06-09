//should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
    if (typeof str !== "string") {
        return ""
    }
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}
module.exports = simplify
