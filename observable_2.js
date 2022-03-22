import { Observable, noop } from "rxjs";

// método create está depreciado

const obs = new Observable(subscribe => {
    subscribe.next('R')
    subscribe.next('X')
    subscribe.next('J')
    subscribe.next('S')

    if(Math.random() > 0.5){
        subscribe.complete()
    }else {
        subscribe.error('Error')
    }
})




// podemos tratar os erros
// Obs: esta forma esta sendo usada a partir da versão
// 6 do RXJS, nas versões anteriores ele não utiliza o objeto por volta
// do next, error e complete

obs.subscribe({
    next: value => console.log(`Value: ${value}`),
    error: error => console.log(`Error: ${error}`),
    complete: () => console.info('End!')
})

// usando o noop ele não trata os erros

// obs.subscribe({
//     next: value => console.log(`Value: ${value}`),
//     error: () => noop(),
//     complete: () => console.info('End!')
// })


// podemos chamar os métodos com funções nomeadas

// obs.subscribe({
//     next(value) {
//         console.log(`Value: ${value}`)
//     },
//     error(error) {
//         console.log(`Error: ${error}`)
//     },
//     complete(){
//         console.info('End!')
//     }
// })
