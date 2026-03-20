(() => {

  interface Product {
    id: number;
    name: string;
  }

  class ProductService {

    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product);
    }

  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private readonly productService: ProductService;
    private readonly mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['correo1@correo.com', 'correo2@correo.com'], 'to-clients');
    }

  }

  class Mailer {
    private readonly masterEmail: string = 'Blobby.noresponse@gmail.com'

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log(`Enviando correo desde ${this.masterEmail} a los ${template === 'to-clients' ? 'clientes' : 'administradores'}: ${emailList} `);
    }
  }

  class CartBloc {

    // private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }

  const cartBloc = new CartBloc();
  const mailer = new Mailer();
  const productService = new ProductService();
  const productBloc = new ProductBloc(productService, mailer);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();