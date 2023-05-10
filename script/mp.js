
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var filter = urlParams.get("f");
var query = urlParams.get("q");

if(filter == null || filter == "null"){
  window.location.assign("/");
}

if(filter == "sm" || filter == "bk" || filter=="tv"){
query = ""
  
}else{
  
document.getElementById("serx").setAttribute("placeholder", `Filter or Search Something New Here...`);
}

var alll = [];

const current = searchlist[filter]['items'];
Object.entries(current).forEach(([key, value]) => {
  $("#dets").append(`
<tr class='mex'>
        <td class='blok'>
          <label class='ton'>${key}</label><br>
          <a href='${value}${query}' class='cfx'>${value}${query}</a><br><br>
          <a href='${value}${query}' class='ssr' target="_blank"><i class='fa fa-external-link'></i>Visit</a>
          <a href='whatsapp://send?text=${value}${query}' class='ssr'><i class='fa fa-whatsapp'></i>WhatsApp</a>
          
        </td>
      </tr>                    
`);
alll.push(`${value}${query}`);  
});

document.getElementById("serx").addEventListener("input", function() {
  var input, filter, table, rows, cell, i, txtValue;
  input = document.getElementById("serx");
  filter = input.value.toUpperCase();
  table = document.getElementById("fyltr");
  rows = table.getElementsByTagName("tr");

  var resultsFound = false; // Variable to track if any results were found

  // Loop through all table rows, and hide those that don't match the search query
  for (i = 0; i < rows.length; i++) {
    cell = rows[i].getElementsByTagName("td")[0];
    if (cell) {
      txtValue = cell.textContent || cell.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
        resultsFound = true; // Set resultsFound to true if a match is found
      } else {
        rows[i].style.display = "none";
      }
    }
  }

  // Check if any results were found and log a message if not
  if (!resultsFound) {
     var eme = document.getElementById("serx").value;
    let ffff = urlParams.get("f");
    if (document.getElementById("veyo_res")) {
      document.getElementById("dets").removeChild(document.getElementById("veyo_res"));
    }
    
    var s = document.createElement("a");
    s.innerText = `Search for '${eme}' here...`;
    s.id = 'veyo_res';
    s.className = "ssr";
    s.href = `/filter/?f=${ffff}&q=${eme}`;
    s.style="background-color: #212224";
    document.getElementById("dets").appendChild(s);

  }else{
     if (document.getElementById("veyo_res")) {
      document.getElementById("dets").removeChild(document.getElementById("veyo_res"));
    }
  }
});

var ind = 1;
others.forEach(function(shortform) {
  
  if(query == ""){
    query = searchlist[filter]['desc'];
  }
  if(shortform != filter){
    $("#op"+ind).attr("onclick", "window.location.assign('/filter/?f="+shortform+"&q="+query+"')");
    $("#op"+ind).html(`<i class='${searchlist[shortform]['fa']}'></i>`)
    ind++;
  }
});
function openall(){
  alll.forEach(function (link) {
    window.open(link);
  })
}

function ropen(){
  var sme = document.getElementById("serx").value;
  if(sme == ""){
    sme = urlParams.get("q");
  }
  var filt = urlParams.get("f");
  window.location.assign(`/filter/?f=${filt}&q=${sme}`);
}