import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'y18q52l5',
  dataset: 'production',
  apiVersion: '2023-08-13',
  useCdn: false,
};

const client = createClient(config);

export default client;
