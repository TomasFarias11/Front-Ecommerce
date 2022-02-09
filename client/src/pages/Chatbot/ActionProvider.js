class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleHola () {
        const message = this.createChatbotMessage('Hola! Es un gusto conocerte. Bienvenido a iGroup6! En que puedo ayudarte?')
        this.addMessageToState(message)
    }

    handleAyuda () {
        const message = this.createChatbotMessage("Puedes comunicarte con nuestro stuff debajo de la pagina en la parte de 'Mensaje Directo' con su inconveniente y nos pondremos en contacto contigo!")
        this.addMessageToState(message)
    }

    handleProducto (producto) {
        const message = this.createChatbotMessage(`Tenemos una coleccion de los mejores ${producto}. Puede buscar en la categoria ${producto} que se encuentra en la barra de navegacion superior`)
        this.addMessageToState(message)
    }

    handleReformula () {
        const message = this.createChatbotMessage('Disculpa, no logro comprender lo que me pide. Podria reformular su pregunta?')
        this.addMessageToState(message)
    }

    handleAgradecer () {
        const message = this.createChatbotMessage('No hay problema! No dude en volver a consultar si tiene alguna otra duda!')
        this.addMessageToState(message)
    }

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }) )
    }

  }
  
  export default ActionProvider;