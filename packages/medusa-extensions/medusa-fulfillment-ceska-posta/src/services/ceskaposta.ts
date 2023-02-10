import { Cart, Data, Fulfillment, LineItem, Order } from "@medusajs/medusa";
import { FulfillmentService } from "medusa-interfaces";

class ZasilkovnaService extends FulfillmentService {
  static identifier = "ceskaposta";

  apikey: string;
  secretKey: string;

  // rome-ignore lint/correctness/noEmptyPattern: <Extends base medusa project>
  constructor({}, options: { apiKey: string; secretKey: string }) {
    super();

    this.apikey = options.apiKey;
    this.secretKey = options.secretKey;
  }

  async getFulfillmentOptions() {
    return [
      {
        id: "ceskaposta-balik-do-ruky",
        name: "Česká Pošta - Balík do ruky",
        is_return: false,
      },
      {
        id: "ceskaposta-balik-na-postu",
        name: "Česká Pošta - Balík do ruky",
        is_return: false,
      },
      {
        id: "ceskaposta-balikovna",
        name: "Česká Pošta - Balíkovna",
        is_return: false,
      },
    ];
  }

  validateFulfillmentData(_, data: Data, cart: Cart) {
    console.log("validate_fulfillment");
    return data;
  }

  validateOption(data: Data) {
    console.log("validate_option");
    return true;
  }

  canCalculate() {
    console.log("can_calculate");
    return false;
  }

  calculatePrice() {
    console.log("calculate_price");
    throw Error("Manual Fulfillment service cannot calculatePrice");
  }

  createReturn() {
    // No data is being sent anywhere

    console.log("create return");
    return Promise.resolve({});
  }

  async createFulfillment(data: Data, items: LineItem[], order: Order, fulfillment: Fulfillment): Promise<void> {
    return Promise.resolve();
  }

  cancelFulfillment() {
    console.log("cancel fulfillment");
    return Promise.resolve({});
  }
}

export default ZasilkovnaService;
