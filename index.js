
// modal component starts
document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: true,
        backdrop: 'static' // Prevent clicking outside to close
    });
    myModal.show();

    document.getElementById('closeModalButton').addEventListener('click', function () {
        myModal.hide();
    });
});


// typing component
document.addEventListener('DOMContentLoaded', function() {
    const captionElement = document.getElementById('typing-caption');
    const text = captionElement.textContent;
    const speed = 100; 
    let index = 0;
    captionElement.textContent = '';

    function type() {
        if (index < text.length) {
          
            captionElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
});


