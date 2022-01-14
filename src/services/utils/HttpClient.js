import { delay } from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    await delay(2000);

    return response.json();
  }

  async post({ path, data }) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: data,
    });

    await delay(2000);

    return response.json();
  }
}

export default HttpClient;
