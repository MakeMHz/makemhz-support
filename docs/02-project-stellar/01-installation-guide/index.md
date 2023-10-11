# Installation Guide
Installation guide for installing Project Stellar.

## Preparation
:::caution
Before your adventure begins, it's imperative to ensure that you have a fully working and tested Xbox.
:::

### Kit Contents
Check your kit for missing or damaged pieces before moving forwards.

- Project Stellar
- Easy D0
- Xbox 1.6 LPC Rebuild QSB
- Metal Stand-off with Screw
- 2x8 Gold Plated Pinheader

### Resources
[Identifying Xbox Revision](/xbox/identifying-xbox-revision)

[Initial Setup](/project-stellar/initial-setup)

## Step 1 - Initial Setup
:::info
The initial setup process must be completed first and is provided as a seperate guide.
[Initial Setup](/project-stellar/initial-setup)
:::

## Step 2 - LPC Pin Header
Project Stellar currently requires that at minimum a 2x7 pin header be installed on the LPC of the Xbox. It's recommended to install the included high-quality gold-plated 2x8 pin header if possible as future features may require the additional pins.
![LPC Pin Header](./images/lpc_header.png)

### Xbox Revisions 1.0 - 1.5
- Locate the LPC header on the motherboard.
- Remove factory solder from the through holes.
- Solder in the supplied pin header.

### Xbox Revision 1.6
Installation of the pin header on a 1.6 revision motherboard requires that we solder in the LPC rebuild QSB while holding the pin header in place. For this, we recommend using hot glue, Blu-Tack, or some other temporary adhesive.

- Locate the LPC header on the motherboard.
- Remove factory solder from the through holes.
- Solder in the supplied LPC rebuild QSB while holding in place the pin header. Make sure to solder all of the points on the QSB to the motherboard.

![LPC Rebuild Install](./images/lpc_rebuild_install.png)

## Step 3 - Easy D0
For Xbox revisions 1.0 - 1.5 we must connect D0 to ground to force the system to always boot from the LPC port. On the 1.6 motherboard, this is handled automatically by Project Stellar.

- Align the Easy D0 QSB and tape down according to the reference images provided below.
- Solder the QSB into place.

![Easy D0](./images/easy_d0.png)
![Easy D0 Alignment](./images/easy_d0_alignment.png)

## Step 4 - Mounting

- Place the provided metal spacer over the PCB hole as shown.
- Use the provided Phillips screw to mount Project Stellar. Do not over-tighten, the screw only needs to be lightly tightened.

![Mounting Stellar](./images/stellar_mount.png)

## Done
If you have an HDMI kit, then you can use the links below to install those.

[Stellar XboxHD+ Installation Guide 1.0 - 1.5](/xbox-hdmi/installation/stellar-xboxhd-1-0)

[Stellar XboxHD+ Installation Guide 1.6](/xbox-hdmi/installation/stellar-xboxhd-1-6)
