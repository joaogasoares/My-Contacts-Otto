const { v4 } = require('uuid');

let contacts = [
    {
        id: v4(),
        name: 'Joao',
        email: 'joao@mail.com',
        phone: '1233123123',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Joana',
        email: 'joana@mail.com',
        phone: '6574533',
        category_id: v4(),
    },
];

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }

    findById(id) {
        return new Promise((resolve) => {
            resolve(contacts.find((contact) => contact.id === id));
        });
    }

    findByEmail(email) {
        return new Promise((resolve) => {
            resolve(contacts.find((contact) => contact.email === email));
        });
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        });
    }

    create({ name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id: category_id || v4(), // Gera um novo se não for fornecido.
            };

            contacts.push(newContact);
            resolve(newContact);
        });
    }

    update( id, { name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id: category_id || v4(), // Gera um novo se não for fornecido.
            };

            contacts = contacts.map((contact) =>(
                contact.id === id ? updatedContact : contact
            ));

            resolve(updatedContact);
        });
    }
}

module.exports = new ContactsRepository();
