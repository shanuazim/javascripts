console.log('my accounts', getAccounts())

function getAccounts(){
    console.log('Hello')
    return [1,2,3]
        
    }

function f(){ //named function 
//console.log(this)
return 1
}
var a =1
var r = function(){ //anonymous function
var b= 2
console.log('a', a)
console.log('b', b)
return 1
}

f();

var z =10
if(typeof(z) =='undefined') {
    console.log('z is defined and the value is ' + z)
}
//console.log('a', a)

var arr = ['a','b','c']
arr.x = 1
console.log(Object.keys(arr))
console.log(arr[0], arr.x)

arr.forEach(function(item, i, list){
    console.log('<p>' + item + '</p>')
})

for(var i =0; i<arr.length; i++){
    console.log('<p>' + arr[i] + '</p>')
}


