import { BaseService } from 'medusa-interfaces';
import { Service } from 'medusa-extender';
import { EntityManager } from 'typeorm';

type InjectedDependencies = {
  manager: EntityManager;
};

@Service()
export class ExampleService extends BaseService {
  static resolutionKey = 'exampleService';

  private readonly manager: EntityManager;

  constructor({ manager }: InjectedDependencies, private readonly config: any) {
    super();

    this.manager = manager;
  }
}
