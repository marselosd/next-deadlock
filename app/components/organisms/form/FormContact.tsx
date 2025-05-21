'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "./validador";

import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import SubTittle from "../../atoms/subTittleCommon/SubTittle";
import TextCommon from "../../atoms/textCommon/TextCommon";
import ButtonCommon from "../../atoms/buttonCommon/ButtonCommon";

export default function FormContact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit: SubmitHandler<ContactFormData> = async(data) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(data);
        reset();
    };

    if (isSubmitSuccessful) {
      return (
        <div>
        <section className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl shadow-lg text-center flex flex-col items-center gap-4">
          <SubTittle>Mensagem Enviada comm Sucesso!</SubTittle>
          <TextCommon>Agradecemos seu feedback. Em breve retornaremos.</TextCommon>
          <ButtonCommon
          onClick={() => reset()}
          className="bg-[var(--color-bg-primary)] hover:bg-[var(--color-hover-green)] text-white px-5 py-2 rounded-md shadow-md transition"
          >
          Nova Mensagem
          </ButtonCommon>
        </section>
        <br/>
        </div>
      );
    }

  return (
    <section>
      <SubTittle>Sua Opinião</SubTittle>
      <TextCommon className="text-center mb-6">Queremos saber o que você achou do Jogo!</TextCommon>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium flex items-center gap-2 mb-1">
            <FiUser /> Nome Completo
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register('name')}
            className={`px-4 py-2 rounded-md border ${ errors.name ? 'border-red-500' : 'border-transparent'} focus:outline-none`}
          />
          {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 mb-1">
            <FiMail /> E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="voce@email.com"
            {...register('email')}
            className={`px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-transparent'} focus:outline-none`}
          />
          {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium flex items-center gap-2 mb-1">
            <FiMessageSquare /> Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Escreva sua mensagem aqui..."
            {...register('message')}
            className={`px-4 py-3 rounded-md border ${ errors.message ? 'border-red-500' : 'border-transparent'} focus:outline-none resize-none`}
          />
          {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
        </div>

        <div>
          <ButtonCommon
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-[var(--color-bg-primary)] hover:bg-[var(--color-hover-green)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-hover-green)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ease-in-out group"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </>
            ) : (
              <>
                <FiSend className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                Enviar Mensagem
              </>
            )}
          </ButtonCommon>
        </div>
        <br/>
      </form>
      <br/>
    </section>
  );
}