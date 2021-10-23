/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import { useHistory, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as S from './styles';
import Theme from '../../components/Theme';

const FormStepThree = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, [dispatch, state.name, history]);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert('Preencha os dados');
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    };
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        });
    };

    return (
        <Theme>
            <S.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus dados para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual seu Email
                    <input type="email" value={state.email} onChange={handleEmailChange} />
                </label>

                <label>
                    Qual seu Github
                    <input type="text" value={state.github} onChange={handleGithubChange} />
                </label>

                <Link to="/step2" className="backButton">
                    Voltar
                </Link>
                <button type="button" onClick={handleNextStep}>
                    Finalizar Cadastro
                </button>
            </S.Container>
        </Theme>
    );
};

export default FormStepThree;
