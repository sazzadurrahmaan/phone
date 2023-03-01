const loadPhones =async(searchText) =>{
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  const res = await fetch(url) ;
  const data = await res.json();
  displayPhones(data.data)
  }

const displayPhones = phones =>{
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerText = ' ';
  phones.forEach(phone =>{
  const element = document.createElement("div");
  element.classList.add('col');


  element.innerHTML = `
      <div class="card p-4">
                          <img src="${phone.image}" class="card-img-top" alt="...">
                      
                          <h3>Brand : ${phone.brand}</h3>
                          <h5 class="card-title">Device Name : ${phone.phone_name}</h5>
                          <p class="card-text">Slug : ${phone.slug}</p>
      </div>
  
  `   
  phonesContainer.appendChild(element);
})
 
}
document.getElementById('searchBtn').addEventListener("click",()=>{
  const searchText = document.getElementById("searchText").value;
  loadPhones(searchText);
  document.getElementById("searchText").value = '';
})
