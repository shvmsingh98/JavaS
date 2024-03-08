
    const body = document.querySelector('body')
    const button  = document.querySelectorAll('.button')
    button.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id === 'grey')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow')
        {
            body.style.backgroundColor = e.target.id;
        } 
    });
});
    // if(button.id === 'grey')
    // {
    //     body.style.backgroundColor = button.id;
    // }
    // // if(button.id[1] === 'white')
    // // {
    // //     body.style.backgroundColor = button.id;
    // // }
    // // if(button.id[2] === 'blue')
    // // {
    // //     body.style.backgroundColor = button.id;
    // // }
    // // if(button.id[3] === 'yellow')
    // // {
    // //     body.style.backgroundColor = button.id;
    // // }
