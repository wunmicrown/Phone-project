const array = [];
const generate=()=>{
    if (typeof (localStorage.getItem("Voucher")) == 'string') {
        array = JSON.parse(localStorage.getItem("Voucher"));
    } else {
        array = []
    }
}
if (nocard.value == "" && selectcard.value == "Select Card" && amount.value == "Select Amount") {
    infogenerate.style.display = "block";
    infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the empty spaces <br>
            <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
} else if (nocard.value != "" && selectcard.value == "Select Card" && amount.value == "Select Amount") {
    infogenerate.style.display = "block";
    infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
            <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
    return;
}else if (nocard.value != "" && selectcard.value != "Select Card" && amount.value == "Select Amount") {
    infogenerate.style.display = "block";
    infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
            <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
    return;
}else if (nocard.value != "" && selectcard.value == "Select Card" && amount.value != "Select Amount") {
    infogenerate.style.display = "block";
    infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
            <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
    return;
} else if (nocard.value == "" && selectcard.value != "Select Card" && amount.value != "Select Amount") {
    infogenerate.style.display = "block";
    infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
            <button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
    return;
}