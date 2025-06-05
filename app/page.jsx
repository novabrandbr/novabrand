export default function Home() {
  return (
    <main className="bg-white p-8 rounded-md shadow-lg text-center max-w-sm w-full">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">NovaBrand</h1>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block bg-purple-700 text-white py-2 px-4 rounded">Link 1</a>
        </li>
        <li>
          <a href="#" className="block bg-purple-700 text-white py-2 px-4 rounded">Link 2</a>
        </li>
        <li>
          <a href="#" className="block bg-purple-700 text-white py-2 px-4 rounded">Link 3</a>
        </li>
      </ul>
    </main>
  );
}
