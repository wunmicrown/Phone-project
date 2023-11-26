forcalls.style.display = "none";
anotherinner.style.display = "none";
showbalance.style.display = "none";
infogenerate.style.display = "none";
callopacity.style.display = "none";
forcallnumbers.style.display = "none";
forgame.style.display = "none";
secondphone.style.display = "none";
invalidresult.style.display = "none";
forcal.style.display = "none";
calculating.style.display = "none";
calculatingfirst.style.display = "none";


let d = new Date();
displaydate.innerHTML = d.toDateString();

var getTimeDate = () => {
    var j = new Date();
    let myhrs = j.getHours();
    let mymin = j.getMinutes();
    if (myhrs.toString().length < 2) {
        myhrs = "0" + myhrs; 
    }
    if (myhrs > 12) {
        myhrs = myhrs - 12;
        displaytime.innerHTML = myhrs + ":" + (mymin < 10 ? "0" : "") + mymin + " PM";
    } else {
        displaytime.innerHTML = myhrs + ":" + (mymin < 10 ? "0" : "") + mymin + " AM";
    }
}

setInterval(function () {
    getTimeDate();
}, 1000);

let checkOpen = 0;

const openMe = () => {
    checkOpen = 1;
    firstdisplay.style.display = "none";
    forcalls.style.display = "none";
    anotherinner.style.display = "block";
    showbalance.style.display = "none";
    infogenerate.style.display = "none";
    callopacity.style.display = "none";
    forcallnumbers.style.display = "none";
    forgame.style.display = "none";
    forMusic.style.display = "none"
    forcal.style.display = "none";
    saveContact.style.display = "none";
}


const offMe = () => {
    anotherinner.style.display = "none";
    firstdisplay.style.display = "block";
    checkOpen = 0;
}

const goBack = () => {
    if (checkOpen == 0) {
        return;
    } else if (checkOpen == 1) {
        forcalls.style.display = "none";
        anotherinner.style.display = "block";
        showbalance.style.display = "none";
        infogenerate.style.display = "none";
        callopacity.style.display = "none";
        forcallnumbers.style.display = "none";
        forgame.style.display = "none";
        forcal.style.display = "none";
        forMusic.style.display ="none";
        saveContact.style.display = "none";
    }

}

const openGame = () => {
    forgame.style.display = "block";
    forcalls.style.display = "none";
    anotherinner.style.display = "none";
    showbalance.style.display = "none";
    infogenerate.style.display = "none";
    callopacity.style.display = "none";
    forcallnumbers.style.display = "none";
}

const simSelect = () => {
    if (displaynumber.value == "") {
        return;
    } else {
        callopacity.style.display = "block";
        selectsim.style.display = "block";
        showbalance.style.display = "none";
    }

}


const delInfo = () => {
    infogenerate.style.display = "none";
}


const displayCall = () => {
    forcalls.style.display = "block";
}

const showNumbers = (num) => {
    displaynumber.value += num;

}

const deleteMe = () => {
    displaynumber.value = displaynumber.value.substr(0, displaynumber.value.length - 1)
}

const deleteAll = () => {
    displaynumber.value = "";
}

const delCallOpacity = () => {
    callopacity.style.display = "none";
}

const cancelBalance = () => {
    callopacity.style.display = "none";
    displaynumber.value = "";
    showbalance.style.display = "none";
}

const displayCal = () => {
    anotherinner.style.display = "none";
    forcal.style.display = "block";
}
