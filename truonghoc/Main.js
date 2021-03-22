



function save(){
    let Id = document.getElementById("ID").value;
    let code = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let adrees = document.getElementById("address").value;


    if (!Id){
        document.getElementById("errorid").innerText="Nhập thông  giới tính ông ơi !!!"
    }
    else {
        document.getElementById("errorid").innerText="";
    }
    if (!code){
        document.getElementById("errorcode").innerText="Nhập tên ông ơi !!!"
    }
    else {
        document.getElementById("errorcode").innerText="";
    }
    if (!name){
        document.getElementById("errorName").innerText="Nhập ngày sinh nhật ông ơi ông ơi !!!"
    }
    else {
        document.getElementById("errorName").innerText="";
    }
    if (!city){
        document.getElementById("errorcity").innerText="Nhập ngày sinh nhật ông ơi ông ơi !!!"
    }
    else {
        document.getElementById("errorcity").innerText="";
    }

    if (!phone){
        document.getElementById("errorphone").innerText="Nhập ngày sinh nhật ông ơi ông ơi !!!"
    }
    else {
        document.getElementById("errorphone").innerText="";
    }

    if (!adrees){
        document.getElementById("erroradrees").innerText="Nhập ngày sinh nhật ông ơi ông ơi !!!"
    }
    else {
        document.getElementById("erroradrees").innerText="";
    }


    // if (Id && code && name && city && phone && adrees) {
    //     let list = localStorage.getItem('key')
    //         ? JSON.parse(localStorage.getItem('key')) : [];
    //     list.push({
    //         id :Id,
    //         code:code,
    //         name:name,
    //         city:city,
    //         phone:phone,
    //         adrees:adrees
    //
    //     })
    //     localStorage.setItem('key', JSON.stringify(list))
    // }
    console.log(Id,code,name,city,phone,adrees)
    // renderStuden()
    // resetFrom()
}
// function renderStuden(){
//     let list = localStorage.getItem('key')
//         ? JSON.parse(localStorage.getItem('key')):[];
//     let nguoi =" <tr>\n" +"" +
//         "<th>Id</th>"+
//         "       <th>Ho ten</th>\n" +
//         "       <th>Gioi tinh</th>\n" +
//         "       <th>Ngay sinh</th>\n" +
//         "       <td>Action</td>\n" +
//         "   </tr>"
//     list.forEach(((value, index) =>{
//             nguoi += `<tr>
//             <th>${index}</th>
//             <td>${value.name}</td>
//             <td>${value.gender}</td>
//             <td>${value.dod}</td>
//             <td><button onclick="editpersion(${index})">Edit</button><button onclick="deleteStudent(${index})">Delete</button></td>
//         </tr>`
//         })
//     )
//     document.getElementById("table").innerHTML=nguoi;
// }
// function change() {
//     let list = localStorage.getItem('key')
//         ? JSON.parse(localStorage.getItem('key')) : [];
//     let keynumber = document.getElementById('index').value;
//     list[keynumber] = {
//         gender: document.querySelector('input[name = gender]:checked').value,
//         name: document.getElementById("name").value,
//         dod: document.getElementById("dod").value,
//     }
//     localStorage.setItem('key', JSON.stringify(list))
//     document.getElementById("input").style.display = "inline-block";
//     document.getElementById("update").style.display = "none";
//     renderStuden()
// }
//
//
//
//
//
//
//
// function deleteStudent(key) {
//     let list = localStorage.getItem('key')
//         ? JSON.parse(localStorage.getItem('key')):[];
//
//     if (confirm('Có chắc muốn xoá đi ?')) {
//         list.splice(key, 1)
//     }
//     localStorage.setItem('key', JSON.stringify(list))
//     renderStuden()
// }
//
//
//


// function resetFrom(){
//
//     if (document.getElementById('men').checked){
//         document.getElementById('men').checked=false;
//     }
//     if (document.getElementById('woman').checked){
//         document.getElementById('woman').checked=false
//     }
//     document.getElementById("name").value="";
//     document.getElementById("dod").value="";
//
// }


//}
// function change() {
//
//     let list = localStorage.getItem('key')
//         ? JSON.parse(localStorage.getItem('key')) : [];
//     let keynumber = document.getElementById('index').value;
//
//     list[keynumber] = {
//         name: document.getElementById("name").value,
//         dod: document.getElementById("dod").value,
//         gender: document.querySelector("input[name=gender]:checked").value
//     }
//
//     localStorage.setItem('key', JSON.stringify(list))
//
//     document.getElementById("input").style.display = "inline-block";
//     document.getElementById("update").style.display = "none";
//     renderStuden()
//     resetFrom()
//
//
// }









// let list = localStorage.getItem('key')
//     ? JSON.parse(localStorage.getItem('key')):[];
// let keynumber = document.getElementById("index").value
// list[keynumber]={
//     gender:document.querySelector("input[name=gender]:checked").value,
//     name: document.getElementById("name").value,
//     dod: document.getElementById("dod").value
// }
// localStorage.setItem("key", JSON.stringify(list))
// document.getElementById("input").style.display="inline-block";
// document.getElementById("update").style.display="none";
// resetFrom();
// renderStuden()













function xoa(key){
    let list = localStorage.getItem('key')
        ? JSON.parse(localStorage.getItem('key')):[];
    list.splice(key ,1);
    localStorage.setItem('key', JSON.stringify(list))
    renderStuden()

}

