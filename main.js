let addInput  =document.querySelector('#addInput')

let addBtn = document.querySelector('#addBtn')
let ul = document.querySelector('ul')
let clear = document.getElementById('clear')
let p = document.getElementById('task')
let count = 0
let count2 = 0

addBtn.addEventListener('click' , ()=>{
    count++
    count2++
    p.innerHTML = count2 + 'tasks'
    if(addInput.value === ''){
        alert('inputga yozing')
    }else{
        let li = document.createElement('li')
        let label = document.createElement('label')
        let span = document.createElement('span')
        let button = document.createElement('button')
        let btn2 = document.createElement('button')
        let div = document.createElement('div')
        div.style.display = 'flex'
        div.style.gap = '5px'
        
        button.innerHTML = 'delete'
        label.innerHTML = addInput.value
        btn2.innerHTML = 'check'
        li.appendChild(label)
        ul.appendChild(li)
        li.appendChild(span)
        div.appendChild(button)
        div.appendChild(btn2)
        li.appendChild(div)

        span.addEventListener('click' , ()=>{
            ul.removeChild(li)
        })
        btn2.addEventListener('click' , ()=>{
            label.classList.toggle('deleted')
        })
    }
    
    addInput.value = ''
})

