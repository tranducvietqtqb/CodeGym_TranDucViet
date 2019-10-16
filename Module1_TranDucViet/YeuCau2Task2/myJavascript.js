let Name = prompt("Enter Name Customer:");
let IdCard = prompt("Enter Id Card Customer:");
let Birthday = prompt("Enter Birthday Customer:");
let Email = prompt("Enter Email Customer:");
let Address = prompt("Enter Address Customer: ");
let Type = prompt("Enter Type Customer:");
let Discount = prompt("Enter Discount:");
let Accompanying = prompt("Enter Number Of Accompanying:");
let TypeRoom = prompt("Enter Type Room:");
let RenDays = prompt("Enter Ren Days:");
let TypeService = prompt("Enter Type Service:");
let Villa = 500;
let House = 300;
let Room = 100;
let Tpays;
function Taltalpays() {
    if (TypeRoom == "Villa") {
        Tpays = Villa * RentDay * (1 - Discount / 100);
    } else if (TypeRoom == "House") {
        Tpays = House * RentDay * (1 - Discount / 100);
    } else if (TypeRoom == "Room") {
        Tpays = Room * RentDay * (1 - Discount / 100);
    } else {
        Tpays = null;
    }
}
alert("Information of Customer"+"\n"
    + "Name Customer:" + Name + "\n"
    + "Id Card Customer:" + IdCard + "\n"
    + "Birthday Customer:" + Birthday + "\n"
    + "Email Customer:" + Email + "\n"
    + "Address Customer:" + Address + "\n"
    + "Type Customer:" + Type + "\n"
    + "Discount:" + Discount + "\n"
    + "Number Of Accompanying:" + Accompanying + "\n"
    + "Type Room:" + TypeRoom + "\n"
    + "Ren Days:" + RenDays + "\n"
    + "Type Service:" + TypeService + "\n"
    + "Taltal Pays:" + Taltalpays + "\n");

