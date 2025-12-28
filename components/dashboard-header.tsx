"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Brand } from "@/types/audit"

interface DashboardHeaderProps {
  brands: Brand[]
  selectedBrand: Brand
  onBrandChange: (brandId: string) => void
}

export function DashboardHeader({ brands, selectedBrand, onBrandChange }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold">{selectedBrand.name}</h1>
        <p className="text-muted-foreground text-sm mt-1">{selectedBrand.domain}</p>
      </div>
      <Select value={selectedBrand.id} onValueChange={onBrandChange}>
        <SelectTrigger className="w-full sm:w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {brands.map((brand) => (
            <SelectItem key={brand.id} value={brand.id}>
              {brand.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
