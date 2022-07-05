import HttpClient from 'services/utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get({
      path: `/contacts?orderBy=${orderBy}`,
    });
  }

  async getContact(id) {
    return this.httpClient.get({ path: `/contacts/${id}` });
  }

  async updateContact({ id, data }) {
    return this.httpClient.put({
      path: `/contacts/${id}`,
      options: {
        data,
      },
    });
  }

  async createContact({ data }) {
    return this.httpClient.post({
      path: '/contacts',
      options: {
        data,
      },
    });
  }

  async deleteContact(id) {
    return this.httpClient.delete({ path: `/contacts/${id}` });
  }
}

export default new ContactsService();
