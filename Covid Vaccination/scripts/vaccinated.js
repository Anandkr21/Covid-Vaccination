let done = JSON.parse(localStorage.getItem('vaccinated')) || []
display(done)


function display(done){
    document.querySelector('tbody').textContent = null;

    document.querySelector('#task-count').innerText = done.length;

    done.forEach((el,ind)=> {
        let row = document.createElement('tr')

        let uniqe = document.createElement('td')
        uniqe.innerText = el.id;

        let name =document.createElement('td')
        name.textContent = el.name;

        let age =document.createElement('td')
        age.textContent = el.age;

        let d =document.createElement('td')
        d.textContent = el.designation;

        let priority = document.createElement('td')
        priority.textContent = el.priority;

        let select = document.createElement('td')
        select.innerText = el.vaccine;

        let v  = document.createElement('td')
        v.setAttribute('class', 'vaccinebtn'); 
        v.innerText='Vaccinated';

        row.append(name,uniqe,age,d,priority, select,v)
        document.querySelector('tbody').append(row)
    });
}


// function for download in pdf format 
let button =document.querySelector('.button')
    button.addEventListener('click', (el)=>{
        let info = []

        done.forEach((el) => {
            info.push([el.name,el.uniqe, el.age, el.d,el.priority, el.select])
        });

        let doc = new jsPDF()

        doc.autoTable({
            
            head:[['NAME', 'UNIQUE ID', 'AGE', 'DESIGNATION', 'PRIORITY', 'VACCINE TYPE']],
            body:info
        })
        doc.save('table.pdf')
    })

