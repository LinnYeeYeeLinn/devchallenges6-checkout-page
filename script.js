const form = document.querySelector('form');
const input = document.querySelectorAll('.inputText');

const inc = document.getElementsByClassName('inc');
const dec = document.getElementsByClassName('dec');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    input.forEach(inputs => {
        if(inputs.value == ""){
            window.alert("Validation fails!")
        }
        else{
            window.alert("Validation succeeds!")
        }
    })
})

// increase
for(let i = 0; i < inc.length;i++){
    inc[i].addEventListener('click', (e) => {
        const counter = e.target.parentElement.children[1];
        const value = counter.value;
        const newValue = parseInt(value) + 1;
        counter.value = newValue;
    })
}

//decrease
for(let i = 0; i < dec.length;i++){
    dec[i].addEventListener('click', (e) => {
        const counter = e.target.parentElement.children[1];
        const value = counter.value;
        const newValue = parseInt(value) - 1;
        counter.value = newValue;
    })
}