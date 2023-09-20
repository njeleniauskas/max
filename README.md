# Max
A library of modules, tools, and utility objects for use in the audio synthesis VPL Max, also known as Max/MSP.

<br>

# What You'll Find Here
This repository contains many different abstractions that can be used in Max. Anything from core-level utilities that help set project environments, to configuring input controllers (like MIDI or USB pedals), various synthesis modules. It also includes many abstractions that handle smaller tasks like building a cue handler, user-interface objects, loading external text files, or pseudo-random number generators.

When looking for various files, the patches are organized into the following folders:

- **Modules:** Contains all audio processing modules, or gen~ abstractions.
- **Tools:** Setup or monitoring tools that I've used.
- **Utilities:** Contains various non-audio utilities, from small utilities to core-level, and even user-interface objects.

<br>

# Namespaces

To help select the right abstraction during coding, abstractions have been namespaced with unique identifiers. This makes it easy to distinguish the kind of task or function the abstraction is designed to handle. Combined with code hints, max will then automatically list similar object types as you code. Here are what these namespaces mean:

- **c.abstraction-name:** A core-level utility, most often required for projects to function.
- **o.abstraction-name:** A visual Object.prototype utility, mostly for user-interfaces.
- **u.abstraction-name:** A general helper utility that isn't a core util, or a GUI object.
- **m.abstraction-name:** A processing module that is a logical construction of audio-rate tasks. Generally not a child of another module or util.
- **f.abstraction-name:** A child module specifically for a parent Object.pfft~.
- **p.abstraction-name:** A child module specifically for a parent Object.poly~.

*Note: gen~ abstractions follow the above naming scheme as they are easier to distinguish by their .gendsp file extension.*