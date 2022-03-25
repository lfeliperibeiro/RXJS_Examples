// Vamos usar 2 tipos de operadores:
// Operadores de criação
// Operadores encadeáveis (pipeable)

import { last, first, map} from 'rxjs/operators'
import { of, from} from 'rxjs'

// of(1,2,'value', 'last')
//     .pipe(
//         last(),
//         map(value => value[0])
//     )
//     .subscribe((value) => {
//     console.log(`The value is ${value}`)
// })


// caso queira utilizar um array utilizo o método from
from([1,2,'value', 'last'])
    .pipe(
        last(),
        map(value => value[0])
    )
    .subscribe((value) => {
        console.log(`The value is ${value}`)
    })
