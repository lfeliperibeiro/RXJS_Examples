import { interval, from } from "rxjs";

// interval gera um observable
const numberGenerator = interval(500)

// aqui eu me registro
const sub = numberGenerator.subscribe(num => {
    console.log(Math.pow(2, num))
})

const sub1 = numberGenerator.subscribe(console.log)

// na subscrição eu demonstro interesse
setTimeout(() => sub.unsubscribe(), 8000)
setTimeout(() => sub1.unsubscribe(), 6000)

