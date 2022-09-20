import { AxiosRequestConfig } from "axios";
import { IProduct} from "../interfaces/state/product";
import HttpService from "./httpService";

export default class PropertyService extends HttpService {
    constructor(config: AxiosRequestConfig) {
        super(config);
      }
     
      async getProperties(): Promise<IProduct[]> {
        const { data } = await this.$axios.get(`api/property`);
        return data;
      }

}