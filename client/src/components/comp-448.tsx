import { HomeIcon } from "lucide-react"
import React from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbItemType {
  label: string
  href?: string
  onClick?: () => void
  isCurrentPage?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItemType[]
  onHomeClick: () => void
}

export default function Component({ items, onHomeClick }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={onHomeClick} className="cursor-pointer">
            <HomeIcon size={16} aria-hidden="true" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.isCurrentPage ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : item.onClick ? (
                <BreadcrumbLink onClick={item.onClick} className="cursor-pointer">
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink href={item.href}>
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
