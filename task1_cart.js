//Task 1: Implement a conditional statement to check if a user is logged in.
//This doesn't need to be anything complex, a simple let loggedIn = true will do.

let loggedIn = true;

if (loggedIn)
    {
    print("User is logged in.");
}

    else {
     print("User is logged out.");
}

/* Task 2: If they are logged in, loop over the 'cart' array below and log the list 
of available products to the user.
 If they are not logged in, tell the user they will need to log in before 
 they can view their cart. */
 let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn',
    'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
     'Tomato'];


 if (loggedIn)
    
    
    {
        console.log("Products in Cart:");
        
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            console.log(item)
        }
    
}

    else {
     console.log("User is logged out. You must log in to view cart.");
}

