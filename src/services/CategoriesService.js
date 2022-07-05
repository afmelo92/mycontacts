import HttpClient from 'services/utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories() {
    return this.httpClient.get({ path: '/categories' });
  }
}

export default new CategoriesService();
