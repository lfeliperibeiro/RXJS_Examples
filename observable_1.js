import { Observable } from "rxjs";

const promise = new Promise(resolve => {
    resolve('This is an Promise')
})

promise.then(console.log)


// Observable pode ser chamado várias vezes diferente das promises
const obs = new Observable(subscriber => {
    subscriber.next('This is')
    subscriber.next('an')
    subscriber.next('Observer')

})

obs.subscribe(console.log)
