import { FulfillmentProvider } from 'medusa-extender';
import { FulfillmentService } from 'medusa-interfaces';
import { Order, Item, Fulfillment, Data } from '@medusajs/medusa';

@FulfillmentProvider()
export default class extends FulfillmentService {
  static identifier = 'zasilkovna';

  constructor() {
    super();
  }

  getFulfillmentOptions() {
    return [
      {
        id: 'zasilkovna-dobirka',
        name: 'Zásilkovna - Dobírka',
        is_return: false,
      },
      {
        id: 'zasilkovna-box',
        name: 'Zásilkovna - Box',
        is_return: false,
      },
    ];
  }

  validateOption(): boolean {
    return true;
  }

  async createFulfillment(
    data: Data,
    items: Item[],
    order: Order,
    fulfillment: Fulfillment,
  ): Promise<void> {
    return Promise.resolve();
  }

  async cancelFulfillment(fulfillment: Fulfillment): Promise<object> {
    return Promise.resolve({});
  }
}
