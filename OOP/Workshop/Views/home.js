function init() {
    let andreiDascal = new Author("Andrei", "Dascal");

    const article = new Article("First Article", "Some random text goes here");

    andreiDascal.writeArticle("Bla bla");
    andreiDascal.writeArticle(123);
    andreiDascal.writeArticle(article);

    document.getElementById("authorName").innerText = andreiDascal.getFullName();
    document.getElementById("articleTitle").innerText = article.getArticle("random id").getTitle();
    document.getElementById("authorName").innerText = andreiDascal.getFullName();
    document.getElementById("authorName").innerText = andreiDascal.getFullName();
}