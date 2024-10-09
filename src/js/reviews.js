const btn = document.querySelector('#button-reviews');

if(btn){
    const reviewsCol = document.querySelectorAll('.reviews__col');

    btn.addEventListener('click', function (){
        for(let i = 0; i < reviewsCol.length; i++){
            reviewsCol[i].style.display = 'flex';
            btn.style.display = 'none';
        }
    });
}
