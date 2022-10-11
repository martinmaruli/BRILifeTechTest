# README.md

# Getting started.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/martinmaruli/BRILifeTechTest.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### CRUD Product

* Create Product

1. User use API localhost:5000/product using method Post.
2. User fill raw body JSON Product Name and Premium
3. Product created.

* Get All Products

1. User use API localhost:5000/product using method get.
2. All product found.

* Get One Product

1. User use API localhost:5000/product/:product_id using method Get.
2. User fill :product_id parameter with product_id
3. One product found.

* Update Product

1. User use API localhost:5000/product/:product_id using method Put.
2. User fill :product_id parameter with product_id
3. User fill raw body JSON Product Name and Premium to edit.
4. Product edited.

* Delete Product

1. User use API localhost:5000/product/:product_id using method Delete.
2. User fill :product_id parameter with product_id
3. Product deleted.

### CRUD User

* Create user

1. User use API localhost:5000/user using method Post.
2. User fill raw body JSON user Name and Premium
3. user created.

* Get All users

1. User use API localhost:5000/user using method get.
2. All user found.

* Get One user

1. User use API localhost:5000/user/:user_id using method Get.
2. User fill :user_id parameter with user_id
3. One user found.

* Update user

1. User use API localhost:5000/user/:user_id using method Put.
2. User fill :user_id parameter with user_id
3. User fill raw body JSON User Name to edit.
4. User edited.

* Delete user

1. User use API localhost:5000/user/:user_id using method Delete.
2. User fill :user_id parameter with user_id
3. Product deleted.

### CRUD Transaction

* Create Product

1. User use API localhost:5000/transaction using method Post.
2. User fill raw body JSON transaction Name and Premium
3. Transaction created.

* Get All transactions

1. User use API localhost:5000/transaction using method get.
2. All transaction found.

* Get One transaction

1. User use API localhost:5000/transaction/:trans_id using method Get.
2. User fill :trans_id parameter with trans_id
3. One transaction found.

* Update transaction

1. User use API localhost:5000/transaction/:trans_id using method Put.
2. User fill :trans_id parameter with trans_id
3. User fill raw body JSON Product Id and Quantity Order to edit.
4. Transaction edited.

* Delete transaction

1. User use API localhost:5000/transaction/:trans_id using method Delete.
2. User fill :trans_id parameter with trans_id
3. Transaction deleted.