const calWork =(digit)=> {
    showdisplay.innerHTML += digit;
}

const onOperator = (operator)=> {
    showdisplay.innerHTML += operator;
}
const equalTo =()=> {

    let k = showdisplay.innerHTML;
    let i = showresult.innerHTML;

    if (k.search("sin") == -1 && k.search("cos") == -1 && k.search("tan") == -1 && k.search("log") == -1  && k.search("√") == -1) {
    eval(showdisplay.innerHTML);
    showresult.innerHTML = eval(showdisplay.innerHTML); 
    } else if (k.search("sin") != -1) {
        const dd = k.replace("sin", "(Math.PI/180)*");
        const tt = eval(dd);
        const xx = eval(Math.sin(tt));
        const gg = xx.toPrecision(4);
        showresult.innerHTML = gg;
    } else if (k.search("cos") != -1) {
        const dd = k.replace("cos", "(Math.PI/180)*");
        const tt = eval(dd);
        const xx = eval(Math.sin(tt));
        const gg = xx.toPrecision(4);
        showresult.innerHTML = gg;
    } else if (k.search("tan") != -1) {
        const dd = k.replace("tan", "(Math.PI/180)*");
        const tt = eval(dd);
        const xx = eval(Math.sin(tt));
        const gg = xx.toPrecision(4);
        showresult.innerHTML = gg;
    }  else if (k.search("log") != -1) {
        const dd = k.replace("log", "Math.log10");
        const tt = eval(dd);
        const gg = tt.toPrecision(4);
        showresult.innerHTML = gg;
    } else if (k.search("√") != -1) {
        const dd = k.replace("√", "Math.sqrt");
        const tt = eval(dd);
        const gg = tt.toPrecision(4);
        showresult.innerHTML = gg;
    }
}
const clean =()=> {
    showdisplay.innerHTML = ""
    showresult.innerHTML = "0"
}
const onOff=()=> {
    if (btn2.innerHTML == "ON") {
        btn2.innerHTML = "OFF"
        showdisplay.innerHTML = " "
        showresult.innerHTML = "0"
        showresult.style.display = "block"
        showdisplay.style.display = "block"
    } else {
        btn2.innerHTML = "ON"
        showdisplay.style.display = "none"
        showresult.style.display = "none"
    }
}