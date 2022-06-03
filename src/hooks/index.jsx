import { AuthProvider } from './auth'
import { SupportModalProvider } from './supportmodal'
import { MoreDetailsModalProvider } from './moredetailsmodal'


const AppProvider = ({ children }) => (
    <AuthProvider>
        <SupportModalProvider>
            <MoreDetailsModalProvider>
                {children}
            </MoreDetailsModalProvider>
        </SupportModalProvider>
    </AuthProvider>
);

export default AppProvider;