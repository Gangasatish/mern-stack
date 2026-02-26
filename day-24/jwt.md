# What is JWT (JSON Web Token)
- It is a compact, signed token used to securely transmit information between client and server.

Example: After Login
- Server Created a JWT
- Client stores JWT
- Client send it with request
- Server will vwerify it
## Structure of JWT
A JWT has 3 parts that are separated by dots
- Header.Payload.Signature

Header:
- {"alg": "HS256", "typ": "JWT"}
Payload:
- {"id": 1, "name": "Clint"}
- Payload is not encrypted, it is just Base64 encoded
Signature: 
- Header + Payload + JWT_SECRET
- Prevent Tampering

JWT_SECRET:
- A JWT_SECRET is a private key stored on the server
It is used to:
- Sign the token(Creating a signature)
- Verify the Token

What is JWT Token?
A JWT Token is the final signed string that is sent to the client and which is used for authentication.

JWT SECRET
- Private
- Stored in the server only
-  Used to sign in and verify
- Must not be exposed

JWT Token
- Public (sent to client)
- Stored on client
- Used to authenticate
- Sent in headers

JWT is:
- Signed
- not encrypted
- Anyone can decode payload but cannot modify it without secret

Why do we use JWT?
- Authentication
- Stateless API's
- Microservices
- Mobile apps
- Cross-domain API's
- Scalable System

Traditional Way, using Session + Cookie flow
- User Logs in
- Server creates a session in database
- Server sends session ID in a cookie
- Browser send cookie automatically on every request
- Server will check session store

Problems:
- Server must store sessions
- Harder to scale horizontally
- needs to use redis or shared session storage


Stateless API
- A stateless API does not store clint session data on the server. Each request must contain all information needed to process it.

- GET /passwords
- Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

Cross-Domain API
- A cross domain api allows request between different domains and ports.

What is an origin?
Origin = Protocol + domain + port
if any of these gets changed, then we will get a new origin

We can store JWT in HTTP-only cookie