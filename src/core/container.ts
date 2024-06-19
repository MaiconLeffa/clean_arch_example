import { http } from "./infra";
import { GetCoffesUseCase } from "./app/useCases/coffes/get-coffes.use-case";
import { CoffesHttpGateway } from "./app/gateways/coffes";

export class ContainerRegistry {
  http = http;

  //gateways ----
  CoffesHttpGateway = new CoffesHttpGateway(http);
  //use cases ----
  GetCoffesUseCase = new GetCoffesUseCase(this.CoffesHttpGateway);
}
