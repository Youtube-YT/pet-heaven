var buttons = document.querySelectorAll('.btn');
var cards = document.querySelectorAll('.item');
var searchBar = document.querySelector('input');
var change = document.querySelector('.change');
console.log(searchBar);



buttons.forEach(function (button){

    button.addEventListener('click', function () {
        var btnClick = button.textContent.toLowerCase();
                    cards.forEach(function (card){
        if (btnClick == 'all') {
            change.textContent = 'member';
                card.style.display = 'block';
            
        } else {
                if (card.classList.contains(btnClick)) {
                    card.style.display = 'block';
                    change.textContent = btnClick;
                } else {
                    card.style.display = 'none';
                }
                
            }
        })
    });
})


searchBar.addEventListener('keyup', function (event){
    var userInput = event.target.value.toLowerCase().trim()
    cards.forEach(function (card){
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block';
        } else {
            card.style.display= 'none';
    
        }
    });
});

// console.log(cards[0].textContent.toLowerCase().trim());
