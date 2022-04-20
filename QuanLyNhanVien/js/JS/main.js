 var danhSachNhanVien = [];

function themNhanVien() {
    console.log("them sinh vien");
    var newNV = layThongTinTuForm();

    var userNew = newNV.user;


  var isValid = 
   validatorNV.kiemTraRong(newNV.user, "tbTKNV", "User không được trống") &
   validatorNV.kiemTraRong(newNV.ten, "tbTen", "Tên nhân viên không được trống") &
   validatorNV.kiemTraRong(newNV.email, "tbEmail", "email không được trống")&
   validatorNV.kiemTraRong(newNV.pass, "tbMatKhau", "Password không được trống")&
   validatorNV.kiemTraRong(newNV.date, "tbNgay", "Ngày làm không được trống")&
   validatorNV.kiemTraRong(newNV.luong, "tbLuongCB", "Lương không được trống")&
   validatorNV.kiemTraRong(newNV.chucVu, "tbChucVu", "Chọn chức vụ")&
   validatorNV.kiemTraRong(newNV.gioLam, "tbGiolam", "Giờ làm không được trống");

 


    isValid = isValid && validatorNV.kiemTraTrungId(newNV.user, danhSachNhanVien) && 
    validatorNV.kiemTraUser(newNV.user, "tbTKNV") &&
    validatorNV.kiemTraTen(newNV.ten, "tbTen") &&
    validatorNV.kiemTraEmail(newNV.email, "tbEmail") && 
    validatorNV.kiemTraLuong(newNV.luong, "tbLuongCB") &&
    validatorNV.kiemTraPw(newNV.pass, "tbMatKhau") &&
    validatorNV.kiemTraDate(newNV.date, "tbNgay") &&
    validatorNV.kiemTraChucVu(newNV.chucVu, "tbChucVu")&&
    validatorNV.kiemTraGio(newNV.gioLam, "tbGiolam") 
    ;

    
    
     if(isValid) {
        danhSachNhanVien.push(newNV);
        renderDSNV(danhSachNhanVien);
    }
     console.log(danhSachNhanVien); 
};

    


    