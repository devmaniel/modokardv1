import { createFileRoute } from '@tanstack/react-router'
import Create_own_flashcard_page from '@/components/pages/my_own_flascard/create_flashcard/create_own_flashcard_page';

export const Route = createFileRoute('/test/my_own_flashcard/create_flashcard')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <Create_own_flashcard_page />
}
