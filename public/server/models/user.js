var connection = require('./connection');

function User() {
  
  //Hàm này cho phép ta lấy lên toàn bộ thông tin của tất cả user có trong bảng.
  this.get = function(res) {
    console.log("Get all user");
    connection.acquire(function(err, con) {
      con.query('select * from users', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}
module.exports = new User();

