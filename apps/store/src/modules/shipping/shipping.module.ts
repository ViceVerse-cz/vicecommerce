import { Module } from 'medusa-extender';
import zasilkovnaService from './zasilkovna.service';

@Module({
  imports: [zasilkovnaService],
})
export class ShippingModule {}
