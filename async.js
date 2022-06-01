import { reject, resolve } from "core-js/fn/promise"

// 동기, 비동기 promise, async await 테스트 코드
function a() {
    console.log('a')
}
function b() {
    console('b')
}
a() //a
b() //b

function a() {
    setTimeout(function () {
        console.log('a')
    }, 1000)
}
function b() {
    console.log('b')
}
a()
b()
//b
//a

//callback
function a(cb) { //cb : callack
    setTimeout(function () {
        console.log('a')
        cb()
    }, 1000)
}

function b() {
    console.log('b')
}

a(function () {
    b()
})
//a
//b


//콜백 지옥
function a(cb) { 
    setTimeout(function () {
        console.log('a')
        cb()
    }, 1000)
}

function b(cb) { 
    setTimeout(function () {
        console.log('b')
        cb()
    }, 1000)
}

function c(cb) { 
    setTimeout(function () {
        console.log('c')
        cb()
    }, 1000)
}

function d(cb) { 
    setTimeout(function () {
        console.log('d')
        cb()
    }, 1000)
}

a(function () {
    b(function () {
        c(function () {
            d()
        })
    })
})


//promise 객체
function a() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('a')
            resolve()
        }, 1000)
    })
}

function b() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('b')
            resolve()
        }, 1000)
    })
}

function c() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('c')
            resolve()
        }, 1000)
    })
}

function d() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('d')
            resolve()
        }, 1000)
    })
}

a()
    .then(() => b())
    .then(() => c())
    .then(() => d())


//async    
async function asyncFunc(){ //await는 async함수 안에서 돌아
    await a()
    await b()
    await c()
    await d()
    console.log('done')
}

//reject
function a() {
    return new Promise((resolve) => {
        if (isError) {
            reject('Error message!')
        }
        setTimeout(() => {
            console.log('a')
            resolve('done')
        }, 1000)
    })
}

a()
    .then((res) => {
        console.log(res)
    })
    .catch(() => {
        console.log(error)
        alert(error.message)
    })
    .finally(() => {
        console.log('done!')
    }) 

    async function asyncFunc(){
        try {
            const res = await a()
            console.log(res)
        } catch (error) {
            console.log(error)
            alert(error.message)
        } finally {
            console.log('done!')
        }
    }
    asyncFunc()