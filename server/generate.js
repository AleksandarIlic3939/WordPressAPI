var faker = require('faker');

var database = { blogPosts: []};

for (var i = 5; i<= 10; i++) {
  database.blogPosts.push({
    id: i,
    title: faker.name.title(),
    date: faker.date.past(),
    author: faker.name.findName(),
    body: faker.lorem.paragraphs()
  });
}

console.log(JSON.stringify(database));
