import NavBar from "@/components/NavBar";
import { ChevronDown, Utensils } from "lucide-react";

export default function Categorias() {

  const categorias = [
    {
      id: 1,
      nome: "Alimentação",
      icone: "fastfood"
    },
    {
      id: 2,
      nome: "Educação",
      icone: "fastfood"
    },
    {
      id: 3,
      nome: "Transporte",
      icone: "fastfood"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />
      <h1>Categorias</h1>

      <section className="bg-slate-900 rounded min-w-[500px] p-2 m-4">
        <h2 className="text-2xl font-semibold">Categorias Cadastradas</h2>
        <div id="data">
          {categorias.map(categoria => {
            return ( 
              <div className="flex justify-between" id="data-row">
            <div className="flex gap-1 items-center">
              <Utensils size={20}/>
              <span>{categoria.nome}</span>
            </div>
            <ChevronDown></ChevronDown>
          </div>
            )
          })}
        </div>
      </section>
    </main>
  );
}
