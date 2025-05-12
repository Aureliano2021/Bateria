function composicao(){
    let input = document.getElementById('input')
    let value = input.value

    for (i = 0; i < value.length; i++){
        let audio = document.getElementById(`s_key${value[i]}`)
        let elementActive = document.querySelector(`div [data-key="key${value[i]}"`)

        if (elementActive){
            setTimeout(() => {
            elementActive.className = "key active"}, (i+1) * 450)
        }

        if (audio){
             setTimeout(() => {
                audio.play()
                elementActive.className = "key"
            }, (i+1) * 500)
        }
    }

    input.value = ''
}

document.addEventListener('keydown', event => {
    
    let key = event.key.toLowerCase()
    let audio = document.getElementById(`s_key${key}`)
    let elementActive = document.querySelector(`div [data-key="key${key}"]`)

    if (audio){
        audio.play()
    }

    if (elementActive){
        elementActive.className = "key active"
    }
})

document.addEventListener('keyup', event => {
    let key = event.key.toLowerCase()
    let elementActive = document.querySelector(`div [data-key="key${key}"]`)

    if (elementActive){
        elementActive.className = "key"
    }
})

let botao = document.getElementById('botao')

botao.addEventListener('click', composicao)