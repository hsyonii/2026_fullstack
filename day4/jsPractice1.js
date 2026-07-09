<<<<<<< HEAD
//문제1
let fruitList = ['사과', '바나나']
let newFruit = prompt('과일 이름: ')
if (fruitList.includes(`${newFruit}`))
    console.log('이미존재하는 과일 입니다.')
else{
    fruitList.push(`${newFruit}`)
    console.log(`${fruitList}`)
}

//문제2
let num = prompt ('주민번호: ')
if (num[6] == 1 || num[6] == 3)
    console.log('blue')
else if (num[6] == 2 || num[6] == 4)
    console.log('red')

//문제3
let totalPrice = Number(prompt('총 구매 금액: '))
if (totalPrice<10000)
    console.log(`최종 결제 금액: ${totalPrice}원`)
else if(totalPrice>=10000 && totalPrice<30000)
    console.log(`최종 결제 금액: ${totalPrice*0.99}원`)
else if(totalPrice>=30000 && totalPrice<50000)
    console.log(`최종 결제 금액: ${totalPrice*0.95}원`)
else if(totalPrice>=50000)
    console.log(`최종 결제 금액: ${totalPrice*0.9}원`)

//문제4
let month = Number(prompt('월(month)를 입력하세요.'))
if (3<=month && month<=5)
    console.log('봄')
else if(6<=month && month<=8)
    console.log('여름')
else if(9<=month && month<=11)
    console.log('가을')
else if(12 ==month ||  month==1 || month==2)
    console.log('겨울')
else
=======
//문제1
let fruitList = ['사과', '바나나']
let newFruit = prompt('과일 이름: ')
if (fruitList.includes(`${newFruit}`))
    console.log('이미존재하는 과일 입니다.')
else{
    fruitList.push(`${newFruit}`)
    console.log(`${fruitList}`)
}

//문제2
let num = prompt ('주민번호: ')
if (num[6] == 1 || num[6] == 3)
    console.log('blue')
else if (num[6] == 2 || num[6] == 4)
    console.log('red')

//문제3
let totalPrice = Number(prompt('총 구매 금액: '))
if (totalPrice<10000)
    console.log(`최종 결제 금액: ${totalPrice}원`)
else if(totalPrice>=10000 && totalPrice<30000)
    console.log(`최종 결제 금액: ${totalPrice*0.99}원`)
else if(totalPrice>=30000 && totalPrice<50000)
    console.log(`최종 결제 금액: ${totalPrice*0.95}원`)
else if(totalPrice>=50000)
    console.log(`최종 결제 금액: ${totalPrice*0.9}원`)

//문제4
let month = Number(prompt('월(month)를 입력하세요.'))
if (3<=month && month<=5)
    console.log('봄')
else if(6<=month && month<=8)
    console.log('여름')
else if(9<=month && month<=11)
    console.log('가을')
else if(12 ==month ||  month==1 || month==2)
    console.log('겨울')
else
>>>>>>> 105b91f3fac7ebaf42bb1d8c704cfa30fabb4b3f
    console.log