import { FulfillmentProvider } from "medusa-extender";
import { FulfillmentService } from "medusa-interfaces";
import { Order, Item, Fulfillment, Data } from "@medusajs/medusa";
import js2xmlparser from "js2xmlparser";

@FulfillmentProvider()
export default class extends FulfillmentService {
  static identifier = "zasilkovna";

  constructor() {
    super();
  }

  getFulfillmentOptions() {
    return [
      {
        id: "zasilkovna-dobirka",
        name: "Zásilkovna - Dobírka",
        is_return: false,
      },
      {
        id: "zasilkovna-box",
        name: "Zásilkovna - Box",
        is_return: false,
      },
    ];
  }

  validateOption(): boolean {
    return true;
  }

  async createFulfillment(data: Data, items: Item[], order: Order, fulfillment: Fulfillment): Promise<void> {
    const payload = {
      apiPassword: "goofyahhklic",
      packetAttributes: {
        number: order.id,
        name: order.customer.first_name,
        surname: order.customer.last_name,
        email: order.customer.email,
        addressId: 55,
        value: 43,
        eshop: "vasky.cz",
      },
    };

    console.log(js2xmlparser.parse("createPacket", payload));

    return Promise.resolve();
  }

  async cancelFulfillment(fulfillment: Fulfillment): Promise<object> {
    return Promise.resolve({});
  }
}
