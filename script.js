document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = document.getElementById('close-modal');
    const modal = document.getElementById('modal');
    const fade = document.getElementById('fade');
  
    openModalButton.addEventListener('click', function () {
      openModal();
    });
  
    closeModalButton.addEventListener('click', function () {
      closeModal();
    });
  
    fade.addEventListener('click', function (event) {
      if (event.target === fade) {
        closeModal();
      }
    });
  
    function openModal() {
      modal.style.display = 'block';
      fade.style.display = 'block';
    }
  
    function closeModal() {
      modal.style.display = 'none';
      fade.style.display = 'none';
    }
  });
  