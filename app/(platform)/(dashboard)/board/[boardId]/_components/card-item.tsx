"use client"

import { Card } from "@prisma/client"

import { Draggable } from "@hello-pangea/dnd"
import { useCardModal } from "@/hooks/use-card-modal"

interface CardItemProps {
    index: number
    data: Card
}

export function CardItem({ index, data }: CardItemProps) {
    const cardModal = useCardModal()

    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    role="button"
                    onClick={() => cardModal.onOpen(data.id)}
                    ref={provided.innerRef}
                    className=" truncate border-2 border-transparent hover:border-foreground py-2 px-3 text-sm bg-background rounded-md shadow-sm"
                >
                    {data.title}
                </div>
            )}
        </Draggable>
    )
}
