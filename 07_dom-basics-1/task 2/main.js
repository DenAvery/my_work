(function () {
    document.addEventListener('DOMContentLoaded', function() {

        let body = document.body;
        let input = document.createElement('input');
        let title = document.createElement('h2');

        
        body.append(title);
        body.append(input);
        

        function textTransform() {
            title.textContent = input.value;         
        }

        

        function delay () {
            let timeoutID = setTimeout(textTransform, 300);
        }


        
        input.addEventListener('input', delay);







    })
}) ();