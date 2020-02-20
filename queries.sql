-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT 
        p.PRODUCTNAME,
        c.CategoryName
    FROM PRODUCT as p
    INNER JOIN Category as c ON  p.CategoryId = c.Id
    LIMIT 77;


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

    SELECT 
    o.Id,
    s.CompanyName,
    o.ShippedDate
    FROM [Order] as o
    INNER JOIN [Shipper] as s 
    ON o.ShipVia = s.Id
    WHERE o.ShippedDate < '2012-08-09'
    LIMIT 429;



-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    SELECT
    p.Productname,
    od.quantity
    FROM [ORDER] as o
    INNER JOIN [OrderDetail] as od
    ON o.id = od.OrderId
    INNER JOIN [Product] as p ON od.ProductId = p.Id
    WHERE od.OrderId = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.--

-- Only Display 1,000?, No more data 
   
    SELECT o.Id, c.CompanyName, c.ContactName
    FROM [Order] as o
    INNER JOIN [Customer] as c
    ON o.CustomerId = c.Id
