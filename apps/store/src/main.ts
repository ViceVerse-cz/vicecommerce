import { ExampleModule } from './modules/example/example.module';
import { Medusa } from 'medusa-extender';
import config from '../medusa-config';
import express = require('express');
import { resolve } from 'path';

async function bootstrap() {
  const expressInstance = express();

  await new Medusa(resolve(__dirname, '..'), expressInstance).load([ExampleModule]);

  const port = config.projectConfig.port || 9000;

  expressInstance.listen(port, () => {
    console.info('Server successfully started on port ' + port);
  });
}

bootstrap();
