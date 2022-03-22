import { Observable } from 'rxjs'

const betweenNumber = (min, max) => {
    return new Observable(subscribe => {
       Array(max - min).fill().map((_, i) => {
           subscribe.next(min + i)
       })
        subscribe.complete()
    })
}



betweenNumber(4, 10).subscribe(
    num => console.log(num)
)




