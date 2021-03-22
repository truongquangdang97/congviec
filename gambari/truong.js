
function save(){
    let id = document.getElementById("id").value;
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let adress = document.getElementById("adrees").value;

    if (!id){
        document.getElementById("errorid").innerHTML="nhap thieu id "
    }else {
        document.getElementById("errorid").innerHTML="";
    }
    if (!code){
        document.getElementById("errorcode").innerHTML="nhap thieu code "
    }else {
        document.getElementById("errorcode").innerHTML="";
    }
    if (!name){
        document.getElementById("errorName").innerHTML="nhap thieu tên  "
    }else {
        document.getElementById("errorName").innerHTML="";
    }
    if (!city){
        document.getElementById("errorcity").innerHTML="Nhập thiếu thành phố  "
    }else {
        document.getElementById("errorcity").innerHTML="";
    }
    if (!phone){
        document.getElementById("errorphone").innerHTML="Nhập thiếu số điện thoại "
    }else {
        document.getElementById("errorphone").innerHTML="";
    }
    if (!adress){
        document.getElementById("erroradrees").innerHTML="Nhập thiếu địa chỉ  "
    }else {
        document.getElementById("erroradrees").innerHTML="";
    }
    if (id&&code && name &&city&&phone&&adress) {
        let list = localStorage.getItem('key')
            ? JSON.parse(localStorage.getItem('key')) : [];
        list.push({
            id:id,
            code:code,
            name:name,
            city:city,
            phone:phone,
            adress:adress
        })
        localStorage.setItem('key', JSON.stringify(list))
    }
    reder()
    resetFrom()
}
function reder(){
    let list = localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')) : [];
    let school=" <tr>\n" +"" +
        "<th>Id</th>"+
        "<th>code</th>"+
        " <th>name</th>\n" +
        " <th>city</th>\n" +
        "<th>phone</th>\n" +
        "<th>adress</th>"+
        "<td>Action</td>\n" +
        "   </tr>"
    list.forEach(((value, index) =>{
            school += `<tr>
            <td>${value.id}</td>
            <td>${value.code}</td>
            <td>${value.name}</td>
            <td>${value.city}</td>
            <td>${value.phone}</td>
            <td>${value.address}</td>
            <td><button onclick="edit(${index})">Edit</button><button onclick="xoa(${index})">Delete</button></td>
        </tr>`
        })
    )




    document.getElementById("table").innerHTML=school;
}


function resetFrom(){
    document.getElementById("id").value="";
    document.getElementById("code").value="";
    document.getElementById("name").value="";
    document.getElementById("city").value="";
    document.getElementById("phone").value="";
    document.getElementById("address").value="";
}
function xoa(key){
    let list = localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')) : [];
    if (confirm("chac chan muon xoa")){
        list.splice("key",1);
    }
    localStorage.setItem("key",JSON.stringify(list))

    reder()
}



function edit(index){
    let list = localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')) : [];
    document.getElementById("id").value=list[index].id
    document.getElementById("code").value=list[index].code
    document.getElementById("name").value=list[index].name
    document.getElementById("city").value=list[index].city
    document.getElementById("phone").value=list[index].phone
    document.getElementById("address").value=list[index].address

    document.getElementById("index").value=index;


    document.getElementById('update').style.display = 'block'
    document.getElementById('input').style.display = 'none'
}

function change(index){
    // let list = localStorage.getItem('key')
    //     ? JSON.parse(localStorage.getItem('key')) : [];
    //
    // let keynumber= document.getElementById("index").value;
    // list[keynumber]={
    //     id: document.getElementById("id").value,
    //     code: document.getElementById("code").value,
    //     name: document.getElementById("name").value,
    //     city: document.getElementById("city").value,
    //     phone: document.getElementById("phone").value,
    //     adress: document.getElementById("address").value,
    // }
    // localStorage.setItem('key',JSON.stringify(list))

    reder();
    resetFrom()
    let list = localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')) : [];
    let keyNumber = document.getElementById('index').value;
    list[keyNumber] = {


            id: document.getElementById("id").value,
            code: document.getElementById("code").value,
            name: document.getElementById("name").value,
            city: document.getElementById("city").value,
            phone: document.getElementById("phone").value,
            adress: document.getElementById("address").value,
    }
    localStorage.setItem('key', JSON.stringify(list))

    document.getElementById('update').style.display = 'none'
    document.getElementById('input').style.display = 'block'
}











function seach(){
    let list = localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')) : [];
    let xxx= document.getElementById("x").value;
    if (xxx===list.name.value){
        console.log(list.indexOf("xxx"))
    }
    document.getElementById("y").innerHTML=xxx;
}


