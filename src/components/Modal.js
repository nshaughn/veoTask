
// import React from "react";
// import styled from "styled-components";
// import { MdClose } from 'react-icons/md';
// import Products from '../products-example.json'

// export const Modal = ({showModal, setShowModal}) => {
//     return (
//         <>
//         {
//         Products.map((product) => {  
//             return(  
//             showModal ? (
                
//                 <Background>
//                     <ModalWrapper showModal={showModal}>
//                         <ModalImg src={product.image} alt={product.title} />
//                         <ModalContent>
//                             <h1>{product.title}</h1>
//                             <p>{product.description}</p>
//                             <button>Add to Basket</button>
//                         </ModalContent>
//                         <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
//                     </ModalWrapper>
//                 </Background>
//             ) : null
//             ) 
//         })
//         }
//         </>
//     )
// };

// const Background = styled.div`
//     width: 40%;
//     height: auto;
//     background-color: rgba(0, 0, 0, 0.8);
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;   
//     `

// const ModalWrapper = styled.div`
//     width: 80px;
//     height: auto;
//     box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//     background: #fff;
//     color: #000;
//     display: grid;
//     grid-template-columns: 1fr, 1fr;
//     position: relative;
//     z-index: 10;
//     border-radius: 10px;
//     `

// const ModalImg = styled.img`
//     width: 200px;
//     height: auto;
//     border-radius: 10px 0 0 10px;
//     background: #000;
// `

// const ModalContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     /* line-height: 1.8; */
//     color: #141414;


//     p {
//         margin-bottom: 1rem;
//     }

//     button {
//         padding: 10px 24px;
//         background: #141414;
//         color: #fff;
//         border: none;
// }
// `; 

// const CloseModalButton = styled(MdClose)`
//     cursor: pointer;
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     width: 32px;
//     height: 32px;
//     padding: 0;
//     z-index: 10;
// `
