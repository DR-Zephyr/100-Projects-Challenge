const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const deleteMessage = (message) => {
    setTimeout(() => {
        message.textContent = '';
    }, 5000);
};

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            'service_6swv5z',
            'template_g1lfj3r',
            '#contact-form',
            'XsaMvJt-gAPLmB__L'
        )
        .then(
            () => {
                contactMessage.textContent = 'Mensaje enviado exitosamente ✅';
                deleteMessage(contactMessage);
                contactForm.reset();
            },
            () => {
                contactMessage.textContent =
                    'Mensaje no se ha enviado exitosamente 📛';
                deleteMessage(contactMessage);
            }
        );
};
contactForm.addEventListener('submit', sendEmail);
