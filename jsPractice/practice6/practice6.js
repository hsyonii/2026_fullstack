const 팀 = [
    {'name':'철수','department':'개발팀'},
    {'name':'영희','department':'기획팀'},
    {'name':'민수','department':'개발팀'},
    {'name':'지혜','department':'기획팀'}
]
console.log(팀)
let 개발팀명단 = []
let 기획팀명단 = []
const 결과 = {}
for (i=0;i<=팀.length-1;i++){
    if(팀[i].department == '개발팀'){
        개발팀명단.push( 팀[i].name )
        console.log(개발팀명단)
    }
    else{
        기획팀명단.push( 팀[i].name )
        console.log(기획팀명단)
    }
}
결과.개발팀 = 개발팀명단
결과.기획팀 = 기획팀명단
console.log(결과)