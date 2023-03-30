const request = fetch("https://jsonplaceholder.typicode.com/users");
let dataCollection = "";

request
  .then((res) => res.json())
  .then((res) => {
    res.forEach((item, key) => {
      dataCollection += `
        <tr>
          <th>${++key}</th>
          <th>${item.name}</th>
          <th>${item.email}</th>
          <th>${item.phone}</th>
        </tr>
      `;
    })

    document.getElementById("content").innerHTML = dataCollection;
  })
  .catch(() => console.log("Halaman error"));
