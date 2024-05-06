document.getElementById('register-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://127.0.0.1:3000/api/users/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password})
        });

        if (!response.ok) {
            throw new Error('Falha ao registrar: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Usuário registrado: ', data);
        alert(`Usuário ${name} registrado!`)
        window.location.href = 'http://127.0.0.1:3000/';
    } catch(err) {
        console.error('Erro ao registrar usuário: ', err.message);
        alert('Erro ao registrar usuário: ', err.message)
    }
});