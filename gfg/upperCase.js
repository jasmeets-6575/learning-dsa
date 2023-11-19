function uppercase(str) {
    let s = str.split(" ").map(st => {return st.charAt(0).toUpperCase() + st.slice(1)}).join(" ")
    return s
}

console.log(uppercase("i love programming"));