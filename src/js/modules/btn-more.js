export function btnMoreOpen() {
    (function(){
        const timezone = document.querySelector('.timezone');
        const btnMore =  document.querySelector('.time__btn');
        const btnText =  document.querySelector('#more');
        const btnSvg = document.querySelector('.btn-more-svg');
        const quote = document.querySelector('.time__quote-block');
        const timeBlock = document.querySelector('.time');
        let bodyWidth = document.querySelector('html').clientWidth;

        document.querySelector('#more').addEventListener('click', () => {
            if (bodyWidth >= 768) {
                btnText.innerHTML = 'LESS';
                btnSvg.style.transform = 'rotate(180deg)';
                quote.classList.add('is-hidden');
                btnMore.style.top = '75%';
                timeBlock.style.transform = 'translateY(-300px)';
            } 
            
            if (timezone.className !== 'timezone is-open') {
                timezone.classList.add('is-open');
            } else {
                timezone.classList.remove('is-open');
                btnText.innerHTML = 'MORE';
                btnSvg.style.transform = 'rotate(0deg)';
                quote.classList.remove('is-hidden');
                btnMore.style.top = '80%';
                timeBlock.style.transform = 'translateY(0px)';
            }
        })
        // btn close
        document.querySelector('.timezone-btn-close').addEventListener('click', () => timezone.classList.remove('is-open'))
    })()
}