var bookmarkerName =document.getElementById("bookmarkerName");
var bookmarkerURL =document.getElementById("bookmarkerURL");
var bookMarkers= [];


function addBooks()
{
     if (validBookName()===true) {
        var book = {
        nameBook: bookmarkerName.value,
        siteUrl: bookmarkerURL.value
         }
         //PushList/
          bookMarkers.push(book);
    clearForm();
   
         display(bookMarkers);
         visitSite();
    //DisplayList For User
     }
       
    else {
        alert("Please Enter Your Valid Name");
    }
}
 
function display(list) {
   
    var cart = '';
    for (var i = 0; i < list.length; i++){
        cart += ` <tr>
             <td>${i+1}</td>
             <td>${list[i].nameBook}</td>
             <td><a onclick="VisitSite()" href="${list[i].siteUrl}" type="button" class="btn btn-success" ><i class="fa-solid fa-eye text-white "></i>Visit</a>
</td>
             <td><button onclick="deleteBooks()"  class="btn btn-danger btn-sm"><i class="fa-solid fa-trash text-white"></i> Delete</button></td>
        </tr>`

    }
    document.getElementById('tBody').innerHTML = cart;
}
/**Function Delete() */
function deleteBooks(index) {
    bookMarkers.splice(index, 1);
    display(bookMarkers);
}
//Function Clear()*/
function clearForm() {
     bookmarkerName.value = "";
    bookmarkerURL.value = "";
}
/**Fuction Visit */
function visitSite() {
    return bookmarkerURL;
}
/**Function validBooks  */
function validBookName() {
    var x = /^[A-Z][a-z]{3,8}$/;
    if (x.test(bookmarkerName.value)=== true){
        return true; 
    } else
    {
        window.alert("Please Enter Your Valid Name ");
    }
    display(bookMarkers);
}