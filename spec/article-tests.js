var article = new Article("Eagles win Superbowl", "Fake article summary", "www.fakenews.com")


function testViewArticleHeadline() {
  assert.isTrue(article.viewHeadline() === "Eagles win Superbowl", "Article headline is returned")
};

function testViewArticleSummary() {
  assert.isTrue(article.viewSummary() === "Fake article summary", "Article summary is returned")
};

function testViewArticleUrl() {
  assert.isTrue(article.viewUrl() === "www.fakenews.com", "Article Url is returned")
}
