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
  cy.get('nav').find('a#productos').should('have.text','Productos').click();
});

})

context('Item details', () => {
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
  cy.get('button#add').should('have.text','Añadir al carrito');
  cy.get('a#carritoButton')
});

it('Carrito button click', () => {
  cy.get('a#carritoButton').click();
  cy.get('table#tabla');
  
});

it('Components carrito table exists', () => {
  cy.get('button#add').click();
  cy.get('th#quantity');
  cy.get('th#item');
  cy.get('th#price');
});

it('Add button click', () => {
  cy.get('button#add').click();
  cy.get('a#carritoButton').click();
  cy.get('nav').find('a#carrito').click();
});

});

context('Carrito', () => {
  beforeEach(() => {
     cy.visit('http://localhost:4200/carrito')
   });

it('should visit carrito', () => {
  cy.visit('http://localhost:4200/carrito');
});

it('Table exists', () => {
  cy.get('table#table');
});

it('Table components exists', () => {
  cy.get('th#img');
  cy.get('th#item');
  cy.get('th#price');
  cy.get('th#details');
  cy.get('div#total');
  cy.get('a#buy').should('have.text','Realizar Compra');
});
})

context('Shipping', () => {
  beforeEach(() => {
     cy.visit('http://localhost:4200/envio')
   });

it('Page title exists', () => {
  cy.get('h1#shippTitle');
});

it('Direction components', () => {
  cy.get('label#directionLabel');
  cy.get('input#directionInput');
});

it('Apto components', () => {
  cy.get('label#aptoLabel');
  cy.get('input#aptoInput');
});

it('Town components', () => {
  cy.get('label#townLabel');
  cy.get('input#townInput');
});

it('Departament components', () => {
  cy.get('label#departamentLabel');
  cy.get('input#departamentInput');
});

it('Name components', () => {
  cy.get('label#nameLabel');
  cy.get('input#nameInput');
});

it('Phone components', () => {
  cy.get('label#phoneLabel');
  cy.get('input#phoneInput');
});

it('Type components', () => {
  cy.get('label#typeLabel');
  cy.get('select#typeSelect').select('Entrega a domicilio');
});

it('Pay components', () => {
  cy.get('label#payLabel');
  cy.get('select#paySelect').select('Pago Contraentrega');
});

it('Total label exists', () => {
  cy.get('h3#total');
});

it('Buy button exists', () => {
  cy.get('button#buy');
});

it('Buy button click empty input', () => {
  cy.get('button#buy').click();
  cy.get('div#directionError').should('have.text','Por favor, ingresa tu dirección');
  cy.get('div#townError').should('have.text','Por favor, ingresa el municipio');
  cy.get('div#departamentError').should('have.text','Por favor, ingresa el departamento');
  cy.get('div#nameError').should('have.text','Por favor, ingresa el nombre de quien va a recibir el pedido');
  cy.get('div#phoneError').should('have.text','Por favor, ingresa el teléfono');
  cy.get('div#typeError').should('have.text','Por favor, Selecciona el tipo de envío');
  cy.get('div#payError').should('have.text','Por favor, Selecciona el pago');

});

})
