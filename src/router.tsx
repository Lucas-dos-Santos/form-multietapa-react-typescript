import { BrowserRouter, Route } from 'react-router-dom';
import FormStepOne from './pages/FormStepOne';
import FormStepTwo from './pages/FormStepTwo';
import FormStepThree from './pages/FormStepThree';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={FormStepOne} />
            <Route path="/step2" component={FormStepTwo} />
            <Route path="/step3" component={FormStepThree} />
        </BrowserRouter>
    );
};

export default Router;
