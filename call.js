if (localStorage.accountbal == null) {
    localStorage.setItem("accountbal", "");
}
var allBalance = { mtnbal: 0, airtelbal: 0, global: 0, mobile: 0 };

if (localStorage.accountbal == "") {
    localStorage.setItem("accountbal", JSON.stringify(allBalance));
}