module.exports = {
  // YQL query urls for rss feeds
  // Queries for titles
  financeUpi: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Frss.upi.com%2Fnews%2Fbusiness_news.rss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  financeMW: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.marketwatch.com%2Fmarketwatch%2Fbulletins'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  financeReuters: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FhotStocksNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  techTechCrunch: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.feedburner.com%2FTechCrunch%2F%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  techEngadget: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'www.engadget.com%2Frss-full.xml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  techGizmodo: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.gawker.com%2Fgizmodo%2Ffull%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  newsUpi: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Frss.upi.com%2Fnews%2Fnews.rss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  newsReuters: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FtopNews%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  newsAP: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fhosted.ap.org%2Flineups%2FTOPHEADS.rss%3FSITE%3DAP%26SECTION%3DHOME'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  sportsUpi: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Frss.upi.com%2Fnews%2Fsports_news.rss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  sportsAP: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fhosted.ap.org%2Flineups%2FSPORTSHEADS.rss%3FSITE%3DAP%26SECTION%3DHOME'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  sportsReuters: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.title%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FsportsNews%3Fformat%3Dxml'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  // Queries for text body

  financeBodyUpi: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Frss.upi.com%2Fnews%2Fbusiness_news.rss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  mwTopStories: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.marketwatch.com%2Fmarketwatch%2Ftopstories%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  mwCommentary: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.marketwatch.com%2Fmarketwatch%2Fcommentary%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  mwSW: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.marketwatch.com%2Fmarketwatch%2FStockstoWatch%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  mwNewsletters: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.marketwatch.com%2Fmarketwatch%2Fnewslettersandresearch%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  // Reuters seems to have the best/longest descriptions included in their RSS feeds
  reutersHotStocks: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FhotStocksNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersWealth: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Fnews%2Fwealth'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersBusiness: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FbusinessNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersBankruptcy: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FbankruptcyNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersBonds: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FbondsNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersDeals: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Fnews%2Fdeals'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersEconomy: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Fnews%2Feconomy'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersGlobalMarkets: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FglobalmarketsNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersHedgefunds: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Fnews%2Fhedgefunds'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersIPOs: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fwww.reuters.com%2FrssFeed%2FnewIssuesNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersMergersAcquisitions: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FmergersNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersRegulatory: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FgovernmentfilingsNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersSummit: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FsummitNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersUSDollar: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Freuters%2FUSdollarreportNews'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  reutersUSMarkets: "https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.description%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Ffeeds.reuters.com%2Fnews%2Fusmarkets'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",

  // Some more feeds for watson to eat


};
