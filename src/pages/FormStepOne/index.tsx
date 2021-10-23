/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import { useHistory } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as S from './styles';
import Theme from '../../components/Theme';

const FormStepOne = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        });
    }, [dispatch]);

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step2');
        } else {
            alert('Preencha os dados.');
        }
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        });
    };

    return (
        <Theme>
            <S.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input type="text" autoFocus value={state.name} onChange={handleNameChange} />
                </label>

                <button type="button" onClick={handleNextStep}>
                    Proximo
                </button>
            </S.Container>
        </Theme>
    );
};

export default FormStepOne;
