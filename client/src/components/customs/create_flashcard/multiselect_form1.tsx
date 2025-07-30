import MultipleSelector from "@/components/ui/multiselect"
import { cn } from "@/lib/utils"

interface Multiselect_form1Props {
  className?: string
}

const Multiselect_form1 = ({ className }: Multiselect_form1Props) => {
  return (
    <div className="w-full">
      <MultipleSelector
        creatable={true}
        commandProps={{
          label: "Select or create items",
        }}
        placeholder="Type and press Enter to add items..."
        emptyIndicator={null}
        className={cn(className)}
      />
    </div>
  )
}

export default Multiselect_form1