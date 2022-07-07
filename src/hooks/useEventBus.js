import React, { useEffect } from "react";

import EventBus from "event-bus-e2z";

function useEventBus(name, dispatch) {
  useEffect(() => {
    EventBus.$on(name, dispatch);
    return function () {
      EventBus.$off(name);
    };
  }, [name, dispatch]);
}

export default useEventBus;
