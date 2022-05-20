import { BrowserRouter } from 'react-router-dom';

const Providers = ({ children }: OnlyChildrenProps) => <BrowserRouter>{children}</BrowserRouter>;

export default Providers;
