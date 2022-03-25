import {from, asyncScheduler} from 'rxjs'
import {observeOn} from 'rxjs/operators'


// O padrão do rxjs é síncrono

console.log('Begin..')

from([1,2,3,4,5,6,7,8,9])
    .subscribe(console.log)


console.log('End..')


// Caso você queira usar uma estrutura assíncrona você pode usar assim

// console.log('Begin..')
//
// from([1,2,3,4,5,6,7,8,9])
//     .pipe(observeOn(asyncScheduler))
//     .subscribe(console.log)
//
//
// console.log('End..')