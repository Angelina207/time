export function btnMoreOpen() {
    (function(){
        const timezone = document.querySelector('.timezone');
        const btnMore =  document.querySelector('.time__btn');
        const btnText =  document.querySelector('#more');
        const btnSvg = document.querySelector('.btn-more-svg');
        let bodyWidth = document.querySelector('html').clientWidth;

        document.querySelector('#more').addEventListener('click', () => {
            if (bodyWidth >= 768) {
                btnMore.style.top = '20%';
                btnText.innerHTML = 'LESS';
                btnSvg.style.transform = 'rotate(180deg)';
            } 
            
            if (timezone.className !== 'timezone is-open') {
                timezone.classList.add('is-open');
            } else {
                timezone.classList.remove('is-open');
                btnMore.style.top = '80%';
                btnText.innerHTML = 'MORE';
                btnSvg.style.transform = 'rotate(0deg)'
            }
        })
        // btn close
        document.querySelector('.timezone-btn-close').addEventListener('click', () => timezone.classList.remove('is-open'))
    })()
}