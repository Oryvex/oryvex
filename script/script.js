function route(sloc, sterm = "") {
  if(sloc == "google"){
    window.open("https://google.com/search?q="+sterm.value)
  }else{
    if(sterm.value != ""){
    // console.log("/filter?f="+sloc+"&q="+sterm.value);
     window.location.assign("/filter/?f="+sloc+"&q="+sterm.value);
  }else{
    window.location.assign(`/filter/?f=${sloc}&q=`);
    
  }
  }
  
}
