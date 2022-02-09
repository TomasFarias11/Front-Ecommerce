class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowercase = message.toLowerCase();

        if (lowercase.includes('hola')) {
          this.actionProvider.handleHola()
        } else if (lowercase.includes('ayuda')) {
            this.actionProvider.handleAyuda()
        } else if (lowercase.includes('iphone')) {
            this.actionProvider.handleProducto('iPhone')
        } else if (lowercase.includes('ipad')) {
            this.actionProvider.handleProducto('iPad')
        } else if (lowercase.includes('watch')) {
            this.actionProvider.handleProducto('Apple Watch')
        } else if (lowercase.includes('macbook')) {
            this.actionProvider.handleProducto('Macbook')
        } else if (lowercase.includes('tv')) {
            this.actionProvider.handleProducto('TV & Home')
        } else if (lowercase.includes('homepod')) {
            this.actionProvider.handleProducto('TV & Home')
        } else if (lowercase.includes('airpods')) {
            this.actionProvider.handleProducto('Airpods')
        } else if (lowercase.includes('gracias') || lowercase.includes('perdon') || lowercase.includes('disculpe') || lowercase.includes('adios')) {
            this.actionProvider.handleAgradecer()
        } else if (lowercase.includes('orden') || lowercase.includes('ordenes')) {
            this.actionProvider.handleOrders()
        } else if (lowercase.includes('pagos') || lowercase.includes('pago') || lowercase.includes('pagar') || lowercase.includes('paga')) {
            this.actionProvider.handlePago()
        } else if (lowercase.includes('garantias') || lowercase.includes('garantia')) {
            this.actionProvider.handleGarantia()
        }
        else {
            this.actionProvider.handleReformula()
        }
    }
  }

export default MessageParser