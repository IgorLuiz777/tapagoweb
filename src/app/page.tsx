import NavBar from "@/app/components/NavBar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard"/>
      <h1>Dashboad</h1>
    </main>
  );
}
