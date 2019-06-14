
import request from 'supertest';
import app from '../app';

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/listen');
    expect(response.body.name).toEqual('Ajiboye');

  });
});
