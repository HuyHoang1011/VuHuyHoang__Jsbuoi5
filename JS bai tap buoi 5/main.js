//Bai 1
function thue(a){
    if (a>0 && a<=60){
        return 5;
    }
    if (a>60 && a<=120){
        return 10;
    }
    if (a>60 && a<=120){
        return 15;
    }
    if (a>120 && a<=210){
        return 20;
    }
    if (a>210 && a<=384){
        return 25;
    }
    if (a>384 && a<=624){
        return 30;
    }
    if (a>624 && a<=960){
        return 35;
    }
}
document.getElementById("Find").onclick=function(){
    var hoTen=document.getElementById("Name").value;
    var ThuNhap=document.getElementById("Sum").value*1;
    var Nguoi=document.getElementById("Human").value*1;
    var ThuNhapChiu=ThuNhap - 4 - Nguoi*4;
    var kq;
    var kq="Thuế thu nhập cá nhân của bạn là: " + thue(ThuNhapChiu);
    document.getElementById("Xapxep").innerHTML=kq;
}

//Bai 2
function chuyen(a){
    if(a>10){
        return a-10;
    }
}
document.getElementById("nhaDan").onclick=function(){
    document.getElementById("Conect").style.display='none';
    var b=1;
    document.getElementById("FindB2").onclick=function(){
        var id=document.getElementById("ID").value;
        var number=document.getElementById("Conect-number").value;
        var high=document.getElementById("highOptions").value;
        var kq=0;
        document.getElementById("Conect").style.display='none';
        kq=4.5 + 20.5;
        console.log(kq);
        document.getElementById("Print").innerHTML=kq;
    }
}
document.getElementById("doanhNghiep").onclick=function(){
    document.getElementById("Conect").style.display='block';
    var b=0;
    document.getElementById("FindB2").onclick=function(){
        var id=document.getElementById("ID").value;
        var number=document.getElementById("Conect-number").value;
        var high=document.getElementById("highOptions").value;
        var kq=0;
        kq=15;
        if(number>10){
            kq=kq+75+5*chuyen(number);
        }else{
            kq=kq+75;
        }
        kq=kq+high*50;
        document.getElementById("Print").innerHTML=kq;
    }
}
