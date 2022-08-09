import { useState } from 'react';
import Modal from 'react-modal';
import { Container,TransactionTypeContainer, RadioBox  } from './styles';


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewtransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewtransactionModal({isOpen,onRequestClose }:NewtransactionModalProps){
  const [type, setType] = useState('income');

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
       <h1>Cadastro de transactions</h1>

       <input type="text"
          placeholder="Título"       
       />

       <input type="number"
        placeholder="Valor"
       />

      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={()=> {setType('income')}}
          isActive={type ==='income'}
          activeColor='green'
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={()=> {setType('outcome')}}
          isActive={type === 'outcome'}
          activeColor='red'
        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

       <input type="text"
        placeholder="Categoria"
       />

       <button type="submit"> Cadastrar </button>
      </Container>
     
    </Modal>
  )
}