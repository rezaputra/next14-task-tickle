"use client"

import { Card } from "@prisma/client"

interface CardItemProps {
    index: number
    data: Card
}

export function CardItem({ index, data }: CardItemProps) {
    return (
        <div
            role="button"
            className=" truncate border-2 border-transparent hover:border-foreground py-2 px-3 text-sm bg-background rounded-md shadow-sm"
        >
            {data.title}
        </div>
    )
}
