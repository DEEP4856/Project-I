
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