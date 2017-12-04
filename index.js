#!/usr/bin/env node

const fs = require('fs')

const contactsJSONText = fs.readFileSync('./contacts.json', 'utf8')
const contacts = JSON.parse(contactsJSONText)

console.log(contacts)

