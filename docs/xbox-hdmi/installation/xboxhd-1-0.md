---
sidebar_position: 2
---
# XboxHD+ (Xbox 1.0 - 1.5)
Installation guide for the XboxHD+ on Xbox revision 1.0 - 1.5.

:::caution
This guide is for the installation of a XboxHD+ kit. XboxHDMI and Stellar XboxHD+ have their own guides.
:::

### Brief Overview
For a brief overview, check out the YouTube video below.

[![XboxHD+ YouTube Video](./images/YouTube.png)](https://bit.ly/339G98T)

### Kit Contents
Check your kit for missing or damaged pieces before moving forwards.

- XboxHD+ Main Board
- XboxHD+ Flex PCB
- 26AWG Stranded Red Wire for the 5V connection.
- 26AWG Stranded Orange Wire for the SPDIF connection.
- 26AWG Stranded Black Wire for the ground connections.
- 22AWG paired Wire for the SMBus connection.
- 3D printed board spacer
- 3D printed HDMI port cover
- 2 replacement screws

### Preparation
:::danger
Make sure to carefully read the entire document in full before you start! Familiarize yourself with all the steps and how they are to be carried out. Do not skip any steps, and use the provided pictures to compare your results.
:::

Before your adventure begins, it's imperative to ensure that you have a fully working, tested, and modified Xbox.

Please thoroughly test your system before attempting to install the XboxHD+ kit.
This guide also assumes that you watched the installation video linked above.

This guide is for Xbox motherboard revisions 1.0 - 1.5 with a Conexant or Focus encoder.

### Notice
![Warning](./images/Warning.png)
:::danger
If your kit shipped with "Firmware: v2.0.5" and not "Firmware: v2.0.5b" (label on side of the product box) then please wait before installing your kit. A firmware bug has been identified that can cause no display output in some cases.

If you have not recieved an order confirmation for the programming kit, to fix this issue, then please fill out this Google Form so we can ship one out to you! https://t.co/EEHGkyIc2v
:::

### Step 1 - QSB Installation
Follow the [Installation Manual QSB HD+](Installation%20Manual%20QSB%20HD%2B.md) first before continuing.

:::caution
Xbox revisions 1.0 - 1.5 require the installation of a QSB board.
:::

### Step 2 - Software Installation
![Do not skip this step!](./images/do-not-skip.png)

Part of the XboxHD+ is the software side and it has its own guide [here](/manual/Installation%20XboxHD%2B%20Software.md). Make sure to follow the guide and verify the installation of the software and kernel patch before continuing.

:::caution
The software guide must be followed for maximum display compatibility. Not doing so now will cause troubleshooting to be harder once the AV port is removed.
:::

### Step 3 - XboxHD+ Board Prep
Begin by adding solder to all of the connection pads (GND, SDA, SCL, SPDIF, 5V). This is important as there's little room once everything is installed.

### Step 4 - Wire Prep
It's imperative to cut each wire as close as possible to our recommendations, but not shorter. If additional wire is needed, then make sure to use wire of similar quality and gauge.

After cutting each wire, strip each side. It's recommended for the cleanest install to strip about 2mm from one side (for the connections to the Xbox motherboard) and about 3mm on the other side (for connections to the XboxHD+ board). Make sure to twist the stranded wires and pre-tin each one.

**Cut List and Lengths (end to end, before stripping)**

<table>
  <tr>
    <th>Black Wire</th>
    <td>28mm</td>
    <td>GND 1 Connection Near the SPDIF pad</td>
  </tr>
  <tr>
    <th>Red Wire</th>
    <td>48mm</td>
    <td>5V Connection</td>
  </tr>
  <tr>
    <th>Orange Wire</th>
    <td>45mm</td>
    <td>SPDIF Connection</td>
  </tr>
  <tr>
    <th>Paired Wire</th>
    <td>90mm</td>
    <td>SMBus Connection</td>
  </tr>
</table>

### Step 5 - Motherboard Prep
The first step is to remove the motherboard from the Xbox. There are plenty of guides on the internet on how to do so and won't be repeated here as it's pretty straight-forward.

It's recommended that you remove the GPU heatsink since there's very little room between it and where the flex cable will be installed. We've found that the best approach is to apply very low heat to the heatsink, around 100°C / 212°F, while applying very light force twisting to the heatsink.

:::caution
It's very important not to force the heatsink off by attempting to pull it straight up as this could damage the GPU.

There's been at least one person who's managed to do this in the past, unrelated to the project, and even though it's very unlikely, it's noted here to let others know to be careful!
:::

The thermal compound on the GPU can be cleaned off with a basic solvent such as Arctic Silver Arcticlean Thermal Cooling Material Remover or with WD-40. When re-applying the heatsink, make sure to add **ample** PC thermal paste. *(in this case, more is better as a bit too much should not effect thermals and is ultimately safer as the GPU does not have an embedded thermal sensor for overheating protection).*

After this, you can remove the AV port. Please refer to the installation video for more information on the different ways to accomplish this.

And finally, make sure to clean the area where the flex will be installed with IPA.

![Image of XboxHD+ YouTube Video](./images/Step1.png)
<p align="center"><i><b>Note that removing the CPU heatsink is not required.</b></i></p>

### Step 6 - Jumper Wires
This step gets its own section as it's very easy to forget, and can be a pain if forgotten since the pins are located on the bottom of the board.

We need to make two connections on the bottom of where the AV port used to be, so that the Xbox thinks that an HD AV cable is plugged in. Use a scrap piece of wire to make these connections.

![Image of AVIP Connections](./images/Step2-AVIP-Connections.png)
![Image of AVIP Connections](./images/Step2-Pinout.png)

### Step 7 - Flex Installation
This section will be mostly screenshots of the Xbox video encoder and where the flex connects. Pay close attention to the alignment of the flex cable and **take your time while installing!**

After the flex is installed, the Xbox should still be bootable.

#### Best Practices
- Pre-tin both sides of the flex by applying ample flux and running solder across each pad before soldering to the Xbox motherboard.
- Pre-shape the flex. Gently shape the flex so it's close to the final shape before soldering. The flex must lay flat and properly aligned when installed.
- Take your time!

:::caution
Proper flex positioning and soldering is crucial to allow for good contact. Make sure your flex lies flat on the board, do not solder it on top of the encoder chip pins! Inspect all solder joints before continuing, make sure they are well-formed and do not touch each other.
:::

:::danger
There are multiple revisions of the XboxHD+ flex revision. Please pay close attention to the reference images below.
:::

**Completed Install**

![Image of Flex Installed](./images/Step3-Flex-Installed.png)

**Overview View**

![Image of Flex Board Layout](./images/Step3-Flex-Overview.png)

**Right Connections**

![Image of Flex Board Layout](./images/Step3-Right.png)

**Left Connections**

![Image of Flex Board Layout](./images/Step3-Left.png)

Flex rev 1-5 are the same on the left side.

**Bottom Connections**

![Image of Flex Board Layout](./images/Step3-Bottom.png)

Flex rev 1-5 are the same on the bottom side.

### Step 8 - Aux Wires
Start with connecting each of the pre-cut wires. The wires for 5V and SPDIF should lay flat across the motherboard running towards the right.

#### AV Port/Encoder Connections
Connect each of the pre-cut wires according to the wire cut chart above. the wires for 5V and SPDIF should lay flat across the motherboard running to the right.

![Image of Wire connections](./images/Step4-Wire-Connections_HD.png)

#### SMBus Connections (SDA and SCL)
Using the paired wire connect one wire to each side of the PIC16.

![Image of SMBus Connections](./images/Step4-PIC16.png)

### Step 9 - Wrapping Up

#### 3D Printed HDMI Panel
Insert the 3D printed HDMI part in between the metal shielding and the Xbox case.

![Image of 3D printed HDMI Panel](./images/Step5-3DHDMI.png)

#### 3D Printed Spacer
Place the spacer as shown below in black.

![Image of 3D printed Spacer](./images/Step5-Spacer.png)

### Re-install the Xbox Motherboard
Place the Xbox motherboard back into the case. Make sure to screw the motherboard back in. There's one screw located under where the XboxHD+ will be installed.

### Install the XboxHD+ Board
Begin by adding solder to all of the connection pads (GND, SDA, SCL, SPDIF, 5V). This is important as there's little room once everything is installed.

Place the XboxHD+ board in the system and screw it down with the two provided screws.

Connect each wire to its corresponding pads on the XboxHD+ board.

Carefully connect the flex cable to the FPC connector. Be very careful. it may take a couple of tries as sometimes the flex will want to go in at an angle. if this happens, then pull it out and gently push it back in.

:::danger
Do not force the flex cable into the FPC connector. Make sure the flex is not inserted at an angle!
:::

![Image of XboxHD+ Installed](./images/Step5-Finished_HD.jpg)
