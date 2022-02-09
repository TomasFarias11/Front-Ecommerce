class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleHola () {
        const message = this.createChatbotMessage('Hola! Es un gusto conocerle. Bienvenido a iGroup6! En que puedo ayudarle?')
        this.addMessageToState(message)
    }

    handleAyuda () {
        const message = this.createChatbotMessage("Puedes comunicarte con nuestro stuff debajo de la pagina en la parte de 'Mensaje Directo' con su inconveniente y nos pondremos en contacto contigo!")
        this.addMessageToState(message)
    }

    handleProducto (producto) {
        const message = this.createChatbotMessage(`Tenemos una coleccion de los mejores ${producto}! Puede buscar en la categoria ${producto} que se encuentra en la barra de navegacion superior.`)
        this.addMessageToState(message)
    }

    handleReformula () {
        const message = this.createChatbotMessage('Disculpe, no logro comprender lo que me pide. Podria reformular su pregunta?')
        this.addMessageToState(message)
    }

    handleAgradecer () {
        const message = this.createChatbotMessage('No hay problema! No dude en volver a consultar si tiene alguna otra duda!')
        this.addMessageToState(message)
    }

    handleOrders () {
        const message = this.createChatbotMessage('Puede ver su historial de ordenes haciendo click en la parte superior donde dice su nombre de usuario (debe estar logueado para poder tener acceso). Alli podra ver su perfil con el historial de todas sus ordenes!')
        this.addMessageToState(message)
    }

    handlePago () {
        const message = this.createChatbotMessage('Por el momento solo aceptamos MercadoPago.')
        this.addMessageToState(message)
    }

    handleGarantia () {
        const message = this.createChatbotMessage('Con la compra de su producto, obtiene una garantia de 6 meses por fallas de fabrica!')
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