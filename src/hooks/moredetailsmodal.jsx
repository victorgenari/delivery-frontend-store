import { createContext, useState, useContext } from "react";
import { DetailsModal } from "../components/MoreDetailsModal";

const MoreDetailsModalContext = createContext({})

export const MoreDetailsModalProvider = ({ children }) => {
    const [moreDetailsModal, setMoreDetailsModal] = useState(false)

    function OpenMoreDetailsModal() {
        setMoreDetailsModal(true)
    }

    function CloseMoreDetailsModal() {
        setMoreDetailsModal(false)
    }

    return (
        <MoreDetailsModalContext.Provider value={{ OpenMoreDetailsModal, CloseMoreDetailsModal }}>
            {children}

            {moreDetailsModal && (
                <DetailsModal />
            )}
        </MoreDetailsModalContext.Provider>
    )
}

export function useMoreDetailsModal() {
    const context = useContext(MoreDetailsModalContext)

    if (!context) {
        throw new Error("useMoreDetailsModal deve ser usado por dentro de um MoreDetailsModalProvider")
    }

    return context
}