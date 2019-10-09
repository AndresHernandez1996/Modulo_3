import axios from 'axios'
let baseURL

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://aqueous-scrubland-35857.herokuapp.com/contact')
  : (baseURL = 'http://localhost:3000/contact')

const SERVICE = axios.create({ withCredentials: true, baseURL })

const CONTACTS_SERVICE = {
  createContact: async contact => {
    return await SERVICE.post('/create-contact', contact)
  }
}

export default CONTACTS_SERVICE
