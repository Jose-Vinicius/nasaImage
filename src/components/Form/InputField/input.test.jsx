import React from 'react';
import { render, screen } from '@testing-library/react';
import {expect, it} from 'vitest';

import { DateProvider } from '../../../context/DateContext';
import { getDate } from '../../GetDate';
import { Form } from '..';
import { InputField } from '.';

it('Formulario com o value na data do dia do teste', () => {
    render(
        <DateProvider>
            <Form>
               <InputField/>
            </Form>
        </DateProvider>
    )
    const input = screen.getByDisplayValue(getDate())

    expect(input).toBeInTheDocument();
})