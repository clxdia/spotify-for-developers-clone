import AsideConsole from "../../components/AsideConsole";

export default function Layout2({ children, title, description }) {
  return (
    <main className="flex relative">
      <AsideConsole />
      <section>{children}</section>
    </main>
  );
}
