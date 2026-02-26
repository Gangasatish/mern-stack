const axios = require('axios');

async function debugRegister() {
    const randomEmail = `test${Date.now()}@example.com`;
    const userData = {
        username: 'debugUser',
        email: randomEmail,
        password: 'password123'
    };

    try {
        console.log(`Attempting to register with email: ${randomEmail}`);
        const res = await axios.post('http://localhost:5000/register', userData);
        console.log('SUCCESS:', res.status, res.data);
    } catch (error) {
        console.error('FAILURE:', error.response ? error.response.data : error.message);
    }
}

debugRegister();
