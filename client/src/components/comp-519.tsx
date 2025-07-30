import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper"

interface Step {
  step: number;
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Component({ steps, currentStep = 1 }: StepperProps) {
  return (
    <div className="w-full space-y-8 text-center">
      <Stepper defaultValue={currentStep} className="w-full items-start gap-4">
        {steps.map(({ step, title }) => (
          <StepperItem key={step} step={step} className="flex-1">
            <StepperTrigger className="w-full flex-col items-start gap-2 rounded">
              <StepperIndicator asChild className="bg-border h-1 w-full">
                <span className="sr-only">{step}</span>
              </StepperIndicator>
              <div className="space-y-0.5">
                <StepperTitle>{title}</StepperTitle>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>
      
    </div>
  )
}
