# React Redux Course

npm install redux react-redux 

## To use DevTools
npm install redux-devtools-extension 

## Асинхронные запросы redux-thunk 
npm install redux-thunk

redux thunk - это middleware, позволяющий внутри сторонних функций использовать dispatch

https://jsonplaceholder.typicode.com/ 

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

## Redux Saga 
npm install redux-saga

Workers, watchers, effects 
Весь redux saga построен вокруг генераторов - это функция , помеченная звездочкой
Worker - это функция, внутри которой выполняется асинхронная логика - асинхронные запросы на сервер, таймауты и пр.
Watcher - это функция-генератор, в которой с помощью специальных функций указывается тип экшена и worker, который будет отрабатывать, когда экшен с тем типом, который мы указали, будет отрабатыввать 
Watcher - это функция-наблюдатель, которая сидит и ждет, когда отработает тот или иной экшен. Если к экшену привязан какой-либо worker, watcher вызывает этот worker 
Effects - это набор встроенных в redux saga функций, которые помогают делать запросы, делать dispatch, следить за воркерами, 

import {put} from 'redux-saga/effects'; 

put - это своего рода dispatch, который предназначен для асинхронных экшенов

## функции-генераторы
помечаются звездочкой function* и возвращают данные поэтапно 

function* generatorFunction() {
    for (let i = 0; i < 5; i++) {
        yield i
     }
}

const iter = generatorFunction()

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
