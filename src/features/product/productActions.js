export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = () => ({
    type: REQUEST_PRODUCTS,
});

export const receivedProducts = json => ({
    type: RECEIVE_PRODUCTS,
    json: json.data.productPromo,
});

export function fetchProducts() {
    return function (dispatch) {
        dispatch(requestProducts());
        return fetch(`https://private-4639ce-ecommerce56.apiary-mock.com/home`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                dispatch(receivedProducts(json));
            }, );
    };
}