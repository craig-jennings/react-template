import { NotificationProvider } from '@contexts/NotificationContext';

interface ProviderProps {
  children?: React.ReactNode;
}

const Providers = ({ children }: ProviderProps) => (
  <NotificationProvider>{children}</NotificationProvider>
);

export default Providers;
