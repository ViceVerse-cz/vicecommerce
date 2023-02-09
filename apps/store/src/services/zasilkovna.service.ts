import { Cart, Data } from "@medusajs/medusa";
import { FulfillmentService } from "medusa-interfaces";

export default class ZasilkovnaFulfillment extends FulfillmentService {
  static identifier = "zasilkovna-fulfillment";

  constructor() {
    super();
  }

  override async getFulfillmentOptions() {
    return [
      {
        id: "zasilkovna-box",
        name: "Zasilkovna - Box",
        is_return: false,
      },
      {
        id: "zasilkovna-delivery",
        name: "Zasilkovna - Dobirka",
        is_return: false,
      },
    ];
  }

  override async validateOption(data: Data): Promise<boolean> {
    return true;
  }

  override async validateFulfillmentData(optionData, data, cart: Cart) {
    return {
      ...data,
    };
  }
}
