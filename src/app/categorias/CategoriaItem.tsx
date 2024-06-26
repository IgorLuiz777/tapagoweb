"use client"
import { Icon } from "@/app/components/Icon";
import { ChevronDown, Utensils } from "lucide-react";
import { DropDownActions } from "../components/DropDownActions";
import { destroy } from "../actions/categorias/destroy";
import { toast } from "react-hot-toast";

interface CategoriaItemProps {
    categoria: {
        id: number,
        nome: string,
        icone: string
    }
}

export function CategoriaItem(props: CategoriaItemProps) {
    const { categoria } = props

    function handleDelete() {
        toast.promise(
            destroy(categoria.id),
             {
               loading: 'Deletando...',
               success: <b>Categoria exluída!</b>,
               error: <b>Erro ao exluir.</b>,
             }
           );
    }

    return (
        <div key={categoria.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <Icon name={categoria.icone}/>
                <span>{categoria.nome}</span>
            </div>
            <DropDownActions onDelete={handleDelete} />
        </div>
    );
}
