
============GrocerySTORE APPLICATION==============

======Modules Used in Project======
Install following Modules
	1.Express-------npm install express
	2.Bodyparser--------npm install body-parser
	3.Mongoose-------npm install mongoose


-------DATABASE Creation On MongoDB--------
1.Create a database named mydb.
2.Create a collection names 
	1)User: for users and admin to login (for admin register with user name as admin)
	2)itemsdb: for storing items
	
	Examples(my collections):
	
In Itemsdb-----
	
	itemname:"cake"
	quantity:10

	itemname:"biscuits"
	quantity:4

	itemname:"rusk"
	quantity:0

In User-----

	name:"admin"
	username:"admin"
	password:"admin_pass"

	name:"hemanth"
	username:"hemanthk"
	password:"user_pass"


-------Running MongoDB------
In command prompt run following command:
	"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath=(database path)
Example :
	"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"	 



-------Running Project------
Client Side:
	
	In nodeJS command prompt run following command:
	1.cd "(initialPathToFolder)\myGrocery\client"		
	2.npm start

Server Side:
	
	In nodeJS command prompt run following command:
	1.cd "(initialPathToFolder)\myGrocery\server"		
	2.node app.js


-------the project will be opened at----------
	
	URL= http://localhost:4200/login  

-------instructions----------

	1.for new user register before login
	2.for admin side functions register as admin and password(of admins choice)
	
	Client:
		1.first add all the items you want to buy to cart
		2.check the price and click buy to purchase items added to cart
	
	Admin:
		1.check status of items by notifications 
		2.click(+) to add items quantity items and click(-) to remove quantity of items from database.