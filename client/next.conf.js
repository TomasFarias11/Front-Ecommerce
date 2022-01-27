require('dotenv').config()

module.exports = {
    env: {
        baseURL = process.env.REACT_APP_API || "http://localhost:3001"
    }
}