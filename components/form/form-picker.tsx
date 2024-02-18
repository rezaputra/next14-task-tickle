"use client"

import { defaultImages } from "@/constants/images"
import { unsplash } from "@/lib/unsplash"
import { cn } from "@/lib/utils"
import { Check, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useFormStatus } from "react-dom"
import { FormErrors } from "./form-errors"

interface FormPickerProps {
    id: string
    errors?: Record<string, string[]> | undefined
}

export function FormPicker({ id, errors }: FormPickerProps) {
    const { pending } = useFormStatus()

    const [images, setImages] = useState<Array<Record<string, any>>>(defaultImages)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedImageId, setSelectedImageId] = useState(null)

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const result = await unsplash.photos.getRandom({
                    collectionIds: ["317099"],
                    count: 9,
                })

                if (result && result.response) {
                    const newImage = result.response as Array<Record<string, any>>
                    setImages(newImage)
                } else {
                    console.error("Failed to get images from Unsplash")
                }
            } catch (error) {
                console.log(error)
                setImages(defaultImages)
            } finally {
                setIsLoading(false)
            }
        }

        fetchImages()
    }, [])

    if (isLoading) {
        return (
            <div className=" p-6 flex items-center justify-center">
                <Loader2 className=" h-6 w-6 text-sky-700 animate-spin" />
            </div>
        )
    }

    return (
        <div className=" relative">
            <div className=" grid grid-cols-3 gap-2 mb-2">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={cn(
                            "cursor-pointer relative aspect-video group hover:opacity-65 transition bg-muted",
                            pending && "opacity-50 hover:opacity-50 cursor-auto"
                        )}
                        onClick={() => {
                            if (pending) return
                            setSelectedImageId(image.id)
                        }}
                    >
                        <input
                            type="radio"
                            id={id}
                            name={id}
                            className="hidden"
                            checked={selectedImageId === image.id}
                            disabled={pending}
                            value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.user.name}|${image.links.html}|`}
                            // onChange={() => {}}
                        />
                        <Image fill alt="Unsplash image" src={image.urls.thumb} className=" object-cover rounded-sm" />
                        {selectedImageId === image.id && (
                            <div className=" absolute inset-y-0 h-full w-full bg-foreground/30 flex items-center justify-center">
                                <Check className=" h-4 w-4 text-background" />
                            </div>
                        )}
                        <Link
                            href={image.links.html}
                            target="_blank"
                            className=" w-full h-5 opacity-0 group-hover:opacity-100 absolute bottom-0 text-[10px] truncate text-background hover:underline p-1 bg-foreground/50 text-center"
                        >
                            {image.user.name}
                        </Link>
                    </div>
                ))}
            </div>
            <FormErrors id="image" errors={errors} />
        </div>
    )
}
