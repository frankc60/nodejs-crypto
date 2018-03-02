const crypto = require('crypto'),
    algorithm = 'aes-128-cbc',
    pwd = 'secretpwd';

const encrypted = (text) => {
  const cipher = crypto.createCipher(algorithm,pwd);
  let crypted = cipher.update(text,'utf8','hex');
  crypted += cipher.final('hex');
  return crypted;
}
 
const decrypted = (text) => {
  const decipher = crypto.createDecipher(algorithm,pwd);
  let decd = decipher.update(text,'hex','utf8');
  decd += decipher.final('utf8');
  return decd;
}
 
let secret = "this is a secret note, shhh";
let makeSecret = encrypted(secret);

console.log(`using nodejs built in module 'crypto',

secret is '${secret}'

encrypted to '${encrypted(secret)}'

now decrypt back to '${decrypted(makeSecret)}'
`);

