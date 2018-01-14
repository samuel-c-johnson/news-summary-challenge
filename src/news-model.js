(function (exports) {


  function News() {
    this.articleList = []
  };

  News.prototype.addArticle = function(article) {
    this.articleList.push(article)
  }


  exports.News = News;
})(this);
