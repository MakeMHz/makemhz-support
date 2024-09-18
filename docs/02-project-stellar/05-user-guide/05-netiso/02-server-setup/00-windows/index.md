# Windows PC

## Getting Started

Press the ``Windows Key + R`` and type ``compmgmt.msc`` and click ``OK``.
![Screenshot](./images/screenshot_01.png)

## Network Share
Share out the intended local directory containing your ISOs.

![Screenshot](./images/screenshot_02.png)

![Screenshot](./images/screenshot_03.png)

![Screenshot](./images/screenshot_04.png)

![Screenshot](./images/screenshot_05.png)

![Screenshot](./images/screenshot_06.png)

![Screenshot](./images/screenshot_07.png)

## User Authentication
Create a local user with a secure password.

![Screenshot](./images/screenshot_08.png)

![Screenshot](./images/screenshot_09.png)

Add the user to the share and give them read permissions.

![Screenshot](./images/screenshot_10.png)

![Screenshot](./images/screenshot_11.png)

![Screenshot](./images/screenshot_12.png)

![Screenshot](./images/screenshot_13.png)

![Screenshot](./images/screenshot_14.png)

## Windows Firewall Exclusions
From Windows search, locate ``Windows Defender Firewall with Advanced Security``

![Screenshot](./images/screenshot_15.png)

Create a firewall exclusion from SMB traffic by right-clicking on the ``Inbound Rules``.

![Screenshot](./images/screenshot_16.png)

![Screenshot](./images/screenshot_17.png)

![Screenshot](./images/screenshot_18.png)

![Screenshot](./images/screenshot_19.png)

![Screenshot](./images/screenshot_20.png)

![Screenshot](./images/screenshot_21.png)

## Enabled SMB2
Run PowerShell as Adminstrator and execture the following two commands to enable and confirm SMB2 is enabled.

![Screenshot](./images/screenshot_22.png)

![Screenshot](./images/screenshot_23.png)

## StellarOS Share Config
Within StellarOS, under the ``Enhancements`` section, enable ``SMB Filesystem Driver - NetISO``, then save and reboot.

![Screenshot](./images/screenshot_26.png)

Back within StellarOS under ``File Explorer``, add a new network share with your information from above.

| Setting     | Value                       | Description                                   |
|-------------|-----------------------------|-----------------------------------------------|
| Share Name  | Laptop                      | You can name this whatever                    |
| Network URL | xbox@192.168.0.69/XboxGames | Replace the IP with your computer's IP        |
| Password    |                             | The xbox user password you've created above   |

![Screenshot](./images/screenshot_24.png)

![Screenshot](./images/screenshot_25.png)
