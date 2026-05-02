import z from "zod/v3"
export const pingSchema=z.object({
    name:z.string().min(2).max(50),

});

