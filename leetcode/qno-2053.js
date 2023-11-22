function kthDistinctString(arr, k) {
    let distinctStrings = [];
    for (let string of arr) {
        if (!distinctStrings.includes(string)) {
            distinctStrings.push(string);
        }
    }
    if (distinctStrings.length >= k) {
        return distinctStrings[k-1];
    } else {
        return "";
    }
}