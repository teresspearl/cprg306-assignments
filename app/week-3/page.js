import Item from './item';
import ItemList from './item-list';

export default function Page() {
  return (
    <main>
        <h1>Shopping Lists</h1>
        <Item />
        <ItemList />
    </main>
  );
}