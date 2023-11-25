if (localStorage.accountbal == null) {
    localStorage.setItem("accountbal", "");
}
var allBalance = { mtnbal: 0, airtelbal: 0, global: 0, mobile: 0 };

if (localStorage.accountbal == "") {
    localStorage.setItem("accountbal", JSON.stringify(allBalance));
}
// BEGINNING OF CODES TO LOAD MTN CARD
let audioElement;
let timeout;
const loadCard =()=> {
    if (displaynumber.value.length == 23) {
        var searchnetwork = JSON.parse(localStorage.getItem("Voucher"));
        for (var q = 0; q < searchnetwork.length; q++) {
            var searchingcode = searchnetwork[q].code;
            if ((displaynumber.value.slice(0, 5) == "*311*") &&
                (searchingcode.search(displaynumber.value.slice(5, 22)) != -1) &&
                (displaynumber.value.slice(22, 23) == "#") &&
                (searchnetwork[q].cardname == "MTN") &&
                (searchnetwork[q].status == "notused")) {

                searchnetwork[q].status = "used";
                showbalance.style.display = "block";
                selectsim.style.display = "none";
                let getbal = parseInt(searchnetwork[q].cardamount);
                var gettt = JSON.parse(localStorage.getItem("accountbal"));
                gettt.mtnbal += getbal;
                displaybalance.innerHTML = "Recharge successful. Your account has been credited with MTN " + searchnetwork[q].cardamount + " . Your new account bal :₦" + gettt.mtnbal.toFixed(2);
                localStorage.setItem("accountbal", JSON.stringify(gettt))
            } else if ((displaynumber.value.slice(0, 5) == "*555*") &&
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
    } else if (displaynumber.value.slice(0, 5) == "*556#") {
        selectsim.style.display = "none";
        showbalance.style.display = "block";
        var displaybal = JSON.parse(localStorage.getItem("accountbal"));
        var showbal = displaybal.mtnbal;
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
