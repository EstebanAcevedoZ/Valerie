document.getElementById('rsvp').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.init('Valerie'); // Replace with your EmailJS user ID
  
    const serviceID = 'service_mcvvfrr'; // Replace with your EmailJS service ID
    const templateID = 'template_ocnqr1c'; // Replace with your EmailJS template ID
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Mensaje enviado satisfactoriamente.');
      }, (error) => {
        alert('Error al enviar el mnsaje. intente más tarde');
        console.error('EmailJS error:', error);
      });
  });
  