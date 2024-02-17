import * as z from "zod"

export const BoardSchema = z.object({
    title: z.string(),
})
