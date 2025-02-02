// Class and Methods

// Class - put class in printHelper.js

import { CustomerDetails } from "./helpers/printHelper.js";

var customerDetails = new CustomerDetails()
customerDetails.printFirstName("Eren");
customerDetails.printLastName("Jaeger");

// Methods

// need to delete line #7 from here and transfer it to printHelper.js
// view changes in printHelper.js doc
// here need to change  CustomerDetails to customerDetails with small letter
// it will look like this:

//import { customerDetails } from "./helpers/printHelper.js";

// customerDetails.printFirstName("Eren");
// customerDetails.printLastName("Jaeger");