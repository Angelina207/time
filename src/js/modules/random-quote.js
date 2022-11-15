export function randomQuote() {
    (function() {
        const btnIcon = document.querySelector('.quote-btn-icon');
        const quotes = document.querySelectorAll('.quote-wrapp');
        
        let randQuote;
        let deg = 0;

        document.querySelector('.quote-btn-random').addEventListener('click', getRandQuote)

        function getRandQuote() {
            randQuote = quotes[Math.floor(Math.random() * quotes.length)];
            randQuote.style.opacity = '1';

            if (randQuote.style.opacity === '1') {
                for (let quote of quotes) {
                    quote.style.opacity = '0';
                }
                randQuote.style.opacity = '1';
            }
            rotateBtnIcon()
        }

        setInterval(getRandQuote, 15000)

        function rotateBtnIcon() {
            btnIcon.style.transform = `rotate(${deg += 180}deg)`;
        }
    })()    
}