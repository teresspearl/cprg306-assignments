import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 class="m-9 p-5 text-5xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <div><ul><Link href="/week-2" class="m-9 ml-11 p-5 text-lg">Week 2 Assignment</Link></ul></div>
      <div><ul><Link href="/week-3" class="m-9 ml-11 p-5 text-lg">Week 3 Assignment</Link></ul></div>
      <div><ul><Link href="/week-4" class="m-9 ml-11 p-5 text-lg">Week 4 Assignment</Link></ul></div>
      <div><ul><Link href="/week-5" class="m-9 ml-11 p-5 text-lg">Week 5 Assignment</Link></ul></div>
      <div><ul><Link href="/week-5" class="m-9 ml-11 p-5 text-lg">Week 6 Assignment</Link></ul></div>
      <div><ul><Link href="/week-5" class="m-9 ml-11 p-5 text-lg">Week 7 Assignment</Link></ul></div>
      <div><ul><Link href="/week-5" class="m-9 ml-11 p-5 text-lg">Week 8 Assignment</Link></ul></div>
    </main>
  );
}

