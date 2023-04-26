import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <div className={"container mx-auto px-16 bg-white dark:bg-slate-800 dark:text-white"}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}
