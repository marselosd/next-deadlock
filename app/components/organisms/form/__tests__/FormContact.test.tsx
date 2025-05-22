import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContact from "../FormContact";

let alertSpy: jest.SpyInstance;
let consoleLogSpy: jest.SpyInstance;

beforeAll(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
})

afterEach(() => {
    alertSpy.mockClear();
    consoleLogSpy.mockClear();
})

afterAll(() => {
    alertSpy.mockRestore();
    consoleLogSpy.mockRestore();
})

describe("FormContact Component", () => {
    const setupTest = () => {
        const user = userEvent.setup();
        render(<FormContact/>);
        return {user};
    };

    test('deve renderizar todos os campos para o formulário', () => {
        setupTest();
        const nomeInput = screen.getByLabelText(/nome completo/i);
        const emailInput = screen.getByLabelText(/e-?mail/i);
        const mensagemInput = screen.getByLabelText(/mensagem/i);
        const botao = screen.getByRole('button', { name: /enviar mensagem/i });
        expect(nomeInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(mensagemInput).toBeInTheDocument();
        expect(botao).toBeInTheDocument();
    });

    test('deve renderizar com valores iniciais zerados', () => {
        setupTest();
        const nomeInput = screen.getByLabelText(/nome completo/i);
        const emailInput = screen.getByLabelText(/e-?mail/i);
        const mensagemInput = screen.getByLabelText(/mensagem/i);
        expect(nomeInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(mensagemInput).toHaveValue('');
    });

    test('deve exibir erro se formulario for vazio', async() => {
        const user = setupTest();
        const botao = screen.getByRole('button', { name: /enviar mensagem/i });
        await user.user.click(botao);

        await waitFor(() => {
            expect(screen.getByText(/nome.*3 caracteres/i)).toBeInTheDocument();
            expect(screen.getByText(/insira um email válido/i)).toBeInTheDocument();
            expect(screen.getByText(/mensagem.*10 caracteres/i)).toBeInTheDocument();
        });
    });
})