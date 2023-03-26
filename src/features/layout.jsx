function Layout({children}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>title</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
