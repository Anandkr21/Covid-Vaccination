// let alldata = JSON.parse(localStorage.getItem('detail')) || []
// document.querySelector('form').addEventListener('submit', myfun)

// function myfun(event) {
//     event.preventDefault();

//     let formdata = {
//         id: form.uid.value,

//     }
//     let uniqe = document.querySelector('#uid').value;
//     let name = document.querySelector('#name').value;
//     let age = document.querySelector('#age').value;
//     let priority = document.querySelector('#priority').value;
//     let select = document.querySelector('#vaccine').value;

//     let d1 = document.querySelector('#d1').value;
//     let d2 = document.querySelector('#d2').value;

//     // let desi = document.querySelector('#d2').value;
//     let obj = { uniqe, name, age, d1,d2, priority, select }
// console.log(obj)
//     alldata.push(obj)
//     // console.log(std)


//     localStorage.setItem('detail', JSON.stringify(alldata))
//     document.getElementById("myfrm").reset();    
// }

let myForm = document.getElementById('myfrm')
let userData = JSON.parse(localStorage.getItem('user-data')) || [];

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        id: myForm.uid.value,
        name: myForm.name.value,
        age: myForm.age.value,
        designation: myForm.designation.value,
        priority: myForm.priority.value,
        vaccine: myForm.vaccine.value
    }

    userData.push(formData)
    localStorage.setItem('user-data', JSON.stringify(userData))
    alert('You are Registerd Successfully.')
    document.getElementById("myfrm").reset();
})


// LIVE STATUS TOTAL VACCINATION DOSES
let i = 9; j = 44; k = 55; l = 90;

setInterval(() => {
    let x = document.querySelector('.doses')

    l += Math.floor(Math.random() * 20);
    x.textContent = `${i},${j},${k},${l}`;

}, 1000);


// LIVE STATUS TOTAL REGISTRATION
let q = 80; r = 87;
setInterval(() => {
    let x = document.querySelector('.regist')
    r += Math.floor(Math.random() * 10);
    x.textContent = `${q},${r}`;

}, 1000);

