document.addEventListener('DOMContentLoaded', function(){
   document.getElementById('increase').addEventListener('click', function(){
       let val = document.getElementById('cValue').innerHTML;
       val = parseInt(val);
       val = val + 1;
        document.getElementById('cValue').innerHTML = val;
   })
   document.getElementById('decrease').addEventListener('click', function(){
    let val = document.getElementById('cValue').innerHTML;
    val = parseInt(val);
    val = val - 1;
     document.getElementById('cValue').innerHTML = val;
})
 
})

