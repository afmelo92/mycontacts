import HttpClient from 'services/utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get({
      path: `/contacts?orderBy=${orderBy}`,
    });
  }

  getContactById(id) {
    return this.httpClient.get({ path: `/contacts/${id}` });
  }

  updateContact({ id, data }) {
    return this.httpClient.put({
      path: `/contacts/${id}`,
      options: {
        data,
      },
    });
  }

  createContact({ data }) {
    return this.httpClient.post({
      path: '/contacts',
      options: {
        data,
      },
    });
  }

  deleteContact(id) {
    return this.httpClient.delete({ path: `/contacts/${id}` });
  }
}

export default new ContactsService();
