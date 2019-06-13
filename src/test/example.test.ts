
import request from 'supertest';
import app from '../app';

describe('UNIT: utils', () => {
  it('can add two numbers', () => {
    const sum: number = 2 + 2;
    expect(sum).toBe(4);
  });
});

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/listen');
    expect(response.body.name).toEqual('Ajiboye');

  });
});
