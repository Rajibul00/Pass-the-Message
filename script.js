let input = document.querySelector('input');
let output= document.querySelector('#output');
document.querySelector('.container').addEventListener('keydown',function(eventt){
    if(eventt.key == 'Enter'){
        submit()
    }
    })
function submit(){
   if(input.value!=""){
    output.innerText = input.value
   }else{
    alert('Please Enter Some Text')
   }
}
