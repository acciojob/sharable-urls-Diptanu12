// your code here
document.getElementById('urlForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var year = document.getElementById('year').value;
  
  var url = "https://localhost:8080/?";
  
  if (name.trim() !== '') {
    url += "name=" + encodeURIComponent(name);
  }
  
  if (year.trim() !== '') {
    if (name.trim() !== '') {
      url += "&";
    }
    url += "year=" + encodeURIComponent(year);
  }
  
  document.getElementById('url').textContent = url;
});