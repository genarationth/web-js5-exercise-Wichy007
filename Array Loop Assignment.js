// Exercise 1
// part 1
let waitingList = ['Sofia','David','Juan']
// part 2
waitingList.push('Sara','Augustin')
waitingList.shift()
// part 3
waitingList[0] = 'Renata'
waitingList.push('Elena')
console.log(waitingList)

// Exercise 2
let result = ""
for(i=0;i<5;i++){
    console.log(result += '*'+' ')
}

// Exercise3
// part 1
let xValue = 10
while (xValue>0){
    console.log(xValue -= 0.5)
}
// part 2
let number = 1;
while (number<100){
    if(number%2===0){
        number++
        continue;
    }else{
        console.log(number)
    }
    number++
}
// part 3
let n = 6
let round = 1
while(round<=n){
    console.log([round])
    round++
}
// part 4
let sum = 0
let times = 10
while(times>0){
    sum += times
    times--
}
console.log(sum)
