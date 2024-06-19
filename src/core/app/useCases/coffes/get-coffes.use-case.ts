import { CoffesHttpGateway } from "../../gateways/coffes";

export class GetCoffesUseCase {
  coffesGateway: CoffesHttpGateway;

  constructor(coffesGateway: CoffesHttpGateway) {
    this.coffesGateway = coffesGateway;
  }

  execute() {
    return this.coffesGateway.getCoffes();
  }
}
