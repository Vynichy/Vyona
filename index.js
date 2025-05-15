const qrcode = require("qrcode-terminal");
const { LocalAuth, Client } = require("whatsapp-web.js");
const express = require("express");

const app = express();
const ports = process.env.PORT || 3000;

const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'Vyonen' })
})

client.on('qr', qr => qrcode.generate(qr, { small: true }))

app.listen(ports, () => console.log(ports))

client.initialize();