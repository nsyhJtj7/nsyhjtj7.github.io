class Movie {
    #price;

    constructor(title, year, price, image) {
        this.title = title;
        this.year = year;
        this.#price = price;
        this.image = image;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            this.#price = 0;
        } else {
            this.#price = value;
        }
    }

    toString() {
        return `${this.title} (${this.year}) - $${this.#price}`;
    }

    createHTML() {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = this.image;
        imgCell.appendChild(img);

        const infoCell = document.createElement('td');

        const title = document.createElement('h3');
        title.textContent = this.title;

        const year = document.createElement('p');
        year.textContent = `Year: ${this.year}`;

        const price = document.createElement('p');
        price.textContent = `Price: $${this.#price}`;

        infoCell.appendChild(title);
        infoCell.appendChild(year);
        infoCell.appendChild(price);

        row.appendChild(imgCell);
        row.appendChild(infoCell);
        
        return row;
    }
}

const movies = [
    {"title": "Beauty and the Beast", "year": 1991,"price": 14.23, "image": "./images/beauty and the beast.png"},
    {"title": "Aladdin", "year": 1992, "price": 23.99, "image": "./images/Aladdin.png"},
    {"title": "Cinderella", "year": 1950, "price": 29.00, "image": "./images/cinderella.png"}
];

const movieString = JSON.stringify(movies);
const movieData = JSON.parse(movieString);
const movieCollection = movieData.map(item => new Movie(item.title, item.year, item.price, item.image));

const container = document.getElementById("data");
movieCollection.forEach(movie => {
    container.appendChild(movie.createHTML());
});                
