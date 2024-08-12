document.getElementById('btnEnviar').addEventListener('click', function() {
    const form1 = document.getElementById('form1').value;
    const form2 = document.getElementById('form2').value;
    const form3 = document.getElementById('form3').value;

    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ form1, form2, form3 }),
    })
    .then(response => response.text())
    .then(data => {
        alert('Email enviado com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar o email:', error);
    });
});