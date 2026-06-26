---
description: Project Stellar installation troubleshooting.
---
# Installation Troubleshooting

## Overview
While Project Stellar's installation is designed to be straightforward, rest assured we're here to assist if any challenges arise.

## Common Solutions and Checks
Below are a few common checks that can be checked first.
* Verify that each step in the [Initial Setup](/project-stellar/initial-setup) was followed.
* Verify that each step in the [Installation Guide](/project-stellar/installation-guide) was followed.

:::tip
When in doubt, a [Firmware Recovery](/project-stellar/firmware-recovery) via USB is always an option to make sure you're on the last firmware version.
:::

## LED Error Patterns

Error states are shown as a repeating color pattern across all connected RGB LEDs; either on [Stellar RGB](/project-stellar/stellar-rgb/overview)
or the onboard RGB LED on Stellar Plus. The four-color sequence below repeats continuously from the first LED through the last.

🔴 Red &nbsp; 🟢 Green &nbsp; ⚫ Off

| Error                | 1  | 2  | 3  | 4  |
|-------               |----|----|----|----|
| General Fault        | 🔴 | 🔴 | 🔴 | 🟢 |
| XCODE Stalled        | 🔴 | 🟢 | 🔴 | 🟢 |
| Kernel Missing       | 🔴 | 🔴 | 🟢 | 🟢 |
| SDRAM Failed         | 🟢 | 🔴 | 🔴 | 🟢 |
| FPGA Firmware Update | 🟢 | 🟢 | 🟢 | 🔴 |
| XboxHD Firmware Bad  | 🔴 | 🟢 | 🟢 | 🔴 |
| Fatal Error          | 🔴 | 🔴 | 🔴 | 🔴 |


## Common Issues

### KERNEL MISSING
An ``KERNEL MISSING`` will display on the OLED display if the [Initial Setup](/project-stellar/initial-setup) was not fully completed.

### XCODE STALLED
An ``XCODE STALLED`` can display on the OLED display when Stellar fails to properly boot.
* Double check the solder points on the LPC header.
* If the system is 1.6, verify that all points on the LPC rebuild are properly soldered.

Should the issue persist, it would be advisable to start by examining the LPC connections in reference to the LPC trace diagrams provided below.

### System Rebooting/Flash Red and Green (FRAG)
If the system is rebooting three times and flashes red and green then refer to [XCODE STALLED](#xcode-stalled).

## LPC Trace Diagrams

### 1.0 - 1.1
[PNG Image](./images/lpc_traces_1_0.jpg)
![LPC Trace Diagram](./images/lpc_traces_1_0.jpg)

### 1.2 - 1.5
[PNG Image](./images/lpc_traces_1_2.jpg)
![LPC Trace Diagram](./images/lpc_traces_1_2.jpg)

### 1.6
[PNG Image](./images/lpc_traces_1_6.jpg)
![LPC Trace Diagram](./images/lpc_traces_1_6.jpg)
