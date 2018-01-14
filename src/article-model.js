(function (exports) {

  function Article(headline, summary, url) {
    this.headline = headline
    this.summary = summary
    this.url = url
  };

  Article.prototype.viewHeadline = function() {
    return this.headline
  };

  Article.prototype.viewSummary = function() {
    return this.summary
  };

  Article.prototype.viewUrl = function() {
    return this.url
  };

  exports.Article = Article;

})(this);
