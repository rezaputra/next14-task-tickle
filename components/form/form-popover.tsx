"use client"

import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { ElementRef, useRef } from "react"
import { X } from "lucide-react"

import { FormInput } from "./form-input"
import { FormSubmit } from "./form-submit"
import { FormPicker } from "./form-picker"

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

import { useAction } from "@/hooks/use-action"
import { useProModal } from "@/hooks/use-pro-modal"

import { createBoard } from "@/actions/create-board"

interface FormPopoverProps {
    children: React.ReactNode
    side?: "left" | "right" | "top" | "bottom"
    align?: "start" | "center" | "end"
    sideOffset?: number
}

export function FormPopover({ children, side, align, sideOffset }: FormPopoverProps) {
    const proModel = useProModal()
    const closeRef = useRef<ElementRef<"button">>(null)
    const router = useRouter()

    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            toast.success("Board created!")
            closeRef.current?.click()
            router.push(`/board/${data.id}`)
        },
        onError: (error) => {
            toast.error(error)
            proModel.onOpen()
        },
    })

    const onSubmitted = (formData: FormData) => {
        const title = formData.get("title") as string
        const image = formData.get("image") as string

        // console.log({ image })

        execute({ title, image })
    }

    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent align={align} className=" w-80 pt-3" side={side} sideOffset={sideOffset}>
                <div className=" text-sm font-medium text-center text-neutral-700 pb-4">Create boards</div>
                <PopoverClose ref={closeRef} asChild>
                    <Button className=" h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600" variant="ghost">
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <form action={onSubmitted} className=" space-y-4">
                    <div>
                        <FormPicker id="image" errors={fieldErrors}></FormPicker>
                        <FormInput id="title" label="Board title" type="text" errors={fieldErrors} />
                    </div>
                    <FormSubmit className="w-full">Create</FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    )
}
