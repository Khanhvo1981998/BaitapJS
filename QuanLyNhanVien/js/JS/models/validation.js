var validatorNV = {

    

    kiemTraRong: function(string, idErr, message) {

    var value = string.trim();

    if(value.length > 0 ) {
        
        document.getElementById(idErr).innerText= "";
        return true;
    }
    
    document.getElementById(idErr).innerText = message;
     return false;
    },

    kiemTraTrungId: function(userNew,danhSachNhanVien) {
        var index = danhSachNhanVien.findIndex((nv) => {
            return nv.user === userNew;
        });

        if(index == -1){
            document.getElementById("tbTKNV").innerText = "";
            return true;
            
        }
        document.getElementById("tbTKNV").innerText = "User đã tồn tại";
            return false;
    },

    kiemTraLuong: function(){

        var ktLuong = document.getElementById("luongCB").value*1;
             if(ktLuong >= 1000000 && ktLuong <= 20000000){
                 document.getElementById("tbLuongCB").innerText = "";
                 return true;
             }
             document.getElementById("tbLuongCB").innerText = "Lương không hợp lệ";
                 return false;
        
     },



    
    kiemTraUser: function(string, idErr) {
        var regex = /^[a-z0-9_-]{4,6}$/;

        var isValid = regex.test(string);
        if(!isValid) {
            document.getElementById(idErr).innerText = "User không hợp lệ";
            return false;
        }
        return true;
    },


    kiemTraTen: function(string, idErr) {
        var regex = /^[a-zA-Z]+$/;

        var isValid = regex.test(string);
        if(!isValid) {
            document.getElementById(idErr).innerText = "Tên không hợp lệ";
            return false;
        }
        return true;
    },

    
    kiemTraEmail: function(string, idErr) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var isValid = regex.test(string);
        if(!isValid) {
            document.getElementById(idErr).innerText = "Email không hợp lệ";
            return false;
        }
        return true;
    },

    kiemTraPw: function(string, idErr) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

        var isValid = regex.test(string);
        if(!isValid) {
            document.getElementById(idErr).innerText = "Password không hợp lệ";
            return false;
        }
        return true;
    },

    kiemTraDate: function(string, idErr) {
        var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

        var isValid = regex.test(string);
        if(!isValid) {
            document.getElementById(idErr).innerText = "Ngày không hợp lệ";
            return false;
        }
        return true;
    },


    kiemTraChucVu: function(string, idErr) {
        var regex = /(?:, )?([a-z]*\s?[a-z]*)/;

        var isValid = regex.test(string);
        if(!isValid) {
            document.getElementById(idErr).innerText = "Hãy chọn chức vụ";
            return false;
        }
        return true;
    },

    kiemTraGio: function() {
        var ktGioLam = document.getElementById("gioLam").value*1;
             if(ktGioLam >= 80 && ktGioLam <= 200){
                 document.getElementById("tbGiolam").innerText = "";
                 return true;
             }
             document.getElementById("tbGiolam").innerText = "Giờ không hợp lệ";
                 return false;
    },



    tongLuongCB: function(){

        var e = document.getElementById("chucvu").value;
        var luongNV = doc.getElementById("luongCB").value*1;
        if(e[1]){
            
            return luongNV*3;
            console.log(luongNV.innerText);
        }
    }
    
    
    
};

    