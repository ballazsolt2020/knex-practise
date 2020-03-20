const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'toor',
    database: 'messages'
  }
});
const main = async () => {
  const messages = await knex('messages').select();
  console.log(messages);
};
main();

;
;
;
;
;
;