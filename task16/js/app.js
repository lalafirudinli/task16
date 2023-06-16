let btn = document.getElementById("btn")
let term = document.getElementById("term")
let amount = document.getElementById("amount")
let apr = document.getElementById("apr")

btn.onclick=function(){
    let amount_value = Number(amount.value);
    let term_value = Number(term.value);
    let apr_value = Number(apr.value);

    let monthly = (amount_value +(amount_value * apr_value / 100)) / term_value
    document.getElementById('span').innerHTML = monthly + " AZN"
    document.getElementById('span2').innerHTML = (monthly * term_value) + " AZN"
}