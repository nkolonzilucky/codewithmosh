import Link from "next/link";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (
   <main>
    <h1>Hello World</h1>
    <div className="mt-3">
    <Link href='/users' className="bg-green-500 px-3 py-2 rounded-md my-10">Users</Link>
    </div>
    <ProductCard />
   </main>
  )
}
