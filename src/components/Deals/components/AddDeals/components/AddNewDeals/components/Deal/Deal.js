function Deal(name, stage, amount, closeDate, dealOwner, dealType, company, contact, products) {
    this.name = name;
    this.stage = stage;
    this.amount = amount;
    this.closeDate = closeDate;
    this.dealOwner = dealOwner;
    this.dealType = dealType;
    this.company = company;
    this.contact = contact;
    this.products = products;
  }
  
  export default Deal;
  