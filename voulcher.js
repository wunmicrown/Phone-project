//    VOULCHER CARD BEGINNING 
var array = [];
const generate=()=> {
    // result.innerHTML = " ";
    if (typeof (localStorage.getItem("Voucher")) == 'string') {
        array = JSON.parse(localStorage.getItem("Voucher"));
    } else {
        array = []
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
    } else if (nocard.value != "" && selectcard.value != "Select Card" && amount.value == "Select Amount") {
        infogenerate.style.display = "block";
        infogenerate.innerHTML = `<div class="bg-secondary mt-5 pt-2 h6 text-center text-white h-50 rounded">Please fill out the remaining empty spaces <br>
				<button class="btn bg-white w-50 mb-3 p-0 mt-3" onclick="delInfo()">OK</button></div>`
        return;
    } else if (nocard.value != "" && selectcard.value == "Select Card" && amount.value != "Select Amount") {
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

    for (let i = 0; i < nocard.value; i++) {
        const allSpan = document.createElement("div");
        const divDiv = document.createElement("div");
        const forSimType = document.createTextNode(selectcard.value);
        const forAmount = document.createTextNode("#" + amount.value);
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        divDiv.id = "allDiv";
        allSpan.id = "alllSpan";
        span2.id = "secondspan";

        let ooo = '';


        if (selectcard.value == "MTN") {
            for (let j = 0; j < 17; j++) {
                const b = Math.floor(Math.random() * 10);

                ooo += b;

                const textFormF = document.createTextNode(b);
                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        } else if (selectcard.value == "Airtel") {
            for (let j = 0; j < 16; j++) {
                const b = Math.floor(Math.random() * 10);
                const textFormF = document.createTextNode(b);
                ooo += b;

                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        } else if (selectcard.value == "Glo") {
            for (let j = 0; j < 15; j++) {
                const b = Math.floor(Math.random() * 10);
                const textFormF = document.createTextNode(b);
                ooo += b;

                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        } else if (selectcard.value == "9mobile") {
            for (let j = 0; j < 15; j++) {
                const b = Math.floor(Math.random() * 10);
                const textFormF = document.createTextNode(b);
                ooo += b;

                divDiv.appendChild(textFormF);
                span1.appendChild(forSimType);
                span2.appendChild(forAmount);
                allSpan.appendChild(span1);
                allSpan.appendChild(span2);
            }
        }
        const obj = { cardname: selectcard.value, code: ooo, cardamount: amount.value, status: "notused" };

        array.push(obj);

        localStorage.setItem("Voucher", JSON.stringify(array));
        document.querySelector("#result").appendChild(allSpan);
        document.querySelector("#result").appendChild(divDiv);
    }
}


const showAllCard=()=> {

    var getallcard = JSON.parse(localStorage.getItem("Voucher"));
    result.innerHTML = "";

    var cardElement = "";
    getallcard.map(card => {
        if (card.status == "used") {
            cardElement += `
						<div class="row mb-3 bg-white rounded">
							<div class="col-12">
								<div class="row p-2 text-dark bg-white shadow-sm">
									<div class="col-3 text-left">${card.cardname.toUpperCase()}</div>
									<div class="col-6 text-center text-danger h6">${card.status.toUpperCase()}</div>
									<div class="col-3 text-right">#${card.cardamount}</div>
								</div>
								<div class="row text-center p-2">
									<div class="col-12"><p class="text-danger h5">${card.code}</p></div>
								</div>
							</div>
						</div>
					`
        } else if (card.status == "notused") {
            cardElement += `
						<div class="row mb-3 bg-white rounded">
							<div class="col-12">
								<div class="row p-2 text-dark bg-white shadow">
									<div class="col-3 text-left">${card.cardname.toUpperCase()}</div>
									<div class="col-6 text-center text-success h6">${card.status.toUpperCase()}</div>
									<div class="col-3 text-right">#${card.cardamount}</div>
								</div>
								<div class="row text-center p-2">
									<div class="col-12"><p class="text-success h5">${card.code}</p></div>
								</div>
							</div>
						</div>
					`
        }
    })
    result.innerHTML = cardElement;
}
//    VOULCHER CARD END
