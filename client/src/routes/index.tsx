import { createFileRoute } from "@tanstack/react-router";
import Layout1 from "../components/layouts/layout1";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Layout1>
        <h1 className="font-medium text-2xl ">Hello World</h1>
      </Layout1>
    </>
  );
}
