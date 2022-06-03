import { createContext, useState, useContext } from "react";
import { SupportModal } from "../components/SupportModal";

const SupportModalContext = createContext({})

export const SupportModalProvider = ({ children }) => {
    const [supportModal, setSupportModal] = useState(false)

    function OpenSupportModal() {
        setSupportModal(true)
    }

    function CloseSupportModal() {
        setSupportModal(false)
    }

    return (
        <SupportModalContext.Provider value={{ OpenSupportModal, CloseSupportModal }}>
            {children}

            {supportModal && (
                <SupportModal />
            )}
        </SupportModalContext.Provider>
    )
}

export function useSupportModal() {
    const context = useContext(SupportModalContext)

    if (!context) {
        throw new Error("useSupportModal deve ser usado por dentro de um SupportModalProvider")
    }

    return context
}