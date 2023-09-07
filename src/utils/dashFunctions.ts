type productObject = {
  id: number;
  productName: string;
  quantitySold: number;
  pricePerUnit: number;
  dateSold: string;
}[];

// calculate total amount of sold products
export const totalNumberProductsSold = (products: productObject) => {
  return products.reduce((acc, current) => {
    return acc + current.quantitySold;
  }, 0);
};

// returning product that has been sold the most
export const favoriteProduct = (products: productObject) => {
  const mergedProducts: Record<string, number> = {};

  // merging same products into one object key
  for (const product of products) {
    if (mergedProducts[product.productName]) {
      mergedProducts[product.productName] += product.quantitySold;
    } else {
      mergedProducts[product.productName] = product.quantitySold;
    }
  }

  // Transitioning object to array
  const result: { product: string; quantity: number }[] = [];
  for (const product in mergedProducts) {
    result.push({ product: product, quantity: mergedProducts[product] });
  }

  if (result.length == 0) return { product: "There are no sold products", quantity: 0 };
  
  return result.reduce((favorite, current) => {
    if (current.quantity > favorite.quantity) {
      return current;
    } else {
      return favorite;
    }
  });
};

// total revenue of all sold products
export const totalRevenue = (products: productObject) => {
  return products.reduce((acc, current) => {
    return acc + current.quantitySold * current.pricePerUnit;
  }, 0);
};
