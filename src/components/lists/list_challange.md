## Activity 5.2: Outputting a List of Products

In this activity, you will build a user interface where a list of (dummy) products is displayed on the screen. 
The interface should also contain a button that, when clicked, adds another new (dummy) item to the existing list of products.

Perform the following steps to complete this activity:

1. Add a list of dummy product objects (every object should have an ID, title, and price) to a React component and add code to output these product items as JSX elements.
2. Add a button to the user interface. When clicked, the button should add a new product object to the product data list. This should then cause the user interface to update and display an updated list of product elements.


## My solution
Sure! Here's a general workflow that you could follow to approach this task:

# Define the component's state: First, you should define the state that will store the list of products. In this case, you will need an array of objects, where each object represents a product with an ID, title, and price.
# Render the initial list of products: Once you have defined the state, you can render the initial list of products by mapping over the array of products and creating a JSX element for each product.
# Create a function to add new products: You will need to create a function that can be called when the button is clicked. This function should create a new product object and add it to the existing list of products in the state.
# Add the button to the component: You can now add the button to the component and attach the function you created in step 3 to the onClick event.
# Update the state when a new product is added: When a new product is added, you will need to update the state by calling the function you created in step 3. This will trigger a re-render of the component, and the new product should be added to the list.
# Re-render the list of products: Finally, the component should re-render the list of products with the newly added product included.
