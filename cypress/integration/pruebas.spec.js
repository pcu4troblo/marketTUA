context('Home', () => {
   beforeEach(() => {
      cy.visit('http://localhost:4200')
    })

 it('should visit home', () => {
     cy.visit('http://localhost:4200');
 });

 it('Input exists', () => {
     cy.get('input#buscar');
  });

  it('Search button exists', () => {
     cy.get('button#buscar');
  });

  it('Category select exists', () =>{
     cy.get('Select#category');
  });
  
  it('Brand select exists', () =>{
    cy.get('Select#brand');
 });

 it('Navbar exists', () =>{
  cy.get('nav');
});

 it('Select click cellphone', () =>{
  cy.get('select#category').select('cellphone');
});

it('Select click computers' , () =>{
  cy.get('select#category').select('computers');
});

it('Select click audio' , () =>{
  cy.get('select#category').select('audio');
});

it('Select click cameras' , () =>{
  cy.get('select#category').select('cameras');
});

it('Select click tv' , () =>{
  cy.get('select#category').select('tv');
});

it('Select click HP' , () =>{
  cy.get('select#brand').select('HP');
});

it('Select click Huawei' , () =>{
  cy.get('select#brand').select('Huawei');
});

it('Select click Lenovo' , () =>{
  cy.get('select#brand').select('Lenovo');
});

it('Select click Samsung' , () =>{
  cy.get('select#brand').select('Samsung');
});

it('Select click Motorola' , () =>{
  cy.get('select#brand').select('Motorola');
});

it('Select click Xiaomi' , () =>{
  cy.get('select#brand').select('Xiaomi');
});

it('Select click Apple' , () =>{
  cy.get('select#brand').select('Apple');
});

it('Select click Toshiba' , () =>{
  cy.get('select#brand').select('Toshiba');
});

it('Select click Asus' , () =>{
  cy.get('select#brand').select('ASUS');
});


 it('Input text celular', () => {
       cy.get('input#buscar').type("celular");
       cy.get('button#buscar').click();
       cy.get('div#card');
 });

 it('Card title click', () => {
  cy.get('input#buscar').type("celular");
  cy.get('button#buscar').click();
  cy.get('.card-body');
  cy.get('.card-body').find('.card-body').find('img#img');
  cy.get('.card-body').find('p#price');
});

it('Nav-bar Productos' , () =>{
  cy.get('nav').find('a#productos').click();
});

it('Nav-bar Carrito' , () =>{
  cy.get('nav').find('a#carrito').click();
});
})

context('Carrito', () => {
  beforeEach(() => {
     cy.visit('http://localhost:4200/items/6')
   });

it('should visit home', () => {
  cy.visit('http://localhost:4200/items/6');
});

it('Item components exist' , () =>{
  cy.get('div#pic').find('img#img');
  cy.get('h2#name');
  cy.get('p#description');
  cy.get('p#price');
  cy.get('p#sold');
  cy.get('p#brand');
  cy.get('p#seller');
  cy.get('p#rating');
  cy.get('button#add');
  cy.get('a#carritoButton');
});




})

