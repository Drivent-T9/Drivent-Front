import { BiLogIn } from 'react-icons/bi';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function ChooseActivitie() {
  //colocar ternário para cada estado da atividade
  //pegar do servidor a informação de quantidade de vagas
  //colocar no servidor a inscrição e mudar o estado da atividade
  
  async function subscribe(){
    const body={
        //criar body e rota no back
    }
    try{
        await ;//query
    }catch(err){
        alert("Não foi possível realizar a inscrição.");
        console.log(err);
    }
  }

  useEffect(()=>{
    //recarregar estado da atividade
  },[]);

  /* 
   se [numero de inscrições]===[numero de vagas]
   : se [numero de inscrições]<=[numero de vagas]
   : se numero de inscrições menor que numero de vagas
  */
  
  return (
    <>
      <ActivitieState onClick={subscribe()}>
        <BiLogIn color="green" />
        {} vagas
      </ActivitieState>
      <ActivitieState>
        <AiOutlineCloseCircle color="red" />
        Esgotado
      </ActivitieState>
      <ActivitieState>
        <AiOutlineCheckCircle color="green" />
        Inscrito
      </ActivitieState>
    </>
  );
}

const ActivitieState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
