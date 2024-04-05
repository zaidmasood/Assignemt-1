"use strict";
let orderlist = [];
let currentorderlist = {};

let ordernumber = 8900000001;

const mockData = [
  {
    materialID: "FG001",
    name: "Apples",
    description: "Delicious Red Apples",
    categoryID: "FRUIT",
    categoryDescription: "Fresh Fruit",
    quantity: 100,
    uom: "DZ",
    salesPricePerUnit: 300,
    currency: "PKR",
  },
  {
    materialID: "FG002",
    name: "Bananas",
    description: "Nice Yellow Bananas",
    categoryID: "FRUIT",
    categoryDescription: "Fresh Fruit",
    quantity: 200,
    uom: "DZ",
    salesPricePerUnit: 100,
    currency: "PKR",
  },
  {
    materialID: "FG003",
    name: "Almonds",
    description: "Dry Roasted Almonds",
    categoryID: "DRYNF",
    categoryDescription: "Dry Nuts & Fruits",
    quantity: 440,
    uom: "KG",
    salesPricePerUnit: 3000,
    currency: "PKR",
  },
  {
    materialID: "FG004",
    name: "Pine Nuts",
    description: "Afghani Chilghouza",
    categoryID: "DRYNF",
    categoryDescription: "Dry Nuts & Fruits",
    quantity: 259,
    uom: "KG",
    salesPricePerUnit: 9000,
    currency: "PKR",
  },
  {
    materialID: "FG005",
    name: "Raisins",
    description: "Sweet Dark Kishmish",
    categoryID: "DRYNF",
    categoryDescription: "Dry Nuts & Fruits",
    quantity: 178,
    uom: "KG",
    salesPricePerUnit: 1000,
    currency: "PKR",
  },
];

const customerData = [
  {
    customerID: "C0001",
    name: "Agha’s Market",
    categoryID: "All",
    address: "V2MM+PJV, Garden East Karachi, Karachi City, Sindh, Pakistan",
    email: "aghaz@asm.com",
    creditLine: "90,000,000",
    currency: "PKR",
    status: "Active",
  },
  {
    customerID: "C0002",
    name: "Al-Fatah",
    categoryID: "All",
    address: "64-Z Street 22, Sector Z DHA Phase 3, Lahore, Punjab, Pakistan",
    email: "alfatah@afsm.com",
    creditLine: "70,000,000",
    currency: "PKR",
    status: "Active",
  },
  {
    customerID: "C0003",
    name: "Chacha Sheeda Store",
    categoryID: "All",
    address: "281 Gol Bagh Rd, Shad Bagh, Lahore, Punjab, Pakistan",
    email: "sheed@shadbagh.com",
    creditLine: "1,000,000",
    currency: "PKR",
    status: "Active",
  },
  {
    customerID: "C0004",
    name: "Khan Fruits",
    categoryID: "FRUIT",
    address: "8 Ghazi Rd, Sector P Dha Phase 1, Lahore, Punjab, Pakistan",
    email: "khanfruits@kfs.com",
    creditLine: "50,000",
    currency: "PKR",
    status: "Inactive",
  },
  {
    customerID: "C0005",
    name: "Balochistan Dry Fruit Merchant",
    categoryID: "DRYNF",
    address:
      "Hamza Plaza, Plot 20, Hilal Rd S, F-11 Markaz, F-11, F 11 Markaz F-11, Islamabad, Islamabad Capital Territory 44000, Pakistan",
    email: "baloch@bdfm.com",
    creditLine: "15,000,000",
    currency: "PKR",
    status: "Active",
  },
];

//Converting Inventory data to table

const InventoryH = [
  "Material ID",
  "Name",
  "Description",
  "Category ID",
  "Category Description",
  "Quantity",
  "Unit of Measure (UOM)",
  "Sales Price/Unit",
  "Currency",
];

let table = document.getElementById("Inventory");
const headerRowI = document.createElement("tr");

InventoryH.forEach((headerText) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRowI.append(headerCell);
});
document.getElementById("Inventory").appendChild(headerRowI);

for (let user of mockData) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = user.materialID;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.textContent = user.name;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.textContent = user.description;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.textContent = user.categoryID;
  tr.appendChild(td4);

  let td5 = document.createElement("td");
  td5.textContent = user.categoryDescription;
  tr.appendChild(td5);

  let td6 = document.createElement("td");
  td6.id = `${user.materialID}`;
  td6.textContent = user.quantity;
  tr.appendChild(td6);

  let td7 = document.createElement("td");
  td7.textContent = user.uom;
  tr.appendChild(td7);

  let td8 = document.createElement("td");
  td8.textContent = user.salesPricePerUnit;
  tr.appendChild(td8);

  let td9 = document.createElement("td");
  td9.textContent = user.currency;
  tr.appendChild(td9);

  table.appendChild(tr);
}

//Converting Customers Object into Table

const CustomersH = [
  "Customer ID",
  "Name",
  "Category ID",
  "Address",
  "Email",
  "Credit Line",
  "Currency",
  "Status",
];
let customer = document.getElementById("Customers");

const headerRowC = document.createElement("tr");

CustomersH.forEach((headerText) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRowC.append(headerCell);
});
document.getElementById("Customers").appendChild(headerRowC);

for (let user of customerData) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.textContent = user.customerID;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.textContent = user.name;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.textContent = user.categoryID;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.textContent = user.address;
  tr.appendChild(td4);

  let td5 = document.createElement("td");
  td5.textContent = user.email;
  tr.appendChild(td5);

  let td6 = document.createElement("td");
  td6.textContent = user.creditLine;
  tr.appendChild(td6);

  let td7 = document.createElement("td");
  td7.textContent = user.currency;
  tr.appendChild(td7);

  let td8 = document.createElement("td");
  td8.textContent = user.status;
  tr.appendChild(td8);

  customer.appendChild(tr);
}

//Creating Sales Table
let Total = 0;

const SalesH = [
  "Item",
  "Material Id",
  "Name",
  "Description",
  "Catedory ID",
  "Quanitiy",
  "Unit",
  "Price Per Unit",
  "Currency",
  "Total",
];
let Sales = document.querySelector("#SalesTable");

const headerRowS = document.createElement("tr");
headerRowS.id = "salestableheader";

SalesH.forEach((headerText) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRowS.append(headerCell);
});
document.getElementById("SalesTable").appendChild(headerRowS);

//creating sales order info table
const Info = [
  "Customer",
  "Delivery Date",
  "Items Total",
  "15 % Tax",
  "Order Total",
];
const clist = [];
customerData.forEach(function (customer) {
  clist.push(customer.customerID);
});

let Hinfo = document.querySelector("#SalesInfo");
const createinfo = function () {
  const titles = document.createElement("tr");
  titles.id = "hrow";
  Info.forEach(function (e) {
    const cell = document.createElement("th");
    cell.textContent = e;
    titles.append(cell);
  });
  document.getElementById("SalesInfo").appendChild(titles);
};
createinfo();
const data = function () {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  const customer = document.createElement("select");

  customer.id = `c${ordernumber}`;
  let element = document.createElement("option");
  customer.className = "infoinputs";
  element.textContent = "Select Customer";
  customer.appendChild(element);

  clist.forEach(function (e) {
    let element = document.createElement("option");
    element.textContent = e;
    element.value = e;
    customer.appendChild(element);
  });
  td1.textContent = "";
  td1.appendChild(customer);
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  const date = document.createElement("input");
  date.className = "infoinputs";
  date.id = `d${ordernumber}`;
  date.type = "date";
  td2.textContent = "";
  td2.appendChild(date);
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.id = "ItemsTotal";
  td3.textContent = Total;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.id = "Tax";
  td4.textContent = "";
  tr.appendChild(td4);

  let td5 = document.createElement("td");
  td5.id = "All";
  td5.textContent = "";
  tr.appendChild(td5);

  Hinfo.appendChild(tr);
};

data();
//listening to customer change
let selectedcustomer;
const ourcustomer = document.querySelector(`#c${ordernumber}`);

ourcustomer.addEventListener("change", function () {
  selectedcustomer = this.value;
  //adding data to summary

  currentorderlist.cutomer = selectedcustomer;
});

// listeining to select date
let selecteddate;
const currentdate = document.querySelector(`#d${ordernumber}`);
currentdate.addEventListener("change", function () {
  selecteddate = this.value;
  currentorderlist.orderdate = selecteddate;
});

//function :creating row of sales order.......................

const MIDs = [];
mockData.forEach(function (e) {
  const ID = e.materialID;
  MIDs.push(ID);
});
let selectedMaterial;
let n = 1;
let stockstatus = false;
let new_n, old;
var Status = false;
let selectedMaterialID;
const CreateRow = function () {
  let tr = document.createElement("tr");
  //giving class name to delete rows to clear screen
  tr.className = "AllRows";
  /////
  let td1 = document.createElement("td");
  td1.textContent = `0${n}`;
  n += 1;
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  td2.id = `MaterialID${n}`;
  td2.textContent = "";
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.id = `Name${n}`;
  td3.textContent = "";
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.id = `Descriion${n}`;
  td4.textContent = "";
  tr.appendChild(td4);

  let td5 = document.createElement("td");
  td5.id = `CategoryID${n}`;
  td5.textContent = "";
  tr.appendChild(td5);

  let td6 = document.createElement("td");
  let input = document.createElement("input");
  input.className = "inputs";
  input.id = `input${n}`;
  input.value = 0;
  input.min = 1;
  input.type = "number";

  td6.appendChild(input);
  tr.appendChild(td6);

  let td7 = document.createElement("td");
  td7.id = `Unit${n}`;
  td7.textContent = "";
  tr.appendChild(td7);

  let td8 = document.createElement("td");
  td8.id = `Priceperunit${n}`;
  td8.textContent = "";
  tr.appendChild(td8);

  let td9 = document.createElement("td");
  td9.id = `Currency${n}`;
  td9.textContent = "";
  tr.appendChild(td9);

  let td10 = document.createElement("td");
  td10.id = `Total${n}`;
  td10.textContent = "";
  tr.appendChild(td10);

  Sales.appendChild(tr);

  //Adding Drop Down
  const customerCell = document.getElementById(`MaterialID${n}`);
  const customerSelector = document.createElement("select");
  customerSelector.className = "material-id-selector";

  customerSelector.id = `customerSelector${n}`;

  const option = document.createElement("option");

  option.textContent = "Select Material ID";
  option.value = "Select Material ID";

  customerSelector.appendChild(option);
  customerCell.appendChild(customerSelector);
  //function to populate

  function populateMaterialIdOptions(row) {
    const materialIdSelector = row.querySelector(`#customerSelector${n}`);

    mockData.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.materialID;
      option.textContent = item.materialID;
      materialIdSelector.appendChild(option);
    });

    if (selectedMaterial) {
      Status = true;
    } else {
      Status = false;
    }
    // listen for change event on the material ID selector //

    materialIdSelector.addEventListener("change", function () {
      selectedMaterialID = this.value;
      selectedMaterial = mockData.find(
        (item) => item.materialID === selectedMaterialID
      );

      if (selectedMaterial) {
        Status = true;
        // update row with selected material's data //
        row.querySelector(`#Name${n}`).textContent = selectedMaterial.name;
        row.querySelector(`#Descriion${n}`).textContent =
          selectedMaterial.description;
        row.querySelector(`#CategoryID${n}`).textContent =
          selectedMaterial.categoryID;
        row.querySelector(`#Unit${n}`).textContent = selectedMaterial.uom;

        row.querySelector(`#Priceperunit${n}`).textContent =
          selectedMaterial.salesPricePerUnit;
        row.querySelector(`#Currency${n}`).textContent =
          selectedMaterial.currency;
        currentorderlist.currency = selectedMaterial.currency;
      } else {
        Status = false;
      }
    });
  }
  populateMaterialIdOptions(tr);
  // listen to quantity selection
  const TotalElement = document.querySelector("#ItemsTotal");
  const quantityselector = document.querySelector(`#input${n}`);
  quantityselector.addEventListener("change", function () {
    if (new_n === n) {
      Total -= old;
      const quantity = this.value;
      const price = document.querySelector(`#Priceperunit${n}`).textContent;
      document.querySelector(`#Total${n}`).textContent = quantity * price;
      old = quantity * price;

      Total +=
        quantity * document.querySelector(`#Priceperunit${n}`).textContent;
      TotalElement.textContent = Total;
    } else {
      const quantity = this.value;
      const price = document.querySelector(`#Priceperunit${n}`).textContent;
      document.querySelector(`#Total${n}`).textContent = quantity * price;
      old = quantity * price;
      Total +=
        quantity * document.querySelector(`#Priceperunit${n}`).textContent;
      TotalElement.textContent = Total;

      new_n = n;
    }
    currentorderlist.total = Total;

    document.querySelector("#Tax").textContent = Total * 0.15;
    currentorderlist.tax = Total * 0.15;
    document.querySelector("#All").textContent = Total + Total * 0.15;
  });
};

//Hiding Data
const hiding = function () {
  document.getElementById("Inventory").style.display = "none";
  document.getElementById("Customers").style.display = "none";
  document.getElementById("Inventory--text").style.display = "none";
  document.getElementById("SalesOrder").style.display = "none";
  document.getElementById("SalesInfo").style.display = "none";
  document.getElementById("PreviousOrders").style.display = "none";
  document.getElementById("previousordersheading").style.display = "none";
  document.getElementById("NewOrder").style.display = "none";
};
hiding();
//Displaying Inventory

const DisplayInventory = document.querySelector("#Display--Inventory");
DisplayInventory.addEventListener("click", function () {
  document.getElementById("Inventory--text").innerHTML =
    "Whole Foods Inventory";
  hiding();
  document.getElementById("Inventory").style.removeProperty("Display");

  document.getElementById("Inventory--text").style.removeProperty("Display");
});
//Displaying Customers

const DisplayCutomers = document.querySelector("#Display--Customers");
DisplayCutomers.addEventListener("click", function () {
  document.getElementById("Inventory--text").innerHTML = "Customers Data";
  hiding();
  document.getElementById("Customers").style.removeProperty("Display");

  document.getElementById("Inventory--text").style.removeProperty("Display");
});

//Displaying Sales Oder
const DisplaySales = document.querySelector("#Display--Sales");
DisplaySales.addEventListener("click", function () {
  hiding();
  document.getElementById("Inventory--text").innerHTML = "Create Sales Order";
  document.getElementById("Inventory--text").style.removeProperty("Display");
  document.getElementById("SalesOrder").style.removeProperty("Display");
  document.getElementById("SalesInfo").style.removeProperty("Display");
  if (document.getElementById("AddRow").style.display == "none") {
    document.getElementById("NewOrder").style.removeProperty("Display");
  }
});
const AddRow = document.querySelector("#AddRow");

//Validation Button...

const validbutton = document.querySelector("#Validate");
let validstatus = false;
const conditions = function () {
  if (Status === true) {
    if (n !== 1 && document.querySelector(`#input${n}`).value < 1) {
      alert("Please Provide the Correct Quantity");
    } else {
      if (n === mockData.length + 2) {
        alert("Maximum No. of Items has Reached");
      } else {
        if (
          document.querySelector(`#input${n}`).value <=
          selectedMaterial.quantity
        ) {
          validstatus = true;

          stockstatus = true;
          document.getElementById(`input${n}`).disabled = true;
          document.getElementById(`customerSelector${n}`).disabled = true;

          document.querySelector(`#${selectedMaterialID}`).textContent =
            selectedMaterial.quantity -
            document.querySelector(`#input${n}`).value;
          selectedMaterial.quantity -= document.querySelector(
            `#input${n}`
          ).value;
          alert("Item has been added");
        } else {
          alert("Stock Unavailable");
        }
      }
    }
  } else {
    alert("Please Select the Item");
  }
};

validbutton.addEventListener("click", conditions);

//trigger funcation......

const trigger = function () {
  if (n == mockData.length + 1) {
    alert("Maximum No. of Items has Reached");
  } else {
    if (n === 1 || validstatus === true) {
      CreateRow();
      document.querySelector("#AddRow").textContent = "Add an Item";
      Status = false;
      validstatus = false;
    } else {
      alert("Please save Item");
    }
  }
};
AddRow.addEventListener("click", trigger);

//Displaying Previous Orders
const summarytable = document.querySelector("#Orderssummay");
const summaryheader = [
  "Sales Order No.",
  "Customer ID",
  "Delivery Date",
  "Total Price",
  "15% Tax",
  "Currency",
];
const createheader = function () {
  let tr = document.createElement("tr");
  summaryheader.forEach(function (e) {
    let td = document.createElement("td");
    td.className = "summaryheader";
    td.textContent = e;
    tr.appendChild(td);
  });
  summarytable.appendChild(tr);
};
createheader();
const createpreviosorders = function () {
  orderlist.push(currentorderlist);
  console.log(orderlist.length);

  if (orderlist.length > 1) {
    orderlist[orderlist.length - 1].ordernumber =
      orderlist[orderlist.length - 2].ordernumber + 1;
  } else {
    currentorderlist.ordernumber = ordernumber;
  }

  const currentorder = [orderlist[orderlist.length - 1]];
  for (let user of currentorder) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = user.ordernumber;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = user.cutomer;
    tr.appendChild(td2);

    let td6 = document.createElement("td");
    td6.textContent = user.orderdate;
    tr.appendChild(td6);

    let td3 = document.createElement("td");
    td3.textContent = user.total;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = user.tax;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.textContent = user.currency;
    tr.appendChild(td5);
    summarytable.appendChild(tr);
  }
};
//Saving Order
let savingordervalue = false;
let orderdouble;
const savingorder = function () {
  if (
    selectedcustomer &&
    document.querySelector(`#c${ordernumber}`).value !== "Select Customer"
  ) {
    if (selecteddate) {
      if (validstatus) {
        if (orderdouble === ordernumber) {
          alert("Order has already been saved.");
        } else {
          createpreviosorders();
          alert("Order has been saved");
          savingordervalue = true;

          document.getElementById("Validate").style.display = "none";
          document.getElementById("SaveOrder").style.display = "none";
          document.getElementById("AddRow").style.display = "none";
          document.getElementById("NewOrder").style.removeProperty("Display");
        }
      } else {
        alert("Please Save Items");
      }
    } else {
      alert("Please Select Date");
    }
  } else {
    alert("Please Select Customer");
  }
};

const saveorderbutton = document.querySelector("#SaveOrder");
saveorderbutton.addEventListener("click", function () {
  savingorder();
});
const displayordersbutton = document.querySelector("#Display--Orders");
displayordersbutton.addEventListener("click", function () {
  hiding();
  console.log(savingordervalue);

  if (savingordervalue === true) {
    document
      .getElementById("previousordersheading")
      .style.removeProperty("Display");
    document.getElementById("PreviousOrders").style.removeProperty("Display");
    document.getElementById("Orderssummay").style.removeProperty("Display");
    document.getElementById("if_no_orders").style.display = "none";
  } else {
    document.getElementById("PreviousOrders").style.removeProperty("Display");
    document.getElementById("if_no_orders").style.removeProperty("Display");
  }
});

// creating function of new order
const newfunction = function () {
  let previoustable = document.querySelectorAll(".AllRows");
  previoustable.forEach(function (e) {
    e.remove();
  });
  Total = 0;
  old = 0;
  n = 1;
  document.querySelector("#ItemsTotal").textContent = "";
  document.querySelector("#Tax").textContent = "";
  document.querySelector("#All").textContent = "";
  document.getElementById("AddRow").style.removeProperty("Display");
  document.getElementById("NewOrder").style.display = "none";

  trigger();
  document.getElementById("Validate").style.removeProperty("Display");
  document.getElementById("SaveOrder").style.removeProperty("Display");
};

const neworderbutton = document.querySelector("#NewOrder");
neworderbutton.addEventListener("click", newfunction);
