describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("examples/example-example85/main.html");
  });
  
  it('should load template defined inside script tag', function() {
    element(by.css('#tpl-link')).click();
    expect(element(by.css('#tpl-content')).getText()).toMatch(/Content of the template/);
  });
});