//Create the XHR Object
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/api', true)
//call the onload 
xhr.onload = function() {
    //check if the status is 200(means everything is okay)
    if (xhr.status === 200){
        //return server response as an object with JSON.parse
        console.log(JSON.parse(xhr.responseText));
        let reponse = (JSON.parse(xhr.responseText));
        document.getElementById("quote").innerHTML = reponse["quote"];
        document.getElementById("photo").src = reponse["photo"];
        document.getElementById("author").innerHTML = reponse["author"];
    }
}
//call send
xhr.send();


