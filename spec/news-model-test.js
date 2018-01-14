function testNewsHasEmptyArticleList() {
  var news = new News()
  assert.isTrue(news.articleList.length === 0, "News is instantiated with empty article list")
};
