const axios = require('axios');

const API_URL = 'http://localhost:5000';

async function verifyRBAC() {
    console.log('--- Starting RBAC Verification ---');

    try {
        // 1. Register a regular user
        console.log('\n[1] Registering regular user...');
        await axios.post(`${API_URL}/register`, {
            username: 'testuser',
            email: 'user@example.com',
            password: 'password123',
            role: 'user'
        }).catch(e => console.log('User might already exist, skipping...'));

        // 2. Register an admin user
        console.log('[2] Registering admin user...');
        await axios.post(`${API_URL}/register`, {
            username: 'testadmin',
            email: 'admin@example.com',
            password: 'admin123',
            role: 'admin'
        }).catch(e => console.log('Admin might already exist, skipping...'));

        // 3. Login as regular user
        console.log('\n[3] Logging in as regular user...');
        const userLogin = await axios.post(`${API_URL}/login`, {
            email: 'user@example.com',
            password: 'password123'
        });
        const userToken = userLogin.data.token;
        console.log('User logged in, token received.');

        // 4. Test user access to profile (Should succeed)
        console.log('[4] User accessing /user-profile...');
        const userProfile = await axios.get(`${API_URL}/user-profile`, {
            headers: { Authorization: `Bearer ${userToken}` }
        });
        console.log('Succeed:', userProfile.data.message);

        // 5. Test user access to admin-only (Should fail)
        console.log('[5] User accessing /admin-only (EXPECTED TO FAIL)...');
        try {
            await axios.get(`${API_URL}/admin-only`, {
                headers: { Authorization: `Bearer ${userToken}` }
            });
            console.error('FAILED: User should not have access to admin-only');
        } catch (error) {
            console.log('SUCCESS: Access Denied as expected:', error.response.data.message);
        }

        // 6. Login as admin
        console.log('\n[6] Logging in as admin...');
        const adminLogin = await axios.post(`${API_URL}/login`, {
            email: 'admin@example.com',
            password: 'admin123'
        });
        const adminToken = adminLogin.data.token;
        console.log('Admin logged in, token received.');

        // 7. Test admin access to admin-only (Should succeed)
        console.log('[7] Admin accessing /admin-only...');
        const adminOnly = await axios.get(`${API_URL}/admin-only`, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        console.log('Succeed:', adminOnly.data.message);

        // 8. Test admin access to mod-only (Should succeed)
        console.log('[8] Admin accessing /mod-only...');
        const modOnly = await axios.get(`${API_URL}/mod-only`, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        console.log('Succeed:', modOnly.data.message);

        console.log('\n--- RBAC Verification Completed Successfully ---');
    } catch (error) {
        console.error('\nVerification Error:', error.response?.data || error.message);
    }
}

verifyRBAC();
