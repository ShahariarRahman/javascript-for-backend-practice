console.log("Block-1 and go to event queue in the first place");

// go to Threat Pool
setTimeout(() => {
  console.log("Block-2, task Completed! event loop sent task to event queue");
}, 1000);

console.log("Block-3, and go to event queue at second place");
