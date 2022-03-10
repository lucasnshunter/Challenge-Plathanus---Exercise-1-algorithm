$( "#submit_to_convert" ).click(function() {
  var number=$("#number").val();
  if(number>=0 && number!=""){
    var url = "http://localhost:3000/dashboard/convert_numeral_to_word";
    var obj = {"number":number};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          $('#retorn_server').text(xhr.responseText);
          insert_data_in_historic_table(number,xhr.responseText)
       }};
    var data =  JSON.stringify( obj);
    xhr.send(data);
  }else{
    alert("input less than zero or empty! ")
  }
});

function insert_data_in_historic_table(number,word) {
  var table = document.getElementById("table_historic");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = number;
  cell2.innerHTML = word;
}
