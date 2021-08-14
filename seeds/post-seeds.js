const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10,
    game_id: 1,
    time_created: Date.now()
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'https://nasa.gov/donec.json',
    user_id: 8,
    game_id: 3,
    time_created: Date.now()
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    game_id: 4,
    time_created: Date.now()
  },
  {
    title: 'Nunc purus.',
    post_content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
    game_id: 5,
    time_created: Date.now()
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
    game_id: 9,
    time_created: Date.now()
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'https://stanford.edu/consequat.png',
    user_id: 4,
    game_id: 8,
    time_created: Date.now()
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1,
    game_id: 2,
    time_created: Date.now()
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1,
    game_id: 6,
    time_created: Date.now()
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9,
    game_id: 8,
    time_created: Date.now()
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5,
    game_id: 7,
    time_created: Date.now()
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3,
    game_id: 2,
    time_created: Date.now()
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10,
    game_id: 1,
    time_created: Date.now()
  },
  {
    title: 'Donec dapibus.',
    post_content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8,
    game_id: 5,
    time_created: Date.now()
  },
  {
    title: 'Nulla tellus.',
    post_content: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3,
    game_id: 3,
    time_created: Date.now()
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
    game_id: 5,
    time_created: Date.now()
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7,
    game_id: 3,
    time_created: Date.now()
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6,
    game_id: 4,
    time_created: Date.now()
  },
  {
    title: 'Etiam justo.',
    post_content: 'https://shareasale.com/quis.json',
    user_id: 4,
    game_id: 5,
    time_created: Date.now()
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6,
    game_id: 3,
    time_created: Date.now()
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'https://java.com/at/nibh/in.png',
    user_id: 7,
    game_id: 10,
    time_created: Date.now()
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;