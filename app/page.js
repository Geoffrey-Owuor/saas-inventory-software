import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-3xl"> Inventory Management Software</h2>
      <Link href="/dashboard/home/dashboard-page">View Dashboard</Link>
    </div>
  );
}
