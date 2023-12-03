const fs = require("fs");
const { ethers } = require("ethers");

async function createEncryptedJsonWithPassword(mnemonic, password, filePath) {
  try {
    const wallet = new ethers.Wallet.fromMnemonic(mnemonic);
    const encryptedJson = await wallet.encrypt(password);
    fs.writeFileSync(filePath, JSON.stringify(encryptedJson, null, 2), "utf-8");

    console.log("Encrypted JSON file created successfully:", filePath);
  } catch (error) {
    console.error("Error creating encrypted JSON file:", error.message);
    throw error;
  }
}

// Example usage
const mnemonic =
  "miss spice seek tornado echo coffee collect route acid author nation catch"; // Replace with your actual mnemonic
const password = "ABASLKDJ@123";
const filePath = "src/files/mnemonic_encrypted.json";

createEncryptedJsonWithPassword(mnemonic, password, filePath);
