import {from, Observable} from "rxjs";

function first() {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    subscriber.next(value)
                    subscriber.complete()
                }
            })
        })
    }
}


function lastItem() {
    return function (source) {
        return new Observable(subscriber => {
            let last;
            source.subscribe({
                next(value){
                    last = value
                },
                complete(){
                    if(last !== undefined){
                        subscriber.next(last)
                    }
                    subscriber.complete()

                }
            })
        })
    }
}


from([1,2,3,4,5])
    .pipe(
        first(),
        lastItem()
    )
    .subscribe(console.log)