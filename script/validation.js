const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentsInput = document.querySelector('#comments');

const validateName = (value) => {
    const nameError = document.querySelector('#contact-forms .contact-form-name .error');
    if (value.length < 2)
        nameError.style.display = 'block';
    else
        nameError.style.display = 'none';
}

const validateEmail = (value) => {
    const emailError = document.querySelector('#contact-forms .contact-form-email .error');
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(value))
        emailError.style.display = 'block';
    else
        emailError.style.display = 'none';
}

const validateComment = (value) => {
    const commentsError = document.querySelector('#contact-forms .contact-form-comments .error');
    if (value.length < 5)
        commentsError.style.display = 'block';
    else
        commentsError.style.display = 'none';
}

const handleSubmit = async (e) => {
    e.preventDefault(); 


    validateName(nameInput.value.trim());
    validateEmail(emailInput.value.trim());
    validateComment(commentsInput.value.trim());

    const nameError = document.querySelector('#contact-forms .contact-form-name .error');
    const emailError = document.querySelector('#contact-forms .contact-form-email .error');
    const commentsError = document.querySelector('#contact-forms .contact-form-comments .error');

    if (nameError.style.display === 'block' || emailError.style.display === 'block' || commentsError.style.display === 'block') {
        return;
    }

    const contactForm = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        comments: commentsInput.value.trim()
    };

    try {
        const res = await fetch('https://kyh-net22.azurewebsites.net/api/contacts', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactForm)
        });

        if (res.ok) {
            window.location.href = './submit.html';
        }
      } catch(error) {
        console.error(error);
      }
      
};

form.addEventListener('submit', handleSubmit);
nameInput.addEventListener('keyup', (e) => validateName(e.target.value.trim()));
emailInput.addEventListener('keyup', (e) => validateEmail(e.target.value.trim()));
commentsInput.addEventListener('keyup', (e) => validateComment(e.target.value.trim())); 
