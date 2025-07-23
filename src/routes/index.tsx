import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="font-medium text-2xl ">Hello World</h1>
    </>
  );
}
