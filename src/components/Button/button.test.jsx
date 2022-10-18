import { render, screen } from '@testing-library/react';
import {expect, it, test} from 'vitest';
import { Button } from '.';

describe('Botão utilizado na aplicação',() => {
    it('Botão com texto correto', () => {
        render(
            <Button>Buscar Imagem</Button>
        )

        const textButton = 'Buscar Imagem'
        const button = screen.getByRole('button', {name: textButton})
        
        expect(button).toMatchSnapshot();
       
        
    })
})
