(function (exports) {


  function News() {
    this.articleList = []
  };

  News.prototype.addArticle = function(article) {
    this.articleList.push(article)
  };

  News.prototype.getArticles = function() {
    return this.articleList
  }


  exports.News = News;
})(this);
