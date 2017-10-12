import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  notificationEmail: faker.internet.email(),
  proxyUrl: `http://${faker.internet.userName()}:${faker.internet.password()}@${faker.internet.ip()}:${faker.random.number()}`,
  maxErrorCount: faker.random.number(),
  suspendScraping: faker.random.boolean(),
  suspendParsing: faker.random.boolean(),
  suspendUpdating: faker.random.boolean(),
});
