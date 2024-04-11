'use client'

import {  
    Dropdown,  
    DropdownTrigger,  
    DropdownMenu,  
    DropdownSection,  
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import { destroy } from "../actions/categorias/destroy";
import { MouseEventHandler } from "react";

interface DropDownActionsProps {
    onDelete: MouseEventHandler
}

export function DropDownActions({onDelete}: DropDownActionsProps){
    return (
        <Dropdown>
        <DropdownTrigger>
            <ChevronDown />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit">editar</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger" onClick={onDelete}>
            apagar
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}