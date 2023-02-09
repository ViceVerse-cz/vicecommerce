import { FulfillmentService } from "medusa-interfaces";

class ZasilkovnaService extends FulfillmentService {
  static identifier = "zasilkovna";

  constructor() {
    super();
  }

  async getFulfillmentOptions() {
    return [
      {
        id: "zasilkovna-delivery",
        name: "Zásilkovna - Doručení na adresu",
        is_return: false,
      },
      {
        id: "zasilkovna-box",
        name: "Zásilkovna - Box",
        is_return: false,
      },
    ];
  }

  validateFulfillmentData(_, data, cart) {
    return data;
  }

  validateOption(data) {
    return true;
  }

  canCalculate() {
    return false;
  }

  calculatePrice() {
    throw Error("Manual Fulfillment service cannot calculatePrice");
  }

  createOrder() {
    // No data is being sent anywhere
    return Promise.resolve({});
  }

  createReturn() {
    // No data is being sent anywhere
    return Promise.resolve({});
  }

  createFulfillment() {
    // No data is being sent anywhere
    return Promise.resolve({});
  }

  cancelFulfillment() {
    return Promise.resolve({});
  }
}

export default ZasilkovnaService;
