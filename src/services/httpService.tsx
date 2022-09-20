import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default abstract class HttpService {
  protected $axios: AxiosInstance;
  protected headers: { [key: string]: string };

  constructor(config: AxiosRequestConfig) {
    this.$axios = Axios.create(config);
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    if (process.browser) {
      this.loadTokens();
    }
  }

  protected loadTokens(): void {
    const accessToken = ''

    if (typeof accessToken === 'string') {
      this.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }
}
