import { render, screen } from '@testing-library/react';
import {expect, it, test} from 'vitest';
import { Button } from '../Button';

describe('Botão utilizado na aplicação',() => {
    it('Botão com texto correto', () => {
        render(
            <Button>Buscar Imagem</Button>
        )
        const button = screen.getByRole('button', {name: 'Buscar Imagem'})
        expect(button).toBeInTheDocument();
    })
})
