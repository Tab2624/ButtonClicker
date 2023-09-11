function gone(element){
    element.remove()
}

function log(element){
    if(element.innerText == 'Login'){
    element.innerText = 'Logout'
    }
    else if(element.innerText =='Logout') {
        element.innerText = 'Login'
    }
}

function like(element){
    alert('Ninja was liked')
}