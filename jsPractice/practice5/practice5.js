//문제1
const products={}
let 제품명 = prompt('제품명: ')
let 가격 = Number(prompt('가격: '))
let 제조사 = prompt('제조사: ')
//객체변수명.속성명 = 속성값
products.product = 제품명
products.price = 가격
products.made = 제조사
console.log(products)

//문제 2
let id = prompt('아이디: ')
let pw = prompt('비밀번호: ')
let name = prompt('이름: ')
const members=[{아이디:'soyeon', 비밀번호:'1234', 이름:'황소연'}]

members.아이디 = id
members.비밀번호 = pw
members.이름 = name

