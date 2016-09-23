describe('App', function() {
  const {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app;

  beforeEach(function() {
    app = renderIntoDocument(
      <App />
    );
  });

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });

  it('should render a single RSSFeedList component', function() {
    var RSSFeedList = findRenderedDOMComponentWithClass(app, 'RSSFeedList');
    expect(RSSFeedList).to.exist;
  });
};