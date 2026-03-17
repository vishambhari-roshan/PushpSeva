// scripts.js

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Tab Navigation
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const contentId = tab.getAttribute('data-content');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(contentId).style.display = 'block';
    });
});

// Interactive Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = { };
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log('Form submitted:', data);
    // Further processing like sending data to server can be done here
});

// WhatsApp Message Generation
const generateWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};

// Example usage:
const sendMessageBtn = document.querySelector('#sendMessage');
sendMessageBtn.addEventListener('click', () => {
    generateWhatsAppMessage('Hello! How can I help you?');
});
