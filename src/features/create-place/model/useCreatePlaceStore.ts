import { create } from 'zustand'
import { PlaceFormData } from './type'

interface CreatePlaceState {
    currentStep: number;
    formData: Partial<PlaceFormData>;
    isSubmit: boolean;
    setStep: (step: number) => void;
    nexStep: () => void;
    prevStep: () => void;
    updateFormData: (data: Partial<PlaceFormData>) => void;
    resetStore: () => void;
}

const initialData: Partial<PlaceFormData> = {
    agreeToTerms: false,
    name: '',
    city: '',
    workingHours: '',
    phone: '',
    onlineShow: null,
    adress: '',
    district: '',
    metro: '',
}

export const useCreatePlaceStore = create<CreatePlaceState>((set) => ({
    currentStep: 1,
    formData: initialData,
    isSubmit: false,

    setStep: (step) => set({ currentStep: step }),

    nexStep: () => set( (state) => ({ currentStep: state.currentStep + 1 }) ),

    prevStep: () => set( (state) => ({ currentStep: state.currentStep - 1 }) ),

    updateFormData: (data) => 
        set((state) => ({
            formData:  { ...state.formData, ...data }
        })),

    resetStore: () => set({ currentStep: 1, formData: initialData })
}))