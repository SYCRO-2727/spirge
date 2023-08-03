const NotFound = () => {
    return (
        <section style={{width: '100vw', height: '94vh', display: 'flex', FlexDirection: 'row', justifyContent: 'center', position: 'relative', top: '50px'}}>
            <div style={{margin: 'auto', textAlign: 'center'}}><h1 style={{color: 'var(--theme-color)'}}>404 - The page you were looking for must not have even been in our secret lost files collection!</h1></div>
        </section>
    )
}

NotFound.needsLayout = true;
export default NotFound;