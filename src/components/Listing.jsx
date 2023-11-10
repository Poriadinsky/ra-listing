import { Component } from "react";
import { ListingItem } from "./ListingItem";

export class Listing extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="item-list">
        {items
          .filter((el) => el.state === "active")
          .map((el) => (
            <ListingItem key={el.listing_id} items={el} />
          ))}
      </div>
    );
  }
}
