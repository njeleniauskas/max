# Max
Welcome to my Max folder on GitHub. I wanted to share this repository of my work and research in the audio synthesis VPL Max, also known as Max/MSP.


# What You'll Find Here
I've built a lot of utilities and modules that have greatly helped my work. These abstractions are anything from core-level utilities that help set my project environment, to configuring input controllers (like MIDI or USB pedals), various synthesis modules, all the way to handling small tasks like building a cue handler, user-interface objects, loading external text files, or pseudo-random number generators.

When looking for various files, the patches are organized into the following folders:

- **Modules:** contains all audio processing modules, or gen~ abstractions
- **Tools:** setup or monitoring tools that I've used 
- **Utilities:** this folder contains various non-audio utilities, from small utilities to core-level, and even user-interface objects


# Namespaces
I also use Namespacing in my work. By prefixing abstractions with unique identifiers it's easy to distinguish the kind of task or function the abstraction is designed to handle. Combined with code hints, max will then automatically list similar object types to me as I'm coding. Here are what these namespaces mean:

- **c.abstraction-name:** A core-level utility, most often required for projects to function.
- **o.abstraction-name:** A visual Object.prototype utility, mostly for user-interfaces.
- **u.abstraction-name:** A general helper utility that isn't a core util, or a GUI object.
- **m.abstraction-name:** A processing module that is a logical construction of audio-rate tasks. Generally not a child of another module or util.
- **f.abstraction-name:** A child module specifically for a parent Object.pfft~.
- **p.abstraction-name:** A child module specifically for a parent Object.poly~.

*Note: gen~ abstractions follow the above naming scheme as they are easier to distinguish by their .gendsp file extension*


# Licensing
All of my max patches licensed under the MIT license. This means that any user is free to use these files for their own personal use, as defined in the MIT license (http://www.opensource.org/licenses/mit-license.php).

