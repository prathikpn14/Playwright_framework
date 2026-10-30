//random digit with length
function random6DigitInteger(){
    return Math.floor(Math.random()*Math.pow(10,7))+1
}
export {random6DigitInteger}