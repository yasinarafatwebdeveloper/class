

// <<---------------- Player selector Area ---------------->>
const nameArray =[];

function showName(selectProduct){

        if(selectProduct.length >5){
                return alert('Please Select Five Players');
        }else{
                let tableBody=document.getElementById('cardSelectName');
                tableBody.innerHTML='';


                for(let i =0; i<selectProduct.length; i++){
                const name=nameArray[i].Name

                const tr = document.createElement("tr");

                tr.innerHTML=`
                <th>${i + 1}</th>
                <td>${name}</td>
                `;

                tableBody.appendChild(tr);
    }
        }
}

function addClick(element){
        const plyerName=element.parentNode.children[0].innerText;
        const nameObject={Name:plyerName};
        nameArray.push(nameObject);
        showName(nameArray);
}

// <<---------------- Disable Area ---------------->>

        function getElementById(elementId){
                const btnOne= document.getElementById(elementId);
                btnOne.disabled=true;
                return btnOne;
        }
        
        const btnOne=document.querySelector('#btn1');
        btnOne.addEventListener('click',function(){
                btnOne.style.backgroundColor='#dddddd';

                getElementById('btn1');
        })

        const btn2=document.querySelector('#btn2');
        btn2.addEventListener('click',function(){
                btn2.style.backgroundColor='#dddddd';

                getElementById('btn2');
        })
        
        const btn3=document.querySelector('#btn3');
        btn3.addEventListener('click',function(){
                btn3.style.backgroundColor='#dddddd';

                getElementById('btn3');
        })
        
        const btn4=document.querySelector('#btn4');
        btn4.addEventListener('click',function(){
                btn4.style.backgroundColor='#dddddd';

                getElementById('btn4');
        })
        
        const btn5=document.querySelector('#btn5');
        btn5.addEventListener('click',function(){
                btn5.style.backgroundColor='#dddddd';

                getElementById('btn5');
        })
        
        const btn6=document.querySelector('#btn6');
        btn6.addEventListener('click',function(){
                btn6.style.backgroundColor='#dddddd';

                getElementById('btn6');
        })
        





// <<---------------- Calculate Area ---------------->>

document.getElementById('calculete-btn').addEventListener('click',function(){
        const calculetValue=document.getElementById('total-player')
        const calculetSttring=calculetValue.value;
        const calculetNumber=parseInt(calculetSttring);

        const gonFol=calculetNumber*2000;

        const calculetValueElement=document.getElementById('calculetValueMan');
        const calculeteString=calculetValueElement.innerText;
        const calculetTotalNumber=parseInt(calculeteString);

        const calculetTotalAmount=gonFol+calculetTotalNumber;
        calculetValueElement.innerText=calculetTotalAmount;

        calculetValue.value='';


})

function getElementValueById(id){
        const managerInputValue=document.getElementById(id);
        const managerInputString=managerInputValue.value;
        const managerNumber=parseInt(managerInputString);
        managerInputValue.value='';
        return managerNumber;
}

document.getElementById('total-calculet').addEventListener('click',function(){calculetValueMan
        const playerExp=document.getElementById('calculetValueMan');
        const playerValueString=playerExp.innerText;
        const playerValueNumber=parseInt(playerValueString);


        const managerValue=getElementValueById('manager-inpt');

        const coachValue=getElementValueById('coach-inpt');

        const totalAmount=document.getElementById('total-Amont');
        const totalAmountString=totalAmount.innerText;
        const totalAmountNumber=parseInt(totalAmountString);



        const totalCurrentAmount=managerValue+coachValue+totalAmountNumber+playerValueNumber;

        totalAmount.innerText=totalCurrentAmount;


})