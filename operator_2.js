import {map, concatAll} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import { XMLHttpRequest} from 'xmlhttprequest'

// concatAll Converts a higher-order
// Observable into a first-order Observable by concatenating the inner
// Observables in order. <span class=“informal”>Flattens
// an Observable-of-Observables


ajax({
    createXHR: () => new XMLHttpRequest(true),
    url: 'https://api.github.com/users/lfeliperibeiro/repos',
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(repo => repo.full_name)
        )
        .subscribe(console.log)