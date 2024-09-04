document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Obavezno polje';
        isValid = false;
    }

    // Regex za detektiranje valjanih znakova u email adresi.
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
        if (email === '') {
                document.getElementById('emailError').textContent = 'Obavezno polje';
                isValid = false;
        } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Molim upišite validan email';
                isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Obavezno polje';
        isValid = false;
    }

    if (isValid) {
        alert('Poruka uspješno poslana!');
    }
});