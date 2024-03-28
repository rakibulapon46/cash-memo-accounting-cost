// finding elements
document.addEventListener("DOMContentLoaded", function () {
  const billingForm = document.getElementById("billing_form");

  const addBtn = document.getElementById("addBtn");
  const message = document.getElementById("message");
  const lists = document.getElementById("lists");
  const totalDiv = document.getElementById("totalDiv");
  const printMemo = document.getElementById("printMemo");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  let total = 0;
  let itemSN = 0;

  billingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const itemQuantity = parseFloat(
      document.getElementById("itemQuantity").value
    );
    const itemPrice = parseFloat(
      document.getElementById("itemPrice").value
    ).toFixed(2);

    const itemTotal = itemQuantity * itemPrice;
    total += itemTotal;
    itemSN++;

    const itemElement = document.createElement("tr");
    itemElement.setAttribute("data-id", itemSN);
    itemElement.innerHTML = `
      <td>${itemSN}</td>
      <td>${itemName}</td>
      <td>${itemQuantity}</td>
      <td>${itemPrice}</td>
      <td>${itemTotal.toFixed(2)}</td>
      <td> <button class="deleteBtn"><i class="fa-solid fa-xmark"></i> </button></td>
      `;
    lists.appendChild(itemElement);

    totalDiv.textContent = `Total: ${total.toFixed(2)} Taka`;
    billingForm.reset();

    // deleteBtn.addEventListener("click", function () {
    //   // itemElement.style.display = "none";
    //   lists.removeChild(itemElement);
    //   totalDiv.textContent = `Total: ${total.toFixed(2)} Taka`;
    //   total -= itemTotal;
    //   itemSN++;
    // });

    itemElement
      .querySelector(".deleteBtn")
      .addEventListener("click", function () {
        lists.removeChild(itemElement);
        total -= itemTotal;
        totalDiv.textContent = `Total: ${total.toFixed(2)} Taka`;
        // Update the SN for all remaining items
        document.querySelectorAll("#lists tr").forEach((row, index) => {
          row.querySelector("td:first-child").textContent = index + 1;
        });
        itemSN = lists.querySelectorAll("tr").length; // Update the itemSN to the current number of items
      });

    clearAllBtn.addEventListener("click", function () {
      itemElement.style.display = "none";
      totalDiv.textContent = `Total: ${total.toFixed(2)} Taka`;
      total = 0;
      itemSN = 0;
    });
  });
  printMemo.addEventListener("click", function () {
    window.print();
  });
});
