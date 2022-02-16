import React, {useState, useEffect} from 'react'
import CountButton from '../CountButton/CountButton'
import SearchBar from '../SearchBar/SearchBar'

// After declaring 'products' here, we have to use props in order to interact with the SearchBar
// const products = [
//     "toothpaste",
//     "toothbrush",
//     "dental floss",
//     "mouth wash"
// ]

// The App component is gonna act as the wrapper inside which we're gonna put all the JSX code (including other components) 
const App = () => {

    const [productsState, setProductsState] = useState([])
    // We created a piece of state called the 'productsState', and initially it's just an empty array (default value)
    // A lot of times when we are building applications, when our page mounts, we are not gonna have our list of items usually
    // and so we are gonna have to load them from somewhere else (e.g. an external server); pretty common thing in React

    useEffect(() => {

        // This code is using asynchronous JS; concept of Promises is being implemented
        fetch('https://fakestoreapi.com/products')
            /* We are going into this fakestoreapi and we make a request,
               then we convert the html response into a json object so that JS can understand,
               and then we are able to take action on it */
            .then((res) => res.json())
            .then((/*json or*/ productsArray) => {
                //console.log(json)
                // map() is gonna allow us to take all then items from one array and map them into another
                const newProductsState = productsArray.map((product /* Working with each item or product in the array */) => {
                    return product.title  // The newProductsState is gonna be an array that has all of the product titles that we got from the fake api
                })

                setProductsState(newProductsState)
            })

        setTimeout(() => {
           setProductsState({products})    // The products show up after 2000 ms (simulating the amount of time it usually takes to load data from an external database)
        }, 2000);
    }, [])

    const hasProducts = productsState.length > 0

    return (
        // <ul>
        //     <li>item1</li>
        //     <li>item2</li>
        // </ul>

        <div>

            {/* <CountButton incrementBy={1} buttonColor={blue}/>
            <CountButton incrementBy={5} buttonColor={orange}/> */}

            {/* <SearchBar products={products}/> */}

            {hasProducts ? <SearchBar products={productsState}/> : "Loading..."}
            {/* This is another way of implementing conditional rendering */}

        </div>

    )

}

export default App
// This makes the App component available to other files in our source code