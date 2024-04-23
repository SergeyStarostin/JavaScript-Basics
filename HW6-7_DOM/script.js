"use strict";

const items_contentBlock = document.querySelector(".items_content");
const items_contentData = JSON.parse(dataItems_content);
items_contentData.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("item");

  const itemImg = document.createElement("div");
  itemImg.classList.add("item__link__block");
  div.append(itemImg);

  const img = document.createElement("img");
  img.src = item.image_url;
  img.alt = `${item.title} ${item.image_url})`;
  itemImg.append(img);

  const imgHover = document.createElement("div");
  imgHover.classList.add("item__link__block-hover");
  imgHover.setAttribute("data-id", item.id);
  itemImg.append(imgHover);

  itemImg.addEventListener("mouseover", () => {
    imgHover.style.visibility = "visible";
  });

  itemImg.addEventListener("mouseout", () => {
    imgHover.style.visibility = "hidden";
  });

  const imgCart = document.createElement("div");
  imgCart.classList.add("cart", "item__link__block-cart");
  imgHover.append(imgCart);

  const imgCartIcon = document.createElement("img");
  imgCartIcon.classList.add("cart", "item__link__block-cart__icon");
  imgCartIcon.src = "img/cart.svg";
  imgCartIcon.alt = "Add to Cart";
  imgCart.append(imgCartIcon);

  const imgCartText = document.createElement("div");
  imgCartText.classList.add("cart", "item__link__block-cart__text");
  imgCartText.textContent = "Add to Cart";
  imgCart.append(imgCartText);

  const itemContent = document.createElement("div");
  itemContent.classList.add("item__content");
  div.append(itemContent);

  const itemContentTitle = document.createElement("div");
  itemContentTitle.classList.add("item__content__title");
  itemContentTitle.textContent = `${item.brand} ${item.title}`;
  itemContent.append(itemContentTitle);

  const itemContentDesc = document.createElement("div");
  itemContentDesc.classList.add("item__content__desc");
  itemContentDesc.textContent = item.desc;
  itemContent.append(itemContentDesc);

  const itemContentPrice = document.createElement("div");
  itemContentPrice.classList.add("item__content__price");
  itemContentPrice.textContent = `${Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: item.currency,
  }).format(item.price)}`;
  itemContent.append(itemContentPrice);

  items_contentBlock.append(div);
});

const cartItemsBlock = document.querySelector(".cart-items");
const cartItems = cartItemsBlock.querySelector(".cart-items__content");

items_contentBlock.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("cart")) {
    const product = items_contentData.find(
      (item) => item.id == target.closest(".item__link__block-hover").dataset.id
    );

    let cartItemCard = cartItems.querySelector(`[data-id="${product.id}"]`);
    if (cartItemCard) {
      cartItemCard.querySelector(".cart-items__product-quantity").value++;
      return;
    }

    cartItemsBlock.style.display = "flex";

    cartItemCard = document.createElement("div");
    cartItemCard.classList.add("cart-items__product-card");
    cartItemCard.setAttribute("data-id", product.id);
    cartItems.append(cartItemCard);

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-items__product");
    cartItemCard.append(cartItem);

    const cartImage = document.createElement("div");
    cartImage.classList.add("cart-items__product-img");
    cartItem.append(cartImage);

    const img = document.createElement("img");
    img.src = product.image_url;
    img.alt = `${product.title} ${product.image_url})`;
    cartImage.append(img);

    const cartProductInfo = document.createElement("div");
    cartProductInfo.classList.add("cart-items__product-info");
    cartItem.append(cartProductInfo);

    const cartTitle = document.createElement("div");
    cartTitle.classList.add("cart-items__product-title");
    cartTitle.textContent = `${product.brand} ${product.title}`;
    cartProductInfo.append(cartTitle);

    const cartProductDetails = document.createElement("div");
    cartProductDetails.classList.add("cart-items__product-details");
    cartProductInfo.append(cartProductDetails);

    const cartPriceTitle = document.createElement("p");
    cartPriceTitle.textContent = "Price: ";
    cartProductDetails.append(cartPriceTitle);

    const cartPrice = document.createElement("span");
    cartPrice.classList.add("cart-items__product-price");
    cartPrice.textContent = `${Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: product.currency,
    }).format(product.price)}`;
    cartPriceTitle.append(cartPrice);

    const cartColor = document.createElement("p");
    cartColor.textContent = "Color: ";
    cartProductDetails.append(cartColor);

    const cartColorValue = document.createElement("span");
    cartColorValue.textContent = product.color;
    cartColor.append(cartColorValue);

    const cartSize = document.createElement("p");
    cartSize.textContent = "Size: ";
    cartProductDetails.append(cartSize);

    const cartSizeValue = document.createElement("span");
    cartSizeValue.textContent = product.size;
    cartSize.append(cartSizeValue);

    const cartQuantity = document.createElement("label");
    cartQuantity.textContent = "Quantity: ";
    cartProductDetails.append(cartQuantity);

    const cartQuantityInput = document.createElement("input");
    cartQuantityInput.classList.add("cart-items__product-quantity");
    cartQuantityInput.type = "number";
    cartQuantityInput.min = "1";
    cartQuantityInput.value = "1";
    cartQuantity.append(cartQuantityInput);

    const cartCloseButton = document.createElement("img");
    cartCloseButton.classList.add("cart-items__close-button");
    cartCloseButton.src = "img/close-btn.svg";
    cartCloseButton.alt = "Remove from cart";
    cartItemCard.append(cartCloseButton);

    console.log(product);
  }
});

cartItemsBlock.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("cart-items__close-button")) {
    target.closest(".cart-items__product-card").remove();
    if (cartItems.children.length < 1) {
      cartItemsBlock.style.display = "none";
    }
  }
});
