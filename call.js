if (localStorage.accountbal == null) {
    localStorage.setItem("accountbal", "");
}
const allBalance = { mtnbal: 0, airtelbal: 0, global: 0, mobile: 0 };

if (localStorage.accountbal == "") {
    localStorage.setItem("accountbal", JSON.stringify(allBalance));
}
// BEGINNING OF CODES TO LOAD MTN CARD
let audioElement;
let timeout;
const loadCard = () => {
    if (displaynumber.value.length == 23) {
        const searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
        for (let q = 0; q < searchnetwork.length; q++) {
            let searchingcode = searchnetwork[q].code;
            if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 22)) != -1) &&
                (displaynumber.value.slice(22, 23) == "#") &&
                (searchnetwork[q].cardname == "MTN") &&
                (searchnetwork[q].status == "notused")) {

                searchnetwork[q].status = "used";
                showbalance.style.display = "block";
                selectsim.style.display = "none";
                const getbal = parseInt(searchnetwork[q].cardamount);
                const gettt = JSON.parse(localStorage.getItem("accountbal"));
                gettt.mtnbal += getbal;
                displaybalance.innerHTML = "Recharge successful. Your account has been credited with MTN " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.mtnbal.toFixed(2);
                localStorage.setItem("accountbal", JSON.stringify(gettt))
            } else if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 22)) != -1) &&
                (displaynumber.value.slice(22, 23) == "#") &&
                (searchnetwork[q].cardname == "MTN") &&
                (searchnetwork[q].status == "used")) {
                selectsim.style.display = "none";
                showbalance.style.display = "block";
                displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
            }
            localStorage.setItem("Voucher", JSON.stringify(searchnetwork));
        }
    } else if (displaynumber.value.slice(0, 5) == "*310#") {
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        const displaybal = JSON.parse(localStorage.getItem("accountbal"));
        const showbal = displaybal.mtnbal;
        displaybalance.innerHTML = ("Your MTN account balance is ₦" + showbal.toFixed(2));
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) == "070") ||
            (displaynumber.value.slice(0, 3) == "080") ||
            (displaynumber.value.slice(0, 3) == "090") ||
            (displaynumber.value.slice(0, 3) == "081")
        )
    ) {

        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.mtnbal <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "MTN";
        } else if (gettt.mtnbal != 0) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "MTN";
            secondphone.style.display = "block";
            reccall.style.display = "block";
            networktwo.innerHTML = "MTN";
            phoneno.innerHTML = "09128307441";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 14) &&
        ((displaynumber.value.slice(0, 4) == "+234") ||
            (displaynumber.value.slice(0, 4) == "+229")
        )
    ) {
        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.mtnbal <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "MTN";
        } else if (gettt.mtnbal != 0) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "MTN";
            networktwo.innerHTML = "MTN";
            secondphone.style.display = "block";
            reccall.style.display = "block";
            phoneno.innerHTML = "09128307441";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) != "070") ||
            (displaynumber.value.slice(0, 3) != "080") ||
            (displaynumber.value.slice(0, 3) != "090") ||
            (displaynumber.value.slice(0, 3) != "081")
        )
    ) {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "MTN";
    } else if (displaynumber.value.length != 11) {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        calculatingfirst.style.display = "none";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "MTN";
    }
}
// END OF CODES TO LOAD MTN CARD

// BEGINNING OF CODES TO LOAD AIRTEL CARD

const loadCardAirtel = () => {
    if (displaynumber.value.length == 22) {
        const searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
        for (let q = 0; q < searchnetwork.length; q++) {
            let searchingcode = searchnetwork[q].code;
            if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 21)) != -1) &&
                (displaynumber.value.slice(21, 22) == "#") &&
                (searchnetwork[q].cardname == "Airtel") &&
                (searchnetwork[q].status == "notused")) {
                searchnetwork[q].status = "used"
                showbalance.style.display = "block";
                selectsim.style.display = "none";
                let getbal = parseInt(searchnetwork[q].cardamount);
                let gettt = JSON.parse(localStorage.getItem("accountbal"));
                gettt.airtelbal += getbal;
                displaybalance.innerHTML = "Recharge successful. Your account has been credited with Airtel " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.airtelbal.toFixed(2);
                localStorage.setItem("accountbal", JSON.stringify(gettt));
            } else if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 21)) != -1) &&
                (displaynumber.value.slice(21, 22) == "#") &&
                (searchnetwork[q].cardname == "Airtel") &&
                (searchnetwork[q].status == "used")) {
                selectsim.style.display = "none";
                showbalance.style.display = "block";
                displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
            } else if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 21)) == -1) &&
                (displaynumber.value.slice(21, 22) == "#") &&
                (searchnetwork[q].cardname == "Airtel")) {
                showbalance.style.display = "block";
                selectsim.style.display = "none";
                displaybalance.innerHTML = "no";
            }
            localStorage.setItem("Voucher", JSON.stringify(searchnetwork));
        }
    } else if (displaynumber.value.slice(0, 5) == "*310#") {
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        const displaybal = JSON.parse(localStorage.getItem("accountbal"));
        const showbal = displaybal.airtelbal;
        displaybalance.innerHTML = ("Your Airtel account balance is ₦" + showbal.toFixed(2));
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) == "070") ||
            (displaynumber.value.slice(0, 3) == "080") ||
            (displaynumber.value.slice(0, 3) == "090") ||
            (displaynumber.value.slice(0, 3) == "081")
        )
    ) {
        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.airtelbal <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Airtel";
        } else if (gettt.airtelbal != 0) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Airtel";
            secondphone.style.display = "block";
            secondphone.classList.add("mysecondphone");
            reccall.style.display = "block";
            networktwo.innerHTML = "Airtel";
            phoneno.innerHTML = "090128307441";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 14) &&
        ((displaynumber.value.slice(0, 4) == "+234") ||
            (displaynumber.value.slice(0, 4) == "+229")
        )
    ) {
        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.airtelbal <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            calculatingfirst.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Airtel";
        } else if (gettt.airtelbal != 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Airtel";
            secondphone.style.display = "block";
            reccall.style.display = "block";
            networktwo.innerHTML = "Airtel";
            phoneno.innerHTML = "09128307441";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) != "070") ||
            (displaynumber.value.slice(0, 3) != "080") ||
            (displaynumber.value.slice(0, 3) != "090") ||
            (displaynumber.value.slice(0, 3) != "081")
        )
    ) {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "Airtel";
    } else if (displaynumber.value.length != 11) {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "Airtel";
    }
}

// END OF CODES TO LOAD AIRTEL CARD

// BEGINNING OF CODES TO LOAD GLO CARD

const loadCardGlo = () => {
    if (displaynumber.value.length == 21) {
        const searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
        for (let q = 0; q < searchnetwork.length; q++) {
            let searchingcode = searchnetwork[q].code;
            if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 20)) != -1) &&
                (displaynumber.value.slice(20, 21) == "#") &&
                (searchnetwork[q].cardname == "Glo") &&
                (searchnetwork[q].status == "notused")) {
                searchnetwork[q].status = "used";
                showbalance.style.display = "block";
                selectsim.style.display = "none";
                let getbal = parseInt(searchnetwork[q].cardamount);
                let gettt = JSON.parse(localStorage.getItem("accountbal"));
                gettt.global += getbal;
                localStorage.setItem("accountbal", JSON.stringify(gettt));
                displaybalance.innerHTML = "Recharge successful. Your account has been credited with GLO " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.global.toFixed(2);
            } else if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 20)) != -1) &&
                (displaynumber.value.slice(20, 21) == "#") &&
                (searchnetwork[q].cardname == "Glo") &&
                (searchnetwork[q].status == "used")) {
                selectsim.style.display = "none";
                showbalance.style.display = "block";
                displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
            }
            localStorage.setItem("Voucher", JSON.stringify(searchnetwork));
        }
    } else if (displaynumber.value.slice(0, 5) == "*310#") {
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        const displaybal = JSON.parse(localStorage.getItem("accountbal"));
        const showbal = displaybal.global;
        displaybalance.innerHTML = ("Your GLO account balance is ₦" + showbal.toFixed(2));
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) == "070") ||
            (displaynumber.value.slice(0, 3) == "080") ||
            (displaynumber.value.slice(0, 3) == "090") ||
            (displaynumber.value.slice(0, 3) == "081")
        )
    ) {
        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.global <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Glo";
        } else if (gettt.global != 0) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Glo";
            secondphone.style.display = "block";
            reccall.style.display = "block";
            networktwo.innerHTML = "Glo";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 14) &&
        ((displaynumber.value.slice(0, 4) == "+234") ||
            (displaynumber.value.slice(0, 4) == "+229")
        )
    ) {
        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.global <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            calculatingfirst.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Glo";
        } else if (gettt.global != 0) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "Glo";
            secondphone.style.display = "block";
            reccall.style.display = "block";
            networktwo.innerHTML = "Glo";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) != "070") ||
            (displaynumber.value.slice(0, 3) != "080") ||
            (displaynumber.value.slice(0, 3) != "090") ||
            (displaynumber.value.slice(0, 3) != "081")
        )
    ) {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "Glo";
    } else {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "Glo";
    }
}

// END OF CODES TO LOAD GLO CARD

// BEGINNING OF CODES TO LOAD 9mobile CARD
const loadCard9mobile = () => {
    if (displaynumber.value.length == 21) {
        const searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
        for (var q = 0; q < searchnetwork.length; q++) {
            let searchingcode = searchnetwork[q].code;
            if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 20)) != -1) &&
                (displaynumber.value.slice(20, 21) == "#") &&
                (searchnetwork[q].cardname == "9mobile") &&
                (searchnetwork[q].status == "notused")) {
                searchnetwork[q].status = "used"
                showbalance.style.display = "block";
                selectsim.style.display = "none";
                let getbal = parseInt(searchnetwork[q].cardamount);
                let gettt = JSON.parse(localStorage.getItem("accountbal"));
                gettt.mobile += getbal;
                localStorage.setItem("accountbal", JSON.stringify(gettt));
                displaybalance.innerHTML = "Recharge successful. Your account has been credited with 9Mobile " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.mobile.toFixed(2);
            } else if ((displaynumber.value.slice(0, 5) == "*222*") &&
                (searchingcode.search(displaynumber.value.slice(5, 20)) != -1) &&
                (displaynumber.value.slice(20, 21) == "#") &&
                (searchnetwork[q].cardname == "9mobile") &&
                (searchnetwork[q].status == "used")) {
                selectsim.style.display = "none";
                showbalance.style.display = "block";
                displaybalance.innerHTML = "This card has been loaded by a customer. Thanks!!!";
            }
            localStorage.setItem("Voucher", JSON.stringify(searchnetwork));
        }
    } else if (displaynumber.value.slice(0, 5) == "*310#") {
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        const displaybal = JSON.parse(localStorage.getItem("accountbal"));
        const showbal = displaybal.mobile;
        displaybalance.innerHTML = ("Your 9Mobile account balance is ₦" + showbal.toFixed(2));
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) == "070") ||
            (displaynumber.value.slice(0, 3) == "080") ||
            (displaynumber.value.slice(0, 3) == "090") ||
            (displaynumber.value.slice(0, 3) == "081"))
    ) {

        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.mobile <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "9Mobile";
        } else if (gettt.mobile != 0) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "9Mobile";
            secondphone.style.display = "block";
            reccall.style.display = "block";
            networktwo.innerHTML = "9Mobile";
            phoneno.innerHTML = "09090042156";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 14) &&
        ((displaynumber.value.slice(0, 4) == "+234") ||
            (displaynumber.value.slice(0, 4) == "+229")
        )
    ) {
        let gettt = JSON.parse(localStorage.getItem("accountbal"));
        if (gettt.mobile <= 0.50) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            callopacity.style.display = "none";
            forcalls.style.display = "none";
            forcallnumbers.style.display = "block";
            invalidresult.style.display = "block";
            showsomeresult.innerHTML = "Your account balance is too low for this call. You can borrow airtime or call back later.";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "9Mobile";
        } else if (gettt.mobile != 0) {
            calculating.style.display = "none";
            calculatingfirst.style.display = "none";
            audioElement = new Audio('ringtone.mp3');
            secondphone.classList.add("mysecondphone");
            audioElement.play();
            timeout = setInterval(checktimeout, 1000);
            forcallnumbers.style.display = "block";
            forcalls.style.display = "none";
            callersno.innerHTML = displaynumber.value;
            network.innerHTML = "9Mobile";
            secondphone.style.display = "block";
            reccall.style.display = "block";
            networktwo.innerHTML = "9Mobile";
            phoneno.innerHTML = "09090042156";
        }
    } else if ((displaynumber.value != "") && (displaynumber.value.length == 11) &&
        ((displaynumber.value.slice(0, 3) != "070") ||
            (displaynumber.value.slice(0, 3) != "080") ||
            (displaynumber.value.slice(0, 3) != "090") ||
            (displaynumber.value.slice(0, 3) != "081")
        )
    ) {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "9Mobile";
    } else {
        callopacity.style.display = "none";
        forcalls.style.display = "none";
        forcallnumbers.style.display = "block";
        invalidresult.style.display = "block";
        showsomeresult.innerHTML = "This number does not exist.please, check the number and try again later.";
        calculatingfirst.style.display = "none";
        callersno.innerHTML = displaynumber.value;
        network.innerHTML = "9Mobile";
    }
}
//  END OF CODES TO LOAD 9mobile CARD

let int;
let count;
let check = 1;
let one = 0;
let two = 0;
let three = 0;
let countsec = 0;
let getbalance;
let gettb;
let getmtn;
let getairtel;
let getglo;
let getmobile;
const receiveCall = () => {
    gettb = JSON.parse(localStorage.getItem("accountbal"));
    one = 0;
    two = 0;
    three = 0;
    loadhours.innerHTML = " ";
    loadminutes.innerHTML = "00:";
    loadseconds.innerHTML = "00";
    firstloadhours.innerHTML = " ";
    firstloadminutes.innerHTML = "00:";
    firstloadseconds.innerHTML = "00";
    getbalance = JSON.parse(localStorage.getItem("accountbal"));
    getmtn = getbalance.mtnbal;
    getairtel = getbalance.airtelbal;
    getglo = getbalance.global;
    getmobile = getbalance.mobile;
    reccall.style.display = "none";
    check = 2;
    int = setInterval(receive, 1000);
    count = setInterval(timeloading, 1000);
    calculating.style.display = "block";
    calculatingfirst.style.display = "block";
    audioElement.pause();
}

timeloading = () => {
    one += 1;
    countsec += 1;

    if (one == 60) {
        one = 0;
        two += 1;
    }

    if (two == 60) {
        two = 0;
        three += 1
    }
    loadseconds.innerHTML = one;
    loadminutes.innerHTML = two;
    loadhours.innerHTML = three;
    firstloadseconds.innerHTML = one;
    firstloadminutes.innerHTML = two;
    firstloadhours.innerHTML = three;

    if (one < 10) {
        loadseconds.innerHTML = `0${one}`;
        firstloadseconds.innerHTML = `0${one}`;
    } else {
        loadseconds.innerHTML = one;
        firstloadseconds.innerHTML = one;
    }

    if (two < 10) {
        loadminutes.innerHTML = `0${two}:`;
        firstloadminutes.innerHTML = `0${two}:`;
    } else {
        loadminutes.innerHTML = `${two}:`;
        firstloadminutes.innerHTML = `${two}:`;
    }

    if (three < 10) {
        loadhours.innerHTML = `0${three}:`;
        firstloadhours.innerHTML = `0${three}:`;
    } else {
        loadhours.innerHTML = `${three}:`;
        loadhours.innerHTML = `${three}:`;
    }

    if (three == 0) {
        loadhours.style.display = "none";
        firstloadhours.style.display = "none";
    } else {
        loadhours.style.display = "inline";
        firstloadhours.style.display = "inline";
    }
}
const receive = () => {
    if (network.innerHTML == "MTN") {
        getmtn = getmtn - 0.11;
        const newMtn = getmtn;
        getbalance.mtnbal = newMtn;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));
        if (getbalance.mtnbal <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML = "00:";
            loadseconds.innerHTML = "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML = "00:";
            firstloadseconds.innerHTML = "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    } else if (network.innerHTML == "Airtel") {
        getairtel = getairtel - 0.12;
        const newAirtel = getairtel;
        getbalance.airtelbal = newAirtel;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));
        if (getbalance.airtelbal <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML = "00:";
            loadseconds.innerHTML = "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML = "00:";
            firstloadseconds.innerHTML = "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    } else if (network.innerHTML == "Glo") {
        getglo = getglo - 0.11;
        const newGlo = getglo;
        getbalance.global = newGlo;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));
        if (getbalance.global <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML = "00:";
            loadseconds.innerHTML = "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML = "00:";
            firstloadseconds.innerHTML = "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    } else if (network.innerHTML == "9Mobile") {
        getmobile = getmobile - 0.12;
        const newMobile = getmobile;
        getbalance.mobile = newMobile;
        localStorage.setItem("accountbal", JSON.stringify(getbalance));
        if (getbalance.mobile <= 0.50) {
            forcalls.style.display = "block";
            forcallnumbers.style.display = "none";
            callopacity.style.display = "block";
            selectsim.style.display = "none";
            showbalance.style.display = "block";
            displaybalance.innerHTML = "You have exhausted your airtime!!!";
            one = 0;
            two = 0;
            three = 0;
            loadhours.innerHTML = " ";
            loadminutes.innerHTML = "00:";
            loadseconds.innerHTML = "00";
            firstloadhours.innerHTML = " ";
            firstloadminutes.innerHTML = "00:";
            firstloadseconds.innerHTML = "00";
            secondphone.style.display = "none";
            clearInterval(int);
            clearInterval(count);
        }
    }
}


const endCall = () => {
    one = 0;
    two = 0;
    three = 0;
    if (check == 2) {
        check = 1;
        clearInterval(int);
        clearInterval(count);
        audioElement.pause();
        forcallnumbers.style.display = "none";
        forcalls.style.display = "block";
        secondphone.style.display = "none";
        invalidresult.style.display = "none";
        selectsim.style.display = "none";
        showbalance.style.display = "block";



        if (network.innerHTML == "MTN") {
            const newMtn = getmtn;
            getbalance.mtnbal = newMtn;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));
            const total = Number(gettb.mtnbal) - Number(getbalance.mtnbal);
            displaybalance.innerHTML = "Last Call was " + countsec + " secs at ₦ " + total.toFixed(2) + ". New account balance is : ₦ " + getbalance.mtnbal.toFixed(2);
        } else if (network.innerHTML == "Airtel") {
            const newAirtel = getairtel;
            getbalance.airtelbal = newAirtel;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));
            const total = parseInt(gettb.airtelbal) - parseInt(getbalance.airtelbal);
            displaybalance.innerHTML = "Last Call was " + countsec + " secs at ₦ " + total.toFixed(2) + ". New account balance is : ₦ " + getbalance.airtelbal.toFixed(2);
        } else if (network.innerHTML == "Glo") {
            const newGlo = getglo;
            getbalance.global = newGlo;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));
            const total = parseInt(gettb.global) - parseInt(getbalance.global);
            displaybalance.innerHTML = "Last Call was " + countsec + " secs at ₦ " + total.toFixed(2) + ". New account balance is : ₦ " + getbalance.global.toFixed(2);
        } else if (network.innerHTML == "9Mobile") {
            const newMobile = getmobile;
            getbalance.mobile = newMobile;
            localStorage.setItem("accountbal", JSON.stringify(getbalance));
            const total = parseInt(gettb.mobile) - parseInt(getbalance.mobile);
            displaybalance.innerHTML = "Last Call was " + countsec + " secs at ₦ " + total.toFixed(2) + ". New account balance is : ₦ " + getbalance.mobile.toFixed(2);

        }

    } else {
        if (audioElement == undefined) {
            forcallnumbers.style.display = "block";
            forcalls.style.display = "block";
            callopacity.style.display = "none";
            secondphone.style.display = "none";
            invalidresult.style.display = "none";
            selectsim.style.display = "none";
        } else {
            audioElement.pause();
            forcallnumbers.style.display = "block";
            forcalls.style.display = "block";
            callopacity.style.display = "none";
            secondphone.style.display = "none";
            invalidresult.style.display = "none";
            selectsim.style.display = "none";
        }

    }

}

const checktimeout = () => {
    if (audioElement.currentTime > 30) {
        audioElement.pause();
        secondphone.style.display = "none";
        forcalls.style.display = "block";
        callopacity.style.display = "block";
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        displaybalance.innerHTML = "Timeout";
        clearInterval(timeout);
    }
}