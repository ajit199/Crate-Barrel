function cartItem({ title, image, price }, index) {
  return `
    <div id="items">
    <input type="hidden" id="index" value= {index}" />
    <hr style = "border:1px solid black;margin-top:25px" />
      <div id="product-details">
        <div>
          <h5 id="product_name">${title}</h5>
          <p>SKU 418734</p>
        </div>
        <div id="quantity">
          <button id="minus">-</button>
          <input type="text" id="cart_quantity" />
          <button id="plus">+</button>
          <span id="product-price" style="font-weight:lighter">$${price}</span>
        </div>
        <div>
          <h3 id="product-total"></h3>
        </div>
      </div>
      <hr />
      <div id="product-image-div">
        <div>
          <img
            src=${image}
            alt="product-image"
            width="215"
            height="215"
          />
        </div>
        <div id="ship_methods">
          <input type="radio" name="method" id="" />
          <label for="">
            SHIP
            <br />
            <span style="margin-left: 40px; font-size: 12px">
              In stock and ready for delivery to zip code 60540 <br />
              <span style="margin-left: 40px; font-size: 12px">
                Shipping:
                <span style="text-decoration: underline;">Standard</span>
              </span>
              .
            </span>
          </label>
          <br />
          <input type="radio" name="method" id="" />
          <label for="">
            FREE PICKUP
            <br />
            <span
              style="
        margin-left: 40px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
      "
            >
              SELECT LOCATION
            </span>
          </label>
        </div>
        <div id="remove-product">
          <div>
            <span>
              <i id="remove" class="fa-solid fa-xmark fa-2x"></i>
            </span>
            <p>Remove</p>
          </div>
          <hr />
          <div>
            <span>
              <i class="fa-solid fa-arrow-down fa-2x"></i>
            </span>
            <p>Save for Later</p>
          </div>
        </div>
      </div>
    </div>`;
}

export default cartItem;
