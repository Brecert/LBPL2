# Logic-Based-Programming-Language (LBPL)

**Current Cycle and Layout**

* Node - Base class used by any other logic
* Gate - Has an input and an output
* Chip - Container/Scope of other nodes inside

The root of a program is still reperesented by a chip.
It's the main function of the program.

Inside of the chip it will execute all gates in order of the chip assigned id

This isn't ideal but as of now I have no solution to going from all the parent nodes to all of the finalizer nodes without inconsistencies.

even if it's not ideal solution the id system has some benifits like allowing to choose the order of execution.