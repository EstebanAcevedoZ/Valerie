emailjs.init('Valerie');
emailjs.send("service_mcvvfrr","template_ocnqr1c", {
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'Hello, this is a test message!'
}).then(response => {
    console.log('Success!', response.status, response.text);
}).catch(error => {
    console.error('Failed...', error);
});
