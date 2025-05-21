import {z} from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }).max(100),
    email: z.string().email({ message: 'Por favor, insira um email válido' }),
    message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }).max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;