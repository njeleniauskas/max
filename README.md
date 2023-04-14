# Max
Welcome to my Max folder on github. I wanted to share this repository of my work and research in the audio synthesis VPL Max, also known as Max/MSP.

The main purpose behind this is that I'm a firm believer of openly sharing what we've learned and how we do things as programmers. As a benificiary of this very practice, I feel it imperative to show how I work and think about things in the hopes that it might help others to think about how they structure their Max projects, or approach similar problems I've encountered.


# What You'll Find Here
I've built a lot of utilities and modules that have greatly helped my work. These abstractions are anything from core-level utilities that help set my project environment, to configuring input controllers (like MIDI or USB pedals), various synthesis modules, all the way to handling small tasks like building a cue handler, user-interface objects, loading external text files, or pseudo-random number generators.

When looking for various files, the patches are organized into the following folders:

- **modules:** contains all audio processing modules, or gen~ abstractions
- **tests:** specific tasks that I've worked on that generally eventually become working abstractions
- **tutorials:** max patches that I've used for teaching
- **vendor:** externals from third party vendors. I should note that I'm primarily a Windows user, so most of my externals here will function in both macOS and Windows.
- **utilities:** this folder contains various non-audio utilities, from small utilities to core-level, and even user-interface objects

# Namespaces
I also use Namespacing in my work. Namespaces are a way to greatly reduce time in creating objects in max. By prefixing abstractions with unique identifiers I can easily distinguish the kind of task or function the abstraction is designed to handle. Combined with code hints, max will then automatically list similar object types to me as I'm coding. Here are what my namespaces mean:

- **c.abstraction-name:** A core-level utility, most often required for projects to function.
- **o.abstraction-name:** A visual Object.prototype utility, mostly for user-interfaces.
- **u.abstraction-name:** A general helper utility that isn't a core util, or a GUI object.
- **m.abstraction-name:** A processing module that is a logical construction of audio-rate tasks. Generally not a child of another module or util.
- **f.abstraction-name:** A child module specifically for a parent Object.pfft~.
- **p.abstraction-name:** A child module specifically for a parent Object.poly~.

*Note: gen~ abstractions follow the above naming scheme as they are easier to distinguish by their .gendsp file extension*

# Licensing
All of my max patches licensed under the MIT license. This means that any user is free to use these files for their own personal use, as defined in the MIT license (http://www.opensource.org/licenses/mit-license.php).

