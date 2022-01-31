import { createAutocomplete } from '@algolia/autocomplete-core';
import { useState, useMemo, useRef } from 'react';
import { Link } from "react-router-dom";
import style from "../css/SearchAutocomplete.module.css"
import icono from "../images/pngwing.com.png"


const AutocompleteItem = ({id, name, image, price }) => {
    const formato = new Intl.NumberFormat('de-DE', {
        // style: 'currency',
        // currency: 'USD',
        // minimumFractionDigits: 3,
    })
    if (!!name) {
        return (
            <li>
                <Link to={`/details/${id}`}>
                    <a className={style.a}>
                        <img src={image} alt={name} className={style.img} />
                        <div>
                            <h3 className={style.h3}>{name}</h3>
                            <p className={style.p}>${formato.format(price)}</p>
                        </div>
                    </a>
                </Link>
            </li>
        )
    }else{
        return (
            <a className={style.a}>
                <img src={icono} alt={icono} className={style.img} />
                <div>
                    <p>No se ecuentra el producto</p>
                </div>
            </a>
        )
    }
}

export default function SearchAutocomplete (props) {
    const [autoCompleteState, setAutocompleteState] = useState({
        products:[],
        isOpen:false
    })

    const autoComplete = useMemo(() => createAutocomplete({
        placeholder:'Encuentra tu producto',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: ()=> [{
            sourceId: 'offers-next-api',
            getItems: ({ query }) => {
                if (!!query) {
                    return fetch(`https://ecommerce-igroup-6.herokuapp.com/products?name=${query}`)
                        .then(res=> res.json())
                }
            }
        }],
        ...props
    }),[props])
    const formRef = useRef(null);
    const inputRef = useRef(null);
    const panelRef = useRef(null);

    const formProps = autoComplete.getFormProps({
        inputElement: inputRef.current
    });
    const inputProps = autoComplete.getInputProps({
        inputElement: inputRef.current
    });


    return (
        <form ref={formRef} className={style.form} {...formProps}>
            <div className={style.div1}>
                <input ref={inputRef} className={style.input} {...inputProps} />
            
            {
                autoCompleteState.isOpen && (
                    <div className={style.div2} ref={panelRef} {...autoComplete.getPanelProps()}>
                        {autoCompleteState.collections.map((collection, index)=> {
                            const { items } = collection

                            return (
                                <section key={`section-${index}`}>
                                    {items.length > 0 && (
                                        <ul className={style.ul} {...autoComplete.getListProps()}>
                                            {
                                                items.map(item => <AutocompleteItem key={item.id} {...item} />)
                                            }
                                        </ul>
                                    )}
                                </section>
                            )
                        })}
                    </div>
                )
            }
            </div>
        </form>
    )
}