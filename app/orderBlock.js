const db = require('./dbconnection');

const OrderBlock = {

    getAllOrderBlocks: function(callback) {
        return db.query("Select * from order_block", callback);
    },
    getOrderBlockById: function(id, callback) {
        return db.query("select * from order_block where Id=?", [id], callback);
    },
    addOrderBlock: function(OrderBlock, callback) {
        return db.query("Insert into order_block values(?,?,?)", [OrderBlock.Id, OrderBlock.Title, OrderBlock.Status], callback);
    },
    deleteOrderBlock: function(id, callback) {
        return db.query("delete from order_block where Id=?", [id], callback);
    },
    updateOrderBlock: function(id, OrderBlock, callback) {
        return db.query("update order_block set Title=?,Status=? where Id=?", [OrderBlock.Title, OrderBlock.Status, id], callback);
    }

};
module.exports = OrderBlock;