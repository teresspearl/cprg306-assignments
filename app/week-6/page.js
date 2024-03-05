import Item from './item';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-4">
      <main><h1 class="m-5 p-2 text-5xl font-bold">Shopping Lists</h1></main>
        <ItemList />
    </main>
  );
}