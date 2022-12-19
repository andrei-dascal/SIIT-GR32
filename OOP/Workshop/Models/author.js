class Author {
    #firstName;
    #lastName;
    #articlesNumber;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#articlesNumber = 0;
    }

    writeArticle(article) {
        article.saveArticle(this);
        
        this.#articlesNumber++;
        //saved
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`; 
    }
}