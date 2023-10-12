

function Header({background}) {
    return (
        <header className={`py-5 bg-${background || "success"} text-white`}>
            <div className="container">
                <h1>日本商品代購</h1>
                <p>快把喜歡的東西帶回家</p>
            </div>
        </header>
    )
}

export default Header;
