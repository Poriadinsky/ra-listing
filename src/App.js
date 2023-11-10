import { Listing } from "./components/Listing";
import "./App.css";
import items from "../src/components/etsy.json";

export default function App() {
  return <Listing items={items} />;
}
