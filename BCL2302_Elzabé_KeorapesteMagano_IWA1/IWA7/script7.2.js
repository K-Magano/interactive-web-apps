const nickname = "Timmy"
const firstname = "Timothy" 

if (nickname === "Timmy"){
console.log (`Good Morning, ${nickname} !` )
    
} else if (firstname === "Timothy")
{
console.log (`Good Morning, ${firstname} !` )
    
} else(nickname && firstname === " ")
{
    console.log(`Good Morning`)
}
//console.log(`Good Morning, ${nickname} || ${firstname}!`) //logs 'Good Morning, Timmy ||Timothy!'

//using interpolation because its a string, used template literals to indicate it's a string