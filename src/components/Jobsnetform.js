import React from 'react';
import { useFormik } from 'formik';

    const initialValues = {
        completName: '',
        intendPosition:'',
        day:'',
        month:'',
        year:'',
        maritalStatus:'',
        gender:'',
        breed:'',
        address:'',
        district:'',
        city:'',
        cep:'',
        phone:'',
        email: '',
        ident:'',
        cpf: '',
        veiculo:'',
        habilitacao:'',
    }
    const onSubmit = values => {
        console.log('Form data', values)
    }
    const validate = values => {
        let errors = {}
        if(!values.completName){
            errors.completName = 'Campo Obrigatório'
        }
        if(!values.day){
            errors.day = 'Preencha DIA de nascimento'
        }
        if(!values.month){
            errors.month = 'Preencha MÊS de nascimento'
        }  
        if(!values.year){
            errors.year = 'Preencha ANO de nascimento'
        }
        if(!values.address){
            errors.address = 'Preencha campo Endereço'
        }
        if(!values.email){
            errors.email = 'Preencha campo E-mail'
        } else if
            (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Formato de E-mail inválido'
        }
        if(!values.ident){
            errors.ident = 'Preencha campo Identidade'
        }
        if(!values.cpf){
            errors.cpf = 'Preencha campo CPF'
        }
        return errors
    }
    
    function Jobsnetform () {
        const formik = useFormik({
            initialValues,
            onSubmit,
            validate,
        });

    return (
    <div>
        <form onSubmit={formik.handleSubmit} className="form" action="https://jobsnet-bc.netlify.app/" method="POST">
                
                <div>
                    <h2>DADOS PESSOAIS</h2><hr></hr>
                </div>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="completName"> Nome Completo <span>*</span></label>
                    <input type="text" id="completName" name="completName" size="60" required onChange={formik.handleChange} value={formik.values.completName}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="intendPosition"> Cargo Pretendido </label>
                    <input type="text" name="intendPosition" size="29" onChange={formik.handleChange} 
                    value={formik.values.intendPosition}/>
                </div>

                <div className="control-group">
                    <label className="control-label" htmlFor="dataNasc" id="dataNasc" name="dataNasc"> Data de Nascimento <span>*</span></label>
                    <select name="day" required onChange={formik.handleChange} 
                    value={formik.values.day}>
                        <option> Dia </option>
                        <option value="01"> 01 </option>
                        <option value="02"> 02 </option>
                        <option value="03"> 03 </option>
                        <option value="04"> 04 </option>
                        <option value="05"> 05 </option>
                        <option value="06"> 06 </option>
                        <option value="07"> 07 </option>
                        <option value="08"> 08 </option>
                        <option value="09"> 09 </option>
                        <option value="10"> 10 </option>
                        <option value="11"> 11 </option>
                        <option value="12"> 12 </option>
                        <option value="13"> 13 </option>
                        <option value="14"> 14 </option>
                        <option value="15"> 15 </option>
                        <option value="16"> 16 </option>
                        <option value="17"> 17 </option>
                        <option value="18"> 18 </option>
                        <option value="19"> 19 </option>
                        <option value="20"> 20 </option>
                        <option value="21"> 21 </option>
                        <option value="22"> 22 </option>
                        <option value="23"> 23 </option>
                        <option value="24"> 24 </option>
                        <option value="25"> 25 </option>
                        <option value="26"> 26 </option>
                        <option value="27"> 27 </option>
                        <option value="28"> 28 </option>
                        <option value="29"> 29 </option>
                        <option value="30"> 30 </option>
                        <option value="31"> 31 </option>
                    </select>

                    <select name="month" required onChange={formik.handleChange} 
                    value={formik.values.month}>
                        <option> Mês </option>
                        <option value="Janeiro"> Janeiro </option>
                        <option value="Fevereiro"> Fevereiro </option>
                        <option value="Marco"> Março </option>
                        <option value="Abril"> Abril </option>
                        <option value="Maio"> Maio </option>
                        <option value="Junho"> Junho </option>
                        <option value="Julho"> Julho </option>
                        <option value="Agosto"> Agosto </option>
                        <option value="Setembro"> Setembro </option>
                        <option value="Outubro"> Outubro </option>
                        <option value="Novembro"> Novembro </option>
                        <option value="Dezembro"> Dezembro </option>
                    </select>

                    <select name="year" required onChange={formik.handleChange} 
                    value={formik.values.year}>
                        <option> Ano </option>
                        <option value="2021"> 2021 </option>
                        <option value="2020"> 2020 </option>
                        <option value="2019"> 2019 </option>
                        <option value="2018"> 2018 </option>
                        <option value="2017"> 2017 </option>
                        <option value="2016"> 2016 </option>
                        <option value="2015"> 2015 </option>
                        <option value="2014"> 2014 </option>
                        <option value="2013"> 2013 </option>
                        <option value="2012"> 2012 </option>
                        <option value="2011"> 2011 </option>
                        <option value="2010"> 2010 </option>
                        <option value="2009"> 2009 </option>
                        <option value="2008"> 2008 </option>
                        <option value="2007"> 2007 </option>
                        <option value="2006"> 2006 </option>
                        <option value="2005"> 2005 </option>
                        <option value="2004"> 2004 </option>
                        <option value="2003"> 2003 </option>
                        <option value="2002"> 2002 </option>
                        <option value="2001"> 2001 </option>
                        <option value="2000"> 2000 </option>
                        <option value="1999"> 1999 </option>
                        <option value="1998"> 1998 </option>
                        <option value="1997"> 1997 </option>
                        <option value="1996"> 1996 </option>
                        <option value="1995"> 1995 </option>
                        <option value="1994"> 1994 </option>
                        <option value="1993"> 1993 </option>
                        <option value="1992"> 1992 </option>
                        <option value="1991"> 1991 </option>
                        <option value="1990"> 1990 </option>
                        <option value="1989"> 1989 </option>
                        <option value="1988"> 1988 </option>
                        <option value="1987"> 1987 </option>
                        <option value="1986"> 1986 </option>
                        <option value="1985"> 1985 </option>
                        <option value="1984"> 1984 </option>
                        <option value="1983"> 1983 </option>
                        <option value="1982"> 1982 </option>
                        <option value="1981"> 1981 </option>
                        <option value="1980"> 1980 </option>
                        <option value="1979"> 1979 </option>
                        <option value="1978"> 1978 </option>
                        <option value="1977"> 1977 </option>
                        <option value="1976"> 1976 </option>
                        <option value="1975"> 1975 </option>
                        <option value="1974"> 1974 </option>
                        <option value="1973"> 1973 </option>
                        <option value="1972"> 1972 </option>
                        <option value="1971"> 1971 </option>
                        <option value="1970"> 1970 </option>
                        <option value="1969"> 1969 </option>
                        <option value="1968"> 1968 </option>
                        <option value="1967"> 1967 </option>
                        <option value="1966"> 1966 </option>
                        <option value="1965"> 1965 </option>
                        <option value="1964"> 1964 </option>
                        <option value="1963"> 1963 </option>
                        <option value="1962"> 1962 </option>
                        <option value="1961"> 1961 </option>
                        <option value="1960"> 1960 </option>
                        <option value="1959"> 1959 </option>
                        <option value="1958"> 1958 </option>
                        <option value="1957"> 1957 </option>
                        <option value="1956"> 1956 </option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="maritalStatus" id="maritalStatus"> Estado Civil </label>
                    <select className="maritalStatus" name="maritalStatus" onChange={formik.handleChange} 
                    value={formik.values.maritalStatus}>
                        <option> Selecione </option>
                        <option value="Solteiro"> Solteiro </option>
                        <option value="Casado"> Casado </option>
                        <option value="Viuvo"> Viúvo </option>
                        <option value="Divorciado"> Divorciado </option>
                        <option value="Uniao"> União Estável </option>
                    </select>
                </div>

                <div className="control-group">
                    <label className="control-label" htmlFor="gender" id="gender"> Gênero </label>
                    <select className="gender" name="gender" onChange={formik.handleChange} 
                    value={formik.values.gender}>
                        <option> Selecione </option>
                        <option value="Feminino"> Feminino </option>
                        <option value="Masculino"> Masculino </option>
                        <option value="Transgenero"> Transgênero </option>
                        <option value="NaoBinario"> Não-Binário </option>
                        <option value="Agenero"> Agênero </option>
                        <option value="Agenero"> Outro </option> 
                    </select>
                </div>

                <div className="control-group">
                    <label className="control-label" htmlFor="breed" id="breed"> Declaração Racial </label>
                     <select name="breed" /*style="width: 65%"*/ onChange={formik.handleChange} 
                    value={formik.values.breed}>
                        <option> Selecione </option>
                        <option value="Preta"> Preta </option>
                        <option value="Parda"> Parda </option>
                        <option value="Indigena"> Indígena </option>
                        <option value="Amarela"> Amarela </option>
                        <option value="Branca"> Branca </option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="address"> Endereço <span>*</span></label>
                    <input required type="text" name="address" placeholder="Nome da Rua, 85, Bloco 2, Apt 504" size="60" onChange={formik.handleChange} 
                    value={formik.values.address}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="district" id="district"> Bairro <span>*</span></label>
                    <input required type="text" name="district" size="22" onChange={formik.handleChange} 
                    value={formik.values.district}/>
                </div>

                <div className="control-group">
                    <label className="control-label" htmlFor="city" id="city"> Cidade <span>*</span></label>
                    <input required type="text" name="city" size="21" onChange={formik.handleChange} 
                    value={formik.values.city}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="cep" id="cep"> CEP <span>*</span></label>
                    <input required type="text" name="cep" size="22" onChange={formik.handleChange} 
                    value={formik.values.cep}/>
                </div>

                <div className="control-group">
                    <label className="control-label" htmlFor="phone" id="phone"> Celular <span>*</span></label>
                    <input required type="tel" name="phone" size="21" placeholder="(99) 99999-9999" onChange={formik.handleChange} 
                    value={formik.values.phone}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="email "id="email"> E-mail <span>*</span></label>
                    <input required type="email" name="email" size="40" placeholder="seuemail@mail.com" onChange={formik.handleChange} value={formik.values.email}/>
                </div>
            </fieldset><br></br>

<p></p><br></br>
                <div>
                    <h2>DOCUMENTOS</h2><hr></hr>
                </div>


            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="ident" id="ident"> Identidade <span>*</span></label>
                    <input required type="text" name="ident"onChange={formik.handleChange} 
                    value={formik.values.ident}/>
                </div>

                <div className="control-group">
                    <label className="control-label" htmlFor="cpf" id="cpf"> CPF <span>*</span> </label>
                    <input required type="text" name="cpf" onChange={formik.handleChange} value={formik.values.cpf}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="control-group">
                    <label className="control-label" htmlFor="veiculo" id="veiculo"> Possui veículo? </label>
                    <select name="veiculo" /*style="width: 100%"*/ onChange={formik.handleChange} 
                    value={formik.values.veiculo}>
                        <option> Selecione </option>
                        <option value="Sim"> Sim </option>
                        <option value="Não"> Não </option>
                    </select>
                </div>

                <div className="control-group">
                    <label className="control-label" htmlFor="habilitacao" id="habilitacao"> Habilitação </label>
                    <select name="habilitacao" /*style="width: 60%"*/ onChange={formik.handleChange} 
                    value={formik.values.habilitacao}>
                        <option> Selecione </option>
                        <option value="Cat. A"> Cat. A </option>
                        <option value="Cat. B"> Cat. B </option>
                        <option value="Cat. C"> Cat. C </option>
                        <option value="Cat. D"> Cat. D </option>
                    </select>
                </div>
            </fieldset>

            <div>
                <button type="submit">ENVIAR</button>
            </div>
        </form>
    </div>
    )
}

export default Jobsnetform;