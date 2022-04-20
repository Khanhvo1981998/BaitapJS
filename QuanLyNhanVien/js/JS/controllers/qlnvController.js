var layThongTinTuForm = function() {
    // console.log("function lay thong tin");

    var taiKhoanNV = document.getElementById("tknv").value;
    var tenNV = document.getElementById("name").value;
    var emailNV = document.getElementById("email").value;
    var pwNV = document.getElementById("password").value;
    var ngaySinhNV = document.getElementById("datepicker").value;
    var luongCoBanNV = document.getElementById("luongCB").value;
    var chucVuNV = document.getElementById("chucvu").value;
    var gioLamNV = document.getElementById("gioLam").value;

    var nv = new NhanVien(taiKhoanNV, tenNV, emailNV, pwNV, ngaySinhNV, luongCoBanNV, chucVuNV, gioLamNV);
    
    return nv;
};

var renderDSNV = function(danhSachNhanVien) {
    var contentHTML = "";

    for (var i = 0; i< danhSachNhanVien.length; i++) {
        
        var nhanVienHienTai = danhSachNhanVien[i]
        var contentTr = `<tr>
                                <td> ${nhanVienHienTai.user} </td>
                                <td> ${nhanVienHienTai.ten} </td>
                                <td> ${nhanVienHienTai.email} </td>
                                <td> ${nhanVienHienTai.date} </td>
                                <td> ${nhanVienHienTai.chucVu} </td>
                                <td id="tongLuong" >  ${nhanVienHienTai.luong} </td>
                                <td> Xep Loai </td>
                                <td>   <button onclick="xoaNhanVien('${nhanVienHienTai.user}')" class="btn btn-success"> Xóa </button> 

                                </td>
                        </tr>`;

            contentHTML+= contentTr;
    }
        console.log("contentHTML", contentHTML);

        document.getElementById("tableDanhSach").innerHTML = contentHTML;


  

}

      //xoa nhan vien

      
 
// end xoa nhan vien