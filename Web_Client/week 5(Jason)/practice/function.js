function shout(text) {
    let shouty_text =text.toUpperCase()+'!!'
    return shouty_text
}

console.log(shout('hello world'))
let message =shout('hello web programmers')
console.log(message)

function f_to_c(f) {
    let  celsius=(f-32)*5/9
    return celsius.toFixed(2)
}

let todayTemp=75
todayCelsis=f_to_c(todayTemp)

console.log(todayCelsis + 'c' +
    '')

let className='Web Programing'
let classCode=2560
let department='ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)