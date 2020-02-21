##Multi-Table-Queries

https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top
-Instructions Make A Query That Returns A Table With
-- order id, product name, quantiy, price, total (quantiy * price)
```sql
SELECT Orders.OrderID
	, Products.ProductName
    , OrderDetails.Quantity
    , Products.Price
	, Products.Price*OrderDetails.Quantity AS Total
FROM orders
INNER JOIN OrderDetails ON OrderDetails.OrderID = Orders.OrderID
INNER JOIN Products ON OrderDetails.ProductID = Products.ProductID
```

##SQL With Aliases
```sql
SELECT o.OrderID
	, p.ProductName
    , od.Quantity
    , p.Price
	, p.Price*od.Quantity AS Total
FROM orders as o
INNER JOIN OrderDetails as od ON od.OrderID = o.OrderID
INNER JOIN Products as p ON od.ProductID = p.ProductID
```

##Knex Schema Translation
```js
function findSteps(id) {
    //Returns the selected Table 'orders'
    return db('orders as o')
    //INNER JOIN OrderDetails as od ON od.OrderID = o.OrderID
    .join('OrderDetails as od', 'od.OrderID', 'o.OrderID' )
    //INNER JOIN Products as p ON od.ProductID = p.ProductID
    .join('Products as p', 'p.ProductID', 'od.ProductID')
    //Selects Columns To Output
    .select(
        'o.OrderID', 
        'p.ProductName', 
        'od.Quantity', 
        'p.Price', 
        'p.Price*od.Quantity as Total'
    )
    .where('o.id', id); //Compares 'id' to primary key in table [orders] 
}
