class ContactController {
    index(request, response){
        // Listar todos os registros
        response.send('Sent from Contact Controller.');
    }

    show(){
        // Obter UM Registro
    }

    store(){
        // Criar novo registro
    }

    update() {
        // Editar um registro
    }

    delete(){
        // Deletar um registro
    }
}

// Singleton
module.exports = new ContactController();
