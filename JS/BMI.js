function kiemtra() {
    let Cannang = document.getElementById("can nang").value;
    let Chieucao = document.getElementById("chieu cao").value;
    let bmi = Number(Cannang) / (Number(Chieucao) * Number(Chieucao));

if (bmi < 18)
    kq = "Gầy quá";
else if (bmi < 25.0)
    kq = "Bình thường";
else if (bmi < 30.0)
    kq = "Béo";
else
    kq = "Béo phì";

document.getElementById("kq").innerHTML = "Chỉ số bmi của bạn ="+ bmi +" "+kq;
}