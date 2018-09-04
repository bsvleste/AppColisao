const mongoClient = require("mongodb").MongoClient;
mongoClient.connect('mongodb://localhost:27017/workshop')
            .then(conn=>global.conn = conn.db("workshop"))
            .catch(err=> console.log(err));

//funçao para listar todos os clientes
function findList(callback)
{
    global.conn.collection("customer").find().toArray(callback);
}
//funçao para lista apenas cliente especifico
const ObjectId = require("mongodb").ObjectId;
function findListId(id,callback)
{
    global.conn.collection('customer').findOne({_id:id},callback)
}
/*salva clientes na lista*/
function insertCliente(cliente,callback)
{
    global.conn.collection('customer').insert(cliente,callback);
}
// altera todos os campos do cliente
function updateCLiente(id,cliente,callback)
{
    global.conn.collection("customer").update({_id:id},cliente,callback)
}
//altera campo especifico cliente
function patchCliente(id,clientes, callback)
{
    global.conn.collection("customer").update({_id:id},{$set:clientes},callback);
}
/*deletando um cliente*/
function deleteCliente(id,callback)
{
    global.conn.collection('customer').deleteOne({_id:id},callback);
} 
module.exports = {deleteCliente, patchCliente, findList , findListId, insertCliente, updateCLiente};