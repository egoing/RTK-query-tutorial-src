import {useGetCounterQuery} from '../../app/api';
import {useUpdateCounterMutation} from '../../app/api';
export function Counter() {
  const counterQuery = useGetCounterQuery();
  const counterMutation = useUpdateCounterMutation();
  const [updateCounter, updateCounterInfo] = counterMutation;
  if(counterQuery.isLoading)
    return <>Loading</>
  if(counterQuery.isError)
    return <>Error</>
  
  if(updateCounterInfo.isLoading)
    return <>Loading</>
  if(updateCounterInfo.isError)
    return <>Error</>    
  
  return <div>
    <h1>Counter</h1>
    <input type="button" onClick={()=>{
      updateCounter(counterQuery.data.value+1);
    }} value="+" /> 
    {counterQuery.data.value}
  </div>
}