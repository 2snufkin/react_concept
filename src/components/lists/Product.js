/*write the component function
return a div and use inline stying
in the div you will have a <p> with the product name, des and price
to test create one product object*/

function Product(props){
    const product = {
        name: 'iphone',
        desc : 'mobile phone',
        price: 500
    }
    const divStyle = {
        'background-color': '#E0BBE4',
        color: '#333',
        fontSize: '19px',
        margin: '0 auto',
        textAlign: 'center'
    }
    return (
            <li style={{margin: '5px auto'}}  key={props.key}>{props.name} : {props.desc} {props.price}$</li>
    )
}
export default Product
