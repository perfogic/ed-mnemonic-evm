const fs = require("fs");
const { ethers } = require("ethers");

async function decodeMnemonicFromJson(filePath, password) {
  try {
    const encryptedJson = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const wallet = await ethers.Wallet.fromEncryptedJson(
      encryptedJson,
      password
    );
    const mnemonic = wallet.mnemonic.phrase;
    return mnemonic;
  } catch (error) {
    console.error("Error reading mnemonic from encrypted JSON:", error.message);
    throw error;
  }
}

const password = "ABASLKDJ@123";
const filePath = "src/files/mnemonic_encrypted.json";

decodeMnemonicFromJson(filePath, password).then((res) => {
  console.log("Your mnemonic is:", res);
});
