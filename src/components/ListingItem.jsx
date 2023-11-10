import { Component } from "react";

export class ListingItem extends Component {
  maxLength(title) {
    console.log(title);
    console.log(title.length);
    return title.length > 50 ? `${title.slice(0, 50)}...` : title;
  }

  checkCurrency(code, price) {
    if (code === "USD") {
      return `$${price}`;
    }
    if (code === "EUR") {
      return `€${price}`;
    }
    return `${price} ${code}`;
  }

  checkQuantity(quantity) {
    if (quantity < 10) {
      return "level-low";
    }
    if (quantity > 20) {
      return "level-high";
    }
    return "level-medium";
  }

  render() {
    const { items } = this.props;

    return (
      <>
        <div className="item">
          <div className="item-image">
            <a href={items.url}>
              <img src={items.MainImage.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{this.maxLength(items.title)}</p>
            <p className="item-price">
              {this.checkCurrency(items.currency_code, items.price)}
            </p>
            <p
              className={`item-quantity ${this.checkQuantity(items.quantity)}`}
            >
              {items.quantity} left
            </p>
          </div>
        </div>
      </>
    );
  }
}
