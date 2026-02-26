import bcrypt from 'bcrypt';
// Bcrypt uses EksBlowfish 
// algorithm which is based on Blowfish Cipher
// Eks - Expensive Key Setup(makes brute force slow)
// Blowfish - Symmetric block Cipher
/*
Steps:
1. Takes your password
2. Generate a random salt
3. Uses EksBlowfish Algorithm
4. Repeatedly hashes the text beased on salt rounds.
5. Produce the hash.
*/

// SHA-256 - Everyone with the same password will also have the same hash string
// Bcrypt - Everyone with the same password will have different hash.

// IMPORTANT - Once hashed, the original data cannot be recovered.

// salt - It is a random value that is added to a string before hashing to make each hash unique

const password = 'abcd1234';
console.log(`Password before hasihng: ${password}`);
const hashPassword = await bcrypt.hash(password, 10)

// rounds:
// 1. greater the number, more secure but hashes slowly
// 2. lesser the number, less secure but hashes quickly
// 2^10 iterations = 1024 rounds
const password2 = 'abcde12345';
console.log(`Password after hashing: ${hashPassword}`);

const isMatch = await bcrypt.compare(password, hashPassword)

if (isMatch) {
    console.log("You are Logged in!")
}
else{
    console.log("Invalid credentials")
}

/* Bcrypt:
1. Generate a random salt
2. Combine the password with the salt
3. hashed it
4. Store both the salt and hash together

Ex: $2b$10$h.hYgAC2xIuJZaxWtb.dl.x02E.OYwKbVqI55vmD5iixLC6cCIYuG
$2b$ - version
10 - cost factor/rounds
$h.hYgAC2xIuJZaxWtb.dl.x02E. - salt
OYwKbVqI55vmD5iixLC6cCIYuG - actual data
*/

/*
When Using bcrypt.compare():
1. Extract the salt from stored hash
2. Extract the cost factor/rounds
3. hash again using the same salt
4. Compare the new hash with the stored hash
if equal - return true, else - return false 
*/

// Generates salt separately
const salt = await bcrypt.genSalt(12);
console.log("Salt: ", salt);
const pass2 = 'qwerty1234567!@#$%^'
const hashPassword2 = await bcrypt.hash(pass2, salt)
console.log("Password:", hashPassword2);