const { v4: uuidv4 } = require('uuid');

const contacts = [
    {
        id: uuidv4(),
        name: 'Joao',
        email: 'joao@mail.com',
        phone: '1233123123',
        category_id: uuidv4(),
    },
];

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }
}

module.exports = new ContactsRepository();
