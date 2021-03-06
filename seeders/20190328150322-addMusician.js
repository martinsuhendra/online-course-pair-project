'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Teachers', [
    {
        "first_name":"Elvis",
        "last_name": "Presley",
        "gender":"male",
        "email":"elvis@presley.com",
        "password":"12345",
        "instrument": "Vocal",
        "tags":"vocal,singing,nyanyi,handsome,legend",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Madonna",
        "last_name": "Ciccone",
        "gender":"female",
        "email":"madonna@ciccone.com",
        "password":"12345",
        "instrument": "Vocal",
        "tags":"vocal,singing,nyanyi,pretty,legend",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Michael",
        "last_name": "Jackson",
        "gender":"male",
        "email":"michael@jackson.com",
        "password":"12345",
        "instrument": "Vocal",
        "tags":"vocal,singing,nyanyi,black,legend",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Bob",
        "last_name": "Marley",
        "gender":"male",
        "email":"bob@marley.com",
        "password":"12345",
        "instrument": "Guitar",
        "tags":"vocal,singing,nyanyi,black,gitar,legend,reggae",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Jay-Z",
        "last_name": "Carter",
        "gender":"male",
        "email":"jayz@carter.com",
        "password":"12345",
        "instrument": "Vocal",
        "tags":"vocal,singing,nyanyi,rap,hip-hop",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Eminem",
        "last_name": "Bruce",
        "gender":"male",
        "email":"eminem@bruce.com",
        "password":"12345",
        "instrument": "Vocal",
        "tags":"vocal,singing,nyanyi,rap,hip-hop",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Dewa",
        "last_name": "Budjana",
        "gender":"male",
        "email":"dewa@budjana.com",
        "password":"12345",
        "instrument": "Guitar",
        "tags":"gitar,indonesia,rock",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Tohpati",
        "last_name": "Ario",
        "gender":"male",
        "email":"tohpati@ario.com",
        "password":"12345",
        "instrument": "Guitar",
        "tags":"gitar,indonesia,legend",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Flea",
        "last_name": "Balzary",
        "gender":"male",
        "email":"Fflea@balzary.com",
        "password":"12345",
        "instrument": "Bass",
        "tags":"bass,rock, RHCP",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Echa",
        "last_name": "Soemantri",
        "gender":"male",
        "email":"echa@soemantri.com",
        "password":"12345",
        "instrument": "drum",
        "tags":"drum,jago,bedug,kendang,indonesia",
        "createdAt": new Date,
        "updatedAt": new Date
    },
    {
        "first_name":"Sule",
        "last_name": "Sulaiman",
        "gender":"male",
        "email":"sule@sulaiman.com",
        "password":"12345",
        "instrument": "drum",
        "tags":"drum,cupu,lucu,aneh,bedug,kendang,indonesia",
        "createdAt": new Date,
        "updatedAt": new Date
    }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Teachers', null, {});
  }
};
