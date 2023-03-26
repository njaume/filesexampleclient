import Header from "./header";
import SpinnerLoading from "./Spinner";

function Layout({children}) {
  return (
    <div>
      <SpinnerLoading />
      <Header />
      <main className="mx-4 my-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
