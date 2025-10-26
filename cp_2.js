//api docs: https://www.course-api.com/javascript-store-products

const API_URL = 'https://www.course-api.com/javascript-store-products';


//step 3 using fetch with .then and .catch

function fetchProductsThen() {
    fetch(API_URL)
    .then((res) => {
        if (!res.ok) throw new Error('HttP ${res.status}');
        return res.json();
    })
    .then((data) => {
        //logging each product name
        data.forEach((p, i) => {
            const name =
            p?.fiekds?.name ??
            p?.name ??
            '(no-name-${1})';
            console.log(name);
        });
    })
    .catch((err) => {
        handleError(err);
    });
}

//step 4 async/await with try/catch

async function fetchProductsASync() {
    try {
           const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const products = await res.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
    }
}