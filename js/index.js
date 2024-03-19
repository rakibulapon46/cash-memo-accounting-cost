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

    const itemElement = document.createElement("tr");
    // itemElement.innerHTML = ` ${itemName} - ${itemQuantity} x ${itemPrice} = ${itemTotal.toFixed(
    //   2
    // )} <span> <button id="deleteBtn"><i class="fa-solid fa-xmark"></i> </button></span>`;
    itemElement.innerHTML = `
    <td>1</td>
    <td>${itemName}</td>
    <td>${itemQuantity}</td>
    <td>${itemPrice}</td>
    <td>${itemTotal.toFixed(2)}</td>`
    lists.appendChild(itemElement);

    totalDiv.textContent = `Total: ${total.toFixed(2)} Taka`;
    billingForm.reset();

    deleteBtn.addEventListener("click", function () {
      // itemElement.style.display = "none";
      lists.removeChild(itemElement);
      total -= itemTotal;
    });

    clearAllBtn.addEventListener("click", function () {
      itemElement.style.display = "none";
      totalDiv.textContent = `Total: 0 Taka`;
      total = 0;
    });
  });
  printMemo.addEventListener("click", function () {
    window.print();
  });
});
