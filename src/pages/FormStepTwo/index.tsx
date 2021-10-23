/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as S from './styles';
import Theme from '../../components/Theme';
import SelectOption from '../../components/SelectOption';

const FormStepTwo = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            });
        }
    }, [dispatch, history, state.name]);

    const handleNextStep = () => {
        if (state.name !== '') {
            history.push('/step3');
        } else {
            alert('Preencha os dados.');
        }
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    };
    return (
        <Theme>
            <S.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className="backButton">
                    Voltar
                </Link>

                <button type="button" onClick={handleNextStep}>
                    Proximo
                </button>
            </S.Container>
        </Theme>
    );
};

export default FormStepTwo;
