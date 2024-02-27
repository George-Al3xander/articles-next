import CryptoJS from "crypto-js"
import "./db/config.ts"

const secretKey = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_SECRET_KEY!);
const aesIv = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_VECTOR!);
const aesOptions = {
    iv: aesIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  };
  
  

export const encode = (str: string) => {
    const ciphertext = CryptoJS.AES.encrypt(str, secretKey, aesOptions).ciphertext.toString();  
    return ciphertext
}

export const decode = (str: string) => {
    const encoded = {ciphertext: CryptoJS.enc.Hex.parse(str)} as  any;
    const decodedText = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(encoded, secretKey, aesOptions));
    return decodedText;
}



  


