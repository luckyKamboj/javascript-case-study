document.addEventListener('click', function(e){
   if(e.target.id === 'increment'){
       const count = document.getElementById('count').innerHTML;
       document.getElementById('count').innerHTML = parseInt(count) + 1;
   }
   if(e.target.id === 'decrement'){ 
       const count = document.getElementById('count').innerHTML;
       document.getElementById('count').innerHTML = parseInt(count) - 1;
   }
   if(e.target.id === 'reset'){
       const count = document.getElementById('count').innerHTML;
       document.getElementById('count').innerHTML = 0;
   }
})