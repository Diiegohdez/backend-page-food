import { z } from "zod";

export const createProductSchema = z.object({
    name: z.string({
        required_error: "Ingrese el Nombre del Producto",
    }),
    description: z.string({
        required_error: "Ingrese la description del Producto",
    }),
    price: z.number({
        required_error: "Ingrese el Valor del Producto",
    }),

})