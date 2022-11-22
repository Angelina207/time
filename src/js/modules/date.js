export function date() {
// get time
    (function() {
        const date = new Date();

        function getDate() {
            document.querySelector('#day').innerHTML = date.getDay();
        }
        getDate()

        // setInterval(() => {
        //     return minutes.innerHTML = getMinutes();
        // }, 1000)
    

    }) ()
}