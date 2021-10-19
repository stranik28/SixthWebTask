function setNewPrice() {
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    let quantity = Number(document.getElementById('Guns_Count').value);
    let sniper_options_Div = document.querySelectorAll('#sniper_options input');
    sniper_options_Div.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {price += propPrice;}
        }
    });
    let m_g_s = document.getElementsByName('m_g_s');
    m_g_s.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });
    let cou = document.getElementById('Guns_Count');
    cou.addEventListener('input',function (){setNewPrice();});
    let s = document.getElementsByName('type');
    s[0].addEventListener('change', function (event) {
        let select = event.target;
        let Machine_gun_r = document.getElementById('Machine_gun_r');
        let sniper_options = document.getElementById('sniper_options');
        if (select.value === '1') {
            Machine_gun_r.style.display = 'none';
            sniper_options.style.display = 'none';
            Machine_gun_Sets();
            sniper_options_hide();
            document.getElementById('price').innerHTML =
                'Price is: ' + prices.prodTypes[0]*quantity + ' USD.';
        }
        else if (select.value === '2') {
            sniper_options_hide();
            Machine_gun_r.style.display = 'block';
            sniper_options.style.display = 'none';
            document.getElementById('price').innerHTML =
                'Price is: ' + prices.prodTypes[1]*quantity + ' USD.';
        }
        else if (select.value === '3') {
            Machine_gun_r.style.display = 'none';
            sniper_options.style.display = 'block';
            Machine_gun_Sets();
            document.getElementById('price').innerHTML =
                'Price is: ' + prices.prodTypes[2]*quantity + ' USD.';
        } else {
        }
    });
    let price_pr = document.getElementById('price');
    price_pr.innerHTML = 'Price is: ' + price * quantity + ' USD.';
}
function getPrices() {
    return {
        prodTypes: [100, 200, 300],
        prodOptions: {
            full: 100,
            mid: 70,
            low: 50,
        },
        prodProperties: {
            optic: 133,
            muff: 75,
        },
    };
}
let elm = document.getElementById('Machine_gun_Sets');
elm.style.display = 'none';
function Machine_gun_Sets() {
    elm.checked = !elm.checked;
}
function sniper_options_hide() {
    document.getElementById('optic').checked = false;
    document.getElementById('muff').checked = false;
}
window.addEventListener('DOMContentLoaded', function () {
    let radioDiv = document.getElementById('Machine_gun_r');
    radioDiv.style.display = 'none';
    let sniper_options = document.getElementById('sniper_options');
    sniper_options.style.display = 'none';
    let s = document.getElementsByName('type');
    let select = s[0];
    select.addEventListener('change', function () {setNewPrice();});
    let m_g_s = document.getElementsByName('m_g_s');
    m_g_s.forEach(function (radio) {
        radio.addEventListener('change', function () {setNewPrice();});
    });
    let sniper_option = document.querySelectorAll('#sniper_options input');
    sniper_option.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {setNewPrice();});
    });
    setNewPrice();
});


