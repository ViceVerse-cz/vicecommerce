import { Module } from 'medusa-extender';
import { ExampleService } from './example.service';
import { ExampleRouter } from './example.router';

@Module({
  imports: [ExampleRouter, ExampleService],
})
export class ExampleModule {}
