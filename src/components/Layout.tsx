import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="container mx-auto px-16">
        <Header/>
        <main>{children}</main>
      </div>
    </>
  )
}
