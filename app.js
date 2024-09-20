// Interfaces
import { Invoice } from "./classes/invoice.js";
import { Payments } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
{ /*
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 350);
docTwo = new Payments('mario', 'plumbing work', 300);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs)

const invOne = new Invoice(
    "mario",
    "work on the mario websiite",
    250,
);

const invTwo = new Invoice(
    "Luigi",
    "work on the Luigi website",
    300
);

let invoices: Invoice[] = [] // Only objects created using the Invoice class can be added to this array
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})
*/
}
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type.value, 'end');
});
