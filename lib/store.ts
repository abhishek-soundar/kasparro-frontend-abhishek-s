import { create } from "zustand"

interface DashboardStore {
  selectedBrandId: string
  selectedModuleId: string
  setSelectedBrandId: (brandId: string) => void
  setSelectedModuleId: (moduleId: string) => void
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  selectedBrandId: "brand-1",
  selectedModuleId: "content-intelligence",
  setSelectedBrandId: (brandId: string) => set({ selectedBrandId: brandId }),
  setSelectedModuleId: (moduleId: string) => set({ selectedModuleId: moduleId }),
}))
