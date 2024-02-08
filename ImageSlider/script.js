let counter =1;
setInterval(function(){
    if(counter>4){
        counter=1;
    }
    document.getElementById('radio' + counter).checked = true;
    counter++;
},3000);