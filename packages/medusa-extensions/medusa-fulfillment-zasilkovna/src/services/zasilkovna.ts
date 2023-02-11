import { Data, Fulfillment, LineItem, Order } from "@medusajs/medusa";
import { FulfillmentService } from "medusa-interfaces";
import { parse } from "js2xmlparser";

class ZasilkovnaService extends FulfillmentService {
  static identifier = "zasilkovna";
  apikey: string;

  // rome-ignore lint/correctness/noEmptyPattern: <Extends base medusa project>
  constructor({}, options: { apiKey: string }) {
    super();
    this.apikey = options.apiKey;
  }

  async getFulfillmentOptions() {
    return [
      {
        id: "zasilkovna-delivery",
        name: "Zásilkovna - Doručení na adresu",
        require_drop_point: false,
        is_return: false,
      },
      {
        id: "zasilkovna-box",
        name: "Zásilkovna - Box",
        require_drop_point: true,
        is_return: false,
      },
    ];
  }

  validateFulfillmentData(_, data, cart) {
    console.log("validate_fulfillment");
    return data;
  }

  validateOption(data) {
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

  createOrder() {
    // No data is being sent anywhere

    console.log("create order");
    return Promise.resolve({});
  }

  createReturn() {
    // No data is being sent anywhere

    console.log("create return");
    return Promise.resolve({});
  }

  async createFulfillment(data: Data, items: LineItem[], order: Order, fulfillment: Fulfillment): Promise<void> {
    const reqData = {
      apiPassword: this.apikey,
      packetAttributes: {
        number: 1,
        name: order.shipping_address.first_name,
        surname: order.shipping_address.last_name,
        email: order.email,
        phone: order.shipping_address.phone,
        addressId: 79,
        value: order.paid_total,
        eshop: "vasky.cz",
      },
    };

    const { status } = await fetch("https://www.zasilkovna.cz/api/rest", {
      method: "POST",
      headers: {
        "Content-Type": "application/xml",
      },
      body: JSON.stringify(parse("createPacket", reqData)),
    });

    if (status === 200) {
      return Promise.resolve();
    } else {
      return Promise.reject({
        error: "Failed to create packet via Zasilkovna provider",
      });
    }
  }

  cancelFulfillment() {
    console.log("cancel fulfillment");
    return Promise.resolve({});
  }
}

export default ZasilkovnaService;
