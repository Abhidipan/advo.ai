import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6577fdd0aff6c0d0ce58');

export const account = new Account(client);
export default client;