"use client"

import { countMachine } from "@/utils/x-state";
import { useMachine } from "@xstate/react";
import { useEffect } from "react";


const XStatePage = () => {
    const [state,send,actorRef] = useMachine(countMachine)


    useEffect(() => {
      const subscription = actorRef.subscribe((snapshot) => {
        // simple logging
        console.log('actorRef',actorRef);
        console.log('subscription',subscription);
        console.log('snapshot',snapshot);
      });
    
      return subscription.unsubscribe;
    }, [actorRef]); // note: actor ref should never change
    return (

        <div>
          <h1>COUNT: {state.context.count}</h1>
          <button onClick={()=> send({type:"INC"})}>Increment</button>
          <button onClick={()=> send({type:"DEC"})}>Decrement</button>
          <button onClick={()=> send({type:"SET",ok:100})}>Set</button>
          <button onClick={()=> send({type:"RESET"})}>RESET</button>

      </div>
    );
};

export default XStatePage;