let input = document.querySelector('input')
let button = document.getElementById('button')
let conteiner = document.querySelector('.conteiner')

input.addEventListener('input',e=>{
    if(!e.target.value){
        button.disabled = true
    }else{
        button.disabled = false
    }
})


function click(){
    if(input.value){
        let li = document.createElement('li')
        let del = document.createElement('button')
        del.setAttribute('name','aaa')
        del.classList.add('del')
        del.innerText = 'Delete'
        li.innerText = input.value
        li.appendChild(del)
        conteiner.appendChild(li)
        input.value = ''
        input.focus()
    }
}

button.addEventListener('click',click)

input.onkeydown = function(event){
    if(event.keyCode==13){
        click()
    }
}

conteiner.addEventListener('click',(e)=>{
    if(e.target.hasAttribute('name'))
   e.target.parentElement.remove()
   e.target.classList.toggle('color')
})
