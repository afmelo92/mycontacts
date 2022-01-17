import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async getContact(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  async createContact(data) {
    return this.httpClient.post({ path: '/contacts', data });
  }
}

export default new ContactsService();
