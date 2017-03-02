describe('Test SwAppi', function() {
  it('should have homepage title', function() {
    var titlePage = element(by.css('.title'));
    browser.get('http://localhost:8080/app');
    expect(titlePage.getText().toEqual('Welcome to starships gallery!'));
  });
});
