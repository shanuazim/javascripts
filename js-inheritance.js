function computer(){
    var _cpu = 4
    var c = {}
    c.getCPU = function({
        
    })
    c.cpu = 4
    c.RAM = 8
    c.hdd =  500
    c.bootup = function() {
        console.log('starting up ...') 
    }

    return c
 }
 myComputer = computer()
 console.log(myComputer)
 myComputer.bootup()

 //function Computer() {
//this.cpu = 4 //4 cores
//this.RAM = 8 //GB
//this.hdd = 500 // Gb
////}

//Computer.prototype.bootup = function() {
 //   console.log('starting up ...')
//}
//var myComputer = new Computer()
//console.log(myComputer)
//myComputer.bootup()
