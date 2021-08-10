import React, { useState, useEffect } from 'react';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';
import { PageArea, SearchArea } from './styled';
import AdItem from '../../components/partials/AdItem';

const Page = () => {

    const api = useApi();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [adList, setAdList] = useState([]);

    const getProfileInfo = async () => {

        const json = await api.getProfileInfo();
        setName(json.name);
        setEmail(json.email);
        setState(json.state);
        setAdList(json.ads);
    }

    useEffect(() => {
        getProfileInfo();
    }, []);
 
    return (
        <PageContainer>
            <PageArea>
                <div className="profileChanges" >
                    <form method="GET" onSubmit="handleSubmit" >
                        
                        <label className="area">
                            <div className="area--title">Nome:</div>
                            <div className="area--input">
                                <input
                                    value={name}
                                    type="text" 
                                />
                            </div>
                        </label>

                        <label className="area">
                            <div className="area--title">E-mail:</div>
                            <div className="area--input">
                                <input
                                    value={email}
                                    type="email" 
                                />
                            </div>
                        </label>

                        <label className="area">
                            <div className="area--title">Estado:</div>
                            <div className="area--input">
                                <select >
                                    <option value={state} >{state}</option>
                                </select>
                            </div>
                        </label>

                        <button type="submit" >Salvar Alterações</button>
                    </form>
                </div>
                
                {adList.map((i, k) =>
                    <div className="ads" >
                        <AdItem key={k} data={i} />
                        <button>Editar</button>
                    </div>  
                )}
            </PageArea>
        </PageContainer>
            
    );
}
export default Page;