type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) { }

  private isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (this[key].length <= 0) throw new Error(`${key} is empty`);
          break;
        case 'number':
          if (this[key] <= 0) throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${key} is not supported`);
      }
    }
    return true;
  }

  toString() {
    // No DRY code
    // if (this.name.length <= 0) throw new Error('The name is empty');
    // if (this.price <= 0) throw new Error('The price is zero');
    // if (this.size.length <= 0) throw new Error('The size is empty');

    if (!this.isProductReady()) return;

    return `${this.name} (${this.price}), ${this.size}`;
  };
}

(() => {
  const bluePants = new Product('Blue Large Pants', 10, 'L');
  console.log(bluePants.toString());

  // const noNamePants = new Product('', 10, 'L');
  // console.log(noNamePants.toString());

  // const noPricePants = new Product('Red pants', 0, 'L');
  // console.log(noPricePants.toString());

  // const noSizePants = new Product('Red pants', 20,);
  // console.log(noSizePants.toString());
})();
