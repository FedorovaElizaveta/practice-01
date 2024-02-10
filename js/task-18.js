/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTagsAmount = (tweets) => {
  const tags = tweets.flatMap((tweet) => tweet.tags);
  const stats = tags.reduce((acc, tag) => {
    const value = acc[tag] ? acc[tag] + 1 : 1;
    return {
      ...acc,
      [tag]: value,
    };
  }, {});
  console.log(stats);
};

console.log(getTagsAmount(tweets));

const q = {
  a: 1,
};

// console.log(q.b);
