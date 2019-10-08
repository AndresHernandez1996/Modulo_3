import axios from 'axios'
let baseURL

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/contact')

const SERVICE = axios.create({ withCredentials: true, baseURL })

const CONTACTS_SERVICE = {
  createContact: async contact => {
    return await SERVICE.post('/create-contact', contact)
  }
}

export default CONTACTS_SERVICE
