const database = require('./database/database')

 exports.getItemsByType = (type) => {
  return database.execute('SELECT * FROM namegator.item WHERE type = $1', [type])
 }

 exports.getItems = () => {
  return database.execute('SELECT * FROM namegator.item')
 }

 exports.saveItem = (item) => {
  return database.execute('INSERT INTO namegator.item (type, description) values ($1, $2) returning *', [item.type, item.description])
 }

 exports.deleteItem = (id) => {
  return database.execute('DELETE FROM namegator.item WHERE id = $1', [id])
 }