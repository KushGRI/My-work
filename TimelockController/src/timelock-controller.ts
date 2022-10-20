import {
  CallScheduled as CallScheduleEvent,
  CallExecuted as CallExecuteEvent,
  Cancelled as CallCancelEvent
} from "../generated/TimelockController/TimelockController";

import {CallScheduled, CallExecuted, Cancelled
} from "../generated/schema";

export function handleCallScheduled(event: CallScheduleEvent): void{
  let callScheduled = new CallScheduled(event.params.id.toString());
  callScheduled.target = event.params.target;
  callScheduled.value = event.params.value;
  callScheduled.data = event.params.data;
  callScheduled.predecessor = event.params.predecessor;
  callScheduled.delay = event.params.delay;
  callScheduled.save();
}

export function handleCallExecuted(event: CallExecuteEvent): void{
  let callExecute = new CallExecuted(event.params.id.toString());
  callExecute.target = event.params.target;
  callExecute.value = event.params.value;
  callExecute.data = event.params.data;
  callExecute.save();
}

export function handleCancelled(event: CallCancelEvent): void{
  let cancelled = new Cancelled(event.params.id.toString());
  cancelled.save();
}


