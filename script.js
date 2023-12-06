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
saveContact.style.display="none";
viewSection.style.display="none";
saveContactContainer.style.display="none";
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

setInterval( ()=> {
    getTimeDate();
}, 1000);

let checkOpen = 0;

const openMe = () => {
    checkOpen = 1;
    firstdisplay.style.display = "none";

    // Check if the elements are defined before trying to access their style property
    if (document.getElementById("forcalls")) {
        document.getElementById("forcalls").style.display = "none";
    }

    if (document.getElementById("anotherinner")) {
        document.getElementById("anotherinner").style.display = "block";
    }

    if (document.getElementById("showbalance")) {
        document.getElementById("showbalance").style.display = "none";
    }

    if (document.getElementById("infogenerate")) {
        document.getElementById("infogenerate").style.display = "none";
    }

    if (document.getElementById("callopacity")) {
        document.getElementById("callopacity").style.display = "none";
    }

    if (document.getElementById("forcallnumbers")) {
        document.getElementById("forcallnumbers").style.display = "none";
    }

    if (document.getElementById("forgame")) {
        document.getElementById("forgame").style.display = "none";
    }

    if (document.getElementById("forMusic")) {
        document.getElementById("forMusic").style.display = "none";
    }

    if (document.getElementById("forcal")) {
        document.getElementById("forcal").style.display = "none";
    }

    if (document.getElementById("viewSection")) {
        document.getElementById("viewSection").style.display = "none";
    }

    if (document.getElementById("saveContactContainer")) {
        document.getElementById("saveContactContainer").style.display = "none";
    }

    if (document.getElementById("saveContact")) {
        document.getElementById("saveContact").style.display = "none";
    }

    if (document.getElementById("camera")) {
        document.getElementById("camera").style.display = "none";
    }

    let d = new Date();
    displaydate.innerHTML = d.toDateString();
};



const offMe = () => {
    anotherinner.style.display = "none";
    firstdisplay.style.display = "block";
    checkOpen = 0;
}

const goBack = () => {
    if (checkOpen == 0) {
        return;
    } else if (checkOpen == 1) {
        if (document.getElementById("forcalls")) {
            document.getElementById("forcalls").style.display = "none";
        }

        if (document.getElementById("anotherinner")) {
            document.getElementById("anotherinner").style.display = "block";
        }

        if (document.getElementById("showbalance")) {
            document.getElementById("showbalance").style.display = "none";
        }

        if (document.getElementById("infogenerate")) {
            document.getElementById("infogenerate").style.display = "none";
        }

        if (document.getElementById("callopacity")) {
            document.getElementById("callopacity").style.display = "none";
        }

        if (document.getElementById("forcallnumbers")) {
            document.getElementById("forcallnumbers").style.display = "none";
        }

        if (document.getElementById("forgame")) {
            document.getElementById("forgame").style.display = "none";
        }

        if (document.getElementById("forMusic")) {
            document.getElementById("forMusic").style.display = "none";
        }

        if (document.getElementById("forcal")) {
            document.getElementById("forcal").style.display = "none";
        }

        if (document.getElementById("viewSection")) {
            document.getElementById("viewSection").style.display = "none";
        }

        if (document.getElementById("saveContactContainer")) {
            document.getElementById("saveContactContainer").style.display = "none";
        }

        if (document.getElementById("saveContact")) {
            document.getElementById("saveContact").style.display = "none";
        }

    }
};


const openGame = () => {
    forgame.style.display = "block";
    forcalls.style.display = "none";
    anotherinner.style.display = "none";
    showbalance.style.display = "none";
    infogenerate.style.display = "none";
    callopacity.style.display = "none";
    forcallnumbers.style.display = "none";
    viewSection.style.display = "none";
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
// const cameraDiv = document.getElementById("camera");

// const camera1 = () => {
//     cameraDiv.style.display = "block";
//     forgame.style.display = "none";
//     forcalls.style.display = "none";
//     anotherinner.style.display = "none";
//     showbalance.style.display = "none";
//     infogenerate.style.display = "none";
//     callopacity.style.display = "none";
//     forcallnumbers.style.display = "none";
//     viewSection.style.display = "none";
//     cameraDiv.innerHTML = `<video id='video' width='100%' height='100%'></video> `;
    
//     const video = document.getElementById("video");

//     navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true
//     }).then((stream) => {
//         video.srcObject = stream;
//         video.addEventListener("loadedmetadata", () => {
//             video.autoplay = true;
//             video.play();
//         });
//     }).catch((err) => alert(err.message));
// };

