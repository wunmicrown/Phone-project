const array = [];
const generate=()=>{
    if (typeof (localStorage.getItem("Voucher")) == 'string') {
        array = JSON.parse(localStorage.getItem("Voucher"));
    } else {
        array = []
    }
}