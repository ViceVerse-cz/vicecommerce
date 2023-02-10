import { Cart, Data, Fulfillment, LineItem, Order } from "@medusajs/medusa";
import { FulfillmentService } from "medusa-interfaces";
import crypto from "node:crypto";

class ZasilkovnaService extends FulfillmentService {
  static identifier = "ceskaposta";

  apikey: string;
  secretKey: string;
  url: string;
  constructor(
    // rome-ignore lint/correctness/noEmptyPattern: <Extends base medusa project>
    {},
    options: {
      apiKey: string;
      secretKey: string;
      url: string;
    },
  ) {
    super();

    this.apikey = options.apiKey;
    this.secretKey = options.secretKey;
    this.url = options.url;
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
    const body = {};

    const headers = {
      "Authorization-content-SHA256": crypto.createHash("sha256").update(JSON.stringify(body)).digest("base64"),
      "Authorization-Timestamp": Math.floor(Date.now() / 1000).toString(),
      "Api-Token": this.apikey,
      Authorization:
        'CP-HMAC-SHA256 nonce="74b03ffb-34e1-419e-8c6f-f8275bad9a41" signature="QGBaYeY8loQZXbJRmj91JV2yTwsuBTME6wQhUrEm7mI="',
    };

    const request = await fetch(`${this.url}/parcelService`, {
      headers: headers,
      body: JSON.stringify(body),
    });

    console.log(await request.json());

    return Promise.resolve();
  }

  cancelFulfillment() {
    console.log("cancel fulfillment");
    return Promise.resolve({});
  }
}

export default ZasilkovnaService;
