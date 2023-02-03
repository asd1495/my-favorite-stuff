const media = [
    { 
        id: 1, 
        title: "Random Access Memories",
        author: "Daft Punk", 
        year: 2010,
        category: "music", 
        img: "https://m.media-amazon.com/images/I/41GAT8L+HYL._AC_SX466_.jpg" 
    },
    { 
        id: 2, 
        title: "Hot Fuss",
        author: "The Killers", 
        year: 2004,
        category: "music",
        img: "https://upload.wikimedia.org/wikipedia/en/1/17/The_Killers_-_Hot_Fuss.png"
    },
    { 
        id: 3, 
        title: "Everything Everywhere All at Once", 
        author: "D. Kwan & D. Scheinert",
        year: 2022,
        category: "movies",
        img: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_FMjpg_UX1000_.jpg'
    },
    { 
        id: 4, 
        title: "Ghost in the Shell",
        author: "Oshii Mamoru", 
        year: 1995,
        category: "movies",
        img: 'https://i.pinimg.com/originals/cb/56/f5/cb56f53b28fabf0a8d07fed6713b56cc.jpg'

    },
    { 
        id: 5, 
        title: "Crash Bandicoot 3: Warped",
        author: "Naughty Dog",
        year: 1998, 
        category: "video-game",
        img: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Crash_Bandicoot_3_Warped_Original_Box_Art.jpg'
    },
    {
        id: 6, 
        title: "Spider-Man: Into the Spider-Verse",
        author: "B. Persichetti, P. Ramsay & R. Rothman",
        year: 2018, 
        category: "movies",
        img: 'https://cdn.shopify.com/s/files/1/0265/2769/4934/products/spiderman_into_the_spiderverse_xxlg_2024x.jpg?v=1629986806'
    },
    {
        id: 7, 
        title: "At the Mountains of Madness",
        author: "H.P. Lovecraft",
        year: 1936, 
        category: "books",
        img: 'https://cdn2.penguin.com.au/covers/original/9780241341315.jpg'
    },
    {
        id: 8, 
        title: "Neon Genesis Evangelion",
        author: "Anno Hideaki",
        year: 1995, 
        category: "anime",
        img: 'https://m.media-amazon.com/images/M/MV5BMGRlZTIwZjQtZWU2NC00MDYzLTg0YWUtOGY3YjU4NTUzOTU1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        id: 9, 
        title: "Bloodborne",
        author: "FromSoftware",
        year: 2015, 
        category: "video-game",
        img: 'https://m.media-amazon.com/images/I/71woEOr8VGL._AC_SX385_.jpg'
    },
    {
        id: 10,
        title: 'Dark Side of the Moon',
        author: 'Pink Floyd',
        year: 1973,
        category: 'music',
        img: 'https://m.media-amazon.com/images/I/51UtWpxbNYL._AC_SL1500_.jpg'
    },
    {
        id: 11,
        title: 'Rogue One: A Star Wars Story',
        author: 'Gareth Edwards',
        year: 2016,
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png',
        category: 'movies',
    },
    {
        id: 12,
        title: 'Super Mario 3D Land',
        author: 'Nintendo EAD Tokyo',
        year: 2011,
        img: 'https://m.media-amazon.com/images/I/51rUb6wPf2L._AC_.jpg',
        category: 'video-game',
    },
    {
        id: 13,
        title: 'Overgrown',
        author: 'James Blake',
        year: 2013,
        img: 'https://upload.wikimedia.org/wikipedia/en/d/de/James_Blake_-_Overgrown_album_cover.png',
        category: 'music',
    },
    {
        id: 14,
        title: 'Fullmetal Alchemist',
        author: 'Arakawa Hiromu',
        year: 2003,
        img: 'https://m.media-amazon.com/images/M/MV5BMmI5NmFlZjItOTBhOC00NGI0LWIyNDAtODJhOTJjZDEyMTYyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
        category: 'anime',
    },
    {
        id: 15,
        title: 'Nekomajin',
        author: 'Toriyama Akira',
        year: 1999,
        img: 'https://upload.wikimedia.org/wikipedia/it/thumb/b/b1/Neko_Majin.jpg/640px-Neko_Majin.jpg',
        category: 'manga',
    },
    {
        id: 16,
        title: 'Berserk',
        author: 'Miura Kentaro',
        year: 1989,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Berserk_vol01.png/220px-Berserk_vol01.png',
        category: 'manga',
    },
    
    
];

media.sort((a, b) => a.title.localeCompare(b.title));

const filterMedia = (category) => {
    if (category === "all") {
      return media;
    } else {
      return media.filter((item) => item.category === category);
    }
  };

const renderMedia = (filteredMedia) => {
    const mediaContainer = document.querySelector(".cards-container");
    mediaContainer.innerHTML = "";

    filteredMedia.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const cardImg = document.createElement('img');
        cardImg.src = item.img;

        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add('product-info');

        card.innerHTML = `
        ${cardImg.outerHTML}
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <p>${item.year}</p>
        `;

        mediaContainer.appendChild(card);
    });
};

const categorySelector = document.querySelector(".category-selector");
    categorySelector.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    const filteredMedia = filterMedia(selectedCategory);
    renderMedia(filteredMedia);
  });

const filteredMedia = filterMedia("all");
renderMedia(filteredMedia)