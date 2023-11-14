export default function Header() {
    return (
      <header className="header" style={{ position: 'fixed', top: 0, width: '100%' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1ea7fd",
            color: "white",
            height: "100%",
            width: "100%",
          }}
        >
          <h1 style={{fontSize: '0.5em'}}>Header</h1>
        </div>
      </header>
    );
  }