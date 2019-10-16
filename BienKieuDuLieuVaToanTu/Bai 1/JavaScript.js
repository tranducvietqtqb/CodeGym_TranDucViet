let inputVatLy = prompt("Enter diem Vat Ly");
let inputHoaHoc = prompt("Enter diem Hoa Hoc");
let inputSinhHoc = prompt("Enter diem Sinh Hoc");
let VatLy = parseInt(inputVatLy);
let HoaHoc = parseInt(inputHoaHoc);
let SinhHoc = parseInt(inputSinhHoc);
let medium = (VatLy + HoaHoc + SinhHoc)/3;
document.write("The medium is: " + medium);
let total = (VatLy + HoaHoc + SinhHoc);
document.write("The total is: "+ total);





