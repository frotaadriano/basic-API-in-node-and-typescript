describe(' my first', () => {
  it('should return ticket value', async () => {
    const { body, status } = await global.testRequest.get('/trade');
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        u: 810119359,
        s: 'BTCBRL',
        b: '101935.00000000',
        B: '0.02600000',
        a: '101977.00000000',
        A: '0.02576000',
      },
    ]);
  });
});
