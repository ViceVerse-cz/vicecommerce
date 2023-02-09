import type { Cart, Data, Fulfillment, FulfillmentItem, Order, Product } from "@medusajs/medusa";
import { FulfillmentService } from "medusa-interfaces";

class ZasilkovnaProvider extends FulfillmentService {
  static reference = "zasilkovna";
  apiKey: string;

  constructor({ logger, totalsService, claimService, swapService, ordersService }, options: { apiKey: string }) {
    super();

    this.apiKey = options.apiKey;
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

  async validateFulfillmentData(optionData: object, data: Data, cart: Cart): Promise<object> {
    // TODO: Overeni dat od uzivatele, napriklad ze drop box existuje

    return {
      ...optionData,
      ...data,
    };
  }

  calculatePrice(): boolean {
    return false;
  }

  async createFulfillment(data: Data, items: Product[], order: Order, fulfillment: Fulfillment): Promise<boolean> {
    // TODO: Vytvorit objednavku pres zasilkovnu

    return true;
  }

  async retrieveDocuments(fulfillmentData: FulfillmentItem[], documentType: unknown): Promise<void> {
    // TODO: Neni zatim potreba momentalne / ziskat dokumenty
  }
}

export default ZasilkovnaProvider;
