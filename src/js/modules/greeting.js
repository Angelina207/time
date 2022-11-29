export function greetingPage() {
    (function() {
        const date = new Date();

        // Timezone and greeting
        const timezone = document.querySelector('.timezone');
        const greetingText = document.querySelector('.time-current');

        // Icons
        const moonIcon = document.querySelector('.time-welcome-moon-icon');
        const sunIcon = document.querySelector('.time-welcome-sun-icon');

        // Background
        const morningBcg = document.querySelector('.parallax-bc-sun');
        const nightBcg = document.querySelector('.parallax-bc-moon');

        let currHours = document.querySelector('#hours');
        let minutes = document.querySelector('#minutes');
        
        // Update time
        setInterval(() => {
            hours.innerHTML = addZero(new Date().getHours().toLocaleString());
            minutes.innerHTML = addZero(new Date().getMinutes().toLocaleString());
        }, 2000)

        // Set hours
        function getCurrHours() {
            return currHours.innerHTML = addZero(date.getHours());
        }
        getCurrHours()

        // Set minutes
        function getMinutes() {
            return minutes.innerHTML = addZero(date.getMinutes());
        }
        getMinutes()

        // Display greeting based on time of day
        function setGreeting(time) {            
            if (time >= 6 && time <= 10) {
                greetingText.innerHTML = 'GOOD MORNING';
                timezone.removeAttribute('id', 'is-dark');

                showCurrElem(sunIcon, moonIcon)
                showCurrElem(morningBcg, nightBcg)
            } 
            else if (time >= 10 && time < 16) {
                greetingText.innerHTML = 'GOOD AFTERNOON';

                showCurrElem(sunIcon, moonIcon)
                showCurrElem(morningBcg, nightBcg)
            } 
            else if (time >= 16 && time < 22) {
                greetingText.innerHTML = 'GOOD EVENING';
                timezone.setAttribute('id', 'is-dark');

                showCurrElem(moonIcon, sunIcon)
                showCurrElem(nightBcg, morningBcg)
            } 
            else if ((time >= 22) || (time < 6))  {
                greetingText.innerHTML = 'GOOD NIGHT';
                timezone.setAttribute('id', 'is-dark');

                showCurrElem(moonIcon, sunIcon)
                showCurrElem(nightBcg, morningBcg)
            } 
        }
        setGreeting(getCurrHours())

        // Number < 10 => add zero
        function addZero(num) {
            return num < 10 ? '0' + num : num
        }

        // Display / Hidden
        function showCurrElem (display, hidden) {
            display.style.display = 'block';
            hidden.style.display = 'none';
        }
    })()
}