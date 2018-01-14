var news = new News()
var fakeArticle = new fakeArticle


function testNewsHasEmptyArticleList() {
  assert.isTrue(news.articleList.length === 0, "News is instantiated with empty article list")
};

function fakeArticle(headline, summary, url) {

};


function testAddArticle() {
  news.addArticle(fakeArticle)
  assert.isTrue(news.articleList.length === 1, "Article is added to article list")
};

testNewsHasEmptyArticleList()
testAddArticle()
