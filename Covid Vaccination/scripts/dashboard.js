let dashboard = JSON.parse(localStorage.getItem('user-data')) || []
display(dashboard)
console.log(dashboard)

let done = JSON.parse(localStorage.getItem('vaccinated')) || []

function display(dashboard) {
    document.querySelector('tbody').textContent = null;
    document.querySelector('#task-count').innerText = dashboard.length;

    dashboard.forEach((el, ind) => {
        let row = document.createElement('tr')

        let uniqe = document.createElement('td')
        uniqe.innerText = el.id;

        let name = document.createElement('td')
        name.textContent = el.name;

        let age = document.createElement('td')
        age.textContent = el.age;


        let d1 = document.createElement('td')
        d1.textContent = el.designation;

        let priority = document.createElement('td')
        priority.textContent = el.priority;

        let select = document.createElement('td')
        select.innerText = el.vaccine;

        let o = document.createElement('td')
        let otp = Math.floor(Math.random() * 10000)
        let OTP = document.createElement('span')
        el.otp = otp;
        o.innerText = el.otp;

        // var digit = '0123456789'
        // let otp = ''
        // for(let i=0; i<4; i++){
        //     otp+=digit[Math.floor(Math.random()*10)]
        // }
        // o.textContent = otp;



        let v = document.createElement('td')
        v.setAttribute('class', 'vaccinebtn');
        v.innerText = 'Vaccinate';

        v.addEventListener('click', () => {
            let confirmOtp = prompt('Please enter your OTP.')
            if (confirmOtp == el.otp) {
                setTimeout(() => {
                    alert(el.name + " Added to queue.")
                }, 0);
                setTimeout(() => {
                    alert('Vaccinating  ' + el.name)
                }, 5000);
                setTimeout(() => {
                    alert(el.name + ' Successfully Vaccinated.')
                }, 10000);

                setTimeout(() => {
                    done.push(dashboard.splice(ind, 1))
                    localStorage.setItem('vaccinated', JSON.stringify(done))
                    localStorage.setItem('user-data', JSON.stringify(dashboard))

                }, 12000);
            } else {
                alert('Plese enter correct OTP.')
            }

        })

        v.addEventListener('click', function () {
            vaccinated(el, ind)
        })

        let dlt = document.createElement('td')
        dlt.setAttribute('class', 'deletebtn');
        dlt.innerText = 'Delete'

        dlt.addEventListener('click', function () {
            deleated(el, ind)
        })

        row.append(name, uniqe, age, d1, priority, select, o, v, dlt)
        document.querySelector('tbody').append(row)
    });
}


// setting data to DOM for successfuly vaccinated 
function vaccinated(el, ind) {
    dashboard.splice(el, 1)
    localStorage.setItem('user-data', JSON.stringify(dashboard))

    done.push(el)
    localStorage.setItem('vaccinated', JSON.stringify(done))
    display(dashboard)
}


//  deleting data  from dashboard
function deleated(el, ind) {
    dashboard.splice(el, 1)
    localStorage.setItem('user-data', JSON.stringify(dashboard))

    display(dashboard)
}



// data sort by vaccine name
function sortbyvaccine() {
    let selected = document.querySelector('#filter').value;
    console.log(selected)

    if (selected == "") {
        display(dashboard)
    }
    else {
        let filterdata = dashboard.filter(function (el) {
            return el.select == selected
        })
        display(filterdata)
    }
}


// data search by Name

function search() {
    let query = document.querySelector('input').value;
    console.log(query)

    let output = dashboard.filter(function (el) {
        return el.name.toLowerCase().includes(query.toLowerCase())
    });
    display(output)
}


