async function getFeaturedProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/featured');
    const data = await response.json();
    const productsEl = document.getElementById('product-container');
    for (let i = 0; i < 8; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      const rating = (product.starRating);
      const filledStar = '<i class="fa-solid fa-sharp fa-star"></i>';
      const emptyStar = '<i class="fa-solid fa-regular fa-star"></i>';
      const ratingProduct = filledStar.repeat(rating) + emptyStar.repeat(5 - rating);
      productEl.innerHTML = `
        <div class="product-card-image-container">
          <img src="${product.imageUrl}" alt="${product.name}"/>
          <div class="product-card-menu">
            <nav class="menu-icons">
              <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
            </nav>
            <a href="#" id="btn-quick-view" class="btn-theme">QUICK VIEW</a>
          </div>
        </div>
        <h2 class="product-card-category">${product.category}</h2>
        <h2 class="product-card-title">${product.name}</h2>
        <div class="product-card-rating">
          ${ratingProduct}
        </div>
        <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

async function getNewProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/new');
    const data = await response.json();
    const productsEl = document.getElementById('new-products-grid');
    for (let i = 0; i < 4; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      const rating1 = (product.starRating);
      const filledStar = '<i class="fa-solid fa-sharp fa-star"></i>';
      const emptyStar = '<i class="fa-solid fa-regular fa-star"></i>';
      const ratingProduct = filledStar.repeat(rating1) + emptyStar.repeat(5 - rating1);
      productEl.innerHTML = `
        <div class="product-card-image-container">
          <img src="${product.imageUrl}" alt="${product.name}"/>
          <div class="product-card-menu">
            <nav class="menu-icons">
              <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
            </nav>
            <a href="#" id="btn-quick-view" class="btn-np">QUICK VIEW</a>
          </div>
        </div>
        <h2 class="product-card-category">${product.category}</h2>
        <h2 class="product-card-title">${product.name}</h2>
        <div class="product-card-rating">
          ${ratingProduct}
        </div>
        <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
        
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

async function getPopularProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/popular');
    const data = await response.json();
    const productsEl = document.getElementById('popular-products-grid');
    for (let i = 0; i < 4; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      const rating1 = (product.starRating);
      const filledStar = '<i class="fa-solid fa-sharp fa-star"></i>';
      const emptyStar = '<i class="fa-solid fa-regular fa-star"></i>';
      const ratingProduct = filledStar.repeat(rating1) + emptyStar.repeat(5 - rating1);
      productEl.innerHTML = `
      <div class="product-card-image-container">
      <img src="${product.imageUrl}" alt="${product.name}"/>
      <div class="product-card-menu">
        <nav class="menu-icons">
          <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
          <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
          <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
        </nav>
        <a href="#" id="btn-quick-view" class="btn-np">QUICK VIEW</a>
      </div>
    </div>
    <h2 class="product-card-category">${product.category}</h2>
    <h2 class="product-card-title">${product.name}</h2>
    <div class="product-card-rating">
      ${ratingProduct}
    </div>
    <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


