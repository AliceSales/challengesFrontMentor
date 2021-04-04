const input = document.querySelector('.inputToDo')
const add = document.querySelector('.add')

let list = document.querySelector('.list')
list.classList.add('dark')

let countCompleted = 0;
let countActive = 0;
let countAll = [];

add.addEventListener('click', ()=>{

    let line = document.createElement('li')
    line.classList.add('line')
    
    let sectionLine = document.createElement('section')
    sectionLine.classList.add('sectionLine')
    
    let circleCheck = document.createElement('div')
    circleCheck.classList.add('circleCheck')
    
    let imgCheck = document.createElement('img')
    imgCheck.src = './images/icon-check.svg'
    imgCheck.classList.add('imgCheck')
    
    let imgCross = document.createElement('img')
    imgCross.src = './images/icon-cross.svg'
    imgCross.classList.add('exclude')
    
    let description = document.createElement('p')
    description.classList.add('description')
    description.innerText = input.value

    circleCheck.appendChild(imgCheck)
    
    sectionLine.appendChild(circleCheck)
    sectionLine.appendChild(description)

    line.appendChild(sectionLine)
    line.appendChild(imgCross)

    list.appendChild(line)

    let countValue = document.querySelector('.qtdItems');


    circleCheck.addEventListener('click', ()=>{
        if(circleCheck.matches('.checked')){
            circleCheck.classList.remove('checked')
            imgCheck.classList.remove('checked')
            description.style.textDecorationLine = 'none'
            --countCompleted
        } else {
            circleCheck.classList.add('checked')
            imgCheck.classList.add('checked')
            description.style.textDecorationLine = "line-through";
            ++countCompleted
        }
    })

    imgCross.addEventListener('click', ()=>{
        line.remove()

        if(circleCheck.matches('.checked')){
            --countAll
            --countCompleted
        } else {
            --countAll
            --countActive
        }
        countValue.innerHTML = countAll + ' items left'
    })

    /* SELECTORS */

    let all = document.querySelector('.all')
    let active = document.querySelector('.active')
    let completed = document.querySelector('.completed')
    let clearCheck = document.querySelector('.clearCheck')

    countAll++

    all.addEventListener('click', ()=>{
        if(circleCheck.matches('.checked')){
            line.style.display = 'flex'
        } else {
            line.style.display = 'flex'
        }
        countValue.innerHTML = countAll + ' items left'
    })

    active.addEventListener('click', ()=> {
        countActive = countAll - countCompleted
        if(circleCheck.matches('.checked')){
            line.style.display = 'none'
        } else {
            line.style.display = 'flex'
        }
        countValue.innerHTML = countActive + ' items left'
    })

    completed.addEventListener('click', ()=> {
        if(circleCheck.matches('.checked')){
            line.style.display = 'flex'
        } else {
            line.style.display = 'none'
        }
        countValue.innerHTML = countCompleted + ' items left'
    })

    countValue.innerHTML = countAll + ' items left'

    console.log(countAll)

})


/** THEMES */

const btnTheme = document.querySelector('.theme')

const body = document.querySelector('body')
const main = document.querySelector('main')
const imgTop = document.querySelector('.imgTop')
const circleCheck = document.querySelector('.circleCheck')

countAll.forEach(items => {
    if(circleCheck.matches('.checked')){
        countCompleted++
    } else {
        countActive++
    }
});

btnTheme.addEventListener('click', ()=>{
    if(list.matches('.dark')){
        list.classList.add('light')
        body.classList.add('light')
        main.classList.add('light')
        imgTop.classList.add('light')

        list.classList.remove('dark')
        list.classList.remove('dark')
        body.classList.remove('dark')
        main.classList.remove('dark')
        imgTop.classList.remove('dark')
    }
    else if(list.matches('.light')){
        list.classList.add('dark')
        body.classList.add('dark')
        main.classList.add('dark')
        imgTop.classList.add('dark')

        list.classList.remove('light')
        list.classList.remove('light')
        body.classList.remove('light')
        main.classList.remove('light')
        imgTop.classList.remove('light')
    }
})