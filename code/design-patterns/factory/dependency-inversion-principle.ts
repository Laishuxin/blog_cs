// class Store {
//   createProduct(category: string, type: string): Product | null {
//     let product: Product;
//     if (category === 'breed') {
//       if (type === '1') { product = new Breed1(); }
//       else if (type === '2') { product = new Breed2(); }
//       else if (type === '3') { product = new Breed3(); }
//       else { return null; }
//     } else if (category === 'fruit') {
//       if (type === '1') { product = new Fruit1(); }
//       else if (type === '2') { product = new Fruit2(); }
//       else if (type === '3') { product = new Fruit3(); }
//       else { return null; }
//     } else {
//       return null;
//     }
//     return product;
//   }

//   useProduct(category: string, type: string) {
//     const product = this.createProduct(category, type);
//     console.log(`using ${product}...`);
//   }
// }

abstract class Product {}
class Breed1 extends Product {}
class Breed2 extends Product {}
class Breed3 extends Product {}

class Fruit1 extends Product {}
class Fruit2 extends Product {}
class Fruit3 extends Product {}

abstract class Store {
  abstract createProduct(type: string): Product | null

  useProduct(category: string) {
    const product = this.createProduct(category)
    console.log(`using ${product}...`)
  }
}

class BreedStore extends Store {
  createProduct(type: string): Product | null {
    let product: Product
    if (type === '1') {
      product = new Breed1()
    } else if (type === '2') {
      product = new Breed2()
    } else if (type === '3') {
      product = new Breed3()
    } else {
      return null
    }
    return product
  }
}

class FruitStore extends Store {
  createProduct(type: string): Product | null {
    let product: Product
    if (type === '1') {
      product = new Fruit1()
    } else if (type === '2') {
      product = new Fruit2()
    } else if (type === '3') {
      product = new Fruit3()
    } else {
      return null
    }
    return product
  }
}
