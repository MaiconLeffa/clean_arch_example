import { Coffe } from "../../domain/entities/coffe";
import { AxiosInstance } from "axios";

export class CoffesHttpGateway {
  http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  async getCoffes() {
    const response = await this.http.get("coffee/hot");
    const data = response.data as Coffe[];
    return data.map((coffe) => new Coffe(coffe));
  }
}
