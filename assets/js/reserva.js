
const continuar = document.getElementById('continuar-3')
const resultado = document.querySelector('.resultado')
const party = document.getElementById('party')


continuar.addEventListener('click', (e) => {
    e.preventDefault()

    if( party.value >= "2023-04-12T11:00"  && party.value <= "2023-04-30T23:00"){
        const p = document.createElement('p');
        p.textContent = 'Voce está Reservado';
        resultado.appendChild(p);
       
        setTimeout(()=>{
            window.location.href = "principalcliente.html";
        },3000)
        return  
    }else{
        const p = document.createElement('p');
        p.textContent = 'Restaurante Fechado, Escolha um horário Valido';
        resultado.appendChild(p);
      
        setTimeout(()=>{
            window.location.href = "reservar.html";
        },3000)
        return  
    }
     
  })


