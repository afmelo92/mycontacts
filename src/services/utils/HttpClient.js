/* eslint-disable no-restricted-syntax */
import APIError from 'errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async makeRequest({ path, options }) {
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => headers.append(key, value));
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options?.body),
      headers,
    });

    let body = null;

    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    return APIError('Houve um erro ao executar a request.');
  }

  get({ path, options }) {
    return this.makeRequest({
      path,
      options: {
        method: 'GET',
        headers: options?.headers,
      },
    });
  }

  put({ path, options }) {
    return this.makeRequest({
      path,
      options: {
        method: 'PUT',
        headers: options?.headers,
        body: options?.data,
      },
    });
  }

  post({ path, options }) {
    return this.makeRequest({
      path,
      options: {
        method: 'POST',
        headers: options?.headers,
        body: options?.data,
      },
    });
  }

  delete({ path, options }) {
    return this.makeRequest({
      path,
      options: {
        method: 'POST',
        headers: options.headers,
      },
    });
  }
}

export default HttpClient;
