import { createAutocomplete } from '@algolia/autocomplete-core';
import { useState, useMemo, useRef } from 'react';
import { Link } from "react-router-dom";
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
                    <a className='no-underline hover:bg-blue-300 flex gap-4 p-4'>
                        <img src={image} alt={name} className='w-12 h-12 object-contain' />
                        <div>
                            <h3 className='text-sm font-semibold'>{name}</h3>
                            <p className='text-xs text-gray-600'>${formato.format(price)}</p>
                        </div>
                    </a>
                </Link>
            </li>
        )
    }else{
        return (
            <a className='no-underline hover:bg-blue-300 flex gap-4 p-4'>
                <img src={icono} alt={icono} className='w-7 h-7 object-contain' />
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
                    return fetch(`http://localhost:3001/products?name=${query}`)
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
        <form ref={formRef} className="contents justify-center m-auto" {...formProps}>
            <div className='flex relative p-1 bg-gradient-to-tr from-neutral-800 to-gray-500 rounded-full w-2/6'>
                <input ref={inputRef} className='flex-1 p-2 pl-4 rounded-full w-full' {...inputProps} />
            
            {
                autoCompleteState.isOpen && (
                    <div className='absolute mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shado-lg
                    z-10' ref={panelRef} {...autoComplete.getPanelProps()}>
                        {autoCompleteState.collections.map((collection, index)=> {
                            const { items } = collection

                            return (
                                <section key={`section-${index}`}>
                                    {items.length > 0 && (
                                        <ul {...autoComplete.getListProps()}>
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