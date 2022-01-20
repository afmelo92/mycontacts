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

  async updateContact({ id, data }) {
    return this.httpClient.put({ path: `/contacts/${id}`, data });
  }

  async createContact({ data }) {
    return this.httpClient.post({ path: '/contacts', data });
  }

  async deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
