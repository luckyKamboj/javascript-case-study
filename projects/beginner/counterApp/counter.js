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
        if(parseInt(document.getElementById('count').innerHTML) >= 10){
        document.getElementById('increment').disabled = true;
    }else{
        document.getElementById('increment').disabled = false;
    }
    if(parseInt(document.getElementById('count').innerHTML) <= 0){
        document.getElementById('decrement').disabled = true;
    }else{
        document.getElementById('decrement').disabled = false;
    }
    if(parseInt(document.getElementById('count').innerHTML) === 0){
        document.getElementById('reset').disabled = true;
    }else{
        document.getElementById('reset').disabled = false;
    }
})