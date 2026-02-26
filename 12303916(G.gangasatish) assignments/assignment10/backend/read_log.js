const fs = require('fs');

try {
    const content = fs.readFileSync('server.log', 'utf8'); // or 'utf16le' if needed
    // If it's utf16le, fs might not auto-detect if not BOM. PowerShell uses UTF-16LE by default.
    // Let's try to read it blindly.
    console.log(content);
} catch (e) {
    // Try reading as utf16le
    const content = fs.readFileSync('server.log', 'utf16le');
    console.log(content);
}
