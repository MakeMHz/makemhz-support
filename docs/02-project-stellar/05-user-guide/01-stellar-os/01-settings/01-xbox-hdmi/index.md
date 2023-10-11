# XboxHD+

![StellarOS XboxHD+ Screen](./images/settings_xbox_hdmi.png)

## Overview
The ``XboxHD+`` settings page contains all of the configuration options for the XboxHD+.

## General Settings
The ``General`` section contains general video settings for the XboxHD+.

### Target Resolution (Upscale)
The ``Target Resolution`` determines the baseline output resolution. If the Xbox's framebuffer is below this designated resolution, the video output will undergo upscaling.

Choosing ``Original`` ensures the video signal mirrors the active framebuffer precisely, without any scaling.

However, this setting doesn't limit the output resolution. For instance, even if the ``Target Resolution`` is set at 720p, software can still operate at 1080i if the corresponding ``Video Mode`` option is activated for that higher resolution.

### 4:3 Widescreen
The 4:3 Widescreen option controls how 640x480 content should be displayed.

### Pre-scale 480p Correction
The 'prescale correction' setting adjusts the video output for 640x480 4:3 content presented in 480p, ensuring the end image maintains an authentic 4:3 aspect ratio.

This adjustment accounts for the typical behavior of many displays that interpret 4:3 480p content without considering AVI Infoframe bar information.

This setting is relevant and necessary only when the output target is specified as 480p.

### Assume 16:9 480p (HD)
Retail NTSC games can request 480P without clearly indicating whether they desire a 16:9 aspect ratio, regardless of whether the resolution is 720x480 or 640x480.

Activating this option is generally a sound choice for most retail games. It will default to anamorphic widescreen in such instances, taking into account the '4:3 Widescreen' setting.

## Scaling Settings
Scaling settings to control the scaling algorithm used when the output resolution is not native.

### Interpolation X Scale
Interpolation X scale controls the scaling algorithm used when scaling the Xbox's framebuffer horizontally.

### Interpolation Y Scale
Interpolation Y scale controls the scaling algorithm used when scaling the Xbox's framebuffer vertically.

### Interpolation X Weight
Interpolation X weight controls the weight of the current pixel when scaling the Xbox's framebuffer horizontally.

### Interpolation Y Weight
Interpolation Y weight controls the weight of the current pixel when scaling the Xbox's framebuffer vertically.
