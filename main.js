// Bài 1: Quản lý tuyển sinh; Viết chương trình cho biết thí sinh đó đậu hay rớt và tổng số điểm đạt được
/**
 * phân tích:
 * input: nhập vào tên thí sinh, điểm của 3 môn thi, khu vực , đối tượng ưu tiên
 * handle: khai báo biến tên thí sinh, điểm 3 môn thi, tổng số điểm thí sinh đạt được, khu vực, đối tượng, điểm chuẩn hội đồng
 * output: xuất ra thí sinh đậu hay rớt, tổng số điểm đạt được
 */

var tongSoDiem = 0;

var btnXuatRa = document.getElementById('btnXuatRa');
btnXuatRa.onclick = function() {

    var tenThiSinh = document.getElementById('tenThiSinh').value;

    var diemMonThuNhat = Number(document.getElementById('diemMonThuNhat').value);
    var diemMonThuHai = Number(document.getElementById('diemMonThuHai').value);
    var diemMonThuBa = Number(document.getElementById('diemMonThuBa').value);

    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;

    var diemChuan = Number(document.getElementById('diemChuan').value);

    var diemTongKet = diemMonThuNhat + diemMonThuHai + diemMonThuBa;

    if(khuVuc == 'A' && doiTuong == 1) {
        tongSoDiem = diemTongKet + 2 + 2.5;

    } else if(khuVuc == 'A' && doiTuong == 2) {
        tongSoDiem = diemTongKet + 2 + 1.5;

    } else if(khuVuc == 'A' && doiTuong == 3) {
        tongSoDiem = diemTongKet + 2 + 1;

    } else if(khuVuc == 'B' && doiTuong == 1) {
        tongSoDiem = diemTongKet + 1 + 2.5;

    }else if(khuVuc == 'B' && doiTuong == 2) {
        tongSoDiem = diemTongKet + 1 + 1.5;

    }else if(khuVuc == 'B' && doiTuong == 3) {
        tongSoDiem = diemTongKet + 1 + 1;

    }else if(khuVuc == 'C' && doiTuong == 1) {
        tongSoDiem = diemTongKet + 0.5 + 2.5;

    }else if(khuVuc == 'C' && doiTuong == 2) {
        tongSoDiem = diemTongKet + 0.5 + 1.5;

    }else if(khuVuc == 'C' && doiTuong == 3) {
        tongSoDiem = diemTongKet + 0.5 + 1;

    }else if(khuVuc == 'X' && doiTuong == 1) {
        tongSoDiem = diemTongKet + 2.5;

    }else if(khuVuc == 'X' && doiTuong == 2) {
        tongSoDiem = diemTongKet + 1.5;

    }else if(khuVuc == 'X' && doiTuong == 3) {
        tongSoDiem = diemTongKet + 1;

    }else if(khuVuc == 'A' && doiTuong == 0) {
        tongSoDiem = diemTongKet + 2;

    }else if(khuVuc == 'B' && doiTuong == 0) {
        tongSoDiem = diemTongKet + 1;

    }else if(khuVuc == 'C' && doiTuong == 0) {
        tongSoDiem = diemTongKet + 0.5;

    }else if(khuVuc == 'X' && doiTuong == 0) {
        tongSoDiem = diemTongKet;

    }

    if(tongSoDiem >= diemChuan && (diemMonThuNhat > 0 && diemMonThuHai > 0 && diemMonThuBa > 0)) {
        alert('Tên Thí Sinh là: ' + tenThiSinh + ' - đậu ' + ' và Tổng số điểm đạt được là: ' + tongSoDiem + ' điểm');

    }else{
        alert('Tên Thí Sinh là: ' + tenThiSinh + ' - rớt ' + ' và Tổng số điểm đạt được là: ' + tongSoDiem + ' điểm');
    }

}


//Bài 2: Tính tiền điện: Viết chương trình nhập vào thông tin tiêu thụ điện

/**
 * phân tích:
 * input: nhập vào số kw điện tiêu thụ, 
 * handle: khai báo biến số kw điện tiêu thụ, số tiền điện phải trả = số kw điện ddaxa tiêu thụ * cho giá tiền niêm yết của từng kw ddienj tiêu thụ
 * output: xuất ra được số tiền điện phải trả
 */


var soTienPhaiTra = 0;


var btnTinhRa = document.getElementById('btnTinhRa');
btnTinhRa.onclick = function() {

    var soKwTieuThu = Number(document.getElementById('soKw').value);
   
    if(1 <= soKwTieuThu && soKwTieuThu <= 50) {
        soTienPhaiTra = soKwTieuThu * 500;

    } else if(51 <= soKwTieuThu && soKwTieuThu <= 100) {
        soTienPhaiTra = (50 * 500) + ((soKwTieuThu - 50) * 650);

    } else if(101 <= soKwTieuThu && soKwTieuThu <= 200) {
        soTienPhaiTra = (50 * 500) + (50 * 650) + ((soKwTieuThu - 100) * 850);

    } else if(201 <= soKwTieuThu && soKwTieuThu <= 350) {
        soTienPhaiTra = (50 * 500) + (50 * 650) + (100 * 850) + ((soKwTieuThu - 200) * 1100);

    }else if(soKwTieuThu > 350) {
        soTienPhaiTra = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soKwTieuThu - 350) * 1300);
    }

    alert('Số tiền điện phải trả là: ' + soTienPhaiTra + ' nghìn đồng'); 
   

}