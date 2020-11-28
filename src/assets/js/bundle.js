function App() {
    const [showModal, setShowModal] = React.useState(false);
    const [data, setData] = React.useState({
        name: '',
        surname: '',
        email: '',
        number: '',
        street: '',
        hnumber: '',
        zip: ''
    });
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(
        () => {
            const activePay = () => {
                setShowModal(true);
            }
            const btnPay = document.getElementById('btn-pay');
            btnPay.addEventListener('click', activePay);
            return () => {
                btnPay.removeEventListener('click', activePay);
            }
        },
        [setShowModal]
    );

    const changeText = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const requestPayment = () => {
        setIsLoading(true);
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        fetch('/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                id: id
            })
        }).then(response => response.json())
        .then(jsonData => {
            window.location.replace(jsonData.url);
        }).catch(ex => {
            console.log(ex);
            setIsLoading(false);
        });
    }
    
    const cancel = () => {
        setShowModal(false);
    }
    
    if (!showModal) return null; 
    return (
        <div className="modal-container">
            <div className="modal">
                {
                    !isLoading ? (
                        <React.Fragment>
                            <p className="title">Necesitamos algunos datos para completar tu compra</p>
                            <p className="label">Nombre</p>
                            <input 
                                type="text"
                                name="name" 
                                value={data.name} 
                                onChange={changeText}
                                placeholder="Ej. Juan" 
                            />
                            <p className="label">Apellido</p>
                            <input 
                                type="text"
                                name="surname" 
                                value={data.surname} 
                                onChange={changeText}
                                placeholder="Ej. Avila" 
                            />
                            <p className="label">Email</p>
                            <input 
                                type="text"
                                name="email" 
                                value={data.email} 
                                onChange={changeText}
                                placeholder="Ej. example@example.com" 
                            />
                            <p className="label">Número de telefono</p>
                            <div className="phone-number">
                                <p>+52</p>
                                <input 
                                    type="text"
                                    name="number" 
                                    value={data.number} 
                                    onChange={changeText}
                                    placeholder="Ej. 5512345678" 
                                />
                            </div>
                            <p className="label">Calle</p>
                            <input 
                                type="text"
                                name="street" 
                                value={data.street} 
                                onChange={changeText}
                                placeholder="Ej. La garita" 
                            />
                            <p className="label">Número de casa</p>
                            <input 
                                type="text"
                                name="hnumber" 
                                value={data.hnumber} 
                                onChange={changeText}
                                placeholder="Ej. 23" 
                            />
                            <p className="label">Código Postal</p>
                            <input 
                                type="text"
                                name="zip" 
                                value={data.zip} 
                                onChange={changeText}
                                placeholder="Ej. 55706" 
                            />
                            <button onClick={requestPayment} className="btn-continue">Continuar</button>
                            <button onClick={cancel} className="btn-cancel">Cancelar</button>
                        </React.Fragment>
                    ) : (
                        <p className="title">Cargando...</p>
                    )
                }
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);