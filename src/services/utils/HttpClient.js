import { delay } from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(2000);

    const response = await fetch(`${this.baseURL}${path}`);

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} :::: ${response.statusText}`);
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
