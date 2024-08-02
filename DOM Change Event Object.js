


document.addEventListener("DOMContentLoaded", function() {
     
    document.querySelector('input[name="email"]').addEventListener("change", function() {
         console.log(this.name);
         console.log(this.value);
    });

    document.querySelectorAll('input[name="language"]').forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked)
            {
                console.log(input.value);
            }
            
    });

    document.querySelector("select").addEventListener("change", function() {
            console.log(this.value);
       });
        
    });
    

});



