class Article {
    #id;
    #title;
    #imagePath;
    #text;
    #author;

   constructor(title, text) {
        //this.#id - random guid
        this.#title = title;
        this.#text = text;
    }

    getArticle(id) {
        //call storage to load article
        return this;
    }

    getTitle() {
        return this.#title;
    }

    setImagePath(imagePath) {
        this.#imagePath = imagePath;
    }

    saveArticle(author) {
        this.#author = author;
        //save it to the storage
    }

    //Don't forget about getters and setters if you want to expose functionality
}