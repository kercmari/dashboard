let runScripts = ()=>{
    let chart_bars= document.getElementById("chart-bars");
    let icons = document.getElementsByName("i")
    let cards = document.getElementsByClassName("card")
    console.log("Valor de chart ",chart_bars)
    console.log("Valor tag ",icons)
    console.log("Valor class ",icons)
}

runScripts();

let modifyText= ()=>{
    let listOfP= document.getElementsByTagName("p");
    let elementP= listOfP[3];
    elementP.innerText = "Dinero Actual";

    let listOfPH4= document.getElementsByTagName("h4")
    let elementH4 = listOfPH4[0];
    elementH4.innerHTML = "$301K"


}

modifyText();