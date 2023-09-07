import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { totalNumberProductsSold, favoriteProduct, totalRevenue } from "./utils/dashFunctions";
import DateRangeComp from "./components/DateRange";
import Box from "./components/Box";
import { addDays } from "date-fns";

type ProductObject = {
  id: number;
  productName: string;
  quantitySold: number;
  pricePerUnit: number;
  dateSold: string;
}[];

type DateObject = {
  startDate: Date | undefined,
  endDate: Date | undefined,
}

function App() {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [products, setProducts] = useState<ProductObject>([]);
  const [error, setError] = useState(false);

  // getting my local data from public directory on load
  useEffect(() => {
    fetch('/data.json').then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(jsonData => {
      setProducts(jsonData);
    }).catch(() => {
      setError(true);
    })
  }, [])

  const handleDateChange = (date: DateObject) => {
    if(date.startDate && date.endDate) {
      setStartDate(date.startDate);
      setEndDate(addDays(date.endDate, 1));
    }
  }

  // filtering products with date range
  let filteredProducts = products;
  if(startDate && endDate) {
    filteredProducts = products.filter(product => new Date(product.dateSold) <= endDate && new Date(product.dateSold) >= startDate);
  }

  // functions calculating expected data from products
  const totalSoldProducts = totalNumberProductsSold(filteredProducts);
  const favorite = favoriteProduct(filteredProducts);
  const total = totalRevenue(filteredProducts).toFixed(2);

  return (
    <>
      <h1 className={styles.companyTitle}>Paper Company</h1>
      {error ? "There is an error loading your products. Please refresh the page." : <><DateRangeComp dateChange={handleDateChange} />
      <div className={styles.boxContainer}>
        <Box title="Total number of paper products sold" data={totalSoldProducts.toString()} description="amount" />
        <Box title="Total revenue" data={total.toString()} description="€" />
        <Box title="Most popular paper product" data={favorite.product} description={`with ${favorite.quantity} sold units`} />
      </div></>}
    </>
  );
}

export default App;
