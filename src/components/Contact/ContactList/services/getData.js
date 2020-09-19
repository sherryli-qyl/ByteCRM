import React from 'react';

// 生成假数据的暂时方法
function createData(
    name,
    email,
    phoneNumber,
    contactOwner,
    associatedCompany,
    lastActivityDate,
    leadStatus,
    createDate
  ) {
    return ({
        name: name, 
        email: email, 
        phoneNumber: phoneNumber, 
        contactOwner: contactOwner,
        associatedCompany: associatedCompany,
        lastActivityDate: lastActivityDate,
        leadStatus: leadStatus,
        createDate: createDate, 
      }
    );
}
  
let Rows = [
    createData(
      'John',
      'fqwfqwd@gmail.com',
      '0454991490',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      1,
      '08/09/2020'
    ),
    createData(
      'Louis',
      'affq@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      2,
      '08/09/2020'
    ),
    createData(
      'Eclair',
      '343ewf@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      3,
      '08/09/2020'
    ),
    createData(
      'Mary',
      '413fqw@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      4,
      '08/09/2020'
    ),
    createData(
      'Brian',
      'edgar61@hotmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      5,
      '08/09/2020'
    ),
    createData(
      'Keith',
      'elias82@yahoo.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      6,
      '08/09/2020'
    ),
    createData(
      'Larry',
      'webb80@mail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      7,
      '08/09/2020'
    ),
    createData(
      'Jason',
      'billy73@mail.com.au',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      8,
      '08/09/2020'
    ),
    createData(
      'Joseph',
      'parlin.joseph@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      5,
      '08/09/2020'
    ),
    createData(
      'Samuel',
      'tebo84@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      3,
      '08/09/2020'
    ),
    createData(
      'Lori',
      'davis1@hotmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      2,
      '08/09/2020'
    ),
    createData(
      'Russell',
      'lou.hull@mail.com.au',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      6,
      '08/09/2020'
    ),
    createData(
      'Debra',
      'eric31@mail.com.au',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      2,
      '08/09/2020'
    ),
    createData(
      'ricky',
      'rhodes89@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      1,
      '08/09/2020'
    ),
    createData(
      'Lanny',
      'price41@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      5,
      '08/09/2020'
    ),
    createData(
      'Peter',
      'barbara.hester.gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      5,
      '08/09/2020'
    ),
    createData(
      'Rebecca',
      'thomas93@mail.com.au',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      6,
      '08/09/2020'
    ),
    createData(
      'David',
      'david59@yahoo.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      4,
      '08/09/2020'
    ),
    createData(
      'Marc',
      'waaso.stanley@gmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      2,
      '08/09/2020'
    ),
    createData(
      'Nancy',
      'daniel.thompson@hotmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      3,
      '08/09/2020'
    ),
    createData(
      'Jose',
      'joyce41@hotmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      3,
      '08/09/2020'
    ),
    createData(
      'Linda',
      'timothy.west@yahoo.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      5,
      '08/09/2020'
    ),
    createData(
      'Whitney',
      'sterling18@hotmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      7,
      '08/09/2020'
    ),
    createData(
      'Dana',
      'robert40@hotmail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      8,
      '08/09/2020'
    ),
    createData(
      'Bonnie',
      'egan54@mail.com',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      1,
      '08/09/2020'
    ),
    createData(
      'Ray',
      'mattie.lewis@mail.com.au',
      '045499149',
      'Louis',
      'HubSpot, Inc.',
      '10/09/2020',
      2,
      '08/09/2020'
    ),
];

export default Rows;