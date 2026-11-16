import { useCreatePlaceStore } from "../model/useCreatePlaceStore"


export const createPlaceForm = () => {
    const { currentStep } = useCreatePlaceStore()

    return (
        <div className="form-container">
            <h2>Шаг {currentStep}/5</h2>
            <span>Общая информация</span> 

            <div>
                {currentStep === 1 & <Step1General />}
            </div>
        </div>
    )
}