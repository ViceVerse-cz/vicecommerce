import {
  Cart,
  ClaimService,
  Data,
  Fulfillment,
  LineItem,
  Logger,
  Order,
  OrderService,
  SwapService,
  TotalsService,
} from "@medusajs/medusa";
import { FulfillmentService } from "medusa-interfaces";
import * as CryptoJS from "crypto-js";
import * as uuid from "uuid";

class ZasilkovnaService extends FulfillmentService {
  static identifier = "ceskaposta";

  apikey_: string;
  secretKey_: string;
  url_: string;
  logger_: Logger;
  totalsService_: TotalsService;
  claimService_: ClaimService;
  swapService_: SwapService;
  orderService_: OrderService;

  constructor(
    {
      logger,
      totalsService,
      claimService,
      swapService,
      orderService,
    }: {
      logger: Logger;
      totalsService: TotalsService;
      claimService: ClaimService;
      swapService: SwapService;
      orderService: OrderService;
    },
    options: {
      apiKey: string;
      secretKey: string;
      url: string;
    },
  ) {
    super();

    this.apikey_ = options.apiKey;
    this.secretKey_ = options.secretKey;
    this.url_ = options.url;

    this.logger_ = logger;
    this.totalsService_ = totalsService;
    this.claimService_ = claimService;
    this.swapService_ = swapService;
    this.orderService_ = orderService;
  }

  async getFulfillmentOptions() {
    return [
      {
        id: "ceskaposta-balik-do-ruky",
        name: "Česká Pošta - Balík do ruky",
        require_drop_point: false,
        is_return: false,
      },
      {
        id: "ceskaposta-balik-na-postu",
        name: "Česká Pošta - Balík do ruky",
        require_drop_point: false,
        is_return: false,
      },
      {
        id: "ceskaposta-balikovna",
        name: "Česká Pošta - Balíkovna",
        require_drop_point: true,
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

  async createFulfillment(data: Data, items: LineItem[], order: Order, fulfillment: Fulfillment): Promise<void> {
    const itemsVarians = items.map((el) => el.variant);

    const body = {
      parcelServiceHeader: {},
      parcelServiceData: {
        parcelParams: {
          recordID: order.id,
          currency: "CZK",
          weight: this.sum(itemsVarians, "weight").toString(),
          length: this.sum(itemsVarians, "length"),
          height: this.sum(itemsVarians, "height"),
          prefixParcelCode: "CP",
        },
        parcelAddress: {
          firstName: order.shipping_address.first_name,
          surname: order.shipping_address.last_name,
          company: order.shipping_address.company,
          subject: "F",
          address: {
            street: order.shipping_address.address_1,
            cityPart: order.shipping_address.province,
            city: order.shipping_address.city,
            zipCode: order.shipping_address.postal_code,
          },
          mobilNumber: order.shipping_address.phone,
          phoneNumber: order.shipping_address.phone,
          emailAddress: order.email,
        },
      },
    };

    const request = await fetch(`${this.url_}/parcelService`, {
      method: "POST",
      headers: this.produceHeaders(body),
      body: JSON.stringify(body),
    });

    if (request.status === 200) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  }

  sum<T>(array: T[], property?: keyof T): number {
    if (!property) {
      return array.reduce((total, current) => total + Number(current), 0);
    }

    return array.reduce((total, current) => total + Number(current[property]), 0);
  }

  produceHeaders(body: object): HeadersInit {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

    const unixTimestamp = Math.floor(Date.now() / 1000).toString();
    const hashPayload = CryptoJS.SHA256(JSON.stringify(body));
    const nonce = uuid.v4();

    const hash = CryptoJS.HmacSHA256(`${hashPayload};${unixTimestamp};${nonce}`, this.secretKey_);
    const hashBase64 = hash.toString(CryptoJS.enc.Base64);
    const authorization = `CP-HMAC-SHA256 nonce="${nonce}" signature="${hashBase64}"`;

    const headers = {
      "Authorization-content-SHA256": hashPayload.toString(),
      "Authorization-Timestamp": unixTimestamp,
      "Content-Type": "application/json",
      "Api-Token": this.apikey_,
      Authorization: authorization,
    };

    return headers;
  }
}

export default ZasilkovnaService;
