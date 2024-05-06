document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://127.0.0.1:3000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
            throw new Error('Erro: ', + response.statusText);
        }

        const data = await response.json();
        console.log('Login efetuado: ', data);

        window.location.href = 'http://127.0.0.1:5000/';
    } catch(err) {
        console.error('Erro ao efetuar login: ', err.message);
    }
});