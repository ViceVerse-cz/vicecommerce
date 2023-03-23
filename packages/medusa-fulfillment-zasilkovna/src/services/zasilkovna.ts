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
        id: "zasilkovna-box",
        name: "Zásilkovna - Box",
        require_drop_point: true,
        is_return: false,
      },
    ];
  }

  validateFulfillmentData(_, data) {
    return this.checkData(data);
  }

  validateOption(data: Data) {
    return this.checkData(data);
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
        addressId: parseInt(data.dropPoint as string),
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

  checkData(data: Data) {
    switch (data.id) {
      case "zasilkovna-box":
        if (!data.dropPoint) {
          throw new Error("Musíte vybrat místo vyzvednutí");
        }

        return {
          ...data,
        };

      case "zasilkovna-delivery":
        return {
          ...data,
        };

      default:
        throw new Error("Neplatný způsob doručení");
    }
  }
}

export default ZasilkovnaService;
